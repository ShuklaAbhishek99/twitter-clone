const config = {
    appwriteEndpoint: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),

    // Collections
    appwriteUsersCollectionId: String(
        import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID
    ),

    // Buckets
    appwriteAvatarsId: String(import.meta.env.VITE_APPWRITE_AVATARS_ID),
    appwriteProfileCoversId: String(
        import.meta.env.VITE_APPWRITE_PROFILE_COVERS_ID
    ),
    appwriteTweetMediaId: String(import.meta.env.VITE_APPWRITE_TWEET_MEDIA_ID),
};

export default config;
