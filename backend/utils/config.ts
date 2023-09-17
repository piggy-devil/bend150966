import dotenv from 'dotenv';

dotenv.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';

export const PORT = process.env.PORT || 5555;
export const NODE_ENV = process.env.NODE_ENV || 'development';
export const MONGO_URI =
    `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.sma5shn.mongodb.net/backend` ||
    null;
