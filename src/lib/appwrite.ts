/**
 * @copyright 2025 notesy.ai
 * @license Apache-2.0
 * @description AppWrite
 */

import { Client, Databases, ID, Query} from 'appwrite';

const APPWRITE_PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID || 'notesyai';

const client = new Client()
client.setProject(APPWRITE_PROJECT_ID)
client.setEndpoint('https://nyc.cloud.appwrite.io/v1')

const databases = new Databases(client);

export { databases, ID, Query}