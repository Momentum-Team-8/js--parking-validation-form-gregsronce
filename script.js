console.log('Add validation!');

// Variables 
let form = document.querySelector('#parking-form')
let error = document.createElement("div")
let nameInput = document.querySelector('#name')
let carInfo = document.querySelector('#car-field')
let carYear = document.querySelector('#car-year')
let carMake = document.querySelector('#car-make')
let carModel = document.querySelector('#car-model')
let startDate = document.querySelector('#start-date')
let numberOfDays = document.querySelector('#days')
let creditCard = document.querySelector('#credit-card')
let cvv = document.querySelector('#cvv')
let expiration = document.querySelector('#expiration')
let submitButton = document.querySelector('#submit-button')
let total = document.querySelector('#total')
let formIsValid;
const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth()


// const date = new Date()
// let dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// const dayName = dayOfWeek[date.getDay()] // Thu
// let weekendDays = dayOfWeek.filter(weekendDay => weekendDay.match(/S/))
// let weekDays = dayOfWeek.filter(weekDays => !weekDays.match(/S/))
// let currentDate = dayName
// console.log(currentDate)
// start date needs to be 

form.addEventListener('submit', event => {
  event.preventDefault()
  validateName()
  validateCarInfo()
  dateStartPark()
  validateDays()
  validateCardNumber()
  cvvNumber()
  cardExpiration()
})

// 1d. Make addEventListener using the 'click' event to #submit-button.
submitButton.addEventListener('click', event => {
    console.log(event)  
})

// startDate.addEventListener('input', event => {
//   console.log(event)
//   console.log(startDate.value) 
// })


function validateName() {
  if (nameInput.value === "") {
    document.querySelector('#name-field').classList.add('input-invalid')
    formIsValid = false;
  } else {
    document.querySelector('#name-field').classList.add('input-valid')
    formIsValid = true
  }
}
// Car year must be after 1900 and not in the future. Running.
function validateCarInfo() {
  if (carYear.value <= 1900 || carYear.value > currentYear) {
    document.querySelector('#car-field').classList.add('input-invalid')
  } else if (carMake.value === "" || carModel.value === "") {
    document.querySelector('#car-field').classList.add('input-invalid')
    formIsValid = false
  } 
  else {
    document.querySelector('#car-field').classList.add('input-valid')
    formIsValid = true
  }
}
// date parking must be future
function dateStartPark() {
if (startDate.value === "") {
    document.querySelector('#start-date-field').classList.add('input-invalid')
    formIsValid = false
  } else {
    document.querySelector('#start-date-field').classList.add('input-valid')
    formIsValid = true
 }  
}
// step 4 completed
function validateDays() {
  if (numberOfDays.value === "") {
    // console.log('no input')
    // console.log('inside validateDays')
  document.querySelector('#days-field').classList.add('input-invalid')
  document.querySelector('#days-field').appendChild(error).innerHTML = 'This field needs numbers, you dolt.'
  } else if (numberOfDays.value < 1 || numberOfDays.value > 30) {
    document.querySelector('#days-field').classList.add('input-invalid')
    document.querySelector('#days-field').appendChild(error).innerHTML = 'This field requires numbers between 1-30.'
    formIsValid = false
  } else {
    document.querySelector('#days-field').classList.add('input-valid')
    total.innerText = '$' + numberOfDays.value * 5
    formIsValid = true
  }
}

// working on card number validation
  function validateCardNumber(number) {
  if (creditCard.value === "") {
    document.querySelector('#credit-card-field').classList.add('input-invalid')
    formIsValid = false
  } else {
    document.querySelector('#credit-card-field').classList.add('input-valid')
    formIsValid = true
  }
}

function cvvNumber() {
  if (cvv.value >= 100 && cvv.value <= 999) {
    document.querySelector('#cvv-field').classList.add('input-valid')
    formIsValid = true  
  } else {
    document.querySelector('#cvv-field').classList.add('input-invalid')
    formIsValid = false
  }
}
// Expiration date must be a valid month and year and in the correct format. Running.
// Expiration date must not be in the past.
function cardExpiration() {
  let regex = new RegExp('^(0[1-9]|1[0-2])\/?([0-9]{2})$')
  if (!regex.test(expiration.value)) {
    document.querySelector('#expiration-field').classList.add('input-invalid')
    formIsValid = false
  } else {
    document.querySelector('#expiration-field').classList.add('input-valid')
    formIsValid = true
  }
} 



