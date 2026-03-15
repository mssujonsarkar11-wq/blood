```javascript
// slider

let slides=document.querySelectorAll(".slide")
let dots=document.querySelectorAll(".dot")

let index=0

function showSlide(i){

slides.forEach(s=>s.classList.remove("active"))

dots.forEach(d=>d.classList.remove("active"))

slides[i].classList.add("active")

dots[i].classList.add("active")

document.getElementById("slider-count").innerText=(i+1)+" / "+slides.length

}

document.querySelector(".next").onclick=()=>{

index++

if(index>=slides.length) index=0

showSlide(index)

}

document.querySelector(".prev").onclick=()=>{

index--

if(index<0) index=slides.length-1

showSlide(index)

}

setInterval(()=>{

index++

if(index>=slides.length) index=0

showSlide(index)

},5000)


// emergency request

const requests=[

{blood:"O-",name:"Hanufa Begun",location:"Jamalpur",time:"19 মিনিট আগে"},

{blood:"B+",name:"Rabina Begum",location:"Rajbari",time:"27 মিনিট আগে"},

{blood:"A+",name:"Anowar Sorder",location:"Shariatpur",time:"35 মিনিট আগে"}

]

const list=document.getElementById("request-list")

requests.forEach(r=>{

let html=`

<div class="request-item">

<div class="blood-badge">${r.blood}</div>

<div>

<h4>${r.name}</h4>

<p>${r.location}</p>

</div>

<div style="margin-left:auto;font-size:12px">${r.time}</div>

</div>

`

list.insertAdjacentHTML("beforeend",html)

})
```
