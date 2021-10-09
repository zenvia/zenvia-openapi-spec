import { promisify } from 'util';
import { writeFileSync } from 'fs';
import { ncp } from 'ncp';
import { sync as mkdirp } from 'mkdirp';
import { generateJSON, generateYAML, generateReDocPage } from './commons';

async function build() {
  const ncpAsync = promisify(ncp);
  const outDir = 'web_deploy';
  const branch = process.argv[2];

  if (branch === undefined || branch === 'master') {
    await ncpAsync('public', outDir);
  }

  let specDir;
  const isVersionBranch = branch !== undefined && /^v[0-9]+(-beta)?$/.test(branch);
  if (isVersionBranch) {
    specDir = `${outDir}/${branch}`;
  } else if (branch === undefined) {
    specDir = `${outDir}`;
  }

  if (specDir) {
    mkdirp(specDir);
    writeFileSync(`${specDir}/openapi.json`, generateJSON());
    writeFileSync(`${specDir}/openapi.yaml`, generateYAML());
    writeFileSync(`${specDir}/index.html`, generateReDocPage());
  }
}

build();
