# CET-6 词汇阅读 · 在线练习工具

在线地址：**[chiling12.github.io/cet6-reader](https://chiling12.github.io/cet6-reader/)**

---

## 功能

### 📝 阅读理解练习
- 4 篇 CET-6 难度文章，每篇 5 道选择题
- 计时作答，提交后自动判分
- 右键标记生词，自动同步到词汇本

### 📖 词汇精读
- 18 篇精选外刊文章（持续更新）
- 来源：The Economist、Nature、The Atlantic、National Geographic、The Guardian、Scientific American 等
- 六级核心词汇黄色高亮标注，悬停查看释义
- 右键任意单词 → 添加到生词本 → 添加中文释义

### 📒 生词本
- 统一管理所有收藏的生词
- 搜索、编辑释义、导出 CSV / JSON / TXT

### 📝 默写测试
- 看释义写单词 / 看单词写释义 两种模式
- 自动判分，错题重练

---

## 使用方法

```
双击 index.html → 浏览器打开 → 开始练习
```

或访问在线版：https://chiling12.github.io/cet6-reader/

---

## 项目结构

```
├── index.html              阅读理解练习（首页）
├── cet6-vocabulary.html    词汇精读 + 生词本 + 默写
├── common.css              共享样式
├── articles.js             文章数据（18篇）
├── vocab-store.js          生词存储模块
├── dictation.js            默写引擎
├── export.js               导出工具
└── README.md
```

---

## 添加新文章

编辑 `articles.js`，在 `ARTICLES` 数组末尾追加：

```javascript
{
  id: 19,
  title: "文章标题",
  source: "The Economist",
  date: "2026/07",
  theme: "科技",
  wordCount: 380,
  paragraphs: [
    "The {advent} of new technology has {transformed} ...",
  ]
}
```

`{word}` 标记的单词会自动渲染为高亮词汇。页面标签页根据文章总数自动生成。

---

## 技术栈

纯静态 HTML + CSS + JavaScript，无框架、无后端、无需服务器。

- 数据持久化：localStorage
- 部署：GitHub Pages / Netlify / 本地双击即用

---

## License

MIT
