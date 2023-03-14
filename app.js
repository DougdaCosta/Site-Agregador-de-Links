const shareButtons = document.querySelectorAll('.tile__share--button')
console.log(shareButtons)

const sharePage = document.querySelectorAll('.share__button')

async function copyText(e) {
//prevent button going to the site
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try {
        await navigator.clipboard.writeText(link)
        alert("Link copiado: " + link)
    } catch (err) {
        console.error(err)
    }
}

shareButtons.forEach(shareButton =>
    shareButton.addEventListener('click', copyText))

sharePage.forEach(sharePage =>
    sharePage.addEventListener('click', copyText))