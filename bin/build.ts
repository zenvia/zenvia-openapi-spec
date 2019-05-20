import { mkdirSync, writeFileSync, existsSync, copyFileSync } from 'fs';
import { generateJSON, generateYAML, generateReDocPage } from './commons';
import { sync as fileSearch } from 'glob';

if (!existsSync('web_deploy')) {
  mkdirSync('web_deploy');
}
writeFileSync('web_deploy/openapi.json', generateJSON());
writeFileSync('web_deploy/openapi.yaml', generateYAML());
writeFileSync('web_deploy/index.html', generateReDocPage());
fileSearch('assets/**/*')
  .map(file => ([file,file.replace('assets/', 'web_deploy/')]))
  .forEach((args: [string, string]) => copyFileSync(...args));
