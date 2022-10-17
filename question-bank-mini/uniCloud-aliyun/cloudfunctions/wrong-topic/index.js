'use strict';
const db = uniCloud.database();
const dbCmd = db.command
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)

	let res = await db.collection('wrong-topic').where({
		user_id: event.user_id
	}).get()

	// var data = res.data
	// var temp = []
	// for (var i = 0; i < event.wrongTopics.length; i++) {
	// 	var item = event.wrongTopics[i]
	// 	for (var j = 0; j < data.length; j++) {
	// 		var item1 = data[j]
	// 		 if (item.topic_id == item1.topic_id) {
	// 			 temp.push(item)
	// 		 }
	// 	}
	// }

	var list1 = event.wrongTopics
	var list2 = res.data

	list1 = list1.filter(item => {
		let idList = list2.map(v => v.topic_id)
		return !idList.includes(item.topic_id)
	})
	if (list1.length == 0) {
		return {
			code: "200",
			msg: "保存成功"
		}
	}

	let res1 = await db.collection('wrong-topic')
		.add(list1)
		
	if (res1.code == 200) {
		return {
			code: "200",
			msg: "保存成功"
		}
	} else{
		return {
			code: "200",
			msg: "保存失败"
		}
	}
};
