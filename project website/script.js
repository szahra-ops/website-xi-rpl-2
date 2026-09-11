// ============================
// TYPING EFFECT
// ============================

const text = "setwo.nexus";
let i = 0;

function typing() {
  const typingElement = document.getElementById("typing");

  if (typingElement && i < text.length) {
    typingElement.innerHTML += text.charAt(i);
    i++;

    setTimeout(typing, 80);
  }
}

typing();


// ============================
// ELEMENTS
// ============================

const home = document.getElementById("home");
const about = document.getElementById("about");
const members = document.getElementById("members");
const contact = document.getElementById("contact");

const homeBtn = document.getElementById("homeBtn");
const memberBtn = document.getElementById("memberBtn");
const contactBtn = document.getElementById("contactBtn");
const homeLogo = document.getElementById("homeLogo");

const searchInput = document.getElementById("searchInput");
const memberGrid = document.querySelector(".member-grid");
const students = document.querySelectorAll(".student-card");


// ============================
// SHOW HOME
// ============================

function showHome() {
  home.style.display = "flex";
  about.style.display = "none";
  members.style.display = "none";
  contact.style.display = "none";

  homeBtn.classList.add("active");
  memberBtn.classList.remove("active");
  contactBtn.classList.remove("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// ============================
// SHOW MEMBERS
// ============================

function showMembers() {
  home.style.display = "none";
  about.style.display = "none";
  members.style.display = "block";
  contact.style.display = "none";

  homeBtn.classList.remove("active");
  memberBtn.classList.add("active");
  contactBtn.classList.remove("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// ============================
// SHOW CONTACT
// ============================

function showContact() {
  home.style.display = "none";
  about.style.display = "none";
  members.style.display = "none";
  contact.style.display = "flex";

  homeBtn.classList.remove("active");
  memberBtn.classList.remove("active");
  contactBtn.classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// ============================
// NAVIGATION
// ============================

homeBtn.addEventListener("click", function(event) {
  event.preventDefault();
  showHome();
});

homeLogo.addEventListener("click", function(event) {
  event.preventDefault();
  showHome();
});

memberBtn.addEventListener("click", function(event) {
  event.preventDefault();
  showMembers();
});

contactBtn.addEventListener("click", function(event) {
  event.preventDefault();
  showContact();
});


// ============================
// SEARCH
// ============================

if (searchInput) {

  searchInput.addEventListener("input", function() {

    const value = this.value
      .toLowerCase()
      .trim();

    if (value !== "") {

      showMembers();

      memberGrid.classList.add("list-view");

    } else {

      memberGrid.classList.remove("list-view");

    }


    students.forEach(student => {

      const name =
        student.dataset.name?.toLowerCase() || "";

      const absen =
        student.dataset.absen || "";

      const match =
        name.includes(value) ||
        absen.includes(value);

      student.style.display = match ? "" : "none";

    });

  });

}


// ============================
// FULLSCREEN PHOTO
// ============================

const images =
  document.querySelectorAll(".member-card img");

const popup =
  document.getElementById("popup");

const popupImg =
  document.getElementById("popup-img");

const close =
  document.getElementById("close");


images.forEach(img => {

  img.addEventListener("click", function() {

    popupImg.src = this.src;
    popupImg.alt = this.alt;

    popup.classList.add("show");

    document.body.style.overflow = "hidden";

  });

});


// ============================
// CLOSE POPUP
// ============================

function closePopup() {

  popup.classList.remove("show");

  popupImg.src = "";

  document.body.style.overflow = "";

}

close.addEventListener("click", closePopup);


// Klik area luar foto untuk tutup

popup.addEventListener("click", function(event) {

  if (event.target === popup) {
    closePopup();
  }

});


// ============================
// ESC KEY
// ============================

document.addEventListener("keydown", function(event) {

  if (event.key === "Escape") {
    closePopup();
  }

});


// ============================
// SOUND EFFECT
// ============================

function playClick() {

  const audio = new Audio(
    "https://www.fesliyanstudios.com/play-mp3/387"
  );

  audio.play().catch(() => {});

}


// ============================
// INITIAL STATE
// ============================

showHome();
