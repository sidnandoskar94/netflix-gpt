// FirebaseAuthService.js
import { AuthServiceInterface } from './AuthServiceInterface';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

import { firebaseAuth, app, analytics } from '../../config/firebase';

class FirebaseAuthService extends AuthServiceInterface {
    constructor() {
        super();
        this.auth = firebaseAuth;
        this.app = app;
        this.analytics = analytics;
    }

    async signUp(email, password) {
        return createUserWithEmailAndPassword(this.auth, email, password)
            .then((userCredential) => {
                // this.analytics.logEvent('user_signed_up', { user_id: userCredential.user.uid });
                return userCredential.user;
            })
            .catch((error) => {
                throw error;
            });
    }

    async signIn(email, password) {
        return signInWithEmailAndPassword(this.auth, email, password)
            .then((userCredential) => {
                return userCredential.user;
            })
            .catch((error) => {
                throw error;
            });

    }

    async signOut() {
        return signOut(this.auth).then(() => {
            console.log("signed out!");
        }).catch((error) => {
            throw error;
        });

    }

    async getCurrentUser() {
        throw new Error("getCurrentUser method must be implemented");
    }

    async updateUserProfile(user, userName, profileURL) {
        return updateProfile(user, { displayName: userName, photoURL: profileURL }).then(() => {
            console.log('Profile updated!');

        }).catch((error) => {
            throw error;
        });

    }
}

// Export the service instance
const firebaseAuthService = new FirebaseAuthService();
export default firebaseAuthService;