import { safeDump, safeLoad } from 'js-yaml';
import spec from '../spec';
import { readFileSync } from 'fs';

export function generateJSON(): string {
  return JSON.stringify(spec, null, 2);
}

export function generateYAML(): string {
  return safeDump(spec, { indent: 2, lineWidth: -1, noRefs: true });
}

export function generateReDocPage(): string {
  const pageTemplate = readFileSync('redoc/template.html', 'utf-8');
  const redocConfig = safeLoad(readFileSync('redoc/redoc-config.yaml', 'utf-8'));

  const redocURL =
    redocConfig.redocURL || 'https://cdn.jsdelivr.net/npm/redoc/bundles/redoc.standalone.js';
  const redocExport = redocConfig.redocExport || 'Redoc';
  const pageContents =
    pageTemplate
    .replace('{{redocHead}}', '<script src="/reload/reload.js"></script>')
    .replace(
      '{{redocBody}}',
      `<div id="redoc_container"></div>
    <script src="${redocURL}"></script>
    <script>
      ${redocExport}.init(
        './openapi.json',
        ${JSON.stringify(redocConfig)},
        document.getElementById("redoc_container")
      );
    </script>`);
  return pageContents;
}
