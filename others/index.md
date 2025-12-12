---
layout: others
title: Others
slug: /others
---

<div class="res-section">
  <!--<p class="res-intro"> 
    Hi! Here are some of my collection of public resources, for convenience and sharing.
    Please note that some documents are only available in Chinese. */
  </p> -->

  <div class="res-list">


    <div class="res-item">
      <div class="res-head">
        <span class="res-index">4</span>
        <div class="res-title-wrap">
          <h3 class="res-title">OmniPDF</h3>
          <p class="res-meta">This is a free pdf tool. </p>
        </div>
      </div>
      <div class="res-foot">
        <a class="res-link" href="/others/omnipdf" target="_blank" rel="noopener">
          Click here!
        </a>
        <span class="res-tag">Toolkit</span>
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

@media (prefers-color-scheme: dark){
  .res-section{
    --bg: transparent;
    --card: rgba(255,255,255,.06);
    --text: rgba(255,255,255,.90);
    --muted: rgba(255,255,255,.65);
    --border: rgba(255,255,255,.10);
    --shadow: 0 10px 26px rgba(0,0,0,.40);
    --shadow-hover: 0 16px 36px rgba(0,0,0,.58);
    --accent: #60a5fa;
    --accent-soft: rgba(96,165,250,.22);
  }
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

/* Card with “multi-file stacking” effect */
.res-item{
  position: relative;
  background: var(--card);
  border-radius: 14px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  padding: 18px 22px;
  transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
  overflow: hidden;
}

/* stacked papers */
.res-item::before,
.res-item::after{
  content: "";
  position: absolute;
  left: 10px;
  right: 10px;
  height: 100%;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: var(--card);
  z-index: -1;
  opacity: .75;
}

.res-item::before{
  top: 8px;
  transform: rotate(-0.35deg);
}

.res-item::after{
  top: 16px;
  transform: rotate(0.35deg);
  opacity: .55;
}

.res-item:hover{
  transform: translateY(-3px);
  box-shadow: var(--shadow-hover);
  border-color: var(--accent-soft);
}

.res-head{
  display: grid;
  grid-template-columns: 28px 1fr;
  gap: 12px;
  align-items: start;
}

.res-index{
  font-variant-numeric: tabular-nums;
  color: var(--muted);
  line-height: 1.6;
  margin-top: 1px;
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



</style>
