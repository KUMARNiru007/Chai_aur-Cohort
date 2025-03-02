const nameInput = document.getElementById('nameInput')
const jobInput = document.getElementById('jobInput')
const ageInput = document.getElementById('ageInput')
const bioInput = document.getElementById('bioInput')

const nameDisplay = document.getElementById('nameDisplay')
const jobDisplay = document.getElementById('jobDisplay')
const ageDisplay = document.getElementById('ageDisplay')
const bioDisplay = document.getElementById('bioDisplay')


nameInput.addEventListener('input', function() {
    nameDisplay.textContent = nameInput.value || 'Not Provided'
})
jobInput.addEventListener('input', function() {
    jobDisplay.textContent = jobInput.value || 'Not Provided'
})
ageInput.addEventListener('input', function() {
    ageDisplay.textContent = ageInput.value || 'Not Provided'
})
bioInput.addEventListener('input', function() {
    bioDisplay.textContent = bioInput.value || 'Not Provided'
})