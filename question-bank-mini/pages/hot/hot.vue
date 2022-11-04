<template>
	<view class="content">
		<view class="cell-bg">
			<view v-for="(item, index) in subjects" :key="index">
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
		<view class="ad-banner" v-if="!userInfo.is_hidden_ad">
			<ad unit-id="adunit-fcac3dc02fc5313d" ad-type="video" ad-theme="white"></ad>
		</view>
	</view>
</template>

<script>
	const db = uniCloud.database();
	const dbCmd = db.command

	import {
		store
	} from '@/uni_modules/uni-id-pages/common/store.js'
	export default {
		computed: {
			userInfo() {
				return store.userInfo
			}
		},
		data() {
			return {
				items: [],
				type: 0,
				subjects: []
			}
		},
		onLoad(options) {
			this.initData(options);
		},
		methods: {
			initData(options) {
				let subjects = JSON.parse(options.subjects);
				this.subjects = subjects
				this.type = options.type
				uni.setNavigationBarTitle({
					title: this.type == 0 ? "热门收藏" : "热门错题"
				})
			},
			cellClick(item) {
				console.log("items:", JSON.stringify(item))
				var dbName = this.type == 0 ? "topic-collect" : "wrong-topic"
				db.collection(dbName)
					.where({
						"paper_type": item.paper_id
					})
					.groupBy("topic_id, paper_type")
					.groupField('count(*) as count')
					.orderBy('count desc')
					.limit(50)
					.get().then((res) => {
						console.log("获取topic-collect成功", JSON.stringify(res.result.data));
						console.log("获取topic-collect成功", res.result.data);

						if (res.result.data.length > 0) {
							var temps = []
							res.result.data.map((item, index) => {
								temps.push(item.topic_id)
							})
							console.log("items:", temps)
							this.getAnswer(temps)
						} else {
							uni.showToast({
								title: '暂时还没有热门题目~',
								icon: 'none',
								duration: 2000
							});
							return
						}
					}).catch((e) => {
						console.log("获取topic-collect失败", e);
					});

			},
			getAnswer(items) {
				uniCloud.callFunction({
					name: "hot-collect",
					data: {
						"user_id": store.userInfo._id,
						"items": items
					},
					success(res) {						
						console.log("collect-answer", JSON.stringify(res.result))
						if (res.result.data.length == 0) {
							uni.showToast({
								title: '暂时还没有热门题目',
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
			}
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
