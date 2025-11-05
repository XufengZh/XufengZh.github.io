---
layout: home
profile_picture:
  src: /assets/img/profile-pic.png
  alt: website picture
---

<div class="profile-section">
  <div class="profile-header">
    <img src="/assets/img/profile-pic.png" alt="Profile picture">
  </div>

  <section>
    <h3>Contact</h3>
    <hr>
    <p>Email: <a>xufeng.zhang at inria.fr</a></p>
    <p>Location: 06560 Valbonne, France</p>
  </section>

  <section>
    <h3>Current Position</h3>
    <hr>
    <p>PhD Student at <strong>Inria Sophia Antipolis</strong>, NEO team.</p>
    <p>Under the supervision of <strong>Giovanni Neglia</strong> and <strong>Sara Alouf</strong>.</p>
  </section>

  <section>
    <h3>Research Interests</h3>
    <hr>
    <ul>
      <li>Online Optimization</li>
      <li>Caching Policies</li>
    </ul>
  </section>

  <p class="cv-link">
    More details are available in my <a href="/assets/CV">CV</a>.
  </p>
</div>

<style>
.profile-section {
  max-width: 760px;
  margin: 60px auto;
  padding: 0 20px;
  font-family: "Inter", "Helvetica Neue", Arial, sans-serif;
  line-height: 1.7;
  color: #1f2937;
}

/* 顶部个人信息区 */
.profile-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
}

.profile-header img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #4f46e5;
}

.profile-info h1 {
  margin: 0;
  font-size: 1.8em;
  color: #111827;
}

.profile-info p {
  margin: 4px 0;
  color: #374151;
}

/* 各小节 */
section {
  margin-bottom: 40px;
}

section h3 {
  font-size: 1.2em;
  font-weight: 600;
  color: #1f2937;
  border-left: 4px solid #4f46e5;
  padding-left: 10px;
  margin-bottom: 10px;
}

section hr {
  border: none;
  border-top: 1px solid #e5e7eb;
  margin: 6px 0 12px;
}

section p, section li {
  color: #374151;
  margin: 4px 0;
}

ul {
  padding-left: 20px;
  margin: 0;
}

.cv-link {
  text-align: center;
  font-weight: 500;
  margin-top: 30px;
}

.cv-link a {
  color: #4f46e5;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;
}

.cv-link a:hover {
  border-color: #4f46e5;
}


</style>
