import { promisify } from 'util';
import { writeFileSync } from 'fs';
import { ncp } from 'ncp';
import { sync as mkdirp } from 'mkdirp';
import { generateJSON, generateYAML, generateReDocPage } from './commons';

async function build() {

  const ncpAsync = promisify(ncp);
  const outDir = 'web_deploy';
  const branch = process.argv[2] ?? process.env.TRAVIS_BRANCH;
  const isVersionBranch = branch !== undefined && /^v[0-9]+(-beta)?$/.test(branch);

  await ncpAsync('public', outDir);

  let specDir;
  if (isVersionBranch) {
    specDir = `${outDir}/${branch}`;
  } else if (branch === undefined) {
    specDir = `${outDir}`;
  }

  if (specDir) {
    console.log('creating version dir');
    mkdirp(specDir);
    writeFileSync(`${specDir}/openapi.json`, generateJSON());
    writeFileSync(`${specDir}/openapi.yaml`, generateYAML());
    writeFileSync(`${specDir}/index.html`, generateReDocPage());
  }
}

build();
