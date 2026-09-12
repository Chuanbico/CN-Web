# Exercise 1 — Git & GitHub

## 1. Tài liệu tham khảo

| Nguồn | Đường dẫn |
|-------|-----------|
| CodeLearn — Git & GitHub từ cơ bản đến nâng cao (P1) | https://codelearn.io/sharing/git-github-tu-co-ban-den-nang-cao-p1 |
| GitHub Docs — About GitHub and Git | https://docs.github.com/en/get-started/start-your-journey/about-github-and-git |

## 2. Git khác GitHub ở chỗ nào?

**Git** là phần mềm quản lý phiên bản chạy trên máy của mình, ghi lại lịch sử thay
đổi của mã nguồn. **GitHub** là dịch vụ lưu trữ kho Git trên mạng, bổ sung phần
cộng tác (pull request, issue, review). Không có GitHub thì Git vẫn chạy bình thường.

## 3. Ba vùng của Git

```
Thư mục làm việc  ──git add──▶  Vùng chờ (staging)  ──git commit──▶  Kho (repository)
     (sửa file)                                                       │
                                                                 git push
                                                                      ▼
                                                                   GitHub
```

## 4. Các lệnh đã dùng trong bài tập này

| Lệnh | Tác dụng |
|------|----------|
| `git init -b main` | Khởi tạo kho Git, đặt tên nhánh đầu tiên là `main` |
| `git status` | Xem file nào đã sửa, file nào đang chờ commit |
| `git add -A` | Đưa toàn bộ thay đổi vào vùng chờ |
| `git commit -m "..."` | Ghi thay đổi thành một mốc lịch sử |
| `git log --oneline` | Xem lịch sử commit dạng rút gọn |
| `git switch -c <nhánh> main` | Tạo nhánh mới tách từ `main` và chuyển sang nhánh đó |
| `git switch <nhánh>` | Chuyển qua lại giữa các nhánh |
| `git rm -r --cached <thư mục>` | Gỡ thư mục khỏi Git nhưng giữ file trên đĩa |
| `git remote add origin <url>` | Gắn kho trên máy với kho trên GitHub |
| `git push -u origin <nhánh>` | Đẩy nhánh lên GitHub lần đầu và ghi nhớ liên kết |
| `git push -f origin <nhánh>` | Ghi đè nhánh trên GitHub sau khi dựng lại lịch sử |

## 5. Cách tổ chức repo

Mỗi exercise được đặt trên một nhánh riêng, `main` giữ bản gộp đầy đủ:

| Nhánh | Nội dung |
|-------|----------|
| `main` | Cả 3 bài: `01-domain-git/`, `02-portfolio-card/`, `03-landing-page/` |
| `exercise1.1` | Riêng Exercise 1 |
| `exercise1.2` | Riêng Exercise 2 — Portfolio Card |
| `exercise1.3` | Riêng Exercise 3 — Landing Page |

**Lý do tách nhánh:** người chấm mở từng bài độc lập mà không bị lẫn nội dung của
bài khác, còn `main` vẫn xem được toàn bộ.

### Quy trình dựng một nhánh riêng cho từng bài

```bash
# 1. Tạo nhánh mới tách từ main
git switch -c exercise1.2 main

# 2. Gỡ những thư mục không thuộc bài này
git rm -r --cached 01-domain-git 03-landing-page docs
rm -rf 01-domain-git 03-landing-page docs

# 3. Đưa nội dung của bài lên thư mục gốc của nhánh
cd 02-portfolio-card && mv * .. && cd .. && rmdir 02-portfolio-card

# 4. Ghi lại và đẩy lên GitHub
git add -A
git commit -m "Exercise 2: Portfolio Card + nhật ký Vibe coding"
git push -u origin exercise1.2

# 5. Quay về main, dọn sạch thư mục làm việc
git switch main
git checkout -- . && git clean -fd
```

Bước 5 quan trọng: sau khi thao tác xoá/di chuyển file trên nhánh con, thư mục làm
việc còn sót thay đổi. `git checkout -- .` khôi phục file bị xoá, `git clean -fd`
dọn file thừa, để `main` trở lại đúng trạng thái đã commit.

## 6. Đưa trang lên GitHub Pages

Repo chỉ gồm HTML/CSS/JS tĩnh nên cho chạy thật được mà không cần máy chủ riêng:

1. Trong repo GitHub, vào **Settings → Pages**.
2. Ở mục **Source**, chọn nhánh `main`, thư mục `/ (root)`, bấm **Save**.
3. Sau vài phút GitHub cấp địa chỉ dạng `https://chuanbico.github.io/CN-Web/`.
4. Bật **Enforce HTTPS** để trang chạy qua kết nối mã hoá.

Khi đó hai trang của bài tập truy cập được tại:

```
https://chuanbico.github.io/CN-Web/02-portfolio-card/
https://chuanbico.github.io/CN-Web/03-landing-page/Claude-Opus-5/
```

## 7. Mã nguồn

https://github.com/Chuanbico/CN-Web
