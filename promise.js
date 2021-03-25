// console.log('Request data...')

// setTimeout(() => {
//     console.log('preparing data...')

//     const backenData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }

//     setTimeout(() => {
//         backenData.modified = true
//         console.log('Data received', backenData)
//     }, 2000)
// }, 2000)

// const p = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('Preparing data...')
//         const backenData = {
//             server: 'aws',
//             port: 2000,
//             status: ' working'
//         }
//         resolve()
//     }, 2000)
// })

// p.then(data => {
//     return new Promise((resolve, reject) => {
//         setTime any(() => {
//             data.modified = true
//             reject(data)
//         }, 2000)
//     })
// })
// .catch(err => console.error('Error: ', err))
// .then(clientData => {
//     clientData.fromPromise = true
//         return clientData
// })
//     .then(data => {
//         console.log('Modified', data)
// })
// .catch(err => console.error('Error: ', err))
// .finally(() => console.log('FInally'))

const sleep = ms => {
    return new Promise(resolve => {
    setTimeout(() => resolve(), ms)
})
}

// sleep(2000).then(() => console.log('After 2 sec'))
// sleep(3000).then(() => console.log('After 3 sec'))

Promise.all([sleep(2000), sleep(5000)]).then(() => {
    console.log('All promises')
})


Promise.race([sleep(2000), sleep(5000)]).then(() => {
    console.log('Race promises')
})