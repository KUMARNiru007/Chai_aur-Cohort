const switchBtn = document.getElementById('toggleButton')
const statusOfBulb = document.getElementById('status')
const bulb = document.getElementById('bulb')
const body = document.getElementById('body')

let switchOff = true

switchBtn.addEventListener('click', function(){

    if(switchOff){
        bulb.classList.remove('off');
        body.classList.add('dark-mode');
        switchBtn.innerText = 'Turn Off'
        statusOfBulb.innerText = 'Status: On';
        switchOff = false;
    } else {
        bulb.classList.add('off');
        body.classList.remove('dark-mode');
        switchBtn.innerText = 'Turn On'
        statusOfBulb.innerText = 'Status: Off';
        switchOff = true;
    }
})