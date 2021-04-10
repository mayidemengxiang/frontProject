module.exports  = {
    envType : "dev",   //环境类型，保留字段
    port: 8888,        //端口，默认8080
    host: "127.0.0.1",  //主机IP
    root:"../",            //监控的根目录,相对路径，相对于env.js的路径,默认config的父目录
    watch:"",           //指定监视路径，建议直接设置root路径
    ignore:"/node_modules/",    //忽略的文件路径，多个时以路径分割
    enterPoint:"index.html"   //入口文件名
};