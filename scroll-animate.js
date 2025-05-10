// scroll-animate.js

document.addEventListener("DOMContentLoaded", function () {
    const fadeElems = document.querySelectorAll(".scroll-fade");
  
    function onScroll() {
      const windowBottom = window.innerHeight * 0.9;
  
      fadeElems.forEach((el, index) => {
        const elTop = el.getBoundingClientRect().top;
  
        if (elTop < windowBottom && !el.classList.contains("show")) {
          // Tambahkan delay berdasarkan urutan elemen
          setTimeout(() => {
            el.classList.add("show");
          }, index * 150); // 150ms jeda antar elemen
        }
      });
    }
  
    window.addEventListener("scroll", onScroll);
    onScroll(); // Run on initial load
  });
  