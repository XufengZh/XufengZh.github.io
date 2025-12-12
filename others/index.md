---
layout: others
title: Others
slug: /others
---

<div class="res-section">
  <p class="res-intro">
    Here are some small tools I made myself; feel free to try them out.
  </p>

  <div class="res-list">

    <!-- Card 1 -->
    <div class="res-item">
      <div class="res-content">
        <div class="res-title-wrap">
          <h3 class="res-title">OmniPDF</h3>
          <p class="res-meta">This is a free pdf tool.</p>
        </div>

        <div class="res-foot">
          <a class="res-link" href="/others/omnipdf" target="_blank" rel="noopener">
            Click here!
          </a>
        </div>
      </div>

      <!-- Right-side image (30%) -->
      <div class="res-media res-media--omnipdf" aria-hidden="true"></div>
    </div>

  </div>
</div>

<style>
/* Container: align with Publications style */
.res-section{
  max-width: 720px;
  margin: 60px auto;
  padding: 0 20px;
  font-family: inherit;

  --bg: #ffffff;
  --card: #ffffff;
  --text: #1f2937;
  --muted: #4b5563;
  --border: rgba(0,0,0,.08);
  --shadow: 0 3px 10px rgba(0,0,0,0.08);
  --shadow-hover: 0 10px 22px rgba(0,0,0,0.14);
  --accent: #4b90e7;
  --accent-soft: rgba(75,144,231,.18);
}

.res-intro{
  margin: 0 0 18px;
  color: var(--muted);
  line-height: 1.7;
}

/* Stack list */
.res-list{
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Card */
.res-item{
  position: relative;
  display: grid;

  /* 关键修复：第二列允许收缩，避免挤压导致掉行/撑高 */
  grid-template-columns: 1fr minmax(0, 30%);
  gap: 16px;

  background: var(--card);
  border-radius: 16px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  padding: 18px 22px;
  transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
  overflow: hidden;
}

/* 删除卡片内多余灰色框线：禁用 stacked papers */
.res-item::before,
.res-item::after{
  content: none !important;
}

.res-item:hover{
  transform: translateY(-3px);
  box-shadow: var(--shadow-hover);
  border-color: var(--accent-soft);
}

/* Left content */
.res-content{
  position: relative;
  z-index: 2;
  min-width: 0; /* 避免内容把 grid 撑开 */
}

.res-title{
  margin: 0;
  color: var(--text);
  font-size: 1.15em;
  line-height: 1.35;
  letter-spacing: .2px;
}

.res-meta{
  margin: 6px 0 0;
  color: var(--muted);
  line-height: 1.55;
}

/* Footer */
.res-foot{
  margin-top: 14px;
}

.res-link{
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;

  padding: 8px 10px;
  border-radius: 10px;
  background: transparent;
  border: 1px solid transparent;
  transition: background .2s ease, border-color .2s ease, transform .2s ease;

  /* 不让链接内元素另起一行（保持单行） */
  white-space: nowrap;
  flex-wrap: nowrap;
}

.res-link:hover{
  background: var(--accent-soft);
  border-color: var(--accent-soft);
  transform: translateY(-1px);
}

/* Right-side media block */
.res-media{
  position: relative;
  z-index: 1;
  border-radius: 14px;
  overflow: hidden;

  /* 关键修复：允许该列在变窄时真正缩小 */
  min-width: 0;

  /* 图片不透明、不模糊，并保持等比缩放 */
  opacity: 1;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

/* Example image mapping (change to your own path) */
.res-media--omnipdf{
  background-image: url("/assets/others/pdf.png");
}

/* 取消渐变遮罩与 blur（原先的 fade/blur） */
.res-media::after{
  content: none !important;
}

/*
  桌面端“窗口拖窄但还没到手机断点”的区间：
  直接隐藏右侧图片，避免出现掉到第二行并居中的问题。
  这里的阈值你可以按实际观感微调（比如 900/840/800）。
*/
@media (max-width: 900px){
  .res-item{
    grid-template-columns: 1fr; /* 单列更稳定 */
  }
  .res-media{
    display: none;
  }
}

/* Mobile: stack（保留；此时图片已隐藏，不影响） */
@media (max-width: 720px){
  .res-item{
    grid-template-columns: 1fr;
  }
  .res-media{
    display: none;
  }
}

/* 极端情况下（可选，保留无害） */
@media (max-width: 420px){
  .res-media{
    display: none;
  }
}
</style>
