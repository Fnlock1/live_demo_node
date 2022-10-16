#这个项目内容采用的技术栈是node+node-media-server+fiv.js 实现的一个直播平台 (简易的，国内相关的入门资料还是很少的)

#我们需要的工具有npm+node+ffmpeg

#npm和node都好说，主要说ffmpeg

#我们来讲一下，怎么安装ffmpeg
https://blog.csdn.net/HYEHYEHYE/article/details/122000352

安装完之后我们吧back_end 输入
1.npm install
2.node index.js

#这个时候我们就可以看到我们的后端服务已经启动了

ffmpeg -re -i ./video.mp4 -c copy -f flv rtmp://localhost:1935/live/STREAM_NAME
输出这个命令

我们的视频服务就已经跑起来了


前端我们把地址改成
http://localhost:8000/live/STREAM_NAME.flv

就可以看到我们的视频了