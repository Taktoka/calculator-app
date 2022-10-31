themeNums = document.querySelectorAll(".theme-num span");
maincontainer = document.querySelector(".main");
toggleIcon = document.querySelector(".theme-tog .toggle");

themeNums.forEach((num) => {
  num.addEventListener("click", (e) => {
    if (num.classList.contains("theme-1")) {
      maincontainer.classList.remove("theme-2");
      maincontainer.classList.remove("theme-3");
      toggleIcon.style.left = "5px";
    }
    if (num.classList.contains("theme-2")) {
      maincontainer.classList.add("theme-2");
      maincontainer.classList.remove("theme-3");
      toggleIcon.style.left = "37%";
    }
    if (num.classList.contains("theme-3")) {
      maincontainer.classList.add("theme-3");
      maincontainer.classList.remove("theme-2");
      toggleIcon.style.left = "70%";
    }
  });
});

keys = document.querySelectorAll(".keypad input");
output = document.querySelector(".screen .output");

keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    switch (e.target.value) {
      case "x":
        output.innerText += "*";
        break;
      case "RESET":
        output.innerText = "";
        break;
      case "DEL":
        let d = output.innerText.slice(0, -1);
        output.innerText = d;
        break;
      case "=":
        try {
          output.innerText = eval(output.innerText);
        } catch {
          output.innerText = "ERROR";
        }
        break;
      default:
        output.innerText += e.target.value;
        break;
    }
  });
});
