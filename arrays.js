let array = [1,2,3,4,5,8,9,10];

//replace last indx with first indice;

const replaceLast = (a) => {
    console.log(a);
    const first = a[0];
    const last_index = a.length - 1;

    for (let i = 0; i < a.length; i++) {
        arr.push(a[i])
        arr[0] = arr[a.length - 1];
    }
    arr[last_index] = first;

    return arr;
}
// console.log(replaceLast(array));


// Add very num in array to adder
const addtoList = (nums, adder) => {
    const result = [];
    for (let num of nums) {
        result.push(num + adder)
    }
    return result;
}

// console.log(addtoList(array, 5));



//Multiply all even numbr by m
const multiplyEven = (nums, m) => {
    const result = [];
    for (let num of nums) {
        num % 2 === 0 ? result.push(num * m) : null;
    }
    return result;
}
// console.log(multiplyEven(array, 2));



//remove all odd numbrs from array and return them in a new array
const removeOdds = (nums) => {
    const result = [];
    for (let num of nums) {
        num % 2 !== 0 ? result.push(num) : null;
    }
    return result;
}
// console.log(removeOdds(array));


//Add ach repeating items an an array to a new array and return it

const items = ['a','b','c','a','b','d','c','f'];

const findDup = (a) => {
    const map = {};
    const result = [];

    for (let item of items) {
        !map[item] ? map[item] = 1 : map[item] +=1;
    }

    for (let key in map) {
        if (map[key] > 1) {
            result.push(key);
        }
    }

    return result;
}

// console.log(findDup(items));





//add verything in the array except the current index
array = [4,5,6,7];

const exceptSelf = (nums) => {
    const result = [];
    let i = 0;

    while (i < nums.length) {
        let postIndex = nums.slice(i + 1, nums.length);
        let preIndex  = nums.slice(0, i);
        let total = 0;

        for (let num of postIndex) {
            total += num;
        }

        for (let num of preIndex) {
            total += num;
        }

        result.push(total);
        
      i++;
    }
    return result;
}

// console.log(exceptSelf(array));















var productExceptSelf = function(nums) {
    
};