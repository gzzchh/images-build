FROM alpine
RUN apk update && \
    apk add wget unzip tar gzip
RUN wget https://static.adguard.com/adguardhome/release/AdGuardHome_linux_amd64.tar.gz && \
    tar xvzf  AdGuardHome_linux_amd64.tar.gz
# 第二阶段,只有二进制文件
FROM alpine
COPY --from=0 /root/AdGuardHome /AdGuardHome
ENTRYPOINT [ "/AdGuardHome" ]