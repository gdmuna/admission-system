const router = require('express').Router();
module.exports = router;

const memberManageService = require('../service/memberManageService');



/******
 * @interface : 获取成员列表
 * @description : 获取所有成员的确认概况
 * @method : POST
 * @param {*}
 * @return {*}
 */
router.post('/getMemberList', async (req, res, next) => {
    const memberList = await memberManageService.getMemberList();
    res.ResultVO(0, '获取成员列表成功', memberList);
});

/******
 * @interface : 获取成员详细信息
 * @description : 通过 url_param 换取成员信息
 * @method : POST
 * @param {*}
 * @return {*}
 */
router.post('/getMemberInfo', async (req, res, next) => {
    const memberInfo = await memberManageService.getMemberInfo(req.body.urlParam);
    res.ResultVO(0, '获取成员详细信息成功', memberInfo);
});

/******
 * @interface : 确认加入
 * @description : 通过 uuid 作为凭证确认成员的加入请求
 * @method : POST
 * @param {*}
 * @return {*}
 */
router.post('/confirmJoin', async (req, res, next) => {
    await memberManageService.confirmJoin(req.body.uuid);
    res.ResultVO(0, '确认加入成功');
});

/******
 * @interface : 重置所有人的确认状态
 * @description : 将所有人的确认状态设为 0
 * @method : POST
 * @param {*}
 * @return {*}
 */
router.post('/resetState', async (req, res, next) => {
    await memberManageService.resetState();
    res.ResultVO(0, '重置确认状态成功');
});
