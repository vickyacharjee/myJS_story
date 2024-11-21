async function login(userid, password) {
    try {
        const response = await fetch('https://vickyacharjee14.pythonanywhere.com/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userid, password }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json(); // Parse the JSON response
        console.log(data); // Log the parsed data
    } catch (error) {
        console.error('Error:', error); // Log any errors
    }
}

// ! here this shios the 
//* login('vickyacharjee14', 'vickyacharjee14'); //
 //Todo  Call the login function with your userid and password 
 
login('keerthi', 'admin123');
