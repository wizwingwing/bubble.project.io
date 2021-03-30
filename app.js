function createBubble() {
  const section = document.querySelector("section");
  const createElement = document.createElement("span");
  var size = Math.random() * 100;

  createElement.style.width = 30 + size + "px";
  createElement.style.height = 30 + size + "px";
  createElement.style.left = Math.random() * innerWidth + "px";
  section.appendChild(createElement);

  setTimeout(() => {
    createElement.remove();
  }, 4000);
}

setInterval(createBubble, 50);
