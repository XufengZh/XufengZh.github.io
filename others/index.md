---
layout: Others
title: Others
slug: /others
---

<style>
/* 只作用在本页主内容容器 .others-resources 内，不影响 header/footer */
.others-resources {
  --card-bg: #ffffff;
  --card-border: rgba(0,0,0,.08);
  --card-shadow: 0 6px 18px rgba(0,0,0,.08);
  --card-shadow-hover: 0 14px 30px rgba(0,0,0,.14);
  --text: rgba(0,0,0,.88);
  --muted: rgba(0,0,0,.60);
  --accent: #2563eb;

  margin: 1.25rem 0 2rem;
}

@media (prefers-color-scheme: dark) {
  .others-resources {
    --card-bg: rgba(255,255,255,.06);
    --card-border: rgba(255,255,255,.10);
    --card-shadow: 0 8px 22px rgba(0,0,0,.35);
    --card-shadow-hover: 0 14px 34px rgba(0,0,0,.52);
    --text: rgba(255,255,255,.90);
    --muted: rgba(255,255,255,.65);
    --accent: #60a5fa;
  }
}

.others-resources .intro {
  color: var(--muted);
  margin-bottom: 1rem;
  line-height: 1.7;
}

.others-resources .grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 14px;
}

/* 默认两列；窄屏一列 */
.others-resources .item {
  grid-column: span 6;
}
@media (max-width: 900px) {
  .others-resources .item {
    grid-column: span 12;
  }
}

.others-resources .card {
  display: block;
  height: 100%;
  padding: 16px 16px 14px;
  border-radius: 14px;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  box-shadow: var(--card-shadow);
  text-decoration: none;
  color: var(--text);

  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
  will-change: transform;
}

.others-resources .card:hover {
  transform: translateY(-3px);
  box-shadow: var(--card-shadow-hover);
  border-color: rgba(37, 99, 235, .25);
}

.others-resources .card:focus-visible {
  outline: 3px solid rgba(37, 99, 235, .35);
  outline-offset: 3px;
}

.others-resources .title-row {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 6px;
}

.others-resources .index {
  font-variant-numeric: tabular-nums;
  color: var(--muted);
  min-width: 2ch;
}

.others-resources .title {
  font-weight: 700;
  letter-spacing: .2px;
  line-height: 1.35;
}

.others-resources .meta {
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 10px;
}

/* 显示链接域名/路径（可选） */
.others-resources .link {
  font-size: 0.9rem;
  color: var(--accent);
  opacity: .95;
  word-break: break-all;
}
</style>

<div class="others-resources">
  <p class="intro">
    Hi! Here are some of my collection of public resources. Just for convenience and sharing.
    But please note that some documents are only available in Chinese.
  </p>

  <div class="grid">
    <div class="item">
      <a class="card" href="https://xufeng.de/files/StatisticalLearningLH">
        <div class="title-row">
          <span class="index">1</span>
          <span class="title">统计学习课件（Statistical Learning - 李航）</span>
        </div>
        <div class="meta">课件 / Slides（中文为主）</div>
        <div class="link">xufeng.de/files/StatisticalLearningLH</div>
      </a>
    </div>

    <div class="item">
      <a class="card" href="https://xufeng.de/files/MLxFinance">
        <div class="title-row">
          <span class="index">2</span>
          <span class="title">MLxFinance</span>
        </div>
        <div class="meta">Machine Learning × Finance（可能包含中英文）</div>
        <div class="link">xufeng.de/files/MLxFinance</div>
      </a>
    </div>

    <div class="item">
      <a class="card" href="https://xufeng.de/files/Bayesian">
        <div class="title-row">
          <span class="index">3</span>
          <span class="title">Bayesian Statistics</span>
        </div>
        <div class="meta">贝叶斯统计相关资料</div>
        <div class="link">xufeng.de/files/Bayesian</div>
      </a>
    </div>

    <div class="item">
      <a class="card" href="https://xufeng.de/files/EcoStata">
        <div class="title-row">
          <span class="index">4</span>
          <span class="title">计量经济学及 Stata 应用</span>
        </div>
        <div class="meta">Econometrics + Stata（中文为主）</div>
        <div class="link">xufeng.de/files/EcoStata</div>
      </a>
    </div>

    <div class="item">
      <a class="card" href="https://xufeng.de/files/deeplearning">
        <div class="title-row">
          <span class="index">5</span>
          <span class="title">Deep Learning</span>
        </div>
        <div class="meta">深度学习相关资料</div>
        <div class="link">xufeng.de/files/deeplearning</div>
      </a>
    </div>

    <div class="item">
      <a class="card" href="https://xufeng.de/files/cv_full_xufeng.pdf">
        <div class="title-row">
          <span class="index">6</span>
          <span class="title">CV</span>
        </div>
        <div class="meta">Curriculum Vitae（PDF）</div>
        <div class="link">xufeng.de/files/cv_full_xufeng.pdf</div>
      </a>
    </div>
  </div>
</div>
