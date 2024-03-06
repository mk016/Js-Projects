function calculateDays() {
    // Get the selected birthday date from the input field
    const birthdayDate = new Date(document.getElementById('birthdayDate').value);
  
    // Get the current date
    const currentDate = new Date();
  
    // Set the current year for the birthday date
    birthdayDate.setFullYear(currentDate.getFullYear());
  
    // If the birthday has already occurred this year, set it for next year
    if (currentDate > birthdayDate) {
      birthdayDate.setFullYear(currentDate.getFullYear() + 1);
    }
  
    // Calculate the difference in days
    const differenceInTime = birthdayDate.getTime() - currentDate.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
  
    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Days until your birthday: ${differenceInDays}`;
  }
  