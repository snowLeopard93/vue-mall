let db;
/* 初始化 indexedDb */
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
    let roleStore = db.createObjectStore("role", {
      keyPath: "key"
    });
    let noticeStore = db.createObjectStore("notice", {
      keyPath: "key"
    });
    console.log(userStore);
    console.log(roleStore);
    console.log(noticeStore);
  };
}

/* 添加数据 */
export function add(table, data) {
  let request = db
    .transaction([table], "readwrite")
    .objectStore(table)
    .add(data);
  return request;
}

/* 修改数据 */
export function modify(table, data) {
  let transaction = db.transaction([table], "readwrite");
  let objectStore = transaction.objectStore(table);
  let request = objectStore.put(data);
  return request;
}

/* 读取数据 */
export function read(table) {
  let transaction = db.transaction([table]);
  let objectStore = transaction.objectStore(table);
  let request = objectStore.getAll();
  return request;
}

/* 读取某一条数据 */
export function readOne(table, key) {
  let transaction = db.transaction([table]);
  let objectStore = transaction.objectStore(table);
  let request = objectStore.get(key);
  return request;
}

/* 删除一条数据 */
export function deleteOne(table, key) {
  let transaction = db.transaction([table], "readwrite");
  let objectStore = transaction.objectStore(table);
  let request = objectStore.delete(key);
  return request;
}
