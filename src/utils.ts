import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgresql://neondb_owner:RAWtHdXFG89U@ep-billowing-recipe-a5wbllc6.us-east-2.aws.neon.tech/neondb?sslmode=require");
    await client.connect();
    return client;
}