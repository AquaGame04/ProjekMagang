document.addEventListener('DOMContentLoaded', function () {
    // Redirect to payment page with selected package details
    document.getElementById('packageForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const game = document.getElementById('game').value;
        const package = document.getElementById('package').value;
        window.location.href = `Payment.html?game=${encodeURIComponent(game)}&package=${encodeURIComponent(package)}`;
    });

    // Extract the game parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const game = urlParams.get('game');

    const gameTitle = document.querySelector('.game-title');
    const packageSelect = document.querySelector('.package-select');

    const packages = {
        MLBB: ['10 Diamonds', '50 Diamonds', '100 Diamonds', '500 Diamonds'],
        PUBG: ['60 UC', '300 UC', '600 UC', '1500 UC'],
        Genshin: ['60 Primogems', '300 Primogems', '980 Primogems', '1980 Primogems'],
        EpEp: ['60 Diamond', '300 Diamond', '600 Diamond', '1500 Diamond'],
        StarRail: ['60 Stellar', '300 Stellar', '980 Stellar', '1980 Stellar']
    };

    if (game && packages[game]) {
        gameTitle.textContent = `Top Up for ${game}`;
        packages[game].forEach(pkg => {
            const option = document.createElement('option');
            option.value = pkg;
            option.textContent = pkg;
            packageSelect.appendChild(option);
        });
    } else {
        gameTitle.textContent = 'Invalid Game Selected';
        packageSelect.innerHTML = '<option value="">No packages available</option>';
    }

    document.querySelector('.topup-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const selectedPackage = packageSelect.value;
        const paymentMethod = document.querySelector('.payment-method').value;
        alert(`Payment successful for ${game} (${selectedPackage}) using ${paymentMethod}!`);
        window.location.href = 'History.html';
    });

    const packageButtons = document.querySelectorAll('.package-button');
    const paymentButtons = document.querySelectorAll('.payment-button');
    const payNowButton = document.querySelector('.pay-now-button');

    let selectedPackage = null;
    let selectedPaymentMethod = null;

    // Add click event listeners to package buttons
    packageButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Highlight the selected package
            selectedPackage = button.querySelector('p').textContent;
            packageButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
        });
    });

    // Add click event listeners to payment buttons
    paymentButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Highlight the selected payment method
            selectedPaymentMethod = button.querySelector('p').textContent;
            paymentButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
        });
    });

    // Handle payment process
    payNowButton.addEventListener('click', () => {
        if (!selectedPackage) {
            alert('Please select a package.');
            return;
        }
        if (!selectedPaymentMethod) {
            alert('Please select a payment method.');
            return;
        }
        alert(`Payment successful for ${selectedPackage} using ${selectedPaymentMethod}!`);
        window.location.href = 'History.html';
    });
});

