const topKFrequent = (nums, k) => {
    const freqMap = {};
    const bucket = [];
    const result = [];

    for (let i = 0; i < nums.length; i +=1) {
        !freqMap[nums[i]] ? freqMap[nums[i]] = 1 : freqMap[nums[i]] += 1;
    }

    for (let [num, freq] of Object.entries(freqMap)) {
        !bucket[freq] ? bucket[freq] = new Set().add(num) : bucket[freq].add(num);
    }

    for (let i = bucket.length; i >= 0; i -=1) {
        bucket[i] && result.length < k ? result.push(...bucket[i]) : null;
    }

    return result;
};


console.log(`Output: ${topKFrequent([1,1,1,2,2,3], 2)}`);
console.log(`Output: ${topKFrequent([1], 1)}`);
console.log(`Output: ${topKFrequent([1,1,4,4,5,6,7,8,8,2,3], 3)}`);