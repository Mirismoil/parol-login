document.querySelector('.hero-item__img').addEventListener('click', function(){
    document.querySelector(".hero-item__list").classList.toggle('menu-active2');
})
document.querySelector('.hero-item__img2').addEventListener('click', function(){
    document.querySelector(".hero-item__list2").classList.toggle('menu-active2');
})
document.querySelector('.hero-item__img3').addEventListener('click', function(){
    document.querySelector(".hero-item__list3").classList.toggle('menu-active3');
})
document.querySelector('.hero-item__img4').addEventListener('click', function(){
    document.querySelector(".hero-item__list4").classList.toggle('menu-active4');
})
document.querySelector('.hero-item__img5').addEventListener('click', function(){
    document.querySelector(".hero-item__list5").classList.toggle('menu-active5');
})
function timeShover(){
    var timeNow = new Date();
    document.querySelector(".hours").textContent = timeNow.getHours();
    document.querySelector(".minutes").textContent = timeNow.getMinutes();
    document.querySelector(".seconds").textContent = timeNow.getSeconds();
}
setInterval(function(){
    timeShover()
},1000);


function makelogout(){
    storage.removeItem("token");
    window.location.reload();
}

let time = setTimeout(makelogout , 30000);

window.addEventListener("mousemove",(event)=>{
    clearTimeout(time)
    time = setTimeout(makelogout , 30000)
})