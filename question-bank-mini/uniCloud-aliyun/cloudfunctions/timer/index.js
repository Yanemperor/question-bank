'use strict';
const db = uniCloud.database();
const dbCmd = db.command
exports.main = async (event, context) => {
	// 6小时 21600000  1小时 3600000
	const SEARCHLOG_timeZone = 3600000; // 归纳搜索记录时间间隔，毫秒数，默认为最近7天
	const timeEnd = Date.now() - SEARCHLOG_timeZone;

	let res = await db.collection('uni-id-users').where({
	  is_hidden_ad: true,
	  last_look_ad_time: dbCmd.lt(timeEnd)
	}).update({
		is_hidden_ad: false,
	})
	
	return {
		code: 200,
		msg: "查询成功"
	}
	//返回数据给客户端
	return event
};
