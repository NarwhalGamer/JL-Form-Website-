// Auto-format expiry date as MM/YY when user types
document.addEventListener('DOMContentLoaded', function() {
    const expiryInput = document.getElementById('expiry');
    if (expiryInput) {
        expiryInput.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            this.value = value;
        });
    }

    // Restore accessibility preferences on page load
    if (localStorage.getItem('highContrast') === 'true') {
        document.body.classList.add('high-contrast');
    }
    if (localStorage.getItem('dyslexicFont') === 'true') {
        document.body.classList.add('dyslexic-font');
    }

    // Show cookie banner if not yet accepted
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookie-banner').style.display = 'flex';
    }
});

// Cookie consent
function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookie-banner').style.display = 'none';
}

// Tab switching for dashboards
function showTab(tabId) {
    const sections = document.querySelectorAll('.tab-section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(tabId).style.display = 'block';
    const links = document.querySelectorAll('.sidebar-link');
    links.forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
}

// Quantity selector on the product detail page
function changeQty(amount) {
    const input = document.getElementById('quantity');
    if (input) {
        const newVal = parseInt(input.value) + amount;
        const max = parseInt(input.max);
        if (newVal >= 1 && newVal <= max) {
            input.value = newVal;
        }
    }
}

// Show new category input if user selects Add new
function toggleNewCategory() {
    const select = document.getElementById('category-select');
    const newInput = document.getElementById('new-category');
    if (select.value === 'new') {
        newInput.style.display = 'block';
        newInput.required = true;
    } else {
        newInput.style.display = 'none';
        newInput.required = false;
    }
}

// Accessibility — high contrast mode
function toggleContrast() {
    document.body.classList.toggle('high-contrast');
    localStorage.setItem('highContrast', document.body.classList.contains('high-contrast'));
}

// Accessibility — font size controls
function increaseFontSize() {
    const current = parseFloat(getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = (current + 2) + 'px';
}

function decreaseFontSize() {
    const current = parseFloat(getComputedStyle(document.body).fontSize);
    if (current > 12) {
        document.body.style.fontSize = (current - 2) + 'px';
    }
}

// Accessibility — dyslexic friendly font Toggle
function toggleDyslexicFont() {
    document.body.classList.toggle('dyslexic-font');
    localStorage.setItem('dyslexicFont', document.body.classList.contains('dyslexic-font'));
}