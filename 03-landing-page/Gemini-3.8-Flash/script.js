/* ==========================================================================
   VÒNG 3 — JavaScript Gemini trả về, giữ nguyên văn không sửa một dòng nào.
   (Xem AI-LOG.md: các bộ chọn trong file này không khớp với index.html
    mà chính Gemini sinh ra ở vòng 1.)
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Hamburger Menu Toggle
  const menuBtn = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", !isExpanded);
      navMenu.classList.toggle("is-open");
    });
  }

  // 2. Highlight mục đang xem trên Nav & Scroll Reveal
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            const isActive = link.getAttribute("href") === `#${id}`;
            link.classList.toggle("active", isActive);
            link.setAttribute("aria-current", isActive ? "true" : "false");
          });
        }
      });
    },
    { rootMargin: "-30% 0px -60% 0px" } // Kích hoạt khi mục nằm ở nửa trên viewport
  );

  sections.forEach((sec) => navObserver.observe(sec));

  // Fade-in khi cuộn tới
  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // 3. Form Validation (Họ tên & SĐT Việt Nam)
  const form = document.querySelector("#register-form");
  if (!form) return;

  const nameInput = form.querySelector("#full-name");
  const phoneInput = form.querySelector("#phone-number");
  const nameError = form.querySelector("#name-error");
  const phoneError = form.querySelector("#phone-error");

  // Định dạng SĐT VN: Bắt đầu bằng 03, 05, 07, 08, 09 kèm 8 chữ số tiếp theo
  const vnPhoneRegex = /^(03|05|07|08|09)\d{8}$/;

  function validateInput(input, errorElement, condition, message) {
    if (!condition) {
      errorElement.textContent = message;
      input.classList.add("input-error");
      return false;
    }
    errorElement.textContent = "";
    input.classList.remove("input-error");
    return true;
  }

  phoneInput.addEventListener("input", (e) => {
    // Tự động lọc các ký tự không phải số và khoảng trắng/dấu chấm
    e.target.value = e.target.value.replace(/\D/g, "");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameVal = nameInput.value.trim();
    const phoneVal = phoneInput.value.trim();

    const isNameValid = validateInput(
      nameInput,
      nameError,
      nameVal.length >= 2,
      "Vui lòng nhập họ tên hợp lệ (tối thiểu 2 ký tự)."
    );

    const isPhoneValid = validateInput(
      phoneInput,
      phoneError,
      vnPhoneRegex.test(phoneVal),
      "Số điện thoại không hợp lệ (cần 10 chữ số, bắt đầu bằng 03, 05, 07, 08 hoặc 09)."
    );

    if (isNameValid && isPhoneValid) {
      // Thực hiện gửi dữ liệu (AJAX/Fetch)
      form.reset();
      alert("Đăng ký thành công!");
    }
  });
});
