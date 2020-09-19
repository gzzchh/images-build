# ----------------------------------
# Pterodactyl Steam Game Dockerfile
# Game: Mordhau
# Minimum Panel Version: 0.7.0
# ----------------------------------
FROM ubuntu:latest

# apt
ENV DEBIAN_FRONTEND=noninteractive
RUN set -x && \
    apt update && \
    # Install Mordhau server dependencies and clean up
    apt install -y --no-install-recommends --no-install-suggests \
    language-pack-zh-hans \
    lib32stdc++6 \
    lib32gcc1 \
    libc6 \
    libc6-i386 \
    libfontconfig1 \
    libpangocairo-1.0-0 \
    libnss3 \
    libgconf2-4 \
    libxi6 \
    libxcursor1 \
    libxss1 \
    libxcomposite1 \
    libasound2 \
    libxdamage1 \
    libxtst6 \
    libatk1.0-0 \
    libxrandr2 && \
    ## For SteamCMD 实验性
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
    apt autoremove -y && \
    rm -rf /var/lib/{apt,dpkg,cache,log}/

USER container
ENV  USER container
ENV  HOME /home/container

WORKDIR /home/container

COPY ./entrypoint.sh /entrypoint.sh

CMD ["/bin/bash", "/entrypoint.sh"]