if(process.env.NODE_ENV === 'production'){
    modult.exports = require('./dist/common-utils.min.js')
}else{
    modult.exports = require('./dist/common-utils.js')
}