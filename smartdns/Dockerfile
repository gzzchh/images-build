FROM alpine
RUN apk update && \
    apk add wget unzip tar gzip ca-certificates -y
RUN  curl  https://api.github.com/repos/pymumu/smartdns/releases/latest \
    | grep browser_download_url \
    | grep smartdns-x86_64 \
    | cut -d '"' -f 4 \
    | wget -i -
# 第二阶段,只有二进制文件
FROM alpine
RUN apk update && \
    apk add ca-certificates -y
COPY --from=0 /smartdns-x86_64 /smartdns
ENTRYPOINT [ "/smartdns" ]