function botao() {
  const html = document.documentElement
  /*  if (html.classList.contains("light")) 
  {html.classList.remove("light")} 
    else 
  {html.classList.add("light")} */
  html.classList.toggle("light") /*resumo de tudo que esta emcima*/

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
