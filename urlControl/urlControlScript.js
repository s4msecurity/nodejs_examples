
const urlStatusCode = require('url-status-code')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var iSayi, iUrl;

rl.question("Input size url link type: ", function (iSayi) {
  for (i = 0; i <= iSayi; i++) {
    iUrl = 'http://www._enterUrlAdres/Adress' + i + '.rar'
    linkControl(iUrl)
  }
  if(i == iSayi){
    console.log("===== Finish =====")
  }
    
})

async function linkControl(iUrl) {
  const url = iUrl
  try {
    const status = await urlStatusCode(url)
    if (status != 404) {
      console.log("[+] Link found: "+url)
    }
    else{
      console.log("[-] Link Not Found: "+url)
    }
  } catch (error) {
    console.error(error)
  }
}
