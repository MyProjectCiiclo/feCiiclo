<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <h3>Portfolio</h3>
          <p>
            Tạo những sản phẩm tuyệt vời và giải quyết vấn đề thông qua công nghệ.
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
            <a href="#"><i class="fab fa-github"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fas fa-envelope"></i></a>
          </div>
        </div>
      </div>

      <hr />

      <div class="footer-bottom">
        <p>© 2026 Portfolio. Tất cả các quyền được bảo lưu.</p>
        <div class="links">
          <a href="#">Chính sách bảo mật</a>
          <a href="#">Điều khoản dịch vụ</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid #fff;
  background: #0f375a;
  color: #cbd5e1;
  padding: 50px 20px 20px;
  font-family: Arial, sans-serif;
}

.container {
  max-width: 1100px;
  margin: auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}

h3 {
  color: #fff;
  margin-bottom: 15px;
}

p {
  font-size: 14px;
  line-height: 1.6;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin-bottom: 8px;
}

a {
  color: #fff;
  text-decoration: none;
}

a:hover {
  color: #fff;
}

.socials a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  background: #0f172a;
  padding: 10px;
  border-radius: 8px;
  color: #fff;
  font-size: 18px;
  transition: 0.3s;
}

.socials a i {
  color: #fff !important;
}

.socials a:hover {
  background: #1e293b;
  transform: translateY(-2px);
}

hr {
  border: none;
  border-top: 1px solid #1e293b;
  margin: 30px 0;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}

.footer-bottom .links a {
  margin-left: 20px;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
}
</style>