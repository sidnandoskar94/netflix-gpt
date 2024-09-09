export class AuthServiceInterface {
    async signUp(email, password, name) {
        throw new Error("signUp method must be implemented");
    }

    async signIn(email, password) {
        throw new Error("signIn method must be implemented");
    }

    async signOut() {
        throw new Error("signOut method must be implemented");
    }

    async getCurrentUser() {
        throw new Error("getCurrentUser method must be implemented");
    }
}