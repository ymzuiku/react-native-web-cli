// /Users/ym/work/local/RNProject/ios/build/info.plist RNProject
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs-extra');
const rootPath = path.resolve(__dirname, '../');
const packageWeb = require('../package.json');
const packageNative = require('../package.json');

const argv = process.argv.splice(2);

const paths = {
  root: rootPath,
  web: path.resolve(rootPath, '.web'),
  webSrc: path.resolve(rootPath, '.web/src'),
  webPackage: path.resolve(rootPath, '.web/src/package.json'),
  base: path.resolve(rootPath, './'),
  baseSrc: path.resolve(rootPath, './src'),
  baseNodeModules: path.resolve(rootPath, './node_modules'),
  baseYarnLock: path.resolve(rootPath, './yarn.lock'),
  src: path.resolve(rootPath, './src'),
  node_modules: path.resolve(rootPath, './node_modules'),
  yarnLock: path.resolve(rootPath, './yarn.lock'),
  project: undefined,
  projectSrc: undefined,
};

const yarnLock = fs.readFileSync(paths.yarnLock, {
  encoding: 'utf-8',
});

let projectName = 'base-app';
let isWeb = false;
let isNative = false;

for (let i = 0; i < argv.length; i++) {
  if (argv[i] === '--project') {
    projectName = argv[i + 1];
    paths.project = path.resolve(rootPath, projectName);
    paths.projectSrc = paths.project + '/src';
  }
  if (argv[i] === 'web') {
    isWeb = true;
  }
  if (argv[i] === 'native') {
    isNative = true;
  }
}

function runWeb() {
  if (isWeb) {
    // web
    packageWeb.name = 'sub-web';
    fs.removeSync(paths.webSrc);
    fs.removeSync(paths.webPackage);
    fs.writeJSONSync(paths.web + '/package.json', packageWeb);
    try {
      execSync(`ln -s ${paths.src} ${paths.webSrc}`);
    } catch (err) {}
  }
}

function runNative() {
  if (isNative) {
    // native
    // packageNative.name = projectName.toLowerCase();
    // fs.removeSync(paths.app + '/index.js');
  }
}

function runProject() {
  if (projectName !== 'base-app') {
    // otherProject
    const nativeEnvFilse = [
      'tsconfig.json',
      'rn-cli.config.js',
      'package.json',
      '.babelrc',
    ];
    for (let i = 0; i < nativeEnvFilse.length; i++) {
      const file = nativeEnvFilse[i];
      fs.copyFileSync(paths.base + '/' + file, paths.base + '/' + file);
    }
    try {
      execSync(`cd ${paths.project} && react-native init ${projectName}`);
    } catch (err) {}
    if (
      !fs.existsSync(paths.baseYarnLock) ||
      fs.readFileSync(paths.baseYarnLock, { encoding: 'utf-8' }) !== yarnLock
    ) {
      fs.removeSync(paths.base + '/node_modules');
      fs.copySync(paths.yarnLock, paths.baseYarnLock);
      fs.copySync(paths.node_modules, paths.baseNodeModules);
    }
  }
}

runWeb();
runNative();
// runProject();
