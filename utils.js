export function getSubset(arr, exclude = [], sample = 3) {
    // remove duplicates and numbers too large from exclusion array
    let excludeSet = [];
    if (exclude.length) {
        excludeSet = [...new Set(exclude)];
        excludeSet = excludeSet.filter(val => val < arr.length);
    }

    // create array for selected indices and elements
    const subsetIndex = [];
    const subsetElement = []

    // if there's not enough elements, just return all the elements not in the exclusion set
    if (arr.length - excludeSet.length <= sample) {
        for (let elem of arr) if (!excludeSet.includes(elem)) subsetElement.push(elem);
        return subsetElement;
    }

    // otherwise loop until you have enough element indices
    while (subsetIndex.length < sample) {
        const num = Math.floor(Math.random() * arr.length);
        if (!subsetIndex.includes(num) && !excludeSet.includes(num)) subsetIndex.push(num);
    };

    // add the actual elements to the list
    for (let i of subsetIndex) subsetElement.push(arr[i]);

    return subsetElement;
};