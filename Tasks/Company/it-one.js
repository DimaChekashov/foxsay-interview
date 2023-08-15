const input = [
    {value: 'q1we3q1', order: 4, expired: false},
    {value: 'as2dq43', order: 2, expired: true},
    {value: 'j8k0ri2', order: 1, expired: false},
    {value: 'oiod127', order: 3, expired: false},
];

let result = input
    .filter(({expired}) => !expired)
    .sort((a, b) => a.order - b.order)
    .reduce((acc, {value}) => {
        for (let i = value.length - 1; i >= 0; i--) {
            if (isNaN(value[i]) && !acc.uniqueChars.has(value[i])) {
                acc.res += value[i];
                acc.uniqueChars.add(value[i]);
            }
        }
        
        return acc;
    }, {res: "", uniqueChars: new Set()}).res;


console.log(result);