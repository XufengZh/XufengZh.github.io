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

/* Card */
.res-item{
  position: relative;
  display: grid;
  grid-template-columns: 1fr 30%;
  gap: 16px;

  background: var(--card);
  border-radius: 16px;
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
  border-radius: 16px;
  border: 1px solid var(--border);
  background: var(--card);
  z-index: -1;
  opacity: .70;
}

.res-item::before{
  top: 8px;
  transform: rotate(-0.35deg);
}

.res-item::after{
  top: 16px;
  transform: rotate(0.35deg);
  opacity: .50;
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

/* Footer: keep link aligned with other text */
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

  background-size: cover;
  background-position: center;
  opacity: .55;
}

/* Example image mapping (change to your own path) */
.res-media--omnipdf{
  background-image: url("/assets/others/pdf.png");
}

/*
  Fade/blur: start blending roughly at card 70% position.
  Because media occupies the last 30%, we fade from the left edge of the media.
  Adjust 65% to move the blend boundary:
  - smaller -> blend starts earlier (more fade)
  - larger  -> blend starts later  (less fade)
*/
.res-media::after{
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(0,0,0,0) 0%,
    var(--card) 65%,
    var(--card) 100%
  );
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

/* Mobile: stack */
@media (max-width: 720px){
  .res-item{
    grid-template-columns: 1fr;
  }
  .res-media{
    height: 140px;
    opacity: .50;
  }
  .res-media::after{
    background: linear-gradient(
      to bottom,
      rgba(0,0,0,0) 0%,
      var(--card) 70%,
      var(--card) 100%
    );
  }
}
</style>
