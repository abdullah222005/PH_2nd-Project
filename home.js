const validPIN = 2230;
const transactionData = [];
document.getElementById('LogOutBtn').addEventListener('click', function(){
    window.location.href= "./index.html"
})

// function to get input values
function getInputValueNumber(id){
    const inputFieldVN = parseInt(document.getElementById(id).value);
    return inputFieldVN;
}
// function to get innerText
function getInnerText(id){
    const InnerText = document.getElementById(id).innerText;
    return InnerText;
}
// function to toggle items
function sectionToggle(iconId, sectionId) {
    document.getElementById(iconId).addEventListener('click', function () {
        const blocks = document.getElementsByClassName('Block');
        for (const block of blocks) {
            block.style.display = "none";
        }
        const icons = document.getElementsByClassName('Icon');
        for (const icon of icons) {
            icon.style.backgroundColor = "#FFFFFF";
        }
        document.getElementById(sectionId).style.display = 'block';
        document.getElementById(iconId).style.backgroundColor = 'bisque';
    });
}


// Add Money Section
sectionToggle('AddMoneyIcon', 'AddMoneySection');
const addMoneyBtn = document.getElementById('AddMoneyBtn');
addMoneyBtn.addEventListener('click', function () {
  const bankName = document.getElementById('BankName').value;
  const accountNum = document.getElementById('AccountNum').value;
  const creditAmount = getInputValueNumber('CreditAmount');
  const pinNumAdd = getInputValueNumber('PinNumAdd');
  let currentBalance = Number(getInnerText('CurrentBalance'));
    if(pinNumAdd == validPIN && creditAmount >= 500 && accountNum.length == 11){
        currentBalance += creditAmount;
        document.getElementById('CurrentBalance').innerText = currentBalance;
        alert('Money Added Successfully');
        const data = {
            logo: "assets/wallet1.png",
            name: 'Add Money',
            date: new Date().toLocaleString()
        }
        transactionData.push(data);
    }
    else{
        alert('Invalid PIN or Account Number & Minimum Transaction Amount is 500 TK');
    }
});

// Withdraw Section
sectionToggle('CashOutIcon', 'CashOutSection');
const cashOutBtn = document.getElementById('CashOutBtn');
cashOutBtn.addEventListener('click', function () {
  const agentNum = document.getElementById('AgentNum').value;
  const debitAmount = getInputValueNumber('DebitAmount');
  const pinNumWithdraw = getInputValueNumber('PinNumWithdraw');
  let currentBalance = Number(getInnerText('CurrentBalance'));
    if(pinNumWithdraw == validPIN && debitAmount >= 500 && agentNum.length == 11 && debitAmount <= currentBalance){
        currentBalance -= debitAmount;
        document.getElementById('CurrentBalance').innerText = currentBalance;
        alert('Money Withdraw Successful');
        const data = {
            logo: "assets/send1.png",
            name: 'Withdraw Money',
            date: new Date().toLocaleString(),
        }
        transactionData.push(data);
    }
    else{
        alert('Invalid PIN or Account Number & Minimum Transaction Amount is 500 TK');
    }
});

//Transaction Section
sectionToggle('TransferIcon', 'TransferSection');
const transferBtn = document.getElementById('TransferBtn');
transferBtn.addEventListener('click', function () {
  const accountNumb = document.getElementById('AccountNumb').value;
  const transactionAmount = getInputValueNumber('TransactionAmount');
  const pinNumTransfer = getInputValueNumber('PinNumTransfer');
  let currentBalance = Number(getInnerText('CurrentBalance'));
    if(pinNumTransfer == validPIN && transactionAmount >= 500 && accountNumb.length == 11 && transactionAmount <= currentBalance){
        currentBalance -= transactionAmount;
        document.getElementById('CurrentBalance').innerText = currentBalance;
        alert('Money Transaction Successful');
        const data = {
            logo: "assets/money1.png",
            name: 'Transfer Money',
            date: new Date().toLocaleString()
        }
        transactionData.push(data);
    }
    else{
        alert('Invalid PIN or Account Number & Minimum Transaction Amount is 500 TK');
    }
});

// Coupon Code Section
sectionToggle('BonusIcon', 'BonusSection');
const bonusBtn = document.getElementById('BonusBtn');
bonusBtn.addEventListener('click', function () {
    const inputCode = document.getElementById('CouponCode').value;
const code1 = 'GR1000';
const code2 = 'GR3000';
const code3 = 'GR5000';
let currentBalance = Number(getInnerText('CurrentBalance'));
    if(inputCode === code1){
        currentBalance += 1000;
        document.getElementById('CurrentBalance').innerText = currentBalance;
        alert('Wow! You got 1000 TK');
        const data = {
            logo: "assets/bonus1.png",
            name: 'Coupon Code of 1000 TK',
            date: new Date().toLocaleString()
        }
        transactionData.push(data);
    }
    else if(inputCode === code2){
        currentBalance += 3000;
        document.getElementById('CurrentBalance').innerText = currentBalance;
        alert('Wow! You got 3000 TK');
        const data = {
            logo: "assets/bonus1.png",
            name: 'Coupon Code of 3000 TK',
            date: new Date().toLocaleString()
        }
        transactionData.push(data);
    }
    else if(inputCode === code3){
        currentBalance += 5000;
        document.getElementById('CurrentBalance').innerText = currentBalance;
        alert('Wow! You got 5000 TK');
        const data = {
            logo: "assets/bonus1.png",
            name: 'Coupon Code of 5000 TK',
            date: new Date().toLocaleString()
        }
        transactionData.push(data);
    }
    else{
        alert('Invalid Code');
    }
});

// PayBill Section
sectionToggle('BillIcon', 'PayBillSection');
const payBillBtn = document.getElementById('PayBillBtn');
payBillBtn.addEventListener('click', function () {
  const billerAccountNum = document.getElementById('BillerAccountNum').value;
  const payAmount = getInputValueNumber('PayAmount');
  const pinNumBill = getInputValueNumber('PinNumBill');
  let currentBalance = Number(getInnerText('CurrentBalance'));
    if(pinNumBill == validPIN && payAmount >= 100 && billerAccountNum.length == 11 && payAmount <= currentBalance){
        currentBalance -= payAmount;
        document.getElementById('CurrentBalance').innerText = currentBalance;
        alert('Bill Pay Successful');
        const data = {
            logo: "assets/purse1.png",
            name: 'Pay Bill',
            date: new Date().toLocaleString()
        }
        transactionData.push(data);
    }
    else{
        alert('Invalid PIN or Account Number & Minimum Transaction Amount is 100 TK');
    }
});

// Transaction History Section
sectionToggle('TransactionIcon', 'TransactionHistory');
document.getElementById('TransactionIcon').addEventListener('click', function(){
    const transactionContainer = document.getElementById('TransactionContainer');
    transactionContainer.innerHTML = "";
    for(const data of transactionData){
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="flex justify-between items-center my-4 p-5 bg-[#FFFFFF] rounded-3xl">
            <div class="flex items-center">
                <div class="p-4 bg-gray-300 rounded-full">
                    <img src="${data.logo}" alt="">
                </div>
                <div class="ml-4">
                    <h3 class="font-semibold">${data.name}</h3>
                    <p class="text-sm text-gray-500">${data.date}</p>
                </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical cursor-pointer"></i>
        </div>
        `;
        transactionContainer.appendChild(div);
    }
});






















