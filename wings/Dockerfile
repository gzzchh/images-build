FROM alpine
RUN apk update && \
    apk add wget curl unzip tar gzip ca-certificates
RUN curl https://api.github.com/repos/pterodactyl/wings/releases/latest \
    | grep browser_download_url \
    | grep wings_linux_amd64 \
    | cut -d '"' -f 4 \
    | wget -i -
RUN chmod +x wings_linux_amd64
# 第二阶段,只有二进制文件
FROM alpine
# 最后修复了库问题
# 直到翼龙关闭CGO编译
RUN apk update && \
    apk add ca-certificates \
    mkdir /lib64 && ln -s /lib/libc.musl-x86_64.so.1 /lib64/ld-linux-x86-64.so.2
COPY --from=0 /wings_linux_amd64 /wings
CMD [ "/wings" ]
