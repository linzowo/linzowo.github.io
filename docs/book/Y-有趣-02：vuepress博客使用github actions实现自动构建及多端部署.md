---
title: 通过github actions实现：vuepress博客自动构建，github仓库自动同步到gitee，giteepage自动部署
date: 2020-11-20 12:26:25
categories:
- Y-有趣
tags:
- vuepress
- github actions
- gitee
excerpt: 想要通过github actions实现vuepress博客自动构建，github仓库自动同步到gitee，giteepage自动部署吗，那就进来看看吧。
---

## 说明

将[vuepress](https://www.vuepress.cn/)博客的本地构建过程转移到[github-actions](https://github.com/features/actions)中，同时支持将构建结果自动部署到`gitee`上，且可以自动更新`gitee pages`。

使用此action后你将不再需要关心博客构建的问题，只需要在本地将文档写好后，push到仓库。剩下的构建以及部署交给，github actions就好了。

既节省了本地空间，又减少了操作步骤。



## 使用 github actions

如果你是第一次使用此工具可以参考官方介绍[github-actions](https://github.com/features/actions)，也可以参考[阮一峰-GitHub Actions 入门教程](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)



## 完整actions代码

`此处假设你已经掌握了github actions的基本使用方法，如果你不清楚如何使用已下代码请参看上面关于如何使用github actions的内容。下面会对代码内部的参数做详细的介绍`

```yml
name: A TO A:GH_PAGES
on: [push]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@master

    - name: Build and Deploy
      uses: jenkey2011/vuepress-deploy@master
      env:
        ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
        # 你要操作的目标仓库
        TARGET_REPO: linzowo/linzowo.github.io
        # 构建结果存储的分支
        TARGET_BRANCH: gh_pages
        # 要使用的构建命令
        BUILD_SCRIPT: yarn && yarn build
        # 构建结果存储目录
        BUILD_DIR: docs/.vuepress/dist/
  sync:
    needs: build-and-deploy
    runs-on: ubuntu-latest
    steps:
    - name: Sync to Gitee
      uses: wearerequired/git-mirror-action@master
      env:
        SSH_PRIVATE_KEY: ${{ secrets.GITEE_RSA_PRIVATE_KEY }}
      with:
      	# 来源仓库
        source-repo: "git@github.com:linzowo/linzowo.github.io.git"
        # 目标仓库
        destination-repo: "git@gitee.com:linzowo/linzowo.git"
  reload-pages:
    needs: sync
    runs-on: ubuntu-latest
    steps:
      - name: reload
        uses: mizuka-wu/gitee-pages-action@v1.0.0
        with:
          repository: linzowo/linzowo
          cookie: ${{ secrets.GITEE_COOKIE }}
          branch: gh_pages

```



## 针对每个job的单独说明

### vuepress自动构建及github page部署：build-and-deploy

此actions来源[vuepress-deploy](https://github.com/jenkey2011/vuepress-deploy/blob/master/README.zh-CN.md#step-by-step-guide),如果在配置中有不清楚的部分可以参考该项目的文档。下面将对其中模糊的部分进行说明。

| 关键词               | 说明                                                         |
| -------------------- | ------------------------------------------------------------ |
| secrets.             | 在项目的设置中有一个Secrets选项下面可以存储一些常用值，这些值在actions中可以访问 |
| secrets.ACCESS_TOKEN | 此secrets下存储的是你账户的token ===>  token创建步骤：点击你的头像 > Settings > Developer settings > Personal access tokens > Generate new token. 权限至少要勾选`repo`，不清楚的，直接无脑全选就行~ 问题不大，不要慌。 ===>  创建完成后将生成的token保存下来，在项目secrets下创建ACCESS_TOKEN将你生成的token存入其中就好了 |

### 同步githubpage至giteepage：sync

此actions来源[Git Mirror Action](https://github.com/wearerequired/git-mirror-action),如果在配置中有不清楚的部分可以参考该项目的文档。下面将对其中模糊的部分进行说明。

| 关键词                        | 说明                                                         |
| ----------------------------- | ------------------------------------------------------------ |
| secrets.                      | 在项目的设置中有一个Secrets选项下面可以存储一些常用值，这些值在actions中可以访问 |
| secrets.GITEE_RSA_PRIVATE_KEY | 此secrets下存储的是你常用电脑的ssh私钥 ===>  如果你不知道如何生成ssh，参考此教程[生成 SSH 公钥](https://git-scm.com/book/zh/v2/%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B8%8A%E7%9A%84-Git-%E7%94%9F%E6%88%90-SSH-%E5%85%AC%E9%92%A5)，生成对应的ssh公钥后。进入.ssh文件夹中获取id_rsa文件（注意此处的id_rsa文件是无后缀的）中的值。将此值存入GITEE_RSA_PRIVATE_KEY即可。 ===> 完成这一步后我们需要去gitee上存储对应的公钥 ===> 进入gitee ==> 点击头像 ==> 点击设置 ==> 找到安全设置 ==> 找到ssh公钥 ==> 获取.ssh文件夹中id_rsa.pub文件中的值。使用此值添加到账户的公钥中 |

|      |
| ---- |
|      |

### giteepage自动部署：reload-pages

这个actions是为了解决giteepage仓库更新后不能自动部署的问题。此actions来源[gitee-pages-action](https://github.com/mizuka-wu/gitee-pages-action),如果在配置中有不清楚的部分可以参考该项目的文档。下面将对其中模糊的部分进行说明。

| 关键词               | 说明                                                         |
| -------------------- | ------------------------------------------------------------ |
| secrets.             | 在项目的设置中有一个Secrets选项下面可以存储一些常用值，这些值在actions中可以访问 |
| secrets.GITEE_COOKIE | 此secrets下存储的是你已经登录gitee后更新pages的时候那个rebuild请求中的值。具体操作步骤我已经在[gitee-pages-action](https://github.com/linzowo/gitee-pages-action)做了详细记录。可以参考其进行配置 |



## 鸣谢

感谢您的阅读，如果此文档对您有所帮助，我也十分高兴。

同时感谢一下开源作者的贡献

[Jenkey2011](https://github.com/jenkey2011)

[required](https://github.com/wearerequired)

[Edward Mizuka](https://github.com/mizuka-wu)