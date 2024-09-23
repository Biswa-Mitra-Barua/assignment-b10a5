function getInputValueById(id) {
    return parseFloat(document.getElementById(id).value);
}
// function getInnerTextById (id){
//     return parseFloat(document.getElementById(id).innerText);
// }

// ----Noakhali card---
const donateNoakhaliBtn = document.getElementById('donate-noakhali-btn');
donateNoakhaliBtn.addEventListener('click', function () {

    const amountDonationNoakhali = getInputValueById('input-noakhali');
    const myAmount = document.getElementById('my-amount');
    const newMyAmount = myAmount.innerText;

    if (newMyAmount <= 0 || amountDonationNoakhali > newMyAmount) {
        alert('You do not have sufficient balance');
        const myModal = document.getElementById('my_modal_1').classList.add('hidden');
        window.location.reload();
        return;
    }
    else {
        if (amountDonationNoakhali <= 0 || isNaN(amountDonationNoakhali)) {
            alert('Please provide the positive amount');
            const myModal = document.getElementById('my_modal_1').classList.add('hidden');
            window.location.reload();
            return;
        }
        else {
            const amountNoakhali = document.getElementById('amount-noakhali');
            const newAmountNoakhali = Number((amountNoakhali).innerText);

            const totalAmountNoakhali = newAmountNoakhali + amountDonationNoakhali;
            amountNoakhali.innerText = totalAmountNoakhali;

            const finalMyAmount = newMyAmount - amountDonationNoakhali;
            myAmount.innerText = finalMyAmount;
        }
    }

})

// ----Feni card---
const donateFeniBtn = document.getElementById('donate-feni-btn');
donateFeniBtn.addEventListener('click', function () {

    const amountDonationFeni = getInputValueById('input-feni');
    const myAmount = document.getElementById('my-amount');
    const newMyAmount = myAmount.innerText;

    if (newMyAmount <= 0 || amountDonationFeni > newMyAmount) {
        alert('You do not have sufficient balance');
        const myModal = document.getElementById('my_modal_2').classList.add('hidden');
        window.location.reload();
        return;
    }
    else {
        if (amountDonationFeni <= 0 || isNaN(amountDonationFeni)) {
            alert('Please provide the positive amount');
            const myModal = document.getElementById('my_modal_2').classList.add('hidden');
            window.location.reload();
            return;
        }
        else {
            const amountFeni = document.getElementById('amount-feni');
            const newAmountFeni = Number((amountFeni).innerText);

            const totalAmountFeni = newAmountFeni + amountDonationFeni;
            amountFeni.innerText = totalAmountFeni;

            const finalMyAmount = newMyAmount - amountDonationFeni;
            myAmount.innerText = finalMyAmount;
        }
    }

})


// ----Quota card---
const donateQuotaBtn = document.getElementById('donate-quota-btn');
donateQuotaBtn.addEventListener('click', function () {

    const amountDonationQuota = getInputValueById('input-quota');
    const myAmount = document.getElementById('my-amount');
    const newMyAmount = myAmount.innerText;

    if (newMyAmount <= 0 || amountDonationQuota > newMyAmount) {
        alert('You do not have sufficient balance');
        const myModal = document.getElementById('my_modal_3').classList.add('hidden');
        window.location.reload();
        return;
    }
    else {
        if (amountDonationQuota <= 0 || isNaN(amountDonationQuota)) {
            alert('Please provide the positive amount');
            const myModal = document.getElementById('my_modal_3').classList.add('hidden');
            window.location.reload();
            return;
        }
        else {
            const amountQuota = document.getElementById('amount-quota');
            const newAmountQuota = Number((amountQuota).innerText);

            const totalAmountQuota = newAmountQuota + amountDonationQuota;
            amountQuota.innerText = totalAmountQuota;

            const finalMyAmount = newMyAmount - amountDonationQuota;
            myAmount.innerText = finalMyAmount;

        }
    }

})


