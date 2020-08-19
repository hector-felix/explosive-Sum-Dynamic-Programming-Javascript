function sum(n) {                 //dynamic programming because we will break our problem down to smaller subproblems - as opposed to taking a recrusive approach
  if (n <= 0)  
    return 0;                      // smaller versions of the original problem
                                  // chose this approach because it involves finding the sum of the smaller problem, multiple times
                                  // bottom-up tabulation approach that forces us to solve the smallest of problems, and use those results to work our way up to deliver the final problem result
                      // array of arrays - 2 dimensional array to solve this
  let result = [];                //create a result array (maybe 2d)
  for (let i = 0; i <= n; i++) {  //loop all the way to n, starting at 1?
    result[i] = [];              //set first element in array, to a new, empty array
    for (let j = 1; j <= i; j++) { //iterate again starting at 1, all the way to current index of outer loop
      if (j == 1 || i == 1) {     //check whether have reached one 
        result[i][j] = 1;
        //console.log(`ResultIJ: ${result[i][j]}`)
      } else {
        if (i == j) {
          result[i][j] = result[i][j - 1] + 1;
        } else if ((i - j) < j) { // no need to check for divisors after n / 2 as we will have reviewed and added them already
          result[i][j] = result[i - j][i - j] + result[i][j - 1];
        } else {
          result[i][j] = result[i - j][j] + result[i][j - 1];
        }
      }
    }
  }
  console.log(result);
  return result[n][n];
}

console.log(sum(4));
// Examples
// Basic
// sum(1) // 1
// sum(2) // 2  -> 1+1 , 2
// sum(3) // 3 -> 1+1+1, 1+2, 3
// sum(4) // 5 -> 1+1+1+1, 1+1+2, 1+3, 2+2, 4
// sum(5) // 7 -> 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3
// sum(10) // 42
// Explosive
// sum(50) // 204226
// sum(80) // 15796476
// sum(100) // 190569292