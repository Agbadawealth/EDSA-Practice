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
      <p>Number  of a Character: ${stringLength} </p>
      <p>Word Count: ${wordCount} </p>
        <p>Reversed String: ${reversedString} </p>
          <p>Upper Case: ${upperCase} </p>
          <p>Lower Case: ${lowerCase} </p>
  `



   testResult.innerHTML = display

 });


// const form = document.querySelector('form');
// const submitBtn = document.querySelector('#submit-btn');
// const resultsDiv = document.querySelector('#results');

// submitBtn.addEventListener('click', (event) => {
//   event.preventDefault(); // prevent form from submitting

//   // get input field values
//   const input1 = document.querySelector('#input1').value;
//   const input2 = document.querySelector('#input2').value;
//   const input3 = document.querySelector('#input3').value;
//   const input4 = document.querySelector('#input4').value;
//   const input5 = document.querySelector('#input5').value;
//   const input6 = document.querySelector('#input6').value;

//   // perform operations on the input strings
//   const charCount = input1.length + input2.length + input3.length + input4.length + input5.length + input6.length;
//   const wordCount = `${input1} ${input2} ${input3} ${input4} ${input5} ${input6}`.split(' ').filter(word => word !== '').length;
//   const reversedString = `${input6} ${input5} ${input4} ${input3} ${input2} ${input1}`.trim();
//   const upperCaseString = `${input1} ${input2} ${input3} ${input4} ${input5} ${input6}`.toUpperCase();
//   const lowerCaseString = `${input1} ${input2} ${input3} ${input4} ${input5} ${input6}`.toLowerCase();

//   // display results in the HTML page
//   resultsDiv.innerHTML = `
//           <p>Character count: ${charCount}</p>
//           <p>Word count: ${wordCount}</p>
//           <p>Reversed string: ${reversedString}</p>
//           <p>Uppercase string: ${upperCaseString}</p>
//           <p>Lowercase string: ${lowerCaseString}</p>
//         `;
// });