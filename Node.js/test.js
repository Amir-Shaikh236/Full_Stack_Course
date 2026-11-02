function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userData = {
                id: 1,
                name: 'Amir',
                age: 24,
            }
            resolve(userData);
        }, 4000);
    })
}

async function processData() {
    console.log('App Starting...');
    try {
        const user = await fetchData();
        console.log('User Data has been received');
        console.log(`ID : ${user.id}`);
        console.log(`Name : ${user.name}`);
        console.log(`Age : ${user.age}`);
    } catch (error) {
        console.error('Error fetching Data : ', error);
    }
    console.log('Async function completed');
}

processData();