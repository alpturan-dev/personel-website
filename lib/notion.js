const { Client } = require('@notionhq/client');

const notion = new Client({ auth: "secret_LjEilydhb17KxtbvfrA2r5RqPWaV7B0LPm8CGxsKsVb" });

export const getDatabase = async () => {
    const databaseId = 'fee3b42d3ce048a6930c459456243a53';
    const response = await notion.databases.query({ database_id: databaseId });
    console.log(response);
    return response
}
