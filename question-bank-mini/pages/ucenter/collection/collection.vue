<template>
	<view class="content">
		<view class="cell-bg">
			<view v-for="(item, index) in items" :key="index">
				<view class="cell" @click="cellClick(item)">
					<view class="cell-left">
						<view class="cell-title">
							{{ item.title }}
						</view>
					</view>
					<u-icon name="arrow-right" color="#b2b2b2"></u-icon>
				</view>
				<u-line color="#f5f5f5"></u-line>
			</view>
		</view>
		<view class="ad-banner">
			<ad unit-id="adunit-a02c90eb01b74a15" ad-type="video" ad-theme="white"></ad>
		</view>
	</view>
</template>

<script>
	const db = uniCloud.database();

	import {
		store
	} from '@/uni_modules/uni-id-pages/common/store.js'
	export default {
		data() {
			return {
				items: []
			}
		},
		onLoad(options) {
			this.getTopicCollect();
		},
		methods: {
			userInfo() {
				return store.userInfo
			},
			getTopicCollect() {
				let userInfo = this.userInfo();
				console.log("开始请求topic-collect：", this.paper_id);
				db.collection("topic-collect").where({
					"user_id": userInfo._id,
				}).groupBy('paper_type').get().then((res) => {
					console.log("获取topic-collect成功", JSON.stringify(res.result.data));
					console.log("获取topic-collect成功", res.result.data);
					// this.items = res.result.data
					var temps = []
					for (var i = 0; i < res.result.data.length; i++) {
						var item = res.result.data[i]
						item.title = this.setTopicTitle(item.paper_type)
						temps.push(item)
					}
					this.items = temps
				}).catch((e) => {
					console.log("获取topic-collect失败", e);
				});
			},
			cellClick(item) {
				let userInfo = this.userInfo();
				console.log("开始请求topic-collect：", item);
				uniCloud.callFunction({
					name: "collect-answer",
					data: {
						"paper_type": item.paper_type,
						"user_id": userInfo._id
					},
					success(res) {						
						// console.log("openTest", JSON.stringify(res.result.data))
						console.log("collect-answer", JSON.stringify(res.result))
						if (res.result.data.length == 0) {
							uni.showToast({
								title: '您还没有收藏题目，快去收藏吧~',
								icon: 'none',
								duration: 2000
							});
							return
						}
						let json = JSON.stringify(res.result.data);
						let newStr = json.replace(/%/g, '%25');
						uni.navigateTo({
							url: "/pages/question/answer?json=" + encodeURIComponent(newStr)
						})
					},
					fail(e) {
						console.log("获取collect-answer失败:",e);
					}
				})

			},
			setTopicTitle(paper_type) {
				var title = ""
				if (paper_type == "top_up_language") {
					title = "大学语文"
				} else if (paper_type == "top_up_advanced_mathematics_1") {
					title = "高数一"
				} else if (paper_type == "top_up_ecology") {
					title = "生态学"
				} else if (paper_type == "top_up_introduction_art") {
					title = "艺术概论"
				} else if (paper_type == "high_up_mathematics_science") {
					title = "数学(理)"
				} else if (paper_type == "high_up_language") {
					title = "语文"
				} else if (paper_type == "top_up_advanced_mathematics_2") {
					title = "高数二"
				} else if (paper_type == "top_up_comprehensive_medical") {
					title = "医学综合"
				} else if (paper_type == "high_up_english") {
					title = "英语"
				} else if (paper_type == "high_up_comprehensive_history") {
					title = "史地综合"
				} else if (paper_type == "high_up_mathematics_arts") {
					title = "数学(文)"
				} else if (paper_type == "high_up_physical_chemical_synthesis") {
					title = "理化综合"
				} else if (paper_type == "top_up_civil_law") {
					title = "民法"
				} else if (paper_type == "top_up_political") {
					title = "大学政治"
				} else if (paper_type == "top_up_educational_theory") {
					title = "教育理论"
				} else if (paper_type == "top_up_english") {
					title = "大学英语"
				}
				return title
			},
			// onShareAppMessage(res) {
			// 	if (res.from === 'button') { // 来自页面内分享按钮
			// 		console.log(res.target)
			// 	}
			// 	return {
			// 		title: '成考真题', //分享的名称
			// 		path: '/pages/question/index',
			// 		mpId: 'wx1b87633653856f3e' //此处配置微信小程序的AppId
			// 	}
			// }
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
	}

	.cell-bg {
		margin-top: 48rpx;
		margin-left: 24rpx;
		margin-right: 24rpx;
		background-color: #ffffff;
		border-radius: 12rpx;
	}

	.cell {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100rpx;
		padding-left: 32rpx;
		padding-right: 38rpx;
	}

	.cell-left {
		display: flex;
		align-items: center;
	}

	.cell-title {
		padding-left: 16rpx;
		color: rgba(0, 0, 0, 0.9);
		font-size: 32rpx;
	}
	
	.ad-banner {
		margin-top: 40rpx;
		border-radius: 8rpx;
		width: 100%;
		background-color: #ffffff;
	}
</style>
