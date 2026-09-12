# Exercise 1 — Tên miền miễn phí & Git/GitHub

## Phần A — Đăng ký tên miền miễn phí

### Tình trạng

> ⚠️ **Chưa thực hiện.** Việc đăng ký tên miền đòi hỏi tạo tài khoản và khai thông tin
> định danh cá nhân (họ tên, số CCCD, số điện thoại thật) trên trang của nhà đăng ký,
> nên phải do chính sinh viên làm. Phần dưới là hướng dẫn từng bước và bảng để điền
> kết quả sau khi đăng ký xong.

### Chương trình tên miền `.id.vn` miễn phí

Theo đề bài, hai nhà đăng ký được gợi ý:

| Nhà đăng ký | Đường dẫn |
|-------------|-----------|
| P.A Việt Nam | https://www.pavietnam.vn/vn/tin-tuc-uu-dai-so-huu-mien-phi-ten-mien-id-vn.html |
| Mắt Bão | https://www.matbao.net/ten-mien/ten-mien-mien-phi.html |

Đây là chương trình của Trung tâm Internet Việt Nam (VNNIC) dành cho người dùng cá
nhân, đặc biệt là sinh viên — miễn phí năm đầu, sau đó gia hạn có phí.

### Các bước thực hiện

1. **Chọn tên miền.** Kiểm tra tên còn trống trên công cụ tra cứu của nhà đăng ký.
   Gợi ý đặt theo tên thật để còn dùng lâu dài, ví dụ `truongphuc.id.vn`.
2. **Tạo tài khoản** trên trang nhà đăng ký bằng email thật.
3. **Khai thông tin chủ thể.** Tên miền `.id.vn` yêu cầu thông tin định danh cá nhân
   (họ tên, ngày sinh, số CCCD, địa chỉ, số điện thoại). Khai đúng — sai thông tin
   thì tên miền có thể bị thu hồi.
4. **Xác thực** qua email hoặc số điện thoại.
5. **Chờ duyệt.** Thường trong vòng 24 giờ.
6. **Trỏ tên miền về trang web.** Với repo này, cách nhanh nhất là bật GitHub Pages
   rồi trỏ bản ghi DNS về đó (xem phần C).

### Bảng kết quả — điền sau khi đăng ký

| Mục | Nội dung |
|-----|----------|
| Tên miền đã đăng ký | `__________.id.vn` |
| Nhà đăng ký | ☐ P.A Việt Nam ☐ Mắt Bão |
| Ngày đăng ký | |
| Ngày hết hạn | |
| Ảnh chụp màn hình | `screenshots/domain-*.png` |

---

## Phần B — Git & GitHub

### Tài liệu đã đọc

| Nguồn | Đường dẫn |
|-------|-----------|
| CodeLearn — Git & GitHub từ cơ bản đến nâng cao (P1) | https://codelearn.io/sharing/git-github-tu-co-ban-den-nang-cao-p1 |
| GitHub Docs — About GitHub and Git | https://docs.github.com/en/get-started/start-your-journey/about-github-and-git |

### Tóm tắt những gì cần nắm

**Git khác GitHub ở chỗ nào?**
Git là phần mềm quản lý phiên bản chạy trên máy mình — nó ghi lại lịch sử thay đổi
của mã nguồn. GitHub là dịch vụ lưu trữ kho Git trên mạng, thêm phần cộng tác
(pull request, issue, review). Không có GitHub thì Git vẫn chạy bình thường.

**Ba vùng của Git:**

```
Thư mục làm việc  →  Vùng chờ (staging)  →  Kho (repository)
   (sửa file)          git add                 git commit
```

**Các lệnh dùng trong bài này:**

| Lệnh | Tác dụng |
|------|----------|
| `git init` | Khởi tạo kho Git trong thư mục hiện tại |
| `git status` | Xem file nào đã sửa, file nào đang chờ commit |
| `git add <file>` | Đưa thay đổi vào vùng chờ |
| `git commit -m "..."` | Ghi thay đổi thành một mốc lịch sử |
| `git log --oneline` | Xem lịch sử commit dạng rút gọn |
| `git branch <tên>` | Tạo nhánh mới |
| `git switch <tên>` | Chuyển sang nhánh khác |
| `git remote add origin <url>` | Gắn kho trên máy với kho trên GitHub |
| `git push -u origin <nhánh>` | Đẩy nhánh lên GitHub lần đầu |

**Nhánh (branch) để làm gì?**
Mỗi nhánh là một dòng lịch sử độc lập. Trong bài tập này mỗi bài được đặt trên một
nhánh riêng để giảng viên xem từng bài mà không bị lẫn, còn nhánh chính gộp cả ba.

### Cách tổ chức repo của bài tập này

| Nhánh | Nội dung |
|-------|----------|
| `main` | Gộp cả 3 bài: `01-domain-git/`, `02-portfolio-card/`, `03-landing-page/` |
| `exercise1.1` | Riêng Exercise 1 |
| `exercise1.2` | Riêng Exercise 2 — Portfolio Card |
| `exercise1.3` | Riêng Exercise 3 — Landing Page |

Repo: https://github.com/Chuanbico/CN-Web

---

## Phần C — Ghép hai phần lại: đưa trang lên tên miền vừa đăng ký

Sau khi có tên miền, có thể cho trang Portfolio Card chạy thật trên đó:

1. Trong repo GitHub, vào **Settings → Pages**, chọn nhánh `main`, thư mục `/ (root)`.
   GitHub sẽ cấp địa chỉ dạng `https://chuanbico.github.io/CN-Web/`.
2. Trong **Settings → Pages → Custom domain**, nhập tên miền đã đăng ký.
3. Về trang quản lý DNS của nhà đăng ký, thêm bản ghi:

   | Loại | Tên | Giá trị |
   |------|-----|---------|
   | CNAME | `www` | `chuanbico.github.io` |
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |

4. Chờ DNS cập nhật (vài phút tới vài giờ), sau đó bật **Enforce HTTPS**.

> Bốn địa chỉ IP ở trên là của GitHub Pages. Nên kiểm tra lại tại
> https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
> phòng khi GitHub thay đổi.
