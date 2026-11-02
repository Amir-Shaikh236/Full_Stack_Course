function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: 'Amir',
                email: 'skamir2410@gmail.com'
            });
        }, 5000);
    });
}

async function processUserData() {
    console.log("Step 1: Starting the async function... ");
    try {
        const user = await fetchData();
        console.log('We Received our data.');
        console.log('Name: ' + user.name);
        console.log('Email: ' + user.email);
    } catch (err) {
        console.error('Oh no, something went Wrong');
    }
    console.log('Async function completed.');
}

processUserData();