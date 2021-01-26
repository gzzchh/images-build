# ----------------------------------
# Pterodactyl Steam Game Dockerfile
# Game: Ice Lakes
# Minimum Panel Version: 0.7.0
# ----------------------------------
FROM ubuntu:latest

# apt
ENV DEBIAN_FRONTEND=noninteractive
RUN set -x && \
    # 安装基本组件
    dpkg --add-architecture i386 && \
    apt update && \
    apt install -y --no-install-recommends --no-install-suggests \
    curl \
    wget \
    file \
    bzip2 \
    gzip \
    unzip \
    util-linux \
    ca-certificates \
    bc \
    jq \
    lib32gcc1 \
    libstdc++6 \
    libstdc++6:i386 && \
    # 游戏 Ice Lakes 特定组件
    # 清理
    apt autoremove -y && \
    rm -rf /var/lib/{apt,dpkg,cache,log}/ && \
    # 最后 添加用户
    useradd -d /home/container -m container

USER container
ENV  USER container
ENV  HOME /home/container

WORKDIR /home/container

COPY ./entrypoint.sh /entrypoint.sh

CMD ["/bin/bash", "/entrypoint.sh"]