//Fuction to calculate tax

function calculateTax(amount) {
  const tax = (amount * 10) / 100;
  return tax;
}

//Function to Convert text to UpperCase

function convertToUpperCase(text) {
  const result = text.toUpperCase();
  return result;
}

//Function to Find Maximum Number

function findMaximum(num1, num2) {
  const maxNum = Math.max(num1, num2);
  return maxNum;
}

//Function to check whether a word is Palindrome

function isPalindrome(word) {
  if (word === word.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
}

//Function to Calculate Discount Price

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discountPrice = (originalPrice * discountPercentage) / 100;
  const priceAfterDiscount = originalPrice - discountPrice;
  return priceAfterDiscount;
}




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };