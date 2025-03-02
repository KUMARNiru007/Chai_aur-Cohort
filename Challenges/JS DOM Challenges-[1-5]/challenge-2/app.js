const title = document.getElementById('mainHeading')
const redButton = document.getElementById('redButton')
const greenButton = document.getElementById('greenButton')
const blueButton = document.getElementById('blueButton')
const purpleButton = document.getElementById('purpleButton')
const resetButton = document.getElementById('resetButton')


function headingColor (color) {
    title.style.color = color
}

redButton.addEventListener('click', function(){
    headingColor('#e74c3c')
})

greenButton.addEventListener('click', function(){
    headingColor('#2ecc71')
})

blueButton.addEventListener('click', function(){
    headingColor('#3498db')
})

purpleButton.addEventListener('click', function(){
    headingColor('#9b59b6')
})

resetButton.addEventListener('click', function(){
    headingColor('#34495e')
})
