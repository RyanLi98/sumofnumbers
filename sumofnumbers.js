// Write four functions that return the sum of the numbers in a given list using a for-loop,
// a while-loop, recursion, and underscore. Call them sumFor, sumWhile, sumRecursion, and sumTheSimpleWay.



function sumFor(nums){
  let tot = 0;
  for(const num of nums){
    tot += num;
  }
  return tot;
}

function sumWhile(nums){
  let tot = 0;
  let i = 0;
  while(i < nums.length){
    tot += nums[i];
    i++
  }
  return tot;
}
function sumRecursion(nums){
  return (nums.length === 0) ? 0 : nums[0] + sumRecursion(nums.slice(1));
}
function sumTheSimpleWay(nums){
  return _.reduce(nums, function(memo,num){return memo + num;}, 0);
}

const vals = [1, 2, 3];
console.log(sumFor(vals));
console.log(sumWhile(vals));
console.log(sumRecursion(vals));
console.log(sumTheSimpleWay(vals));