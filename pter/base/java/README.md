# 翼龙基础镜像之 Java

默认情况下使用 Alpine 镜像  
并且使用 Slim 内容

## TODO

- [ ] 添加 JDK17 (尽量等所有 JDK 发布以后再做)
- [ ] 添加 GLIBC

## Amazon Corretto

非 Alpine 镜像基于 AmazonLinux2 是一个基于 RPM 的版本

## Azul Zulu

没有 Slim 与 Full 之分

## OpenJDK

从 17 开始才有 Alpine 镜像  
以前的都是 Debian

## 附加组件

对于 Debian 或者衍生版本镜像应该执行下列内容

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

对于基于 RPM 的镜像应该执行下列内容

```dockerfile
RUN yum install -y bash curl wget && \
    yum clean all && \
    rm -rf /var/lib/{cache,log}/ && \
    adduser -D -h /home/container container
```
