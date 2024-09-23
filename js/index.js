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

