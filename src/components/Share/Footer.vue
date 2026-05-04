<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <h3>Portfolio</h3>
          <p>
            Tạo những sản phẩm chất lượng và giải quyết vấn đề bằng công nghệ.
          </p>
        </div>

        <div>
          <h3>Điều hướng</h3>
          <ul>
            <li><a href="#">Trang chủ</a></li>
            <li><a href="#">Dự án</a></li>
            <li><a href="#">Về tôi</a></li>
            <li><a href="#">Liên hệ</a></li>
          </ul>
        </div>

        <div>
          <h3>Tài nguyên</h3>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Hướng dẫn</a></li>
            <li><a href="#">Tài liệu</a></li>
          </ul>
        </div>

        <div>
          <h3>Kết nối</h3>
          <div class="socials">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Email</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2026 Portfolio. All rights reserved.</p>

        <div class="links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #0f375a;
  color: #cbd5e1;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 60px 20px 25px;
}

.container {
  max-width: 1150px;
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 35px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

h3 {
  color: #ffffff;
  font-size: 18px;
  margin-bottom: 18px;
}

p {
  font-size: 14px;
  line-height: 1.7;
  color: #cbd5e1;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul li {
  margin-bottom: 10px;
}

a {
  color: #cbd5e1;
  text-decoration: none;
  transition: 0.2s;
}

a:hover {
  color: #ffffff;
}

.socials {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.socials a {
  background: #111827;
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 14px;
}

.socials a:hover {
  background: #1f2937;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 22px;
  font-size: 13px;
}

.links {
  display: flex;
  gap: 18px;
}

@media (max-width: 900px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
}
</style>