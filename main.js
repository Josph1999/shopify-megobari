const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    const panel = this.nextElementSibling;
    if (panel.style.display === "flex") {
      panel.style.display = "none";
    } else {
      panel.style.display = "flex";
      acc.style.width = "652px";
      acc.style.borderRadius = "9px 9px 0px 0px";
      panel.style.borderTop = "none"
    }
  });
}

