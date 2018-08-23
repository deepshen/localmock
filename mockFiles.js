const mock = {}
const fs = require('fs');
(function readMock (fileName) {
  fs.readdirSync(require('path').join(__dirname+'/'+fileName)).forEach(function (file) {
    var stats = fs.statSync('./'+fileName+'/'+file);
    if(stats.isFile()){
      Object.assign(mock,require('./'+fileName+'/'+file))
    }else {//文件夹
      var next = fileName+'/'+file;
      readMock(next);
    }
  });
})('mock');
module.exports = mock