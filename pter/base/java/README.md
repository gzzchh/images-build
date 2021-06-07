# 翼龙基础镜像之 Java

默认情况下使用 Alpine 镜像  
并且使用 Slim 内容

支持 GLIBC 的 Debian 镜像稍后提供

## Amazon Corretto

默认的情况下,镜像是 Slim 版本

## Azul Zulu

没有 Slim 与 Full 之分

## OpenJDK

从 17 开始才有 Alpine 镜像  
以前的都是 Debian

## 附加组件

对于 Debian 镜像应该执行下列内容

```dockerfile
RUN apt update && \
    apt install -y --no-install-recommends bash curl wget && \
    rm -rf /var/lib/{apt,dpkg,cache,log}/ && \
    adduser -D -h /home/container container
```

对于 Alpine 镜像应该执行下列内容

```dockerfile
RUN apk --no-cache update && \
    apk --no-cache add bash curl wget && \
    adduser -D -h /home/container container
```
