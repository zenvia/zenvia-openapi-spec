# Zenvia API OpenAPI Specification

[![License](https://img.shields.io/github/license/hmagarotto/zenvia-api-docs.svg)](LICENSE)
[![Build Status](https://travis-ci.com/hmagarotto/zenvia-api-docs.svg?branch=master)](https://travis-ci.com/hmagarotto/zenvia-api-docs)
[![Dependencies](https://img.shields.io/david/hmagarotto/zenvia-api-docs.svg)](https://david-dm.org/hmagarotto/zenvia-api-docs)



## Links

- [Reference Documentation (ReDoc)](https://hmagarotto.github.io/zenvia-api-docs/)
- OpenAPI Raw Files: [JSON](https://hmagarotto.github.io/zenvia-api-docs/openapi.json) [YAML](https://hmagarotto.github.io/zenvia-api-docs/openapi.yaml)

**Warning:** All above links are updated only after Travis CI finishes deployment



## Working on specification

### Install

**1.** Install [Node.js](https://nodejs.org/)

**2.** Clone repo and run `npm install` in the repo root



### Usage

**1.** Starts the development server.

```shell
npm start
```

**2.** Bundles the spec and prepares web_deploy folder with static assets.

```shell
npm run build
```

**3.** Validates the spec.

```shell
npm test
```



## License

[MIT](LICENSE)
