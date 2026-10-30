# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Core Project Guidelines

These are strict system instructions. Follow them in every interaction with this repository.

### 1. Code Style & Architecture
- Always use the latest stable versions of libraries and modern, idiomatic approaches as of today.
- Keep it strictly simple. NEVER over-engineer, ALWAYS simplify, and AVOID unnecessary defensive programming. Do not add extra, unrequested features.

### 2. Problem Solving & Debugging
- When encountering errors or issues, always identify and isolate the root cause before attempting a fix. Do not guess or apply blind patches. Prove the cause with evidence, then fix the root cause directly.

### 3. Communication & Documentation
- Be concise in all outputs. Keep READMEs and other documentation minimal and strictly functional.
- CRITICAL: Never use emojis in any code, documentation, or conversational output.
- Code comments: Do not add comments to explain basic syntax or obvious code logic. ONLY comment to explain complex business logic, design decisions, edge cases, or necessary workarounds. Rely on self-documenting code with clear variable and function names instead of comments. Do not over-explain.

### 4. Safety & Version Control
- CRITICAL REPOSITORY PROTECTION: You are strictly forbidden from executing any commands that alter the remote Git repository. Do not run `git push`, do not push tags or branches, and do not modify remote states under any circumstances. You may read the local git state, but remote modification is strictly off-limits.

## Overview

OpenAPI 3.0.2 specification for the Zenvia API (`https://api.zenvia.com/v2`), authored as TypeScript modules rather than YAML/JSON. The spec is assembled at runtime from `spec/` and rendered with ReDoc. There is no application code; the deliverables are `openapi.json`, `openapi.yaml` and a ReDoc `index.html`, published to GitHub Pages.

## Commands

```shell
npm start               # dev server with live reload on http://localhost:8080 (PORT to override)
npm run start:public    # same, with PUBLIC=true (x-unpublished schemas removed)
npm run lint            # eslint over bin, spec, utils
npm run lint:fix
npm run validate        # oas-validator against the assembled spec
npm run test-unit       # mocha: openapi-enforcer errors/warnings + contract cases in test/
npm test                # validate + test-unit
npm run build           # lint, then write openapi.json/yaml + index.html to web_deploy/
npm run build:public    # PUBLIC=true build; optional arg is the branch name (see below)
```

Single mocha test: `npx mocha -g "<describe/it title substring>"`. CI (Node 16 and 18) runs `npm run lint`, `build`, `test`.

## Architecture

`spec/index.ts` composes the `OpenAPIObject` from `spec/info`, `spec/components`, `spec/paths`, `spec/tags` and `spec/tags/groups` (`x-tagGroups`). `utils/module-loader.ts` does the heavy lifting by globbing and `require`-ing files, so adding a file is enough to register it; there is no central index to edit.

- **Paths** (`spec/paths/<domain>/`): one file per path, default-exporting a `PathItemObject`. The filename is the URL with `/` replaced by `@`, e.g. `conversations@{conversationId}@messages.ts` becomes `/conversations/{conversationId}/messages`.
- **Components** (`spec/components/<type>/...`): one file per component, default-exporting the object. The component name is the relative path with `/` turned into `.` (`parameters/conversations/limit.ts` becomes `conversations.limit`). Each file also exports `ref = createComponentRef(__filename)` (from `utils/ref.ts`), and consumers import that `ref` for `$ref` instead of hand-writing the string.
- **Code samples** (`spec/code_samples/<path>/index.ts`): default-exports an `ICodeSamples` with the endpoint `path` and per-operation sample files (`sample.sh`, `sample.js`, `sample-sdk.java`, ...). The loader reads the source files and injects them as `x-code-samples` on the matching path, keyed by the `path` string, which must match the endpoint exactly.
- **Examples** are in `spec/resources/examples`; `utils/buttons-description-generator.ts` and `raw-load.ts` are shared helpers.

### Public vs. internal spec

Setting `PUBLIC=true` makes the loader strip any schema carrying `x-unpublished: true` (including entries in `oneOf`/`anyOf` and the matching `discriminator.mapping` keys). Keep `discriminator` mappings consistent with their `oneOf` when marking schemas unpublished.

### Build and deploy

`bin/build.ts` takes the branch name as an argument. `master` copies `public/` and writes the spec at the root of `web_deploy/`; branches matching `v<N>` or `v<N>-beta` write to `web_deploy/<branch>/`. `.github/workflows/gh-pages.yml` runs lint, tests and `build:public` on pushes to `master` and `v<N>` branches.

### Tests

`test/contract/contract.ts` loads the spec with `openapi-enforcer` and fails on any error or warning (codes `WSCH006`/`WSCH007`/`WRES001` are skipped; `WRES001` because the conversations `POST` 201 responses have no `Location` header), then replays JSON request/response cases from `test/contract/cases/<group>/` against it. When adding a channel message type, add a matching case file there. The test deletes the `multipart` example of `POST /files` before loading, because the enforcer cannot parse it.
