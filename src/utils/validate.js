export const checkValidData = (email, password) => {
    // Your validation logic here
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = password.length >= 8;

    if (!isEmailValid)
        return { error: true, message: 'Invalid Email' };

    if (!isPasswordValid) {
        return { error: true, message: 'Password should be at least 8 characters long' };
    }

    return { error: false, message: '' };
}