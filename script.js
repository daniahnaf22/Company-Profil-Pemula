window.addEventListener("DOMContentLoaded", function () {
  // Home Page
  const homeLink = document.querySelector('a[href="index.html"]');
  homeLink.addEventListener("click", function (event) {
    const confirmLeave = confirm(
      "Apakah Anda yakin ingin pindah ke halaman Home?"
    );
    if (!confirmLeave) {
      event.preventDefault();
    }
  });

  // About Us Page
  const aboutLink = document.querySelector('a[href="about.html"]');
  aboutLink.addEventListener("click", function (event) {
    const confirmLeave = confirm(
      "Apakah Anda yakin ingin pindah ke halaman About Us?"
    );
    if (!confirmLeave) {
      event.preventDefault();
    }
  });

  // Contact Us Page
  const contactLink = document.querySelector('a[href="contact.html"]');
  contactLink.addEventListener("click", function (event) {
    const confirmLeave = confirm(
      "Apakah Anda yakin ingin pindah ke halaman Contact Us?"
    );
    if (!confirmLeave) {
      event.preventDefault();
    }
  });

  // const currentPage = document.querySelector("body").getAttribute("id");
  // if (currentPage === "home") {
  //   alert("Selamat datang di halaman Home!");
  // }

  // window.onbeforeunload = function () {
  //   if (currentPage === "home") {
  //     return confirm("Apakah Anda yakin ingin meninggalkan halaman ini?");
  //   }
  // };
});

// window.addEventListener("load", function () {
//   const currentPage = document.querySelector("body").getAttribute("id");
//   if (currentPage === "home") {
//     alert("Selamat datang di halaman Home!");
//   }
// });
