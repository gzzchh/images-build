# ----------------------------------
# Pterodactyl Core Dockerfile
# Environment: Minecraft Bedrock Server
# Minimum Panel Version: 0.6.0
# ----------------------------------
FROM debian

LABEL org.opencontainers.image.authors="echoes@yqemail.com"
LABEL org.opencontainers.image.vendor="YunQiaoLD"

RUN apt update && \
    apt install -y --no-install-recommends bash curl wget tzdata && \
    rm -rf /var/lib/{apt,dpkg,cache,log}/ && \
    adduser -D -h /home/container container

USER container
ENV  USER container
ENV  HOME /home/container

WORKDIR /home/container

COPY ./entrypoint.sh /entrypoint.sh

CMD ["/bin/bash", "/entrypoint.sh"]
