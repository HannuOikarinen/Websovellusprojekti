document.getElementById('button').addEventListener('click', displayPopupMessage);

function displayPopupMessage() {
  var cardNumberField = document.getElementById('card-number');
  var cardNumber = cardNumberField.value;

  var nameField = document.getElementById('card-holder');
  var name = nameField.value;
  
  var expiryField = document.getElementById('expiry-date');
  var expiry = expiryField.value;
  
  var cvvField = document.getElementById('cvv');
  var cvv = cvvField.value;
  
  // Regular expression to check if the card number contains only numbers
  var numberPattern = /^[0-9\s]+$/;
  
  if (!cardNumber || !name || !expiry || !cvv) {
    alert('Please fill in all the fields.');
    return;
  }

  if (!numberPattern.test(cardNumber)) {
    alert('Invalid card number. Please enter only numbers.');
    return;
  }
  
  if (luhnCheck(cardNumber)) {
    alert('You should never submit your card information this easily');
  } else {
    alert('Invalid card number. Please enter a valid card number.');
  }
}

function luhnCheck(cardNumber) {
  var sum = 0;
  var numDigits = cardNumber.length;
  var parity = numDigits % 2;
  
  for (var i = 0; i < numDigits; i++) {
    var digit = parseInt(cardNumber.charAt(i));
    
    if (i % 2 === parity) {
      digit *= 2;
      
      if (digit > 9) {
        digit -= 9;
      }
    }
    
    sum += digit;
  }
  
  return sum % 10 === 0;
}
