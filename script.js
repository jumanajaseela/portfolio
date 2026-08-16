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

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector('.navbar a[href*=' + id + ']');
      if (activeLink) activeLink.classList.add('active');
    }
  });
};

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

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const certImages = document.querySelectorAll('.cert-card img');

certImages.forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('active');
    });
});

function closeLightbox(){
    lightbox.classList.remove('active');
}

lightboxClose.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox){
        closeLightbox();
    }
});

document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
        closeLightbox();
    }
});