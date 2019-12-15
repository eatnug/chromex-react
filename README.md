React boilerplate for Chrome extension.

React app created by CRA, modifed `manifest.json` and `.env.production`.

```
git clone https://github.com/EatNug/chromex-react.git
cd chromex-react

yarn install
yarn build
```

It's done. You've just created extension. You can test it on [chrome://extensions/](chrome://extensions/) by clicking 'load unpacked' and choosing `build/`

```bash
background.js           # put background scripts
inject.js               # put content_scripts
public/manifest.json    # web app manifest for extension
```