var deserialize = function(s) {
    const data = JSON.parse(s);

    const build = (x) => {
        const ni = new NestedInteger();
        if (typeof x === 'number') {
            ni.setInteger(x);
        } else {
            for (let val of x) {
                ni.add(build(val));
            }
        }
        return ni;
    };

    return build(data);
};