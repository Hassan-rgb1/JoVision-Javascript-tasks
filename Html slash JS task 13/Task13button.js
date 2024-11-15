document.getElementById('submitButton').addEventListener('click', async () => {
    const nameInput = document.getElementById('nameInput').value;

    if (!nameInput) {
        alert('Please enter a name.');
        return;
    }

    try {
        const response = await fetch(`https://api.agify.io?name=${encodeURIComponent(nameInput)}`);
        if (!response.ok) {
            throw new Error('Failed to fetch age.');
        }

        const { name, age } = await response.json();
        alert(`Your name is: ${name}\nYour age is: ${age !== null ? age : 'Unknown'}`);

    } catch (error) {
        console.error('Error:', error);
        alert('There was an error fetching the age. Please try again later.');
    }
});
