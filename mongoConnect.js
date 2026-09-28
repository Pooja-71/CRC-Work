let { MongoClient } = require("mongodb");

console.log(MongoClient);

let client = new MongoClient(
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.12.0",
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

  // let db2 = client.db("CSE");
  // let result = await db2pwd.collection("student").find({ branch: "CSE" }, { projection: { _id: 0 } }).toArray();
  // console.log(result.name);
  // let finalname = Data.name || "name not provided"
  // console.lof(finalname);


  let db2 =  client.db('CSE');
  let users = db.collection('users');
  await users.insertOne({userName: 'ravi', email:'ravi@gmail.com', password: '1234', gender:"M"});

  console.log(result);
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
