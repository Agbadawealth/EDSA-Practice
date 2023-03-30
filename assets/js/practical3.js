const emailInput = document.querySelector("#email-input");
const formInput = document.querySelector("#form-input");
const testResult = document.querySelector("#text-result")

formInput.addEventListener("submit", function (event) {

    event.preventDefault();

    const string = emailInput.value;
    const stringLength = string.length;
    const wordCount = string.split(' ').filter(Boolean).length;
    const reversedString = string.split('').reverse().join('');
    const upperCase = string.toUpperCase();
    const lowerCase = string.toLowerCase();

    

    const display = `
     <p>Number  of a Char: ${stringLength} </p>
      <p>Word Count: ${wordCount} </p>
       <p>Reversed String: ${reversedString} </p>
         <p>Upper Case: ${upperCase} </p>
          <p>Lower Case: ${lowerCase} </p>
 `

    testResult.innerHTML = display

});


// const form = document.getElementById('myForm');
// const submitButton = document.getElementById('submitButton');
// const resultsDiv = document.getElementById('results');

// submitButton.addEventListener('click', function(event) {
//   event.preventDefault(); // prevent form submission
  
//   // Get the input values
//   const FirstNameValue = document.getElementById('FirstName').value;
//   const LastNameValue = document.getElementById('LastName').value;
//   const PasswordValue = document.getElementById('Pasword').value;
  
//   // Perform the operations on the input string
//   const charCount = FirstNameValue.length + LastNameValue.length + PasswordValue.length;
//   const wordCount = (input1Value + ' ' + input2Value + ' ' + input3Value).split(/\s+/).length;
//   const reversedString = input1Value.split('').reverse().join('') + input2Value.split('').reverse().join('') + input3Value.split('').reverse().join('');
//   const upperCaseString = input1Value.toUpperCase() + input2Value.toUpperCase() + input3Value.toUpperCase();
//   const lowerCaseString = input1Value.toLowerCase() + input2Value.toLowerCase() + input3Value.toLowerCase();
  
//   // Display the results in the HTML page
//   resultsDiv.innerHTML = `
//     <p>Number of characters: ${charCount}</p>
//     <p>Number of words: ${wordCount}</p>
//     <p>Reversed string: ${reversedString}</p>
//     <p>Uppercase string: ${upperCaseString}</p>
//     <p>Lowercase string: ${lowerCaseString}</p>
//   `;
// });





const form = document.querySelector('form');
      const submitBtn = document.querySelector('#submit');
      const resultsDiv = document.querySelector('#results');
      
      submitBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent form submission
        
        const FirstName = document.querySelector('#FirstName').value;
        const Password = document.querySelector('#Password').value;
        const text3 = document.querySelector('#text3').value;
        const text4 = document.querySelector('#text4').value;
        const text5 = document.querySelector('#text5').value;
        const text6 = document.querySelector('#text6').value;
        
        const text = `${FirstName} ${Password} ${text3} ${text4} ${text5} ${text6}`; // Combine all text inputs
        
        const charCount = text.length;
        const wordCount = text.split(' ').filter(Boolean).length;
        const reversedText = text.split('').reverse().join('');
        const uppercaseText = text.toUpperCase();
        const lowercaseText = text.toLowerCase();
        
        resultsDiv.innerHTML = `
          <p>Number of characters: ${charCount}</p>
          <p>Number of words: ${wordCount}</p>
          <p>Reversed text: ${reversedText}</p>
          <p>Uppercase text: ${uppercaseText}</p>
          <p>Lowercase text: ${lowercaseText}</p>
        `;
      });