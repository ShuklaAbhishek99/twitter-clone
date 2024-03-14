import config from "../config/config-env";
import { Client, Databases, Storage } from "appwrite";

class UserService {
    client = new Client();
    databases;
    storage;

    constructor() {
        this.client
            .setEndpoint(config.appwriteEndpoint)
            .setProject(config.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    // ---------------------- all user services ----------------
    async createProfile() {
        try {
            return this.databases.createDocument();
        } catch (error) {
            console.log("Appwrite service :: createProfile :: error", error);
            return false;
        }
    }

    async getProfile() {
        try {
            return this.databases.getDocument();
        } catch (error) {
            console.log("Appwrite service :: getProfile :: error", error);
            return false;
        }
    }

    async updateProfile() {
        try {
            return this.databases.updateDocument();
        } catch (error) {
            console.log("Appwrite service :: updateProfile :: error", error);
            return false;
        }
    }

    async deleteProfile() {
        try {
            return this.databases.deleteDocument();
        } catch (error) {
            console.log("Appwrite service :: deleteProfile :: error", error);
            return false;
        }
    }

    // -------------------------- all file handling services -----------------------
    async uploadProfileFile() {
        try {
            return this.storage.createFile();
        } catch (error) {
            console.log("Appwrite service :: uploadProfileFile :: error", error);
            return false;
        }
    }

    async updateProfileFile() {
        try {
            return this.storage.updateFile();
        } catch (error) {
            console.log("Appwrite service :: updateProfileFile :: error", error);
            return false;
        }
    }

    async deleteProfileFile() {
        try {
            return this.storage.deleteFile();
        } catch (error) {
            console.log("Appwrite service :: deleteProfileFile :: error", error);
            return false;
        }
    }

    getProfileMediaPreview() {
        try {
            return this.storage.getFilePreview();
        } catch (error) {
            console.log("Appwrite service :: getProfileMediaPreview :: error", error);
            return false;
        }
    }
}

const userService = new UserService();

export default userService;
