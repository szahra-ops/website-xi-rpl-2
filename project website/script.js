// Typing Effect
const text = "setwo.nexus";
let i = 0;
function typing(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}
typing();


// Gallery Popup
const images = document.querySelectorAll(".gallery-img");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const close = document.getElementById("close");

images.forEach(img=>{
  img.addEventListener("click", ()=>{
    popup.style.display = "flex";
    popupImg.src = img.src;
  });
});

close.onclick = ()=> popup.style.display = "none";


// Particle.js Config
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#00eaff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: { enable: true, speed: 2 }
  }
});


// Sound Effect
function playClick(){
  const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
  audio.play();
}

// ============================
//   NAVBAR SEARCH FUNCTION 
// ============================

const searchInput = document.getElementById("searchInput");
const memberGrid = document.querySelector(".member-grid");
const students = document.querySelectorAll(".student-card");

if(searchInput){
  searchInput.addEventListener("keyup", function(){

    let value = this.value.toLowerCase();
    let found = false;

    students.forEach(student => {
      let name = student.dataset.name?.toLowerCase() || "";
      let absen = student.dataset.absen || "";

      if(name.includes(value) || absen.includes(value)){
        student.style.display = "flex";
        found = true;
      } else {
        student.style.display = "none";
      }
    });

    // Aktifkan mode list kalau sedang search
    if(value !== ""){
      memberGrid.classList.add("list-view");
    } else {
      memberGrid.classList.remove("list-view");
      students.forEach(student=>{
        student.style.display = "block";
      });
    }

  });
}
