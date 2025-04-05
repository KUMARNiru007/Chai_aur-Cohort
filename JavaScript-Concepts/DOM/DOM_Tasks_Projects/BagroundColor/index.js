// function changeBackgroundBlack() {
//     document.body.style.backgroundColor = 'black'
// }

// function changeBackgroundWhite() {
//     document.body.style.backgroundColor = 'white'
// }

//-------Resolve DRY principal-------------------

// function changeBackground(color) {
//     document.body.style.backgroundColor = color ;
// } 

// const darkButton=document.getElementById('dark-mode-button')

// console.log(darkButton)

// darkButton.innerText = 'hashaha' ; --> change the text of the button refered by tyhe id 

// darkButton.addEventListener('click' , function() {
//     console.log('i got clicked');
//     changeBackground('black')
// }) // add click event

// darkButton.addEventListener('click', function() {
//     console.log('storing Dark Mode value in DB')
// }) 

function changeBackground(color) {
    document.body.style.backgroundColor = color ;
} 

const themeButton=document.getElementById('theme-button') //we select the element

themeButton.addEventListener('click' ,() => {
    console.log(document.body.style.backgroundColor);//to ger update
    const CurrentColor = document.body.style.backgroundColor;

    if(!CurrentColor || CurrentColor =='white') // !CurrentColor== No current Color 
    {
        changeBackground('black');
        themeButton.innerText = 'Light Mode';
    } else {
        changeBackground('white');
        themeButton.innerText = ' Dark Mode';
    }

})