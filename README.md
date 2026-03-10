# agile-design-doc-skill

> 面向敏捷开发团队的精炼设计文档生成工具

这是一个为 AI 助手设计的 Skill，帮助生成精炼、重点突出的软件设计文档。专为敏捷开发和 MVP 导向的项目打造，避免过度设计，专注于核心功能。

## 安装

```bash
npx skills add https://github.com/AriesYB/agile-design-doc-skill/blob/main/README.md --skill agile-design-doc
```

## 为什么选择这个工具？

传统的软件设计文档往往冗长繁琐，而敏捷开发需要快速迭代。这个工具帮助 AI 助手生成：

- **设计目标** - 清晰的问题定义和功能范围
- **功能列表** - 简洁的功能点概览
- **交互流程** - Mermaid 时序图展示组件交互
- **实现方案** - 包含关键方法和代码示例
- **数据模型** - 新增或修改的数据结构
- **接口定义** - API 接口规范

## 适用场景

- 为新功能或系统模块生成设计文档
- 明确功能边界和交互流程
- 提供实现思路和关键方法
- 阐述技术难点和解决方案

## 核心原则

| 原则 | 说明 |
|------|------|
| **MVP 导向** | 专注于核心功能，次要功能可后续迭代 |
| **基于现有技术栈** | 复用现有组件，避免重复造轮子 |
| **清晰阐述** | 使用 Mermaid 图表展示交互流程 |
| **精炼文档** | 面向技术人员，避免冗长背景介绍 |

## 安装位置

安装后，Skill 文件位于：

- **Windows**: `%USERPROFILE%\.agents\skills\agile-design-doc\`
- **Linux/Mac**: `~/.agents/skills/agile-design-doc/`

## 许可证

[MIT](LICENSE) © AriesYB
