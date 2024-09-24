function getInputValueById(id) {
    return parseFloat(document.getElementById(id).value);
}
function getInnerItemById (id){
    return document.getElementById(id);
}


// ----Noakhali card---
const donateNoakhaliBtn = getInnerItemById('donate-noakhali-btn');
donateNoakhaliBtn.addEventListener('click', function () {

    const amountDonationNoakhali = getInputValueById('input-noakhali');
    const myAmount = getInnerItemById('my-amount');
    const newMyAmount = myAmount.innerText;

    if (newMyAmount <= 0 || amountDonationNoakhali > newMyAmount) {
        alert('You do not have sufficient balance');
        const myModal = document.getElementById('my_modal_1').classList.add('hidden');
        window.location.reload();
        return;
    }
    else {
        if (amountDonationNoakhali <= 0 || isNaN(amountDonationNoakhali)) {
            alert('Please provide a valid amount');
            const myModal = document.getElementById('my_modal_1').classList.add('hidden');
            window.location.reload();
            return;
        }
        else {
            const amountNoakhali = getInnerItemById('amount-noakhali');
            const newAmountNoakhali = Number((amountNoakhali).innerText);

            const totalAmountNoakhali = newAmountNoakhali + amountDonationNoakhali;
            amountNoakhali.innerText = totalAmountNoakhali;

            const finalMyAmount = newMyAmount - amountDonationNoakhali;
            myAmount.innerText = finalMyAmount;

            // history output
            const historyItem = document.createElement('div');
            historyItem.className = 'bg-white px-6 py-10 space-y-4 mt-6 mb-6 text-xl font-semibold border rounded-lg border-blue-200 shadow-md';
            historyItem.innerHTML = `
                <p>${amountDonationNoakhali.toFixed(2)} Taka is Donated for Flood at Noakhali, Bangladesh</p>
                <p class="text-lg text-gray-500">Date: ${new Date().toString()}</p>
                `;
            const historyContainer = getInnerItemById('history-list');
            historyContainer.insertBefore(historyItem, historyContainer.firstChild);
        }
        
    }

})

// ----Feni card---
const donateFeniBtn = getInnerItemById('donate-feni-btn');
donateFeniBtn.addEventListener('click', function () {

    const amountDonationFeni = getInputValueById('input-feni');
    const myAmount = getInnerItemById('my-amount');
    const newMyAmount = myAmount.innerText;

    if (newMyAmount <= 0 || amountDonationFeni > newMyAmount) {
        alert('You do not have sufficient balance');
        const myModal = document.getElementById('my_modal_2').classList.add('hidden');
        window.location.reload();
        return;
    }
    else {
        if (amountDonationFeni <= 0 || isNaN(amountDonationFeni)) {
            alert('Please provide a valid amount');
            const myModal = document.getElementById('my_modal_2').classList.add('hidden');
            window.location.reload();
            return;
        }
        else {
            const amountFeni = getInnerItemById('amount-feni');
            const newAmountFeni = Number((amountFeni).innerText);

            const totalAmountFeni = newAmountFeni + amountDonationFeni;
            amountFeni.innerText = totalAmountFeni;

            const finalMyAmount = newMyAmount - amountDonationFeni;
            myAmount.innerText = finalMyAmount;

            // history output
            const historyItem = document.createElement('div');
            historyItem.className = 'bg-white px-6 py-10 space-y-4 mt-6 mb-6 text-xl font-semibold border rounded-lg border-blue-200 shadow-md';
            historyItem.innerHTML = `
                <p>${amountDonationFeni.toFixed(2)} Taka is Donated for Flood Relief in Feni, Bangladesh</p>
                <p class="text-lg text-gray-500">Date: ${new Date().toString()}</p>
                `;
            const historyContainer = getInnerItemById('history-list');
            historyContainer.insertBefore(historyItem, historyContainer.firstChild);
        }
    }

})


// ----Quota card---
const donateQuotaBtn = getInnerItemById('donate-quota-btn');
donateQuotaBtn.addEventListener('click', function () {

    const amountDonationQuota = getInputValueById('input-quota');
    const myAmount = getInnerItemById('my-amount');
    const newMyAmount = myAmount.innerText;

    if (newMyAmount <= 0 || amountDonationQuota > newMyAmount) {
        alert('You do not have sufficient balance');
        const myModal = document.getElementById('my_modal_3').classList.add('hidden');
        window.location.reload();
        return;
    }
    else {
        if (amountDonationQuota <= 0 || isNaN(amountDonationQuota)) {
            alert('Please provide a valid amount');
            const myModal = document.getElementById('my_modal_3').classList.add('hidden');
            window.location.reload();
            return;
        }
        else {
            const amountQuota = getInnerItemById('amount-quota');
            const newAmountQuota = Number((amountQuota).innerText);

            const totalAmountQuota = newAmountQuota + amountDonationQuota;
            amountQuota.innerText = totalAmountQuota;

            const finalMyAmount = newMyAmount - amountDonationQuota;
            myAmount.innerText = finalMyAmount;

            // history output
            const historyItem = document.createElement('div');
            historyItem.className = 'bg-white px-6 py-10 space-y-4 mt-6 mb-6 text-xl font-semibold border rounded-lg border-blue-200 shadow-md';
            historyItem.innerHTML = `
                <p>${amountDonationQuota.toFixed(2)} Taka is Donated for Aid for Injured in the Quota Movement</p>
                <p class="text-lg text-gray-500">Date: ${new Date().toString()}</p>
                `;
            const historyContainer = getInnerItemById('history-list');
            historyContainer.insertBefore(historyItem, historyContainer.firstChild);
        }
    }

})

// donation & history tab functionality
const historyTab = getInnerItemById('history-tab');
const donationTab = getInnerItemById('donation-tab');

historyTab.addEventListener('click', function () {
    historyTab.classList.add(
        'bg-lime-300'
    );
    historyTab.classList.remove('text-gray-600');
    donationTab.classList.remove(
        'bg-lime-300'
    );
    donationTab.classList.add('text-gray-600');
    document.getElementById('cards-section').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
})

donationTab.addEventListener('click', function () {
    donationTab.classList.add(
        'bg-lime-300'
    );
    historyTab.classList.remove(
        'bg-lime-300'
    );
    document.getElementById('cards-section').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
    // window.location.reload();
})



