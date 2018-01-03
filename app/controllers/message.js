const Message = require('../models/message');

exports.save = function(req, res){
	const _message = req.body.message;

	if(_message.reply){
		Message.findById(_message.reply, function(err, message){
			let reply = {
				from : _message.from,
				to : _message.to,
				content : _message.content
			}
			message.reply.push(reply);
			message.save(function(err, message){
				if(err) console.log(err);
				return res.json({ state : 1 });
			})
		});
	}
	else{
		let message = new Message(_message);
		message.save(function(err, message){
			if(err){
				console.log(err)
			}
			res.json(message)
		});
	}

}
exports.items = function(req, res){
	Message
		.find({})
		.populate('from', 'name')
		.populate('reply.from reply.to', 'name')
		.exec(function(err, messages){
			if(err) console.log(err);
			console.log(messages)
			return res.json(messages);
		});
}