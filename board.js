/**

 * This program asks user to enter the length and width, and it calculates 
 * the height so that the result is exactly 1 board foot, which is 
 * 144 inches^3
 * 
 * @author Wajd Mariam <wajd.mariam@mths.ca>
 *
 * Created on : 2020/12/1
 */
 
// Imports prompt
const prompt = require('prompt-sync')({sigint: true});

// This function calculates the height of 1 board foot 
// and returns it to the main function.
function boardFoot (length, width) {
  
  // Declaring variables and constants: 
  const Volume = 144;
  let height = 0;
  
  // Calculating the height of 1 board foot using the given length and width:  
  height = (Volume / (length * width));
  
  // Returning height:
  return height;
}


// Try Catch Statement:
try {
  // Declaring variables:
  let length = 0;
  let width = 0;
  let number = 0;
  
  // User Input:
  // Length Input:
  length = prompt(`Enter length: `);
  console.log (``);
  // Width Input:
  width = prompt(`Enter Width: `);
  console.log (``);

  // Process
  // Checking if input received isn't 0:
  if ((length == 0) || (width == 0)) {
    console.log (`You can't have a length or width of 0 inches`);
  } else {
    // Calling BoardFoot Function:
    number = boardFoot(length, width);
    // Output:
    console.log (`The height of 1 board foot with the given dimensions is ${number} inches`);
  }
    
// Error Output: 
} catch(err) {
    console.log (`An error occurred`);
  }
