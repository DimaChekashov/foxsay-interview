console.log("#################");

console.log(".unshift: ", ["one", "two", "three"].unshift());
console.log(".push: ", ["one", "two", "three"].push("four"));
console.log(".shift: ", ["one", "two", "three"].shift());
console.log(".pop: ", ["one", "two", "three"].pop());

console.log("#################");

console.log(".splice: ", ["Hello", "my", "friend"].splice(1, 1));

console.log("#################");

console.log(".slice: ", ["Hello", "my", "good", "friend"].slice(1, 3));

console.log("#################");

console.log(".concat: ", ["Hello", "my", "good", "friend"].concat(["Patrik", 21]));

console.log("#################");

["one", "two", "three", "four"].forEach((item, index, array) => {
    console.log(`${item} has position ${index} in ${array}`);
});

console.log("#################");

console.log(".indexOf: ", ["one", "two", "three", "four"].indexOf("three"));

console.log(
    ".lastIndexOf: ",
    ["one", "two", "three", "four"].lastIndexOf("four")
);

console.log("#################");

console.log(".includes: ", ["one", "two", "three", "four"].includes("four"));

console.log("#################");

let users = [
    { name: "Dima", age: 23 },
    { name: "Roma", age: 33 },
    { name: "Sergey", age: 40 },
];

console.log(".find: ", users.find((item, index, array) => {
    return item.age < 30;
}));

console.log(".findIndex: ", users.findIndex((item, index, array) => {
    return item.age > 30;
}));

console.log(
    ".filter: ",
    users.filter((item, index, array) => {
        return item.age > 30;
    })
);

console.log("#################");

console.log(".map: ", ["one", "two", "three", "four"].map((item, index, array) => {
    return item + ": " + ++index;
}));

console.log("#################");

console.log(".sort: ", [1, 4, 23, 2, 10, 5].sort((a, b) => {
    if(a > b) return 1;
    if(a === b) return 0;
    if(a < b) return -1;
}));

console.log(".sort: ", [1, 4, 23, 2, 10, 5].sort((a, b) => {
    console.log(a + " <> " + b);
    return a - b;
}));

console.log(".sort: ", ["one", "two", "three", "four"].sort((a, b) => a.localeCompare(b)));

console.log("#################");

console.log(".reverse: ", [1, 2, 3, 4, 5].reverse());

console.log("#################");

let nums = "one, two, three, four";

let numsArr = nums.split(", ");

console.log(numsArr);
console.log(numsArr.join("-"));

console.log("#################");

console.log(".reduce: " + [1, 6, 4, 3, 2].reduce((accumulator, item, index, array) => {
    return accumulator + item;
}, 0));

console.log("#################");

console.log(".isArray: ", Array.isArray({}));
console.log(".isArray: ", Array.isArray([]));

console.log("#################");

console.log(".some: ", [1, 3, 4, 5, 6].some((item, index, array) => {
    return item === 8;
}));

console.log("#################");

console.log(".every: ", [1, 3, 4, 5, 6].every((item, index, array) => {
    return item < 7;
}));

console.log("#################");

console.log(".fill: ", (new Array(10)).fill(10));

console.log("#################");

console.log(".copyWithin: ", [1, 2, 3, 4, 5, 6].copyWithin(0, 3));