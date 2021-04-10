##修改`config`目录下`env.js`文件

##使用  ***`npm run dev`*** 启动本地热更新服务器

`推荐使用webpack-dev-server，这个是自己的练习demo`
```shell
// 1、安装
npm install --save-dev webpack-dev-server

// 2、写在webpack的配置中，一般在名为webpack.config.js文件中
module.exports = {
    ...  // 若干其它配置
  devServer:{
    contentBase: './dist',    //相对于 此项目 的入口路径
    port:8088,                  //网页访问的端口号，默认8080
    inline: true               //是否实时刷新
  }
}

// 3、修改package.json文件的scripts块
  "scripts": {
    "dev":"webpack-dev-server"
  }
```

