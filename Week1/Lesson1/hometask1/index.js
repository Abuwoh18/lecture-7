let box = document.querySelector('.box')
let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
let h1 = document.querySelector('.h1')

let cnt = 0
btn1.onclick = () => {
     cnt++
     h1.innerHTML = cnt
     if(cnt>=0) {
          h1.style.color = 'green'
     }
     if(cnt==0) {
          h1.style.color = 'black'
     }
}
btn2.onclick = () => {
     cnt.innerHTML = h1
     h1.innerHTML = '0'
     h1.style.color = 'black'
     cnt = 0
}
btn3.onclick = () => {
     cnt--
     h1.innerHTML = cnt
     if(cnt<0) {
          h1.style.color = 'red'
     }
     if(cnt==0) {
          h1.style.color = 'black'
     }
}
