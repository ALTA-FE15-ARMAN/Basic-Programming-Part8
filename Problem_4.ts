function luckyDraw(){
    return new Promise((resolve, reject) => {
        console.log("---- Undian Lotre Dimulai ----")
        console.log("Sedang mengundi Nomor Anda*")
        let number = Math.floor(Math.random() * 1000)
        console.log("Undian yang didapatkan adalah ", number)
        setTimeout(() => {
            if(number === 1000){
                resolve("Selamat anda mendapatkan hadiah utama berupa mobil")
            } else {
                reject("Maaf anda kurang beruntung")
            }
        }, 10000)
    })
}

async function playDraw(){
   await luckyDraw()
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log("---- Undian lotre Telah Berakhir ----")
    })
}
playDraw()