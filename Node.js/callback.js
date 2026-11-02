function fetchUserData(callback) {
    console.log(`Fetching data...`);

    setTimeout(() => {
        const userData = {
            id: 1,
            name: 'Amir',
            email: 'skamir2410@gmail.com'
        }
        callback(userData);
    }, 5000);
}

console.log("Start fetching user data...");

fetchUserData((data) => {
    console.log("User Data received:");
    console.log("Name: " + data.name);
    console.log("Email: " + data.email);
    console.log("End of callback function.");
});
