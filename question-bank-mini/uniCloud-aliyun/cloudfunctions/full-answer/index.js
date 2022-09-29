'use strict';
const db = uniCloud.database();
const dbCmd = db.command
exports.main = async (event, context) => {
	const res = await db.collection("answer_questions").where({
		"paper_id": event.paper_id
	}).get()

	var data = res.data
	if (event.user_id) {
		const collect = await db.collection('topic-collect').where({
			"user_id": event.user_id
		}).get()
		data = setCollect(data, collect.data)
	}


	data.sort((a, b) => {
		return a.No - b.No
	})

	//返回数据给客户端
	return {
		code: 200,
		msg: "查询成功",
		data: data
	}
};

function setCollect(data, collectData) {
	for (let item of data) {
		let _index = collectData.findIndex(c => c.topic_id == item._id)
		if (_index > -1) {
			item.userFavor = true;
		} else {
			item.userFavor = false;
		}
	}
	return data;
}
