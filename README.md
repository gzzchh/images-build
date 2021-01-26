# image-build

| 类型               | 构建周期              | Cron             |
| ------------------ | --------------------- | ---------------- |
| P73R0d4c7YL\-base  | 每周三 早上 4:30      | 30 4 \* \* 3     |
| P73R0d4c7YL\-steam | 每个月 5 号 早上 6:45 | 45 6 5 \* \*     |
| other              | 每周五 早上 7:25      | 25 7 \* \* 5     |
| 同步               | 每三天 中午 12:20     | 20 12 \*/3 \* \* |

## 规范

构建和同步配置文件的命名规范为

- `Dockerfile-${tag}`
- `${tag}.yml`

工作流文件的规范为

- 工作流 ID 格式为相对路径,以 `-` 分割

- 名字为 `构建 $ID 镜像`
- job 为 `build-$ID`
- 文件名为 `$ID`

举几个例子

位于 `pter/base/java/Dockerfile-adopt-11-hotspot` 的翼龙 JDK 镜像构建任务,他的信息如下

- ID: pter-base-java-adopt-11-hotspot
- 名字为 `构建 pter-base-java-adopt-11-hotspot 镜像`
- job 为 `build-pter-base-java-adopt-11-hotspot`
- 文件名 为 `pter-base-java-adopt-11-hotspot.yml`
