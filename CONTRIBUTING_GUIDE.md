# 贡献指南

这篇指南会指导你如何为 mimic 贡献一份自己的力量，请在你要提 issue 或者 pull request 之前花几分钟来阅读一遍这篇指南。

### 行为规则

[code of conduct](https://github.com/fancn21th/mimic/blob/main/CODE_OF_CONDUCT.md)（ 此处 code of conduct 为 链接）作为行为规范，我们希望参与项目的各位严格遵守。请阅读 [全文](https://github.com/fancn21th/mimic/blob/main/CODE_OF_CONDUCT.md)去了解什么行为允许，什么行为不允许。

### 人人皆可开发

mimic 项目在 [GitHub](https://github.com/fancn21th/mimic)上完成，核心团队及其以外的贡献者发送 pull requests，其代码评审流程皆为一致。

### 分支管理

请直接提交你的变更至 [main branch](https://github.com/fancn21th/mimic/tree/main)。对于开发或即将推出的版本，我们不会另建分支。我们尽力保持 `main` 不出问题，并通过所有测试。

合并进入 `main` 的代码必须与最新稳定版本兼容，可以有额外特性，但不能有重大变更。我们应从 `main` 随时能发布新的次版本号。

### 提出变更

如果你想改变公开的 API，或者对实现有不小的变更，我们建议你发起 [issue](https://github.com/fancn21th/mimic/issues/new)，这会让我们先对你的提议达成一致，然后你再着手工作。

如果只是修复漏洞，你当然可以立即提交 pull request，不过我们还是建议先去提出 issue 来说明你修复了什么，这就对一种情况

来说就很方便：我们没有接受特定 bug 的修复但想跟进该 issue 的情况。

### 首个 Pull Request

在写第一个 Pull Request？你可以从这一系列视频中学习怎么做：

**[如何优雅地在 GitHub 上贡献代码](https://app.egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)**

为了使你能够快速上手和熟悉贡献流程，我们这里有个列表 [good first issues](https://github.com/fancn21th/mimic/issues/19)

，里面有相对没那么笼统的漏洞，从这开始是个不错的选择。

如果你想解决一个 issue，请确定检查了该 issue 下的评论以防有人正在处理它。如果目前没人在处理该 issue，那么请留下评论

去表明你想处理该 issue 以便其他人不会意外重复你的工作。

如果有人留言表明要处理该 issue 但是超过两周没有跟进，你可以接手工作，不过也应该留言说明。

### 提交 Pull Request

mimic 团队会关注所有的 pull request，我们会 review 以及合并你的代码，也有可能要求你做一些修改或者告诉你我们为什么不

能接受这样的修改。

在你发送 **Pull Request** 之前，请确认你是按照下面的步骤来做的：

1. 基于 正确的分支 做修改。

2. 在项目根目录下运行了 `npm install`。

   下面这个内容可以先不写，后面遇到了再写出对应的正确的方案

   > 在 Windows 10 开发环境下，如果出现 `gyp err! find vs msvs_version not set from command line or npm config`错误, 请在运行 `npm install` 前安装 [最新版 Python v3](https://www.python.org/downloads/) ， 并通过 [Visual Studio Installer](https://docs.microsoft.com/en-us/visualstudio/install/install-visual-studio?view=vs-2019#step-3---install-the-visual-studio-installer) 安装 **Desktop development with C++**。

3. 如果你修复了一个 bug 或者新增了一个功能，请确保写了相应的测试，这很重要。

4. 确认所有的测试都是通过的 `npm run test`。 小贴士：开发过程中可以用 `npm test -- --watch TestName` 来运行指定的测试。

5. 运行 `npm test -- -u` 来更新 [jest snapshot](http://facebook.github.io/jest/docs/en/snapshot-testing.html#snapshot-testing-with-jest) 并且把这些更新也提交上来（如果有的话）。

### 可接受的贡献类型

这个包的用途作为一个节点包真的是无用的。我创建它是为了演示如何为开源项目做出贡献。但是，我仍然有标准！我只接受以

下拉取请求：

- 修复现有函数的错误
- 增强 API 或现有函数的实现
- 添加一个仅从 StackOverflow 答案稍作修改的函数
- 经过测试

在添加新函数的情况下，该函数必须：

- 不要向内置对象的原型添加任何内容（StackOverflow 最喜欢的事情之一）
- 导出到文件中`src/index.js`
- 原始来源来源的文档

所有代码都必须遵循 ESLint 规定的样式。只要你不跳过 git 钩子，你就不需要担心错过一些东西。

另外，在处理 PR 之前，请讨论问题中的任何更改，以确保在您花时间处理它之前我会接受它。

### fork & pull request

给开源项目贡献代码并不能直接 commit，而是需要先 fork 到自己的仓库下面，然后提 PR(Pull Request)，经过各种测试以及 code review 没有问题之后，开源项目的管理员才会将其 merge 到代码库中

例如有个仓库`https://github.com/fancn21th/mimic.git`，其采用了经典的分支开发模型，稳定后的代码提交到 master 分支，其余特性则在 dev 分支上进行开发，待成熟后合并回 master 分支。

### Issues

所有对一个项目贡献的想法都是从一个 issue 开始。

要点：

- 请大家提 issue 的时候特别注意 issue 的语法格式 。重要的是，你提 issue 的时候注意语言表达，尽量用关键字来表达 issue 内容，要让大家明白你提的 issue 是什么。

- 为议题提供一个描述性标题。 标题应一目了然地传达议题的内容。

- 添加解释问题目的之说明，包括任何可能有助于解决问题的详细信息。 例如，如果这是漏洞报告，请描述重现漏洞的步骤、预期结果和实际结果。

- 您可以使用 Markdown 添加格式、链接、表情等内容。 更多信息请参阅“[在 GitHub 上编写](https://docs.github.com/cn/get-started/writing-on-github)”。

issue [快速入门](https://docs.github.com/cn/issues/tracking-your-work-with-issues/quickstart)

例如我现在需要给项目提供一个对`tree`数据结构的处理的新功能，那么比较简洁的做法如下：

第一步：到开源项目中创建一个 Issues，issues 内容可以填写你想对项目贡献的内容想法，可以是修复 bug 或新增功能。
![image](https://user-images.githubusercontent.com/88175568/156150275-8d082e60-e694-497c-a930-dd6476b2b8de.png)

第二步：首先将当前开源项目 fork 一份到自己的 repo，fork 之后会在自己的 repo 下面出现这个仓库，这相当于是一份镜像（注意不会随着 fork 源的更新而更新）
![image](https://user-images.githubusercontent.com/88175568/156150385-6f210631-f0ab-43f2-94aa-c611302ba140.png)

第三步：将 fork 的 repo clone 到本地，修改代码后 push 到 fork 的 repo 里面，设置 upstream 就是你 fork 的开源地址

Clone your fork of the repo into the current directory

```
git clone https://github.com/<your-username>/<repo-name>
```

Navigate to the newly cloned directory

```
 cd <repo-name>
```

Assign the original repo to a remote called "upstream"

```
git remote add upstream https://github.com/<upstream-owner>/<repo-name>
```

第四步：如果上游仓库变化，从上游获取最新的变化

```
git checkout <dev-branch>
git pull upstream <dev-branch>
```

第五步：创建一个新的主题分支不是在主项目开发分支)来包含您的特性、更改或修复:

```
git checkout -b <topic-branch-name>
```

第六步：提交更改代码到你的 fork 后的仓库上面去

```
git push origin <topic-branch-name>
```

第七步：[Open a Pull Request](https://help.github.com/articles/using-pull-requests/) with a clear title and description

### Commit

[commit](https://www.conventionalcommits.org/zh-hans/v1.0.0/#%e7%ba%a6%e5%ae%9a%e5%bc%8f%e6%8f%90%e4%ba%a4%e8%a7%84%e8%8c%83) 的时候也要注意提交规范：commit 也是很重要的一个步骤，而且 修改 BUG 、新需求 等的 commit 前缀都是不一样的，commit 时注意这些规范 ，会更加提高代码质量,也便于提交的内容更加清晰。

有关 commit 的规范参考如下文档： [约定式提交规范](https://www.conventionalcommits.org/zh-hans/v1.0.0/#%e7%ba%a6%e5%ae%9a%e5%bc%8f%e6%8f%90%e4%ba%a4%e8%a7%84%e8%8c%83)
