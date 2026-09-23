var removeComments = function (source) {
    const res = [];
    let isMultiLineComment = false;
    let currLine = '';

    for (const str of source) {
        let i = 0;

        while (i < str.length) {
            if (!isMultiLineComment) {
                if (str[i] === '/' && i + 1 < str.length && str[i + 1] === '/') {
                    break;
                }

                if (str[i] === '/' && i + 1 < str.length && str[i + 1] === '*') {
                    isMultiLineComment = true;
                    i += 2;
                    continue;
                }

                currLine += str[i];
            } else {
                if (str[i] === '*' && i + 1 < str.length && str[i + 1] === '/') {
                    isMultiLineComment = false;
                    i += 2;
                    continue;
                }
            }

            i++;
        }

        if (!isMultiLineComment && currLine.length > 0) {
            res.push(currLine);
            currLine = '';
        }
    }

    return res;
};