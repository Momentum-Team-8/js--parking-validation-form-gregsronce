console.log('Add validation!');

// CVV must be a three-digit number. 
// This can use the pattern attribute, or custom validation with JavaScript.
// Done in HTML, will try with JavaScript later

// 1. Add the ability to show the user the total cost of their parking when they click the "Make Reservation" button.
// 1a. Make a variable of #submit-button.




// Variables 
let nameInput = document.querySelector('#name')
let numberOfDays = document.querySelector('#days')
let submitButton = document.querySelector('#submit-button')
let total = document.querySelector('#total')
let error = document.createElement("div")
let form = document.querySelector('#parking-form')

form.addEventListener('submit', event => {
  event.preventDefault()
  validateDays()
})

// 1d. Make addEventListener using the 'click' event to #submit-button.
submitButton.addEventListener('click', event => {
    console.log('input captured!')
    console.log(event)  
})

function validateDays() {
  if (numberOfDays.value === "") {
    console.log('no input')
    console.log('inside validateDays')
  document.querySelector('#days-field').classList.add('input-invalid')
  document.querySelector('#days-field').appendChild(error).innerHTML = 'This field needs numbers, you dolt.'
  } else if (numberOfDays.value <= 1 || numberOfDays.value >= 30) {
    document.querySelector('#days-field').classList.add('input-invalid')
    document.querySelector('#days-field').appendChild(error).innerHTML = 'This field requires numbers between 1-30.'
  } else {
    document.querySelector('#days-field').classList.add('input-valid')
    total.innerText = '$' + numberOfDays.value * 5
  }
}


// 2. The div with id "total" should be filled with text showing the cost. 


// Make a variable of #total.
// let total = document.querySelector('#total')
 


// 3. This should only occur if the form is valid.


let formIsValid;
function validateInput() {
if (numberOfDays.value === undefined) {
  formIsValid = false
  
 }
}







// document.getElementById(#totalcost).innerHTMl = $ + total
// let total = numberOfDays * 5

//function validate ()
// all the things you need to validate




// step 5 use arrays and map to get the totals
// Look at map method with arrays
// .map is a function within a function (callback function)
//newPets = pets.map(function(pet){
// return _.capitalize(pet)
// })
// only use return with curly braces, if the function is on multiple lines, or if you're not using an arrow function.