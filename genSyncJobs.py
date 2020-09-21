import os
import yaml


def getFileLength(fname):
    with open(fname) as f:
        for i, l in enumerate(f):
            pass
    return i + 1


def genRunCommand(filename):
    commandRaw = "./image-syncer -r 5 --auth ./sync-tool/auth.json --images "+filename


jobList = []
fileList = []
for root, dirs, files in os.walk(".", topdown=False):
    # 不扫描隐藏文件夹
    if "./." not in root:
        for name in files:
            # 找所有yml
            if str(name).endswith(".yml"):
                filename = os.path.join(root, name)
                # 去掉>3行的
                if not getFileLength(filename) >= 3:
                    jobName = os.path.splitext(name)[0]
                    jobList.append(jobName)
                    fileList.append(filename)
                    # print(taskName)

# print(jobList)
# print(fileList)


f = open(r'./.github/sync-fix.yml')
workflow = yaml.load(f)
workflowJob = workflow['jobs']
workflowJob = {
    'sync-adguard': {
        'runs-on': 'ubuntu-latest',
        'steps': [
            {
                'name': '检出代码',
                'uses': 'actions/checkout@v2'
            },
            {
                'name': '准备同步工具',
                'run': 'bash ./sync-tool/tools.sh'
            },
            {
                'name': '搬回国内',
                'run': './image-syncer -r 5 --auth ./sync-tool/auth.json --images ./adguard/adguard.yml'
            }
        ]
    }
}

for index in jobList:
    # "sync-"+jobList[index]
    strslice = str("sync-"+jobList[index])[::]
    newJob = {
        strslice: {
            'runs-on': 'ubuntu-latest',
            'steps': [
                {
                    'name': '检出代码',
                    'uses': 'actions/checkout@v2'
                },
                {
                    'name': '准备同步工具',
                    'run': 'bash ./sync-tool/tools.sh'
                },
                {
                    'name': '搬回国内',
                    'run': './image-syncer -r 5 --auth ./sync-tool/auth.json --images ./adguard/adguard.yml'
                }
            ]
        }
    }

    print(newJob)
