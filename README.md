# QTLogViewer

WBQueueTests log 查看器

## Prerequisites

你需要在你的电脑上安装以下工具软件

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying & Packaging

完成 build 后，我们可以将应用打包成 Chrome Packaged App：

1. 进入 Chrome 的扩展程序界面 (`chrome://extensions/`)
2. 打开 `开发者模式`
3. `加载正在开发的扩展程序...` 或 `打包扩展程序...`
4. 选择该项目的 `dist` 文件夹作为根目录
5. 完成

## Further Reading / Useful Links

* ember: http://emberjs.com/
* ember-cli: http://www.ember-cli.com/
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

