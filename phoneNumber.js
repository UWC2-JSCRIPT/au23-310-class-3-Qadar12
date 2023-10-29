// Create a function testPhoneNumber
// takes in a phoneNumber string in one of these formats:
// '(206) 333-4444'
// '206-333-4444'
// '206 333 4444'
// Returns true if valid, false if not valid

// created my own regex for phone number
const regex = new RegExp(
  "^(\\+?1[ -]?)?(\\(\\d{3}\\)|\\d{3})[ -]?\\d{3}[ -]\\d{4}$"
);

const testPhoneNumber = (str) => regex.test(str);

// Explanation of RegExp
// ^      start of line
// \(     optional start parenthesis
// \d{3}  exactly 3 digit characters
// \)     optional end parenthesis
// [-\s]  one of a space or a dash
// \d{3}  exactly 3 digit characters
// [-\s]  one of a space or a dash
// \d{4}  exactly 4 digit characters
// $      end of line

// check testPhoneNumber
console.log(testPhoneNumber("(206) 333-4444")); // should return true
console.log(testPhoneNumber("(206) 33-4444")); // should return false, missing a digit

// 1. Create a function parsePhoneNumber that takes in a phoneNumber string
// in one of the above formats.  For this, you can *assume the phone number
// passed in is correct*.  This should use a regular expression
// and run the exec method to capture the area code and remaining part of
// the phone number.
// Returns an object in the format {areaCode, phoneNumber}
function parsePhoneNumber(str) {
  const regex = /(\(\d{3}\)|\d{3})[ -]?(\d{3}[ -]\d{4})/;
  const match = str.match(regex);

  return { areaCode: match[1], phoneNumber: match[2] };
}

console.log(parsePhoneNumber("(222) 422-5353"));
// {areaCode: '(222)', phoneNumber: '422-5353'}

console.log(parsePhoneNumber("222 422 5353"));
//{areaCode: '222', phoneNumber: '422 5353'}

console.log(parsePhoneNumber("122-422-5353"));
// {areaCode: '122', phoneNumber: '422-5353'}
