const password = prompt('please enter a password');

if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log('Valid password')
    } else {
        console.log('Password cannot contain spaces')
    }
} else {
    console.log("PASSWORD TOO SHORT! Must be 6+ characters")
}
