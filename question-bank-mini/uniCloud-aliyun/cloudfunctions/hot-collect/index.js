'use strict';
const db = uniCloud.database();
const dbCmd = db.command
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)

	const answer = await db.collection('answer_questions').where({
		_id: dbCmd.in(event.items)
	}).get()
	var answers = answer.data
	if (event.user_id) {
		const collect = await db.collection('topic-collect').where({
			user_id: event.user_id,
			topic_id: dbCmd.in(event.items)
		}).get()
		var collects = collect.data
		for (let item of answers) {
			item.userFavor = false
			for (let item2 of collects) {
				if (item._id === item2.topic_id) {
					item.userFavor = true;
					break
				}
			}
		}
	}
	console.log('answers : ', answers)
	//返回数据给客户端
	return {
		code: 200,
		msg: "查询成功",
		data: answers
	}
};
