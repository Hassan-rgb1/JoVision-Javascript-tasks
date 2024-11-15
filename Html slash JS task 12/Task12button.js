function submitForm() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const timestamp = new Date().toLocaleString();
  
    const userData = {
      name: name,
      age: age,
      timestamp: timestamp
    };
  
    alert(`Your name is: ${userData.name}\nYour age is: ${userData.age}\nTimestamp: ${userData.timestamp}`);
  }