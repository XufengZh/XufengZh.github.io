---
slug: /cv.html
title: Xufeng-CV
layout: defaultCV
---

<div class="cv-container">
  <div class="cv-card">
    <h2>Education</h2>
    <hr>
    <p><strong>Université Côte d'Azur</strong>, Dec 2023 – Now<br>PhD in Informatics</p>
    <p><strong>Sapienza Università di Roma</strong>, Sept 2021 – Oct 2023<br>Laurea Magistrale in Data Science</p>
    <p><strong>Zhejiang University</strong>, Sept 2016 – Jul 2021<br>B.S. in Macromolecular Materials and Engineering<br>B.S. in Economics (Double Degree)</p>
  </div>

  <div class="cv-card">
    <h2>Summer School and Exchange</h2>
    <hr>
    <p><strong>Università della Svizzera italiana</strong>, 2022 Fall Exchange<br>Erasmus Exchange in Faculty of Informatics</p>
    <p><strong>University of Jyväskylä</strong>, 2021 Summer School<br>Stochastic Optimization & Multicriteria Optimization</p>
    <p><strong>Osaka University</strong>, 2021 Spring Exchange<br>Intelligence and Learning</p>
    <p><strong>National Yang-Ming University</strong>, 2020 Summer School<br>Microbial Biotechnology and Drug Discovery Program</p>
  </div>

  <div class="cv-card">
    <h2>Projects</h2>
    <hr>
    <p><strong>Online Caching Optimization with Predictions</strong>, Inria, Mar 2023 – Aug 2023</p>
    <p><strong>Driving Business Decisions through AI</strong>, Poste Italiane, Jul 2022 – Jul 2022</p>
    <p><strong>Impact of Land Finance on Government Policy</strong>, Zhejiang University, Sept 2020 – Jul 2021</p>
    <p><strong>Photothermal Effect of Polypropylene Membrane on Desalination</strong>, Zhejiang University, Mar 2020 – Sept 2020</p>
    <p><strong>Financial Default Risk Monitoring</strong>, Shanghai Jiaotong University, Aug 2019 – Sept 2019</p>
    <p><strong>Pricing Mechanism of Group Buying Platform</strong>, Zhejiang University, Apr 2019 – May 2020</p>
  </div>

  <div class="cv-card">
    <h2>Work Experience</h2>
    <hr>
    <p><strong>Data Analysis Internship</strong>, LundBeck, Sept 2021 – Dec 2021</p>
    <p><strong>Industrial Research Internship</strong>, Shengang Securities, Dec 2019 – Mar 2020</p>
  </div>

  <div class="cv-card">
    <h2>Technical Skills & Tools</h2>
    <hr>
    <p><strong>Programming Languages:</strong> Python, R, C</p>
    <p><strong>Data Analysis Tools:</strong> NumPy, Pandas, Matplotlib, PyTorch, Scikit-learn</p>
    <p><strong>Statistical Analysis:</strong> Stata, R</p>
    <p><strong>Database Management:</strong> SQL, MongoDB</p>
  </div>
</div>

<style>
/* === 基本结构 === */
.cv-container {
  max-width: 850px;
  margin: 60px auto;
  padding: 0 20px;
  color: #1e1e1e;
  line-height: 1.7;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

/* === 卡片布局 === */
.cv-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  padding: 22px 28px;
  margin-bottom: 28px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.cv-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

/* === 标题与分隔线 === */
.cv-card h2 {
  color: #1f2937;
  font-size: 1.3em;
  font-weight: 700;
  border-left: 5px solid #4b90e7;
  padding-left: 10px;
  margin: 0 0 10px;
}

.cv-card hr {
  border: none;
  border-top: 1px solid #e5e7eb;
  margin: 6px 0 16px;
}

/* === 正文文字 === */
.cv-card p {
  margin: 6px 0 14px;
  color: #222;
  font-weight: 400;
}

.cv-card strong {
  color: #000;
  font-weight: 600;
}

/* === 链接 === */
a {
  color: #4b90e7;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;
}
a:hover {
  border-color: #4b90e7;
}

/* === 顶部 Email === */
.cv-container > p:first-child {
  text-align: right;
  font-weight: 500;
  color: #4b90e7;
  margin-bottom: 20px;
}

/* === 响应式优化 === */
@media (max-width: 640px) {
  .cv-container {
    margin: 40px auto;
    padding: 0 15px;
  }

  .cv-card {
    padding: 18px 20px;
  }

  .cv-card h2 {
    font-size: 1.15em;
  }

  .cv-card p {
    font-size: 0.95em;
  }
}
</style>
