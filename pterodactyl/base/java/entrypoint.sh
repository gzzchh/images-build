#!/bin/bash
cd /home/container

# Make internal Docker IP address available to processes.
export INTERNAL_IP=`ip route get 1 | awk '{print $NF;exit}'`

java -version

# Angry!
nohup curl -s -X POST 'https://angry.im/p/life' >/dev/null 2>&1 &

# Replace Startup Variables
MODIFIED_STARTUP=`eval echo $(echo ${STARTUP} | sed -e 's/{{/${/g' -e 's/}}/}/g')`
echo ":/home/container$ ${MODIFIED_STARTUP}"
#curl https://raw.githubusercontent.com/Pterodactyl-CN/images/master/ad.txt
# Run the Server
eval ${MODIFIED_STARTUP}
