const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const CategorySchema = new Schema({
	name : String,
	movies : [ { type : ObjectId, ref:'Movie' } ],
	meta : {
		createAt : {
			type : Date,
			default : Date.now()
		},
		updateAt : {
			type : Date,
			default : Date.now()
		}
	}
});

CategorySchema.pre('save', function(next){
	if(this.isNew){
		this.meta.createAt = this.meta.updateAt = Date.now();
	}
	else{
		this.meta.updateAt = Date.now();
	}
	next();
});

CategorySchema.statics = {
	fetch : function(ex){
		return this
				.find({})
				.sort('meta.updateAt')
				.exec(ex);
	},
	findById : function(_id, cb){
		return this
				.find({ _id:_id})
				.exec(cb)
	}
}

module.exports = CategorySchema;