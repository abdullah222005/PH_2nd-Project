document.getElementById('loginBtn').addEventListener('click', function (e){
    const phnNum = +8801329602999;
    const pin = 2230;
    const inputNum = document.getElementById('phnNum').value;
    const convNum = parseInt(inputNum);
    const inputPin = document.getElementById('pin').value;
    const convPin = parseInt(pin);
    if(phnNum === convNum){
        window.location.href= "./home.html"
    }
    else{
        alert('Invalid Mobile Number or PIN')
    }
})