// 打开数据库文件
const sqlite = require('better-sqlite3');
const e = require('cors');
const db_file = new sqlite('db-sqlite.db', {
    readonly: false, // 以只读模式打开数据库连接
    fileMustExist: false, // 如果数据库不存在，将抛出异常而不是创建新文件
    verbose: console.log // 提供一个函数，该函数与数据库连接执行的每个 SQL 字符串一起调用
});

// 封装 SELECT 操作
exports.select = async (sql, sqlParams) => {
    try {
        const stmt = db_file.prepare(sql);
        const result = sqlParams ? stmt.all(sqlParams) : stmt.all();
        return result;
    } catch (err) {
        return err;
    }
}

// 封装 UPDATE 操作
exports.update = async (sql, sqlParams) => {
    try {
        const stmt = db_file.prepare(sql);
        const result = sqlParams ? stmt.run(sqlParams) : stmt.run();
        return result;
    } catch (err) {
        return err;
    }
}