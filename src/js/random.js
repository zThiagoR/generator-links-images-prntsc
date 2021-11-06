const random = document.querySelector('.linkimage')
const button = document.querySelector('.generator')

function gerar() { 

    const Letters = 'abcdefghijklmnopqrstuvwxyz'
    const generateletter = Letters[Math.floor(Math.random() * Letters.length)]
    const randomLetter = generateletter + generateletter

    function RandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const value = RandomNumber(1000, 9999)
    link = "https://prnt.sc/" + randomLetter + value

    random.innerHTML = ' '

    setTimeout(() => {
        button.innerHTML = "loading..."
        setTimeout(() => {
            button.innerHTML = "Loaded!"
            random.innerHTML = `<a href="${link}" target="_blank">${link}</a>`
            random.style.display = 'block'
            setTimeout(() => {
                button.innerHTML = "Click to generate other image link"
            }, 1000)
        }, 5000)
    }, 1000)

    console.log(link)
}












