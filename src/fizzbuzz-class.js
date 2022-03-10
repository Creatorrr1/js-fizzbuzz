// TODO: Write your function in this file

class FizzBuzz {
  // constructor(lower, upper) {
  //   this.lower = lower;
  //   this.upper = upper;
  //   console.log("in the constructor");
  // }

  fizzBuzz(lower, upper) {
    const fbArr = [];
    for (let i = lower; i <= upper; i++) {
      if (i % 3 === 0 && i % 5 === 0) fbArr.push("FizzBuzz");
      else if (i % 3 === 0) fbArr.push("Fizz");
      else if (i % 5 === 0) fbArr.push("Buzz");
      else {
        fbArr.push(i);
      }
    }
    // console.log(fbArr)
    return fbArr;
  }
}

// fizz is displayed when the integer is a multiple of 3
// buzz is displayed when the integer is a multiple of 5
// fizzbuzz is displayed when the integer can created when the multiples of 3 and 5 is used

// TODO: Change undefined below to the name of your function
module.exports = FizzBuzz;
