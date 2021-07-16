/*
//Döviz Listesi
(async () => {
    const TCMB_Doviz = require('tcmb-doviz');
    const Doviz = new TCMB_Doviz();
    const res = await Doviz.DovizListesi();
    console.log(res);
})();


        (async () => {
            const TCMB_Doviz = require('tcmb-doviz');
            const Doviz = new TCMB_Doviz();
            const res = await Doviz.getKur(doviz); //buraya usd yerine listedeki sırasını da yazabilirsiniz örneğin Doviz.getKur(0)
            console.log(res);
        })();

*/


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


function dStarted() {

    readline.question('Doviz bilgilerinin listesini almak istermisiniz?[E,e/H,h]: ', dList => {

        //Döviz Bilgileri
        if ((dList == 'E') || (dList == 'e')) {
            (async () => {
                const TCMB_Doviz = require('tcmb-doviz');
                const Doviz = new TCMB_Doviz();
                const res = await Doviz.DovizListesi();
                console.log(res);
            })();
            readline.close()
        }
        else if ((dList == 'H') || (dList == 'h')) {
            readline.question('Hangi dövizi çekmek istersin? Örn:[AUD,USD,EUR,JPY..]: ', selectDoviz => {
                (async () => {
                    const TCMB_Doviz = require('tcmb-doviz');
                    const Doviz = new TCMB_Doviz();
                    const res = await Doviz.getKur(selectDoviz); //buraya usd yerine listedeki sırasını da yazabilirsiniz örneğin Doviz.getKur(0)
                    console.log(res);
                })();
                readline.close()
            })
        }
        else {
            console.log('Lütfen Evet için [E/e] veya Hayır için [H/h] girin.')
            dStarted()
        }
    });
}

dStarted()