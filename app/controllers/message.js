var Message = require('../models/message');

exports.save = function(req, res){
	var _message = req.body.message,
		message = new Message(_message);
		
	message.save(function(err, message){
		if(err){
			console.log(err)
		}
		res.json(message)
	});
}
exports.items = function(req, res){
	Message
		.find({})
		.populate('from', 'name')
		.exec(function(err, messages){
			if(err) console.log(err);
			console.log(messages)
			return res.json(messages);
		});
}