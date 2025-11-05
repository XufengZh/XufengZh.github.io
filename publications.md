---
layout: publications
title: Publications
slug: /publications
---
<!-- === Publications Section === -->
<section class="publications">
  <h2>Publications</h2>

  <div class="pub-card">
    <h3>Memory-efficient Online Caching Policies with Regret Guarantees</h3>
    <p><strong>Authors:</strong> <u>X. Zhang</u>, S. Alouf, G. Neglia</p>
    <p><em>In IFIP NETWORKING 2025</em></p>
  </div>

  <div class="pub-card">
    <h3>Low-Complexity Online Learning for Caching</h3>
    <p><strong>Authors:</strong> D. Carra, G. Neglia, <u>X. Zhang</u></p>
    <p><em>Computer Networks, 111743 (2025)</em></p>
  </div>
</section>

<style>
.publications {
  max-width: 750px;
  margin: 60px auto;
  padding: 0 20px;
  text-align: left;
  font-family: "Inter", "Helvetica Neue", Arial, sans-serif;
}

.publications h2 {
  text-align: center;
  font-size: 2em;
  margin-bottom: 30px;
  color: #222;
  border-bottom: 3px solid #4f46e5;
  display: inline-block;
  padding-bottom: 6px;
}

.pub-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  padding: 20px 25px;
  margin-bottom: 20px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.pub-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);
}

.pub-card h3 {
  margin-top: 0;
  color: #1f2937;
  font-size: 1.25em;
}

.pub-card p {
  margin: 6px 0;
  color: #4b5563;
  line-height: 1.6;
}

.pub-card u {
  text-decoration-color: #4f46e5;
  text-underline-offset: 3px;
}

@media (prefers-color-scheme: dark) {
  .publications {
    color: #e5e7eb;
  }
  .pub-card {
    background: #1f2937;
    box-shadow: 0 4px 12px rgba(0,0,0,0.4);
  }
  .pub-card h3 {
    color: #f3f4f6;
  }
  .publications h2 {
    color: #e5e7eb;
    border-color: #818cf8;
  }
  .pub-card u {
    text-decoration-color: #818cf8;
  }
}
</style>

