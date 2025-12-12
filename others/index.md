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

      <!-- Right-side image -->
      <div class="res-media res-media--omnipdf" aria-hidden="true"></div>
    </div>

  </div>
</div>

<style>
/* Container */
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

/* List */
.res-list{
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Card */
.res-item{
  position: relative;
  display: grid;

  /*
    关键：使用 clamp 让图片列随着窗口变窄逐步变小：
    - 最大占比：30%
    - 理想宽度：26vw（随视口缩小）
    - 最小宽度：120px（再小就不值得显示了）
  */
  grid-template-columns: 1fr minmax(0, clamp(120px, 26vw, 30%));
  gap: 16px;

  background: var(--card);
  border-radius: 16px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  padding: 18px 22px;
  transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
  overflow: hidden;
}

/* Remove stacked papers lines */
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
  min-width: 0;
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

  /* Keep single line */
  white-space: nowrap;
  flex-wrap: nowrap;
}

.res-link:hover{
  background: var(--accent-soft);
  border-color: var(--accent-soft);
  transform: translateY(-1px);
}

/* Right media */
.res-media{
  position: relative;
  z-index: 1;
  border-radius: 14px;
  overflow: hidden;

  min-width: 0;

  opacity: 1;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  /*
    渐隐/渐缩过渡（用于断点附近更顺滑）
    注：真正“随着窗口变化连续变化”主要由 clamp 完成；
        transition 用来让断点切换更柔和。
  */
  transition: opacity .2s ease, transform .2s ease;
  transform-origin: center;
}

/* Image mapping */
.res-media--omnipdf{
  background-image: url("/assets/others/pdf.png");
}

/* Remove blur overlay */
.res-media::after{
  content: none !important;
}

/*
  逐渐消失策略（不突然消失）：
  - 在接近最低可用宽度前，先降低透明度并缩放
  - 进入更窄区间后，再彻底隐藏，避免布局抖动/掉行
*/
@media (max-width: 560px){
  .res-media{
    opacity: .75;
    transform: scale(.92);
  }
}
@media (max-width: 520px){
  .res-media{
    opacity: .55;
    transform: scale(.85);
  }
}
@media (max-width: 480px){
  .res-media{
    opacity: .35;
    transform: scale(.78);
  }
}

/* 最低限：隐藏（此时已基本不可见，效果不会“突然”） */
@media (max-width: 440px){
  .res-item{
    grid-template-columns: 1fr;
  }
  .res-media{
    opacity: 0;
    transform: scale(.7);
    pointer-events: none;
  }
}

/* 彻底移除占位，避免极窄时仍占空间 */
@media (max-width: 420px){
  .res-media{
    display: none;
  }
}
</style>
