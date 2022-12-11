const phrase = "The quick brown fox";

console.log(".at: ", phrase.at(4));
console.log(".at: ", phrase.at(-5));

console.log('##########');

console.log(".charAt: ", phrase.charAt(5));

console.log("##########");

const phrase1 = "Hello", phrase2 = "Dima";

console.log(".concat", phrase1.concat(", ", phrase2));
console.log(".concat", phrase1.concat(phrase2));

console.log("##########");

console.log(".endsWith: ", phrase.endsWith("fox"));

console.log("##########");

console.log(".includes: ", phrase.includes("quick"));
console.log(".includes: ", phrase.includes("duck"));

console.log("##########");

console.log(".indexOf: ", phrase.indexOf("duck"));
console.log(".indexOf: ", phrase.indexOf("The"));
console.log(".indexOf: ", phrase.indexOf("brown"));

console.log("##########");

console.log(".localeCompare: ", phrase.localeCompare("brown"));

console.log("##########");

console.log(".raw: ", String.raw`C:\Development\profile\aboutme.html`);

console.log("##########");

console.log(".repeat: ", phrase.repeat(10));

console.log("##########");

console.log(".replace: ", phrase.replace("fox", "duck"));

console.log("##########");

console.log(".replaceAll: ", "Some fox, duck, fox, fox, dogs".replaceAll("fox", "bird"));

console.log("##########");

console.log(".slice: ", phrase.slice(10));
console.log(".slice: ", phrase.slice(4, 13));

console.log("##########");

console.log(".split: ", phrase.split(" "));

console.log("##########");

console.log(".startsWith: ", phrase.startsWith("quick"));
console.log(".startsWith: ", phrase.startsWith("The"));

console.log("##########");

console.log(".substring: ", phrase.substring(1, 6));
console.log(".substring: ", phrase.substring(5));

console.log("##########");

console.log(".toUpperCase: ", phrase.toUpperCase());

console.log("##########");

console.log(".toLowerCase: ", phrase.toLowerCase());

console.log("##########");

const strObj = new String("string");

console.log(".toString: ", strObj.toString());

console.log("##########");

console.log(".trim: ", "     some text       ".trim());
console.log(".trimEnd: ", "     some text       ".trimEnd());
console.log(".trimStart: ", "     some text       ".trimStart());

console.log("##########");

const obj = new String("text");

console.log(".valueOf: ", obj.valueOf());