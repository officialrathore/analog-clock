
const hrEle = document.querySelector(".hr")
const minEle = document.querySelector(".min")
const secEle = document.querySelector(".sec")



setInterval(()=>{
    let date = new Date()

    hr = date.getHours()*30
    min = date.getMinutes()*6
    sec = date.getSeconds()*6

    hrEle.style.transform = `rotateZ(${(hr) + min/12}deg)`
    minEle.style.transform = `rotateZ(${min}deg)`
    secEle.style.transform = `rotateZ(${sec}deg)`

},1000)


setInterval(() => {
    
    let currentDate = new Date();
    let currentTime = currentDate.toLocaleTimeString();
    let currentDateText = currentDate.toLocaleDateString();
    
    document.querySelector("#text").innerHTML = `${currentDateText} ${currentTime}`;
}, 1000);
