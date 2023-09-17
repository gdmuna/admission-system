const db = require('../utils/dbHelper_mariadb');

// 获取成员列表
exports.getMemberList = async () => {
    const sql = `
        SELECT
            org,
            department,
            stu_id AS stuId,
            stu_name AS stuName,
            url_param AS urlParam,
            admission_status AS admissionStatus
        FROM
            member_list
    `;
    return await db.query(sql);
};

// 获取成员详细信息
exports.getMemberInfo = async (urlParam) => {
    const sql = `
        SELECT
            stu_id AS stuId,
            stu_name AS stuName,
            org,
            department,
            admission_status AS admissionStatus,
            uuid
        FROM
            member_list
        WHERE
            url_param = ?
    `;
    const sqlParams = [
        urlParam
    ];
    return await db.query(sql, sqlParams);
};

// 确认加入
exports.confirmJoin = async (uuid) => {
    const sql = `
        UPDATE
            member_list
        SET
            admission_status = 1
        WHERE
            uuid = ?
    `;
    const sqlParams = [
        uuid
    ];
    return await db.query(sql, sqlParams);
};

// 重置所有人的确认状态
exports.resetState = async () => {
    const sql = `
        UPDATE
            member_list
        SET
            admission_status = 0
    `;
    return await db.query(sql);
};
