(function () {
    'use strict';

    let numbers = [1, 4, 5, 5, 4, 6, 7, 8, 9],
        result = noRepeatNumbers(numbers);

    console.log(result);

    function noRepeatNumbers(inputNumbers) {
        return numbers.filter(number => countOfItemInArray(number, inputNumbers) === 1);

        function countOfItemInArray(item, numbers) {
            let count = 0;
            numbers.forEach(itemOfArray => {
                if (item === itemOfArray) {
                    count++;
                }
            });
            return count;
        }
    }
})();