document.querySelectorAll('.task-btn').forEach((button, index) => {
    button.addEventListener('click', () => {
        let numbers = Array.from({ length: 101 }, (_, index) => index);

        switch (index) {
            case 0:
                let divisibleByThree = numbers.filter(num => num % 3 !== 0);
                console.log("divisibleByThree:", divisibleByThree)
                document.getElementById('result').textContent = `Check the cosnole for numbers that are not divisible by 3`;
                //document.getElementById('result').textContent = `Numbers divisible by 3: ${divisibleByThree.join(', ')}`;
                break;

            case 1:
                let additionalNumbers = Array.from({ length: 51 }, (_, i) => i + 100);
                numbers = numbers.concat(additionalNumbers);
                console.log("Numbers from 0 to 150:", numbers);
                document.getElementById('result').textContent = `Numbers from 0 to 150 added. Check console for details.`;

                break;

            case 2:
                const plusThree = numbers.map(num => num + 3);
                console.log("Each number plus 3:", plusThree)
                document.getElementById('result').textContent = `Check the console for plus 3 for each array element`;
                //document.getElementById('result').textContent = `Each number plus 3: ${plusThree.join(', ')}`;
                break;

            case 3:
                const numbersFrom20To40 = numbers.slice(20, 41);
                console.log("Numbers from index 20 to 40:", numbersFrom20To40);
                document.getElementById('result').textContent = `Check console for numbers from index 20 to 40.`;
                break;

            case 4:
                const arrayToShuffle = numbers
                function shuffleArray(array) {
                    for (let i = array.length - 1; i > 0; i--) {
                        let j = Math.floor(Math.random() * (i + 1));
                        [array[i], array[j]] = [array[j], array[i]];
                    }
                }
                shuffleArray(arrayToShuffle);
                console.log("Shuffled numbers:", arrayToShuffle);

                const sortArrayDescending = arrayToShuffle.sort((a, b) => b - a);
                console.log("Array sorted in Descending order:", sortArrayDescending);
                document.getElementById('result').textContent = `Check console for the shuffled array and sorted in Descending order.`;
                break;

        }
    });
});