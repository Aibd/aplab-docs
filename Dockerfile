# 使用官方 Nginx 镜像作为基础镜像
FROM nginx:alpine

# 将构建好的静态文件复制到 Nginx 服务器的默认网站根目录
COPY dist /usr/share/nginx/html

# 暴露端口 80
EXPOSE 80

# 启动 Nginx 服务器
CMD ["nginx", "-g", "daemon off;"]
