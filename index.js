#!/usr/bin/env node

const argv = process.argv.splice(2);
const fs = require('fs-extra');
const cd = require('path').resolve;
const assetsPath = __dirname;
const projectName = argv[0];
const projectPath = cd(process.cwd(), projectName);
const shell = require('shelljs');
const package = require('./react-package.json');
let deleteAll = false;
let isOpenVSCode = false;

function mapDir(
  dirPath,
  fn = (filePath = '', fileName = '', fileState = fs.lstatSync()) => {},
) {
  const dirStat = fs.lstatSync(dirPath);
  if (!dirStat || dirStat.isFile()) {
    console.warn('path is no dir: ', dirPath);
  }
  const files = fs.readdirSync(dirPath);
  for (let i = 0; i < files.length; i++) {
    const file = cd(dirPath, files[i]);
    const state = fs.lstatSync(file);
    fn(file, files[i], state);
  }
}

// 获取params
for (let i = 0; i < argv.length; i++) {
  if (argv[i] === '--code') {
    isOpenVSCode = true;
  }
}

// 创建react-native项目，并且拷贝出来
console.log('please waiting...');
shell.exec(`react-native init ${projectName}`);
if (fs.existsSync(cd(projectPath, 'App.js'))) {
  fs.remove(cd(projectPath, 'App.js'));
}

//拷贝文件夹
fs.copySync(cd(assetsPath, 'copy'), cd(projectPath));

// 创建package.json
package.name = projectName.toLowerCase();
fs.writeJSONSync(cd(projectPath, 'package.json'), package, { spaces: 2 });

// 安装node依赖
// shell.exec(`cd ${projectName}`);
shell.exec(`cd ${projectName} && yarn install`);
console.log('please waiting...');
shell.exec(`cd ${projectName} && yarn dll`);
console.log('please waiting...');

// 完成
console.log('done!');
if (isOpenVSCode) {
  shell.exec(`code .`);
}
