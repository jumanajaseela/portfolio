let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  });
});

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


  const works = document.querySelectorAll('.work');
  works.forEach(work => {
    work.addEventListener('click', () => {
      work.classList.toggle('active');
    });
  });


   const toggleBtn = document.getElementById("theme-toggle");
  const icon = toggleBtn.querySelector("i");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    // Icon toggle
    if (document.body.classList.contains("light-mode")) {
      icon.classList.replace("bx-moon", "bx-sun");
    } else {
      icon.classList.replace("bx-sun", "bx-moon");
    }
  });
