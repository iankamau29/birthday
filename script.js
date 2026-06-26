// ==============================
// Typing Message
// ==============================

const message = `Happy Birthday to the most beautiful girl in my life. ❤️

Today is all about celebrating YOU.

I hope your day is filled with laughter,
love,
happiness,
and unforgettable memories.

Thank you for making my world brighter every single day.

You truly are one of the best things that has ever happened to me.

I love you more than words can ever express.

Happy Birthday, my love. ❤️`;

const typing = document.getElementById("typing");
let index = 0;

function typeWriter() {
    if (index < message.length) {
        typing.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeWriter, 35);
    }
}

typeWriter();


// ==============================
// Open Surprise
// ==============================

const startBtn = document.getElementById("startBtn");
const content = document.getElementById("content");
const music = document.getElementById("music");

startBtn.addEventListener("click", () => {

    content.style.display = "block";

    document.querySelector(".letter").style.display = "block";

    content.scrollIntoView({
        behavior: "smooth"
    });

    music.play().catch(()=>{});

});


// ==============================
// Floating Hearts
// ==============================

function createHeart(){

    const heart = document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*30)+"px";

    heart.style.animationDuration=(5+Math.random()*4)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },9000);

}

setInterval(createHeart,300);


// ==============================
// Cake
// ==============================

const cakeBtn=document.getElementById("cakeBtn");

const cake=document.getElementById("birthdayCake");

cakeBtn.addEventListener("click",()=>{

cake.innerHTML="🎂";

cakeBtn.innerHTML="🎉 Wish Granted!";

});


// ==============================
// Relationship Counter
// ==============================

// CHANGE THIS DATE
const relationshipDate = new Date("2023-04-01");

function updateCounter(){

const today=new Date();

const difference=today-relationshipDate;

const days=Math.floor(difference/(1000*60*60*24));

document.getElementById("counter").innerHTML=

days+" Days ❤️";

}

updateCounter();


// ==============================
// Fireworks
// ==============================

const canvas=document.getElementById("canvas");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

});

class Particle{

constructor(x,y){

this.x=x;

this.y=y;

this.size=Math.random()*3+2;

this.speedX=(Math.random()-0.5)*8;

this.speedY=(Math.random()-0.5)*8;

this.life=100;

}

update(){

this.x+=this.speedX;

this.y+=this.speedY;

this.life--;

}

draw(){

ctx.beginPath();

ctx.arc(this.x,this.y,this.size,0,Math.PI*2);

ctx.fillStyle=`hsl(${Math.random()*360},100%,70%)`;

ctx.fill();

}

}

let particles=[];

function explode(){

const x=Math.random()*canvas.width;

const y=Math.random()*canvas.height/2;

for(let i=0;i<100;i++){

particles.push(new Particle(x,y));

}

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach((particle,index)=>{

particle.update();

particle.draw();

if(particle.life<=0){

particles.splice(index,1);

}

});

requestAnimationFrame(animate);

}

animate();

document.getElementById("fireworksBtn").addEventListener("click",()=>{

explode();

setTimeout(explode,400);

setTimeout(explode,800);

setTimeout(explode,1200);

setTimeout(explode,1600);

});


// ==============================
// Image Click Effect
// ==============================

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("click",()=>{

img.style.transform="scale(1.2)";

setTimeout(()=>{

img.style.transform="scale(1)";

},300);

});

});
window.addEventListener("load", () => {

setTimeout(() => {

document
.getElementById("loader")
.classList.add("hide");

},1500);

});
const progress=document.getElementById("progress");

window.addEventListener("scroll",()=>{

const scrollTop=window.scrollY;

const docHeight=document.documentElement.scrollHeight-window.innerHeight;

const progressWidth=(scrollTop/docHeight)*100;

progress.style.width=progressWidth+"%";

});

// ==============================
// Console Message
// ==============================

console.log("❤️ Happy Birthday ❤️");
