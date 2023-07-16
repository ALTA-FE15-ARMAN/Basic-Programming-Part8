function cetakSegitiga(tinggi : any) {
    for (let i = 1; i <= tinggi; i++) {
        let asterisks = '';
        let spaces = '';

        for (let j = 1; j <= tinggi - i; j++) {
          spaces += ' ';
        }
    
        for (let k = 1; k <= 2 * i - 1; k++) {
          asterisks += '*';
        }
    
        console.log(spaces + asterisks);
      }
    }
  const tinggiSegitiga = 5;
  cetakSegitiga(tinggiSegitiga);
  