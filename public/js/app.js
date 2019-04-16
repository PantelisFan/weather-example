console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const m1 = document.querySelector('#m1')
const m2 = document.querySelector('#m2')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    m1.textContent = 'Loading..'

    const location = search.value
    fetch(`/weather?address=${location}`).then((res) => {
        res.json().then((data) => {
            if (data.error) {
                m1.textContent = data.error
            } else {
            m1.textContent = data.loc
            m2.textContent = data.forecast
        }
        })
    })


})

