const Mock = require('mockjs')
const Random = Mock.Random;

module.exports = {
  'GET /mytest':(req, res) => {
    return res.json({
      status: 'success',
      code: 0,
      message: '成功2',
      data: {
        id: 1,
        name: '杨圆建',
      }
    });
  },
  'GET /abc':(req,res)=>{
    res.json(Mock.mock({
      'data|8': [{
        name: Random.ctitle(8,18),
        'id|1-100': 1,
        'count|1-10': 1,
        'cover': Random.image('64x64', '#00405d', '#FFF', 'image'),
        'cost_price|5-22.1-2': 10.1,
        'suggested_price|22-42.1-2': 10.1
      }],
    }),)
  },
  'GET /test':(req, res) => {
    return res.json({
      status: 'success',
      code: 0,
      message: '成功4',
      data: {
        id: 1,
        name: '杨圆建1',
      }
    });
  },
}