const Config = require("./config");
const { ObjectID } = require("mongodb");
const MongoClient = require("mongodb").MongoClient;
const Client = new MongoClient(
  `mongodb://${Config.userName}:${Config.password}@${Config.host}:${Config.port}/${Config.authSource}`,
  { useUnifiedTopology: true }
);

class Db {
  static getInstance() {
    if (!Db.instance) {
      Db.instance = new Db();
    }
    return Db.instance;
  }
  constructor() {
    this.client = "";
    // this.connect();
  }

  connect() {
    return new Promise((resolve, reject) => {
      if (!this.client) {
        Client.connect((err) => {
          if (err) {
            reject(err);
            //   throw err;
          }
          this.client = Client.db(Config.dbName);
          resolve(Client.db(Config.dbName));
        });
      } else {
        resolve(this.client);
      }
    });
  }
  find(collectionName, json) {
    //console.log(json);
    return new Promise((resolve, reject) => {
      this.connect().then(
        (db) => {
          let result = db.collection(collectionName).find(json);

          result.toArray((err, result) => {
            if (err) {
              reject(err);
            } else {
              //console.log(result)
              resolve(result);
            }
          });
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
  insert(collectionName, json) {
    return new Promise((resolve, reject) => {
      this.connect().then(
        (db) => {
          db.collection(collectionName).insertOne(json, (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
  update(collectionName, old_json, new_json) {
    return new Promise((resolve, reject) => {
      this.connect().then(
        (db) => {
          db.collection(collectionName).updateOne(
            old_json,
            { $set: new_json },
            (err, result) => {
              if (err) {
                reject(err);
              } else {
                resolve(result);
              }
            }
          );
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  delete(collectionName, json) {
    return new Promise((resolve, reject) => {
      this.connect().then(
        (db) => {
          db.collection(collectionName).removeOne(json, (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        },
        (err) => {}
      );
    });
  }
  count(collectionName, json) {
    return new Promise((resolve, reject) => {
      this.connect().then(
        (db) => {
          db.collection(collectionName).count(json, (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
  pagination(collectionName, json, page) {
    //console.log(json);
    return new Promise((resolve, reject) => {
      this.connect().then(
        (db) => {
          let result = db
            .collection(collectionName)
            .find(json)
            .sort({ date: -1 })
            .limit(10)
            .skip(page * 10);

          result.toArray((err, result) => {
            if (err) {
              reject(err);
            } else {
              //console.log(result)
              resolve(result);
            }
          });
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
  hotArticle(collectionName, json) {
    return new Promise((resolve, reject) => {
      this.connect().then(
        (db) => {
          let result = db
            .collection(collectionName)
            .find(json)
            .sort({ time: -1 })
            .limit(10);

          result.toArray((err, result) => {
            if (err) {
              reject(err);
            } else {
              //console.log(result)
              resolve(result);
            }
          });
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
}

module.exports = Db.getInstance();
