const calculateBtn =document.getElementById('calculate')
const clearBtn=document.getElementById('clear-all')
const heightValue = document.getElementById('height-value')
const weightValue =document.getElementById('weight-value')
const result=document.getElementById('Result')


function BMIcalculate (height ,weight) {
    
    const heightInMeters = height/100
    const bmi=(weight/(heightInMeters * heightInMeters))
    return bmi.toFixed(2) // round to 2 decimal place
}

function getBMICategory(bmi) {
    if (bmi < 18.5) 
        return 'Underweight';
   else if (bmi >= 18.5 && bmi < 25) 
        return 'Healthy';
    else if (bmi >= 25 && bmi < 30)
        return 'Overweight';
    else
    return 'Obese';
}

calculateBtn.addEventListener('click', () => {
    const height = parseFloat(heightValue.value);
    const weight = parseFloat(weightValue.value)

    if(!height || !weight || height<=0 || weight<=0) {
        resultDiv.textContent ='Please enter valid height and weight'
        return;
    }
    const bmi = BMIcalculate(height ,weight);
    const category = getBMICategory(bmi);
    result.textContent = `Your BMI is ${bmi} (${category})`

})

clearBtn.addEventListener('click', ()=> {
    heightValue.value =''
    weightValue.value=''
    result.textContent=''
})
