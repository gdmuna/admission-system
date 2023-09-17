# 接口文档

- 获取成员列表

| API Name     | 获取成员列表                                               |
| ------------ | ---------------------------------------------------------- |
| Description  | 获取所有成员的确认概况，用于查看哪些人已确认，哪些人未确认 |
| Method       | POST                                                       |
| Path         | /api/memberManage/getMemberList                            |
| Content-Type | application/json                                           |
| Headers      | secret                                                     |
| Body         | <None>                                                     |
| Response     | [{org, stuId, stuName, admissionStatus}, ......]           |

- 获取成员详细信息

| API Name     | 获取成员详细信息                                             |
| ------------ | ------------------------------------------------------------ |
| Description  | 通过 url_param 换取成员信息，url_param 来自邮件或短信的确认链接，用户点击确认链接后，前端可捕获到该 url_param，并在这个接口中传递给后端 |
| Method       | POST                                                         |
| Path         | /api/memberManage/getMemberInfo                              |
| Content-Type | application/json                                             |
| Headers      | <None>                                                       |
| Body         | urlParam                                                     |
| Response     | {stuId, stuName, admissionStatus, uuid}                      |

- 确认加入

| API Name     | 确认加入                                                     |
| ------------ | ------------------------------------------------------------ |
| Description  | 通过 uuid 作为凭证确认成员的加入请求，uuid 来自 /getMemberInfo 接口的响应内容 |
| Method       | POST                                                         |
| Path         | /api/memberManage/confirmJoin                                |
| Content-Type | application/json                                             |
| Headers      | <None>                                                       |
| Body         | uuid                                                         |
| Response     | <None>                                                       |

- 重置所有人的确认状态

| API Name     | 重置所有人的确认状态                                 |
| ------------ | ---------------------------------------------------- |
| Description  | 将所有人的确认状态设为 0，用于将数据库设为初始化状态 |
| Method       | POST                                                 |
| Path         | /api/memberManage/resetState                         |
| Content-Type | application/json                                     |
| Headers      | secret                                               |
| Body         | <None>                                               |
| Response     | <None>                                               |
