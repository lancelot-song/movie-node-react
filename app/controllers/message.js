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
				return res.json(message);
			})
		});
	}
	else{
		let message = new Message(_message);
		message.save(function(err, msg){
			if(err){
				console.log(err)
			}
			Message
				.findOne({ "_id" : msg._id})
				.populate('from', 'name')
				.exec(function(err, msg){
					return res.json(msg)
				});
		});
	}

}
exports.items = function(req, res){
	Message
		.find({})
		.populate('from', 'name')
		.populate('reply.from reply.to', 'name')
		.sort({"_id":-1})
		.exec(function(err, messages){
			if(err) console.log(err);
			console.log(messages)
			return res.json(messages);
		});
}