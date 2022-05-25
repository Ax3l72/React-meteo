### Pre-requiste 
Java 8
Android Studio (sdk manager 30.0.3)
Node v14 or +

### Create Project
npx create-react-app your_app
cd your_app
copy your src and public folder in your_app
npm i all_your_node_module
npm run eject
y

### Do some edit
```
edit ./config/paths => ( ... appBuild: resolveApp('www'), ...)
edit ./package.json => ( ... "homepage": "./", ... )
```

### Create cordova project
cordova create your_app com.your_app YourApp
cp ./your_app/config.xml ./

edit ./src/index.js
```
import * as serviceWorkerRegistration from './test/workerRegistration';
// import reportWebVitals from './test/reportWebVitals';

const startApp = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    // <React.StrictMode></React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://cra.link/PWA
  serviceWorkerRegistration.register();
};

if (window.cordova) {
  document.addEventListener('deviceready', startApp, false)
} else {
  startApp()
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
```

edit ./public/index.html
```
...
  <head>
    <meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *; img-src 'self' data: content:;" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="msapplication-tap-highlight" content="no" />
...
    <script type="text/javascript" src="cordova.js"></script>
  </body>
</html>
```

### Build React
npm run build

cordova platform add android

### Run test with AVD
cordova emulate android

### Build .apk
cordova -release build -- --packageType=apk

## And sign your apk

cd ./platforms/android/app/build/outputs/apk/release
keytool -genkey -v -keystore app.jks -alias app -keyalg RSA -keysize 2048 -validity 20000
jarsigner -verbose -sigalg SHA256withRSA -digestalg SHA-256 -keystore app.jks ./app-release-unsigned.apk app
zipalign -v 4 ./app-release-unsigned.apk app-release.apk