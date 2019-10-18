const mongoose = require('mongoose');
mongoose.connect(`${process.env.MONGODB_URI}/${process.env.MONGODB_NAME}` || 'mongodb://localhost:27017/hcs-demo', {
     useUnifiedTopology: true, 
     useCreateIndex: true, 
     useNewUrlParser: true 
    });
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../components/user/user.model'),
    Task: require('../components/task/task.model')
};