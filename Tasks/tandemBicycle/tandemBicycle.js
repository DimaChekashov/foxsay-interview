function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    redShirtSpeeds.sort((a, b) => a - b);
    let result = 0;
    
    if(fastest) {
        blueShirtSpeeds.sort((a, b) => b - a);
    } else {
        blueShirtSpeeds.sort((a, b) => a - b);
    }

    for(let i = 0; i < redShirtSpeeds.length; i++) {
        result += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
    }

    return result;
}

console.log(`Output: ${tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], true)}, Need Output: 32`);

console.log(`Output: ${tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], false)}, Need Output: 25`);