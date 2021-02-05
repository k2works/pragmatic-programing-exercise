# Pragmatic Programing Exercise

[![Azure DevOps](https://img.shields.io/badge/AzureDevOps-ppe-blue)](https://dev.azure.com/k2works/ppe)
![Node.js CI](https://github.com/k2works/pragmatic-programing-exercise/workflows/Node.js%20CI/badge.svg)

## 概要

### 目的

### 前提

| ソフトウェア | バージョン | 備考 |
| :----------- | :--------- | :--- |
| nodejs       | 10.16.3    |      |

### Quick Start

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/k2works/pragmatic-programing-exercise)

```bash
npm install
npm start
```

## 構成

- [設計](#設計)
- [構築](#構築)
- [配置](#配置)
- [開発](#開発)
- [運用](#運用)

### 設計

**[⬆ back to top](#構成)**

### 構築

```bash
npm init -y
npm install --save-dev browser-sync jest @babel/core @babel/cli @babel/preset-env @babel/register
npm install webpack webpack-cli html-webpack-plugin --save-dev
npm install --save-dev style-loader css-loader
npm install --save-dev npm-run-all watch foreman cpx rimraf marked
touch Procfile
npm install cypress
npm install --save-dev cypress-cucumber-preprocessor
```

**[⬆ back to top](#構成)**

### 配置

```bash
npm i -g vercel
npm run deploy
```

**[⬆ back to top](#構成)**

### 開発

```bash
npm start
```

**[⬆ back to top](#構成)**

### 運用

```bash
npm run deploy
```

**[⬆ back to top](#構成)**

## 参照
