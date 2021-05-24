console.log('Add validation!');


// 1. Add the ability to show the user the total cost of their parking when they click the "Make Reservation" button.
// 1a. Make a variable of #submit-button.




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

const date = new Date()

let dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const dayName = dayOfWeek[date.getDay()] // Thu
let weekendDays = dayOfWeek.filter(weekendDay => weekendDay.match(/S/))
let weekDays = dayOfWeek.filter(weekDays => !weekDays.match(/S/))
let currentDate = dayName
console.log(currentDate)


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
  } else {
    document.querySelector('#name-field').classList.add('input-valid')
  }
}

function validateCarInfo() {
  if (carYear.value <= 1900) {
    document.querySelector('#car-field').classList.add('input-invalid')
  } else if (carMake.value === "" || carModel.value === "") {
    document.querySelector('#car-field').classList.add('input-invalid')
  } else {
    document.querySelector('#car-field').classList.add('input-valid')
  }
}

function dateStartPark() {
if (startDate.value === "") {
    document.querySelector('#start-date-field').classList.add('input-invalid')
  } else {
    document.querySelector('#start-date-field').classList.add('input-valid')
 }  
}

function validateDays() {
  if (numberOfDays.value === "") {
    // console.log('no input')
    // console.log('inside validateDays')
  document.querySelector('#days-field').classList.add('input-invalid')
  document.querySelector('#days-field').appendChild(error).innerHTML = 'This field needs numbers, you dolt.'
  } else if (numberOfDays.value < 1 || numberOfDays.value > 30) {
    document.querySelector('#days-field').classList.add('input-invalid')
    document.querySelector('#days-field').appendChild(error).innerHTML = 'This field requires numbers between 1-30.'
  } else {
    document.querySelector('#days-field').classList.add('input-valid')
    total.innerText = '$' + numberOfDays.value * 5
  }
}

function validateCardNumber(number) {
  if (creditCard.value === "") {
    document.querySelector('#credit-card-field').classList.add('input-invalid')
  } else {
    document.querySelector('#credit-card-field').classList.add('input-valid')
  }
}


function cvvNumber() {
  if (cvv.value >= 100 && cvv.value <= 999) {
    document.querySelector('#cvv-field').classList.add('input-valid')  
  } else {
    document.querySelector('#cvv-field').classList.add('input-invalid')
  }
}

function cardExpiration() {
  if (expiration.value === "") {
    document.querySelector('#expiration-field').classList.add('input-invalid')
  } else {
    document.querySelector('#expiration-field').classList.add('input-valid')
  }
}

// let formIsValid;

