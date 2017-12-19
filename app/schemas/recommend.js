// 模式： 此文件用于定义数据库字段类型

var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var RecommendSchema = new Schema({
	movie : {
		type : ObjectId,
		ref : 'Movie'
	},
	comment : String,
	meta : {
		createAt : {
			type : Date,
			dafault : Date.now()
		},
		updateAt : {
			type : Date,
			deault : Date.now()
		}
	}
})

//每次存取数据调用此方法
RecommendSchema.pre('save',function(next){
	if ( this.isNew ) {
		this.meta.createAt = this.meta.updateAt = Date.now()
	}
	else{
		this.meta.updateAt = Date.now();
	}
	next();
})

RecommendSchema.statics = {
	fetch : function(cb){//取出数据库目前所有数据
		return this
			.find({})
			.sort('meta.updateAt')
			.exec(cb)
	},
	findById : function(id, cb){//取出单条数据
		return this
			.findOne({ _id : id})
			.exec(cb)
	}
}
module.exports = RecommendSchema;