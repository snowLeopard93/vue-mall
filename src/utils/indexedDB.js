let db;
export function initDB() {
  let request = indexedDB.open("vue-mall");
  request.onerror = function(event) {
    console.log("数据库打开报错", event);
  };
  request.onsuccess = function(event) {
    db = event.target.result;
    console.log("数据库打开成功", event);
  };
  request.onupgradeneeded = function(event) {
    let db = event.target.result;
    let userStore = db.createObjectStore("user", {
      keyPath: "key"
    });
    console.log(userStore);
  };
}

export function add(table, data) {
  let request = db
    .transaction([table], "readwrite")
    .objectStore(table)
    .add(data);
  return request;
}

export function read(table) {
  let transaction = db.transaction([table]);
  let objectStore = transaction.objectStore(table);
  let request = objectStore.getAll();
  return request;
}
