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
// date parking must be future. Not Running
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
  document.querySelector('#days-field').classList.add('input-invalid')
  document.querySelector('#days-field').appendChild(error).innerHTML = 'This field requires numbers.'
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

// working on card number validation-- running--thanks to Roan
function validateCardNumber() {
  let regex = new RegExp("^[0-9]{16}$");
  if (!regex.test(creditCard.value)) {
    document.querySelector('#credit-card-field').classList.add('input-invalid')
    formIsValid = false
  } else if (luhnCheck(creditCard.value)){
    document.querySelector('#credit-card-field').classList.add('input-valid')
    formIsValid = true
  }
}
// checks to see if cc number is valid
function luhnCheck(val) {
  var sum = 0;
  for (var i = 0; i < val.length; i++) {
      var intVal = parseInt(val.substr(i, 1));
      if (i % 2 == 0) {
          intVal *= 2;
          if (intVal > 9) {
              intVal = 1 + (intVal % 10);
          }
      }
      sum += intVal;
  }
  return (sum % 10) == 0;
}

// CVV is a valid 3 digit number. Running
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
// Expiration date must not be in the past. Not running
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

// Step 5 musings


// const date = new Date()
// let dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// const dayName = dayOfWeek[date.getDay()] 
// let weekendDays = dayOfWeek.filter(weekendDay => weekendDay.match(/S/))
// let weekDays = dayOfWeek.filter(weekDays => !weekDays.match(/S/))
// let currentDate = dayName
// console.log(currentDate)



