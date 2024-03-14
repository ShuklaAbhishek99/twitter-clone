import config from "../config/config-env";
import { Client, Databases, Storage } from "appwrite";

class TweetService {
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

    // all tweet services
    async createTweet() {
        try {
            return await this.databases.createDocument();
        } catch (error) {
            console.log("Appwrite service :: createAccount :: error", error);
            return false;
        }
    }

    async getTweet() {
        try {
            return await this.databases.getDocument();
        } catch (error) {
            console.log("Appwrite service :: getTweet :: error", error);
            return false;
        }
    }

    async updateTweet() {
        try {
            return await this.databases.updateDocument();
        } catch (error) {
            console.log("Appwrite service :: updateTweet :: error", error);
            return false;
        }
    }

    async deleteTweet() {
        try {
            return await this.databases.deleteDocument();
        } catch (error) {
            console.log("Appwrite service :: deleteTweet :: error", error);
            return false;
        }
    }

    async getAllTweets() {
        try {
            return await this.databases.listDocuments();
        } catch (error) {
            console.log("Appwrite service :: getAllTweets :: error", error);
            return false;
        }
    }

    // all file handling services
    async uploadTweetFile() {
        try {
            return await this.storage.createFile();
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false;
        }
    }

    async deleteTweetFile() {
        try {
            return await this.storage.deleteFile();
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }

    getTweetMediaPreview() {
        try {
            return this.storage.getFilePreview();
        } catch (error) {
            console.log("Appwrite service :: getMediaPreview :: error", error);
            return false;
        }
    }
}

const tweetService = new TweetService();

export default tweetService;
