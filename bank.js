let balance = 1000;
const balanceDisplay = document.getElementById('balance');
const transactionHistory = document.getElementById('transaction-history');

function updateBalance(amount) {
    balance += amount;
    balanceDisplay.textContent = `$${balance}`;
}

function addTransactionToHistory(amount) {
    const listItem = document.createElement('li');
    listItem.textContent = `Transaction: ${amount > 0 ? '+' : '-'}$${Math.abs(amount)}`;
    transactionHistory.appendChild(listItem);
}

function makeTransaction() {
    const amountInput = document.getElementById('amount');
    const amount = parseInt(amountInput.value);

    if (isNaN(amount)) {
        alert('Please enter a valid amount.');
        return;
    }

    updateBalance(amount);
    addTransactionToHistory(amount);

    amountInput.value = '';
}
