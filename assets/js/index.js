window.alert('I am Temitope')

{
  <form id="myForm">
  <label for="input1">Input 1:</label>
  <input type="text" id="input1"><br>
    <label for="input2">Input 2:</label>
    <input type="text" id="input2"><br>
      <label for="input3">Input 3:</label>
      <input type="text" id="input3"><br>
        <button type="submit" id="submitButton">Submit</button>
      </form>
        <div id="results"></div>
 }




        const form = document form = document.querySelector('form');
        const submitBtn = document.querySelector('#submit');
        const resultsDiv = document.querySelector('#results');

submitBtn.addEventListener('click', (event) => {
          event.preventDefault(); // Prevent form submission

        const FirstNameValue = document.querySelector('#FirstName').value;
        const LastNameValue= document.querySelector('#LastName').value;
        const PasswordValue = document.querySelector('#Password').value;
        const text4 = document.querySelector('#text4').value;
        const text5 = document.querySelector('#text5').value;
        const text6 = document.querySelector('#text6').value;

        const text = `${FirstNameValue} ${LastNameValue} ${PasswordValue} ${text4} ${text5} ${text6}`; // Combine all text inputs

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