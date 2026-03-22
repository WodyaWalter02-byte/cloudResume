const { app } = require('@azure/functions');
const { CosmosClient } = require("@azure/cosmos");

// Ensure this matches the name in your Environment Variables exactly
const connectionString = process.env["CosmosDbConnectionString"];

app.http('GetResumeCounter', {
    methods: ['GET'],
    authLevel: 'function',
    handler: async (request, context) => {
        try {
            const client = new CosmosClient(connectionString);
            const database = client.database("AzureResume");
            const container = database.container("Counter");

            // Read item where id is "1" and partition key is "1"
            const { resource: item } = await container.item("1", "1").read();

            if (!item) {
                return { status: 404, body: "Counter item not found." };
            }

            // The actual logic: increment by 1
            item.count += 1;

            // Save the update back to Cosmos DB
            const { resource: updatedItem } = await container.item("1", "1").replace(item);

            return { 
                status: 200, 
                jsonBody: { count: updatedItem.count },
                headers: {
                    "Access-Control-Allow-Origin": "*" // Extra safety for CORS
                }
            };
        } catch (error) {
            context.error(`Error details: ${error.message}`);
            return { status: 500, body: `Server Error: ${error.message}` };
        }
    }
});
