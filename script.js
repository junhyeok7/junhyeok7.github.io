alert(window.location.pathname;);
var decrypt = CryptoJS.enc.Base64.parse("MTY3NzcyMTY");
var hashData = decrypt.toString(CryptoJS.enc.Utf8);

function printName()  {
    const idvalue = document.getElementById('id').value;
    const pwvalue = document.getElementById('pw').value;
    if (idvalue == "admin"){
        if (pwvalue == hashData){
            var win = window.open("file:hint.html");
        }
    }
  }

//16777216
