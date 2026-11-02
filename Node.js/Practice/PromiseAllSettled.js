// Promise.all (All-or-Nothing / "Short-Circuit" Strategy):
// Expects every single Promise to succeed.
// If even one Promise fails (rejects), Promise.all immediately cancels/rejects the whole group and jumps straight to .catch().


// Promise.allSettled (Resilient / "Report Card" Strategy):
// Waits for all Promises to finish, regardless of whether they succeeded or failed.
// Never rejects! It gives you an array of objects showing the final status (fulfilled or rejected) for every item.


const Users = [
    { name: 'Amir', age: 23, location: 'Pune' },
    { name: 'Ayaz', age: 24, location: 'Mumbai' },
    { name: 'Ashakan', age: 22, location: 'UP' },
]

const PurchasedItem = [
    { name: 'Laptop', price: 200000, status: "Pending" },
    { name: 'Mobile', price: 20000, status: "success" },
    { name: 'Watch', price: 200, status: "success" },
]

const FetchUser = () => {
    console.log('Fetching....')
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Users)

        }, 2000);

        console.log('Fetched')
    })
}

const FetchPurchasedItem = () => {
    console.log('Fetching Purchased Item....')
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(PurchasedItem)

        }, 2000);

        console.log('Fetched Purchased Item')
    })
}

const FetchBanner = () => {
    console.log('Fetching Banner....')

    return new Promise((reject) => {
        setTimeout(() => {
            reject('Banner Service Down!')

        }, 2000)

    })
}

Promise.allSettled([FetchUser(), FetchPurchasedItem(), FetchBanner()])
    .then((result) => {
        for (let i = 0; i < result.length; i++) {
            if (result[i].status === 'fulfilled') {
                console.log(`${result[i]} Data: `, result[i].value);

            } else {
                console.log(`${result[i]} Error: `, result[i].reason);

            }
        }
    })

// if (Avatar.status === 'fulfilled') {
//     console.log('Show Avatar: ', Avatar.value)

// } else {
//     console.error('Avatar Service Down!')

// }

// if (Purchase.status === 'fulfilled') {
//     console.log('Show Purchase: ', Purchase.value)

// } else {
//     console.error('Purchase Setting Down!')

// }

// if (Banner.status === 'fulfilled') {
//     console.log('Show Banner: ', Banner.value)

// } else {
//     console.error('Banner Service Down!')

// }
// })
