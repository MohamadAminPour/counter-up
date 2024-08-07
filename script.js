let counterUpNumber = document.querySelectorAll('.counterUp-number')

window.addEventListener('load', () => {
    counterUpNumber.forEach(count => {
        let countElem = count.dataset.count

        let setCount = setInterval(() => {
            if (count.textContent === countElem) {
                clearInterval(setCount)
            }
            else {
                count.textContent++
                setTimeout(() => {
                    count.textContent = countElem
                }, 3000);
            }
        }, 1);

    })

})



