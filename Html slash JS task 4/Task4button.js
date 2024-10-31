document.getElementById('calculate-btn').addEventListener('click', () => {

    const numbers = Array.from({ length: 101 }, (_, index) => index);

    const sum = numbers.reduce((acc, num) => acc + num, 0);

    document.getElementById('result').textContent = `Sum of numbers from 0 to 100 is: ${sum}`;
});
