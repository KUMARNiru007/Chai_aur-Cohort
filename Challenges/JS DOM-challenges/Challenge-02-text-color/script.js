const colorBtns= document.getElementById('color-btns')
const redBtn = document.getElementById('red-btn')
const greenBtn = document.getElementById('green-btn')
const blueBtn = document.getElementById('blue-btn')
const purpleBtn = document.getElementById('purple-btn')
const resetBtn = document.getElementById('reset-btn')

const heading=document.querySelector('h1')
  
function headingColor(color){
    heading.style.color = color;
}

redBtn.addEventListener('click', function(){
  headingColor('red')
})
greenBtn.addEventListener('click', function(){
  headingColor('rgb(12, 236, 12)')
})
blueBtn.addEventListener('click', function(){
  headingColor('rgb(0, 179, 255)')
})
purpleBtn.addEventListener('click', function(){
  headingColor('rgb(176, 0, 176)')
})
resetBtn.addEventListener('click', function(){
  headingColor('black')
})