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
				types: [{
					title: "选择",
					items: [{
							name: '选择一',
							url: '/pages/about/business_cooperation',
						},
						{
							name: '选择二',
							url: '/pages/about/more_app',
						}
					]
				}, {
					title: "测试",
					items: [{
							name: '测试一',
							url: '/pages/about/business_cooperation',
						},
						{
							name: '测试二',
							url: '/pages/about/more_app',
						}
					]
				}],
				questionList: [],
				tests: [{
						"_id": 2,
						"paper_id": "top_up_political_real_2014",
						"answer": "D",
						"title": "3.对我国的历史文化遗产要批判地继承,这种态度体现的哲学道理是( )",
						"typeName": "选择题",
						"No": 3,
						"type": 1,
						"options": [{
								"value": "内因和外因关系的原理",
								"key": "A"
							},
							{
								"value": "世界的物质统一性原理",
								"key": "B"
							},
							{
								"value": "原因和结果关系的原理",
								"key": "C"
							},
							{
								"value": "辩证否定的原理",
								"key": "D"
							}
						],
						"parsing": "[考情点拨]本题考查了辩证否定的哲学道理。[应试指导]辩证否定是通过事物的内在矛盾运动而进行的自我否定，即自己否定自己，并通过自我否定，实现自我更新、自我发展。它包括两层含义:(1)辩证否定是事物的自我否定;(2)辩证否定是\"扬弃\"。\"对我国的历史文化遗产要批判地继承\"，即对历史文化遗产要既克服又保留，既变革又继承,体现的即是\"扬弃\"的观点。"
					},
					{
						"_id": 7,
						"paper_id": "top_up_political_real_2014",
						"answer": "C",
						"title": "8.下列各项中,属于技术社会形态系列的是( )",
						"typeName": "选择题",
						"No": 8,
						"type": 1,
						"options": [{
								"value": "封建社会",
								"key": "A"
							},
							{
								"value": "原始社会",
								"key": "B"
							},
							{
								"value": "工业社会",
								"key": "C"
							},
							{
								"value": "奴隶社会",
								"key": "D"
							}
						],
						"parsing": "[考情点拨]本题考查了社会形态的分类。[应试指导]社会形态是社会政治经济文化性质的外在表现形式,是一定生产力基础上的经济基础和上层建筑的统一体。按照不同的标准，社会形态可以有不同的分类。其中,技术社会形态是以生产力和技术发展水平以及与之相适应的产业结构为标准对社会形态所作的划分，包括渔猎社会、农业社会、工业社会、信息社会等具体的社会形态。原始社会、奴隶社会、封建社会、资本主义社会、社会主义社会等是按照生产关系的不同性质对社会形态所作的分类。"
					}
				]
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
				// this.getData()
				this.getQuestionList()
			},
			getData() {
				const db = uniCloud.database();
				console.log("开始请求topic_type：", this.paper_id);
				db.collection("topic_type").where({
					"_id": this.paper_id
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
			cellClick() {
				let json = JSON.stringify(this.tests);
				uni.navigateTo({
					url: "/pages/question/answer?json=" + json
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
