const workflowMain = {
  name: "构建 adopt-8-hotspot 镜像",
  on: {
    push: {
      paths: [
        // "pterodactyl/base/java/Dockerfile-adopt-8-hotspot",
        // "pterodactyl/base/java/entrypoint.sh",
        // ".github/workflows/adopt-8-hotspot.yml",
      ],
    },
    schedule: [
      {
        cron: "0 14 * * 1",
      },
    ],
  },
  env: {
    TKE_USERNAME: "${{ secrets.TKE_USERNAME }}",
    TKE_PASSWORD: "${{ secrets.TKE_PASSWORD }}",
    ACR_USERNAME: "${{ secrets.ACR_USERNAME }}",
    ACR_PASSWORD: "${{ secrets.ACR_PASSWORD }}",
    ACR_XL_USERNAME: "${{ secrets.ACR_XL_USERNAME }}",
    ACR_XL_PASSWORD: "${{ secrets.ACR_XL_PASSWORD }}",
    HUB_USERNAME: "${{ secrets.HUB_USERNAME }}",
    HUB_PASSWORD: "${{ secrets.HUB_PASSWORD }}",
  },
  jobs: {},
};
const buildJob = {
  "runs-on": "ubuntu-latest",
  steps: [
    {
      name: "检出代码",
      uses: "actions/checkout@v2",
    },
    {
      name: "设定 Docker Buildx",
      uses: "docker/setup-buildx-action@v1",
    },
    {
      name: "登陆到 DockerHub",
      uses: "docker/login-action@v1",
      with: {
        username: "${{ secrets.HUB_USERNAME }}",
        password: "${{ secrets.HUB_PASSWORD }}",
      },
    },
    {
      name: "构建 adopt-8-hotspot 镜像",
      uses: "docker/build-push-action@v2",
      with: {
        context: "./pterodactyl/base/java",
        file: "./pterodactyl/base/java/Dockerfile-adopt-8-hotspot",
        push: true,
        tags: "gzzchh/pter-base:adopt-8-hotspot",
      },
    },
  ],
};
const syncJob = {
  "runs-on": "ubuntu-latest",
  needs: [],
  steps: [
    {
      name: "检出代码",
      uses: "actions/checkout@v2",
    },
    {
      name: "准备同步工具",
      run: "bash ./sync-tool/tools.sh",
    },
    {
      name: "搬回国内",
      run: "./image-syncer -r 5 --proc 16 --auth ./sync-tool/auth.json --images ${syncConfigFile}",
    },
  ],
};
module.exports = {
  workflowMain: workflowMain,
  buildJob: buildJob,
  syncJob: syncJob,
};
