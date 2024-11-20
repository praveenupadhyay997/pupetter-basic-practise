const puppeteer = require('puppeteer');

// Example iOS 17 user agent string
const iOS17UserAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';

// Define session cookie details
const sessionCookie = {
    name: 'session',
    value: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJleHBsb3JlLWlhbSIsImV4cCI6MTcyOTUwMDg0NywiaWF0IjoxNzI5NTAwNTQ3LCJkYXRhIjp7ImV4dGVybmFsSWQiOiJDWFUtSDZFSEY3NVMzUCIsImNhcmRzIjpbImFpU3RvcmUiLCJhaVN0b3JlSW9zIiwieW91cm11bnNoaSIsInF1ZXN0cyIsIndlbGxuZXNzU2NhbiJdLCJjYXJkRGV0YWlscyI6W10sInN1YkNvaG9ydHMiOm51bGx9fQ.rNrGNNz4wO4iE-7oyG3AtfwBS86AdPSjTGI1n5SqCCXIfWK8GUKqmnQeEHHoOyNujrN4O3qUGD3NuCiemE96FQ6A9DVT1laBE-N3oy5L-NaEmdTS2pR91FsIEJqLBVtCLSQbgmifg3XSJiojJRv_396HObhmM-4Z-fqUK-i8YRr35SlgJs_-v0Gq8sqy5f6oMyqlOUmXXbRwssl_AxXOkObzeeqrOIxruvBxMZBa_Jmrf1VQd384xqtHLxEERUfYbzCYFJGQmgZVbo7M3LP3tiol4NzBzHZPHJc61QGVA0HC0KCKyCXO06oVQnEcrbLgKxXu_ZKMUOz8jvw3scSv0IMzHJqoSR24NxFlyPgghgahPzxAWIcWFQiv1RH_J3jSaKFnUG3Dw8IhJdwuZwET57dO9V4ogv2uOJBMgnbyglqk3_QVif25hP2p80gJB6McacyopZeTd-Ivdz-3TXhFZyso5WOiwKN_u7FIhKIfJmD_ALJLo_y5IGMap3aVVnyYMXp1daWFdL76OpSxAlNwVdqma0XHgU_13Xpr1KIbxchRlUeaxRoPmvYWATukK2KCmOwZHwbWYz_tqIzzgIrfx4DrJAZm39t7sScH5Vl3WECo3cKNzMsTR8FbQsSwdzDvBZY-fO2535WtLKgG91HYfj7ZzRSqmbQUoU4aiIQW10s',
    domain: '.circles.life',
    path: '/',
    httpOnly: true,
    secure: true
};

(async () => {
    // Launch the browser
    const browser = await puppeteer.launch({ headless: false }); // Set headless to false to see the browser
    const page = await browser.newPage();

    // Set the user agent to iOS 17
    await page.setUserAgent(iOS17UserAgent);

    // Navigate to the website
    await page.goto('https://wellness-tracker.circles.life/wellness-tracker');

    // Set the session cookie
    await page.setCookie(sessionCookie);

    // Refresh the page to apply the cookie
    await page.reload();
})();
