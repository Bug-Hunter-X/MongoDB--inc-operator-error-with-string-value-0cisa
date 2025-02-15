```javascript
// Incorrect usage of $inc operator in MongoDB update operation
db.collection('myCollection').updateOne( { "_id": ObjectId("651968576216000000000001") }, { $inc: { "counter": "1" }});
```