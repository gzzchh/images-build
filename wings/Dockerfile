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
RUN apk update && \
    apk add ca-certificates
COPY --from=0 /wings_linux_amd64 /wings
ENTRYPOINT [ "/wings" ]
