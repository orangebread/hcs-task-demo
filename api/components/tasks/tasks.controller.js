
exports.getAllTasks = async (req, res) => {
    try {
        res.json({ success: true});
    } catch (error) {
        res.json({ success: false, message: error, result: 'Could not find movies' });
    }
}

exports.getTaskById = async (req, res) => {
    try {
        res.json({ success: true});
    } catch (error) {
        res.json({ success: false, message: error, result: 'Could not find movie' });
    }
}

exports.createTask = async (req, res) => {
    try {
        res.json({ success: true});
    } catch (error) {
        console.log('err', error);
        res.json({ success: false, message: 'Error adding movie'});
    }  
    
}

exports.deleteTask = async (req, res) => {
    try {
        res.json({ success: true});
    } catch (error) {
        res.json({ success: false, message: error, result: 'Could not find movie' });
    }
}

exports.updateTask = async (req, res) => {
    try {
        res.json({ success: true});
    } catch (error) {
        console.log('err', error);
        res.json({ success: false, message: 'Error updating movie'});
    }
}