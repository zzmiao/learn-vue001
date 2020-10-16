1 name - 包名。
 2 version - 包的版本号。
 3 description - 包的描述。
 4 entry pointer 项目入口文件 没有的直接回车跳过
 5 test command: 测试命令 后面可直接用npm执行的一句话，可以先不写到生成完的json文件中去改
 6 git repository: 仓储地址 比如在github上的
 7 keywords - 关键字
 8 author - 包的作者姓名。
 9 license: (ISC) 授权证书 按照默认的走 直接回车
10 homepage - 包的官网 url 。
11 contributors - 包的其他贡献者姓名。
12 dependencies - 依赖包列表。如果依赖包没有安装，npm 会自动将依赖包安装在 node_module 目录下。
13 repository - 包代码存放的地方的类型，可以是 git 或 svn，git 可在 Github 上。
14 main - main 字段是一个模块ID，它是一个指向你程序的主要项目。就是说，如果你包的名字叫 express，然后用户安装它，然后require("express")。

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:zzmiao/learn-vue001.git
git push -u origin main

Babel: es6转es5
TypeScript:支持ts
Progressive Web App (PWA) Support:渐进式web应用
Router:路由
Vuex:管理状态
CSS Pre-processors：CSS预处理
Linter / Formatter：代码规范
Unit Testing：单元测试
E2E Testing：端到端测试
