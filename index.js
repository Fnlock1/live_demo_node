const NodeMediaServer= require('node-media-server');
const config = {
    rtmp: {
        port: 1935,  // RTMP 端口
        chunk_size: 60000,  //分片大小
        gop_cache: true, //GOP缓存
        ping: 60,
        ping_timeout: 30
    },
    http: {
        port: 8000,  // HTTP 端口
        allow_origin: '*',  //允许跨域
    }
};

var nms = new NodeMediaServer(config)  //实例化
nms.run();  //运行
