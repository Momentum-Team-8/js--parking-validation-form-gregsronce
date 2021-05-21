console.log('Add validation!');

// CVV must be a three-digit number. 
// This can use the pattern attribute, or custom validation with JavaScript.
// Done in HTML, will try with JavaScript later

// Add the ability to show the user the total cost of their parking when they click the "Make Reservation" button. 
// The div with id "total" should be filled with text showing the cost. 
// This should only occur if the form is valid.
// The cost is $5 per day.

const makeReservation = document.querySelector('#submit-button')
const numberOfDays = document.querySelector('#days-field')
const total = document.querySelector('#total')
let form = document.querySelector('#parking-form')
let formIsValid;

form.addEventListener('input', event => {
    console.log('input captured again!')
})

form.addEventListener('submit', event => {
    event.preventDefault
    if (numberofDays.value === 0) {
    } formIsValid = false
})

makeReservation.addEventListener('click', event => {
     console.log('input captured!')

     total.innerHTML = event.target.numberOfDays
})


 numberOfDays.addEventListener('input', event => {
   
    
})
//total.classList.add('input-field')
//total.appendChild.innerHTML


