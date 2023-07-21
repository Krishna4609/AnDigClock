const hourEl =document.querySelector('.hour')
const minuteEl =document.querySelector('.minute')
const secondEl =document.querySelector('.second')
const timeEl =document.querySelector('.time')
const dateEl =document.querySelector('.date')
const toggle =document.querySelector('.toggle')
const styletoggle = document.querySelector('.style-toggle')
// Array of days of the week
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
// Array of months
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

styletoggle.addEventListener('click',(e)=>{
    const digital = document.querySelector('.digital-clock')
    const analog = document.querySelector('.clock-container')
    if(e.target.innerHTML == 'Digital Mode'){
        analog.classList.remove('visible')
        digital.classList.add('visible')
        e.target.innerHTML = 'Analog Mode'
    }else{
        digital.classList.remove('visible')
        analog.classList.add('visible')
        e.target.innerHTML = 'Digital Mode'
    }
})

toggle.addEventListener('click',(e)=>{
    const html = document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark');
        toggle.innerHTML = "Dark Mode"
    }else{
        html.classList.add('dark')
        toggle.innerHTML = "Light Mode"
    }
})

function setTime(){
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const hours = time.getHours();
    const hoursForClock = hours % 12
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12? 'PM' : 'AM'
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11,0, 359)}deg)`    
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59,0, 359)}deg)`    
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59,0, 359)}deg)` 
    
    timeEl.innerHTML = `${hoursForClock}:${minutes < 10? `0${minutes}`:minutes} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${time.getDate()}</span> `
}

const scale = (num, in_min,in_max,out_min,out_max) =>{
    return (num-in_min)*(out_max-out_min)/(in_max-in_min)+out_min;
}
setTime()
setInterval(setTime,1000)

  