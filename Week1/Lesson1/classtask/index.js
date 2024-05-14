let img = document.querySelector(".img");
let btn = document.querySelector(".btn");


btn.onclick = () => {
  if(img.alt == 'off') {
    img.src = 'https://www.w3schools.com/js/pic_bulbon.gif'
    img.alt = 'on'
    btn.innerHTML = 'Turn off'
  }
  else {
    img.src = 'https://www.w3schools.com/js/pic_bulboff.gif'
    img.alt = 'off'
    btn.innerHTML = 'Turn on'
  }
}