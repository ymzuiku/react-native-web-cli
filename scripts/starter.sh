if [ "$1" == "init" ];then
  yarn install
fi

if [ "$1" == "assets" ];then
  node scripts/autoRequireAssets.js $2
fi

if [ "$1" == "web" ];then
  node scripts/environment.js web
  cd .web
  pillar-pack -s index.tsx
fi

if [ "$1" == "web-prod" ];then
  node scripts/environment.js web
  cd .web
  NODE_ENV=production pillar-pack -s index.tsx
fi

if [ "$1" == "web-build" ];then
  node scripts/environment.js web
  cd .web
  NODE_ENV=production pillar-pack -s index.tsx --prod
fi

if [ "$1" == "web-deploy" ];then
  node scripts/environment.js web
  cd .web/build
  rsync -a ./ $2
fi

if [ "$1" == "start" ];then
  node scripts/environment.js native
  node node_modules/react-native/local-cli/cli.js start
fi

if [ "$1" == "ios" ];then
  node scripts/environment.js native
  node node_modules/react-native/local-cli/cli.js run-ios --simulator "iPhone X"
fi

if [ "$1" == "ios-prod" ];then
  node scripts/environment.js native
  NODE_ENV=production node node_modules/react-native/local-cli/cli.js run-ios --simulator "iPhone X"
fi

if [ "$1" == "android" ];then
  node scripts/environment.js native
  node node_modules/react-native/local-cli/cli.js run-android
fi

if [ "$1" == "android-prod" ];then
  node scripts/environment.js native
  NODE_ENV=production node node_modules/react-native/local-cli/cli.js run-android
fi
