/* ==========================================================================
   DriveGuard — phần tương tác mà CSS không làm được
   1. Đóng/mở menu 3 gạch trên mobile
   2. Hiệu ứng hiện dần khi cuộn tới (fade-in)
   3. Đánh dấu mục đang xem trên thanh điều hướng
   4. Kiểm tra biểu mẫu đăng ký ngay trên trang
   ========================================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. Menu mobile ---------- */
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');

  if (toggle && nav) {
    var setOpen = function (open) {
      nav.classList.toggle('is-open', open);
      toggle.classList.toggle('is-active', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu');
      // Khoá cuộn nền khi menu đang mở
      document.body.classList.toggle('nav-open', open);
    };

    toggle.addEventListener('click', function () {
      setOpen(!nav.classList.contains('is-open'));
    });

    // Bấm vào một mục thì đóng menu lại
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });

    // Bấm Esc cũng đóng
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setOpen(false);
        toggle.focus();
      }
    });

    // Quay lại desktop thì trả menu về trạng thái mặc định
    window.addEventListener('resize', function () {
      if (window.innerWidth > 860 && nav.classList.contains('is-open')) setOpen(false);
    });
  }

  /* ---------- 2. Hiện dần khi cuộn tới ---------- */
  var revealables = document.querySelectorAll('.reveal');

  if (reduceMotion || !('IntersectionObserver' in window)) {
    // Không hỗ trợ hoặc người dùng tắt chuyển động: hiện luôn, không hoạt hình
    revealables.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);   // hiện một lần là thôi
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealables.forEach(function (el, i) {
      // Lệch nhau một chút để các thẻ trong cùng hàng hiện nối tiếp
      el.style.setProperty('--reveal-delay', (i % 4) * 70 + 'ms');
      observer.observe(el);
    });
  }

  /* ---------- 3. Đánh dấu mục đang xem ---------- */
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav__list a'));
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle('is-current', a.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- 4. Kiểm tra biểu mẫu ---------- */
  var form = document.getElementById('signupForm');
  var note = document.getElementById('formNote');

  if (form && note) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();   // trang demo, không gửi dữ liệu đi đâu

      // Dùng form.elements thay vì form.name: trên HTMLFormElement, `name` là
      // thuộc tính có sẵn, nếu sau này thẻ <form> được đặt name="..." thì
      // form.name sẽ trả về chuỗi chứ không còn trả về ô nhập nữa.
      var nameField = form.elements.namedItem('name');
      var phoneField = form.elements.namedItem('phone');

      var name = nameField.value.trim();
      var phone = phoneField.value.replace(/[\s.\-]/g, '');

      if (name.length < 2) {
        return fail('Bạn nhập giúp họ tên nhé.', nameField);
      }
      // Số di động Việt Nam: 10 số bắt đầu bằng 0, hoặc +84 / 84
      if (!/^(0|\+?84)\d{9}$/.test(phone)) {
        return fail('Số điện thoại chưa đúng định dạng (ví dụ: 0912345678).', phoneField);
      }

      note.textContent = 'Đã ghi nhận. Kỹ thuật viên sẽ gọi lại cho ' + name + ' trong giờ hành chính.';
      note.className = 'signup__note is-ok';
      form.reset();
    });

    function fail(message, field) {
      note.textContent = message;
      note.className = 'signup__note is-error';
      field.focus();
    }
  }
})();
