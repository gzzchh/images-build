# 翼龙基础镜像之 Java

默认情况下使用 Alpine 镜像

接下来要做什么?

- [ ] 添加 JDK17 (尽量等所有 JDK 发布以后再做)

关于 distro 和 libc 的对照表,请参考这里

## Amazon Corretto

非 Alpine 镜像基于 AmazonLinux2 是一个基于 RPM 的 distro

## AdoptOpenJDK

Alpine 镜像选择 slim
glibc 镜像选择 full

## OpenJDK

> 最早的 7 不再受支持范围内,仅仅处于特殊需求才构建

> Oracle 你 🐴 没了

OpenJDK 的镜像非常诡异,首先是底层系统选择很奇怪

- < 12 默认 Debian
- \>= 12 默认 OracleLinux
- \>= 17 提供 Alpine

然后 tag 上也奇奇怪怪的

- slim 为 Debian
- 其他的遵循上述规则

说是 slim 的镜像其实对 JDK 本身并没有做任何修改  
你 slim 了个锤子

也就是说我会提供

- 基于 Debian 的 OpenJDK8 (openjdk-8)
- 基于 Debian 的 OpenJDK11 (openjdk-11)
- 基于 Debian 的 OpenJDK16 (openjdk-16)

以下为计划发布

- 基于 Debian 的 OpenJDK17 (openjdk-17-glibc)
- 基于 Alpine 的 OpenJDK17 (openjdk-17)

## Azul Zulu

官方默认采用的是 Ubuntu  
但是也提供 Alpine 和 Debian  
并且镜像不分 full 与 slim

## Bellsoft Liberica

官方提供了支持 glibc 和仅 musl 的 alpine 镜像  
所以我就用支持 glibc 的镜像来打包了  
至于 `-glibc` 的 tag 还是留给 debian

## 国产 JDK

上游已经改用 Debian 封装,所以自带 glibc

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
RUN yum install -y bash curl wget shadow-utils && \
    yum clean all && \
    rm -rf /var/lib/{cache,log}/ && \
    adduser -D -h /home/container container
```
