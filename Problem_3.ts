function jajanBoba(uang: number, callback: (uang: number) => void): void {
    const hargaBoba = 5000;
    setTimeout(() => {
    if (uang -= hargaBoba) {
            console.log("kamu jajan boba Rp 5000");    
    } else {
            console.log("maaf uang kamu belum cukup untuk membeli boba");
    }
    callback(uang);
}, 5000)
  } 
  function jajanSeblak(uang: number): void {
    console.log("SISA UANG KAMU RP : " + uang);
    const hargaSeblak = 8000;
    setTimeout(() => {
    if (uang >= hargaSeblak) {
    
            console.log("kamu jajan seblak dengan harga Rp 8000");
            uang -= hargaSeblak;
            console.log(`sisa uang kamu adalah ${uang}`);
    } else {
            console.log("maaf uang kamu belum cukup untuk membeli seblak");
            console.log(`sisa uang kamu adalah ${uang}`);
      return;
    }
}, 9000)
  } 
  jajanBoba(20000, jajanSeblak);
  jajanBoba(10000, jajanSeblak);
  