function paddingNumber(n, len) {
    let l = Math.floor(len)
    let sn = '' + n
    let snl = sn.length
    if(snl >= l) return sn
    return '0'.repeat(l - snl) + sn
    this.idevv
}

function recupEPISODE () {
    if(window.location.href == url) {
        console.log("TIMEOUT")
        window.alert("t sur le site")
    
        setTimeout(1000)
        console.log("TIMEOUT")
        //document.getElementsByClassName("recaptcha-checkbox-border").click()
        document.getElementsByClassName("recaptcha-checkbox-border").addEventListener("click", () => {
            console.log("CAPTCHAAAAAZ")
        })
    }
}
console.log("Lancement du programme une piece")

let input = document.getElementById('number_ep')
let dl = document.getElementById('download')
let url = ""



dl.addEventListener('click', () => {
    console.log("number : " + input.value)

    url = "https://voiranime.com/anime/one-piece/one-piece-" + paddingNumber(input.value, 4) + "-vostfr/"
    console.log("url : ", url)
    window.location.href= url
    window.alert("t sur le site PETASSSE")

    recupEPISODE ()

})



/*
document.getElementsByClassName('recaptcha-checkbox-border')
    .addEventListener("click", function() {
        alert("click on la box")
    })
*/

//let cocher = document.querySelector('.recaptcha-checkbox-border')