# agile-design-doc-skill

生成面向敏捷开发团队的精炼设计文档 npm 包。MVP导向，避免过度设计。

## 安装

```bash
npm install -g @ariesyb/agile-design-doc-skill
```

## 功能

该 skill 会帮助 AI 助手生成精炼、重点突出的软件设计文档，包括：

- 设计目标
- 功能列表
- 交互流程（Mermaid 时序图）
- 实现方案（含关键方法）
- 数据模型
- 接口定义

## 使用场景

1. 需要为新功能或系统模块生成设计文档
2. 需要明确功能边界和交互流程
3. 需要提供实现思路和关键方法
4. 需要阐述技术难点和解决方案

## 核心原则

- **MVP 导向**：专注于核心功能，避免过度设计
- **基于现有技术栈**：复用现有组件，避免重复造轮子
- **清晰阐述**：使用 Mermaid 图表展示交互流程
- **精炼文档**：面向技术人员，避免冗长背景介绍

## 安装后位置

Skill 文件会被安装到：

- Windows: `%USERPROFILE%\.agents\skills\agile-design-doc\`
- Linux/Mac: `~/.agents/skills/agile-design-doc/`

## 许可证

MIT
