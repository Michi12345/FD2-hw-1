(function () {
    'use strict';

    let inputLine = 'djkddfs\nushsfhohf\nsmfgdfunehfa\nsnisugfmgkgo\nhdshhvdaaa',
        result = htmlCode(inputLine);

    console.log(result);

    function htmlCode(str) {
        let strArray = str.split('\n');
        strArray[0] = `<h1>${strArray[0]}</h1>`;
        for (let i = 1; i < strArray.length; i++) {
            strArray[i] = `<p>${strArray[i]}</p>`;
        }
        return strArray.join('\n');
    }
})();