// 获取系统参数
const sys_params = require('config').get('sysParams');

// 需要密码保护的 API 名单
const apiProtectedList = [
    '/api/memberManage/getMemberList',
    '/api/memberManage/resetState'
];

// API 密码保护中间件
const apiProtected = (req, res, next) => {
    const path = req.path; // 获取请求的路径
    if (apiProtectedList.includes(path)) { // 判断请求的路径是否在保护名单中
        if (req.headers.secret !== sys_params.secret) {
            res.ResultVO(1, 'Unauthorized');
            return;
        }
    }
    next();
};

module.exports = apiProtected;