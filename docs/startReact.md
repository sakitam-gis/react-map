# 从 angular1.x 到 vue 再到 react 的心路历程

  网上有太多的文章去讨论目前前端三大框架的优缺点，其实有些时候可以说适合你的才是
最好的，没必要过多的纠结好或不好的问题。从开始的 ``jquery`` 的原生态开发到 ``angularjs``
的双向绑定再到部门技术选型从而切到 ``vuejs`` （从1到2）再到现在对 ``react``的尝试，
可谓是三大框架走了个遍。有些时候不得不感叹 `我圈真乱 斜眼笑`。

# 准备工作

  因为目前项目使用的 `vue` 框架，并且对 `vue` 相关项目配置有所了解，所以项目架构直接采用
`webpack + es2015 + react` 构建，并且采用手撸 `webpack` 配置加深印象。

## 创建项目

* ``mkdir react-map`` // 创建 react-map 文件夹
* ``cd react-map`` // 进入文件夹
* 使用 ``npm init`` 初始化项目，按需要进行配置。

## 安装依赖

* ``npm install --save-dev webpack`` // 安装 webpack （目前已升级到 4）
* ``npm install react react-dom --save`` // 参考：https://facebook.github.io/react/docs/installation.html

因为需要采用 `es2015` 语法 所以还应当安装babel-loader以及其他相关依赖, 具体也可以参考 vue 项目配置。

* ``npm install babel-loader babel-core babel-preset-es2015 babel-preset-react --save-dev``

样式预处理器保持和现有项目保持一致，任然采用 ``scss``, 但是任然需要处理内联样式和 css 文件。

* ``npm install css-loader style-loader node-sass sass-loader --save-dev``

## webpack 配置

