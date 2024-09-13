function random_email() {
    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let email = '';
    for (let _ = 0; _ < 10; _++) email += CHARS[Math.round(Math.random() * CHARS.length)];
    email += '@gmail.com';
    return email;
}

module.exports = {random_email: random_email}
