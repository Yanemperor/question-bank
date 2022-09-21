'use strict';
const db = uniCloud.database();
const dbCmd = db.command
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	// const collection = db.collection('answer_questions')
	// const res = await collection.where({
	// 	"paper_type": event.paper_type,
	// 	"type": event.type,
	// 	"typeName": event.typeName
	// }).get()
	let count = event.count ? event.count : 10
	const res = await db.collection('answer_questions')
		.aggregate()
		.match({
			"paper_type": event.paper_type,
			"type": event.type,
			"typeName": event.typeName
		})
		.sample({
			size: count
		})
		.end()

	//返回数据给客户端
	return {
		code: 200,
		msg: "查询成功",
		data: res.data
	}
};
