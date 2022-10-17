'use strict';
const db = uniCloud.database();
const dbCmd = db.command
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)

	let res = await db.collection('answer_questions')
		.aggregate()
		.lookup({
			from: 'wrong-topic', //要联查哪个表
			localField: '_id', //本表字段
			foreignField: 'topic_id', //关联字段
			as: 'topic_id' //别名
		})
		.match({ //关联表查询条件
			topic_id: {
				paper_type: event.paper_type,
				user_id: event.user_id
			}
		})
		.end()

	var data = res.data
	for (let item of data) {
		item.isUserWrong = true;
	}

	//返回数据给客户端
	return {
		code: 200,
		msg: "查询成功",
		data: data
	}
};
