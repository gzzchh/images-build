#!/bin/bash
cd /home/container

# Make internal Docker IP address available to processes.
export INTERNAL_IP=`ip route get 1 | awk '{print $NF;exit}'`

java -version

echo "LoliIDC-GamePanel(游戏面板) 官方站点: www.loliidc.cn  淘宝: tb.loliidc.cn"

# Replace Startup Variables
MODIFIED_STARTUP=`eval echo $(echo ${STARTUP} | sed -e 's/{{/${/g' -e 's/}}/}/g')`
echo ":/home/container$ ${MODIFIED_STARTUP}"
# Run the Server
eval ${MODIFIED_STARTUP}
