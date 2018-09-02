const fs = require('fs-extra')
const path = require('path')
const argv = process.argv.splice(2);

if (argv.length < 1) {
  console.log('please inpu app')
}
const appPath = path.resolve(process.cwd(), argv[0]);
const iconsDirPath = path.resolve(appPath, 'assets/icons');
const imagesDirPath = path.resolve(appPath, 'assets/images');
const iconsFile = path.resolve(appPath, 'config/icons.ts');
const imagesFile = path.resolve(appPath, 'config/images.ts');


const pix = ['.png', '.jpg', '.jpge', '.gif']
function autoWriteFile(dirPath, file, type) {
  fs.ensureDirSync(appPath + '/config');
  if (!fs.existsSync(dirPath)) {
    fs.writeFileSync(file, 'export default {}', { encoding: 'utf8' })
    return;
  };
  const icons = fs.readdirSync(dirPath, { encoding: 'utf8' })
  let iconsRequireText = ``
  for (let i = 0; i < icons.length; i++) {
    let fileName = icons[i]
    for (let i = 0; i < pix.length; i++) {
      if (fileName.indexOf(pix[i]) > -1) {
        fileName = fileName.replace(pix[i], '')
        let paramName = fileName.replace(/-|\s/g, '_');
        iconsRequireText += `  ${paramName}: require('../assets/${type}/${fileName}${pix[i]}'),\n`;
        break;
      }
    }
  }
  const iconsFileText = `export default {
--iconsRequireText--
};
`.replace('--iconsRequireText--', iconsRequireText);
  fs.writeFileSync(file, iconsFileText, { encoding: 'utf8' })
}


autoWriteFile(iconsDirPath, iconsFile, 'icons')
autoWriteFile(imagesDirPath, imagesFile, 'images')

console.log(`auto create files:`)
console.log(iconsFile)
console.log(imagesFile)
console.log(`done!`)