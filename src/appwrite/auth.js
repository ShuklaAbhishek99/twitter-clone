import config from "../config/config-env";
import { Client, Account, ID } from "appwrite";

class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteEndpoint)
            .setProject(config.appwriteProjectId);

        this.account = new Account(this.client);
    }

    // all auth services
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );
            // when account is created forward to login
            if (userAccount) {
                // call another method for login
            } else {
                console.log("Error creating Account");
                return false;
            }
        } catch (error) {
            console.log("Appwrite service :: createAccount :: error", error);
            return false;
        }
    }

    async login({ email, password }) {
        try {
            console.log("User logged In");
            return this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log("Appwrite service :: login :: error", error);
            return false;
        }
    }

    async logout() {
        try {
            console.log("User Logged Out");
            await this.account.deleteSession("current");
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
            return false;
        }
    }

    // if user is already logged in
    async getCurrentUser() {
        try {
            console.log("user exists");
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: currentUser :: error", error);
            return false;
        }
    }
}

const authService = new AuthService();

export default authService;
