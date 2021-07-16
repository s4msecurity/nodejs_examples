const Downloader = require('nodejs-file-downloader');
const readLine = require('readline')

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
})


function indirilenDosya(url) {

  (async () => {
    const downloader = new Downloader({
      url: url,
      directory: "C:\\Users\\ssezgin\\Desktop\\learning\\fileDownload\\",
      onProgress: function (percentage, chunk, remainingSize) {
        console.clear();
        console.log('%', percentage);
        console.log('Current chunk of data: ', chunk)
        console.log('Remaining bytes: ', remainingSize)
        if (percentage == "100.00") {
          console.log("Downloaded completed.")
          
        }
      }
    })

    try {
      await downloader.download();
    } catch (error) {
      console.log(error)
    }

  })();

}


//https://paket.atikeryazilim.com.tr/AtikERGridEBelge80.rar


rl.question("Please, input url address: ", (answer) => {  
  indirilenDosya(answer)
})