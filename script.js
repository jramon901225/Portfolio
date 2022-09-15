/*variables*/
const menu = document.querySelector(".menu-button");
const links = document.querySelector(".links-container-mobile");

/*interactive menu-button on mobile*/

menu.addEventListener("click", function () {
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
    links.classList.add("none");
    links.classList.remove("fade-in");
  } else {
    menu.classList.add("open");
    links.classList.remove("none");
    links.classList.add("fade-in");
  }
});
