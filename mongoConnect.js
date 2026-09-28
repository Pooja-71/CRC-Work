let { MongoClient } = require("mongodb");

console.log(MongoClient);

let client = new MongoClient(
  "",
);

//console.log(client);

let connectDB = async ()=>{
try {
  await client.connect();
  console.log("MongoDB Client connected Successfully...");

  // let db = client.db().admin().listDatabases();
  // console.log(await db);

  // console.table((await db).databases);
  // (await db).databases.forEach(data=> console.log(data.name));

  // let db1 = client.db('CSES'); // use CSE&DS;
  // let collectionList = await db1.listCollections().toArray();
  // console.log(collectionList);
  // console.table(collectionList);
  // collectionList.forEach(coll => console.log(coll.name));

  // let db2 = client.db('CSE');
  // let result = await db2.collection('employees').findOne();
  // console.log(result.name);

  // let db2 = client.db("CSE");
  // let result = await db2.collection("student").findOne();
  // console.log(result.name);

  let db2 = client.db("CSE");
  let result = await db2pwd.collection("student").find({ branch: "CSE" }, { projection: { _id: 0 } }).toArray();
  console.log(result.name);


} 
catch (err) {
  console.log(err);
} 
finally {
await client.close();
  console.log("Connection closed successfully...");
}
}
connectDB();
