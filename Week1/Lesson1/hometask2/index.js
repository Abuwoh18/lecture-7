let first = document.querySelector(".first");
let box = document.querySelector('.box')
let second = document.querySelector(".second");
let btn = document.querySelector(".btn");
let text = document.querySelector(".text");





btn.onclick = () => {
    if(Number(first.value)>Number(second.value)){
        text.innerHTML = `Адади калон ин ${Number(first.value)} аст`
    }
    else if(Number(first.value) == Number(second.value)) {
        text.innerHTML = 'Ададхо ба якдигар монанданд'
    }
    else {
        text.innerHTML = `Адади калон ин ${Number(second.value)} аст`
    }
}