<template>
	<view class="container">
		<view class="padding-sm">
			<u-subsection :list="list" :current="current" bgColor="#f6f6f6" @change="sectionChange"></u-subsection>
		</view>
		<view class="" v-if="current == 0">
			<view v-for="(type,index) in types" :key="index">
				<view class="head">
					{{ type.title }}
				</view>
				<view class="cell-bg">
					<view v-for="(item, index2) in type.items" :key="index2">
						<view class="cell" @click="cellClick(item)">
							<view class="cell-title">
								{{ item.name }}
							</view>
							<u-icon name="arrow-right" color="#b2b2b2"></u-icon>
						</view>
						<u-line color="#eeeeee"></u-line>
					</view>
				</view>
			</view>
		</view>
		<view class="" v-else-if="current == 1">
			<view class="cu-list grid col-5 no-border">
				<view class="cu-item" v-for="(item,index) in questionList" :key="index"
					@click="cellAllQuestionClick(item)">
					<view class="cuIcon-calendar text-cyan">
					</view>
					<text>{{item.name}}</text>
				</view>
			</view>
		</view>
		<view class="ad-banner">

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: ['题型练习', '套卷练习'],
				current: 0,
				paper_id: "",
				types: [],
				questionList: []
			}
		},
		onLoad(options) {
			wx.showShareMenu({
				withShareTicket: true,
				//设置下方的Menus菜单，才能够让发送给朋友与分享到朋友圈两个按钮可以点击
				menus: ["shareAppMessage", "shareTimeline"]
			});
			this.initData(options)
		},
		methods: {
			initData(options) {
				this.paper_id = options.paper_id
				this.getTypeData()
				this.getQuestionList()
			},
			getTypeData() {
				const db = uniCloud.database();
				console.log("开始请求topic_type：", this.paper_id);
				db.collection("topic_type").where({
					"_id": this.paper_id,

				}).get().then((res) => {
					console.log("获取topic_type成功", JSON.stringify(res.result.data));
					this.types = res.result.data[0].types;
				}).catch((e) => {
					console.log("获取topic_type失败", e);
				});
			},
			// 套卷
			getQuestionList() {
				const db = uniCloud.database();
				console.log("开始请求question_list");
				db.collection("question_list").where({
					"_id": this.paper_id
				}).get().then((res) => {
					console.log("获取question_list成功", JSON.stringify(res.result.data));
					// this.types = res.result.data[0].types;
					this.questionList = res.result.data[0].items;
				}).catch((e) => {
					console.log("获取question_list失败", e);
				});
			},
			cellAllQuestionClick(item) {
				const db = uniCloud.database();
				console.log("开始请求answer_questions", item.id);
				db.collection("answer_questions").orderBy("type asc, No asc").where({
					"paper_id": item.id
				}).get().then((res) => {
					// console.log("获取answer_questions成功", JSON.stringify(res.result.data));
					let json = JSON.stringify(res.result.data);
					uni.navigateTo({
						url: "/pages/question/answer?json=" + json
					})
				}).catch((e) => {
					console.log("获取answer_questions失败", e);
				});

			},
			sectionChange(index) {
				this.current = index;
			},
			cellClick(item) {
				uniCloud.callFunction({
					name: "answer-random",
					data: {
						"paper_type": item.paper_type,
						"type": item.type,
						"typeName": item.typeName,
						"count": item.count
					},
					success(res) {
						// console.log("openTest", JSON.stringify(res.result.data))
						// console.log("openTest", res.result.data.length)
						let json = JSON.stringify(res.result.data);
						uni.navigateTo({
							url: "/pages/question/answer?json=" + json
						})
					},
					fail() {
						console.log("获取answer_questions失败题型练习");
					}
				})
			},
			onShareAppMessage(res) {
				if (res.from === 'button') { // 来自页面内分享按钮
					console.log(res.target)
				}
				return {
					title: '成考真题', //分享的名称
					path: '/pages/question/index',
					mpId: 'wx1b87633653856f3e' //此处配置微信小程序的AppId
				}
			},
			//分享到朋友圈
			onShareTimeline(res) {
				return {
					title: '成考真题',
					type: 0,
					summary: "",
				}
			},
		}
	}
</script>

<style>
	@import "../../colorui/animation.css";

	.container {
		/* padding: 32rpx; */
	}

	.head {
		color: #111111;
		font-size: 28rpx;
		font-weight: bold;
		padding-top: 24rpx;
		padding-left: 32rpx;
	}

	.cell {
		height: 100rpx;
		width: 100%;
		background-color: #ffffff;
	}

	.cell-bg {
		padding-top: 20rpx;
		border-radius: 8rpx;
	}

	.cell {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 56px;
		padding-left: 16px;
		padding-right: 19px;
	}

	.cell-title {
		color: rgba(0, 0, 0, 0.9);
		font-size: 16px;
	}

	.ad-banner {
		border-radius: 8rpx;
		width: 100%;
		height: 300rpx;
		background-color: #ffffff;
		margin-top: 24rpx;
	}
</style>
