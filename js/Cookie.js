// Function to set a cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
    displayCookie();
}

// Function to get a cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Function to display the cookie
function displayCookie() {
    const cookieValue = getCookie('username');
    const cookieDisplayElement = document.getElementById('cookieValue');
    if (cookieValue) {
        cookieDisplayElement.textContent = "Cookie Value: " + cookieValue;
    } else {
        cookieDisplayElement.textContent = "No cookie set.";
    }
}

// Display the cookie value when the page loads
document.addEventListener('DOMContentLoaded', (event) => {
    displayCookie();
});
