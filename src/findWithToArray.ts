import createConnection from "./createConnection";

(async () => {
  console.time("duration");

  console.time("connection");
  const connection = await createConnection();
  console.timeEnd("connection");

  const dbName = process.env.DB_NAME as string;
  const collectionName = process.env.COLLECTION_NAME as string;
  const collection = connection.db(dbName).collection(collectionName);

  console.time("find");
  const allItemsInCollection = await collection.find({}).toArray();
  console.timeEnd("find");
  console.log("collection size ", allItemsInCollection.length);

  console.timeEnd("duration");
  process.exit();
})();
