import firebaseAuthService from './FirebaseAuthService';

class Auth {
    authService;

    constructor(authService) {
        this.authService = authService;
    }

    signUp(email, password) {
        return this.authService.signUp(email, password);
    }

    signIn(email, password) {
        return this.authService.signIn(email, password);
    }

    signOut() {
        return this.authService.signOut();
    }

    getCurrentUser() {
        return this.authService.getCurrentUser();
    }

    updateUserProfile(user, name, profileURL) {
        return this.authService.updateUserProfile(user, name, profileURL);
    }
}

const auth = new Auth(firebaseAuthService);
export default auth;