const switchBtn=document.getElementById('switch-btn');
const bulb=document.getElementById('bulb-img');
const bulbTag =document.getElementById('bulb-txt')




switchBtn.addEventListener('click',function(){
    if(bulb.querySelector('img').src.includes('off')){ // use .querySelector('img') to get he img tag 
        bulb.querySelector('img').src='./assests/bulb-on.png';
        switchBtn.innerText = 'Turn off';
        document.body.style.backgroundColor='#f5d189';
        bulbTag.style.color='black';
        bulb.classList.add('glow'); // Add glow class when turned on

    }
    else{
        bulb.querySelector('img').src='./assests/bulb-off.png';
        switchBtn.innerText ='Turn on';
        document.body.style.backgroundColor='#454040';
        bulbTag.style.color='#b99507';
        bulb.classList.remove('glow'); // Remove glow class when turned off
    }

   
});