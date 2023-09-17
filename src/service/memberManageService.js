const memberManageDao = require('../dao/memberManageDao');

// 获取成员列表
exports.getMemberList = async () => {
    const memberList = await memberManageDao.getMemberList();
    return memberList;
}

// 获取成员详细信息
exports.getMemberInfo = async (urlParam) => {
    const memberInfo = await memberManageDao.getMemberInfo(urlParam);
    return memberInfo;
}

// 确认加入
exports.confirmJoin = async (uuid) => {
    await memberManageDao.confirmJoin(uuid);
}

// 重置所有人的确认状态
exports.resetState = async () => {
    await memberManageDao.resetState();
}
