document.getElementById('get-ip').addEventListener('click', () => {

    fetch('https://api.ipify.orgx?format=json')
    .then(Response => Response.json())
    .then(data => {
        console.log(`IP address is: ${data.ip}`);
        document.getElementById('get-ip').innerHTML = data.ip;
        document.getElementById('result').textContent = `check the button for the reasult`;
    })
    .catch(error => {
        console.error('error fetching ip:', error);
        document.getElementById('result').textContent = 'failed to fetch ip';
        alert(`failed to fetch ip`);
    });


    
});
