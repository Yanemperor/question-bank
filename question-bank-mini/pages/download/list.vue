<template>
	<view class="container">
		<view>
			<view class="ad-banner">
				<ad unit-id="adunit-b7f7f9f78c0c32b9"></ad>
			</view>
			<view class="">
				<view class="cu-item" v-for="(items, index) in questionList" :key="index">
					<view class="item-title">
						{{ items.title }}
					</view>
					<view class="cell-bg">
						<view v-for="(item, row) in items.items" :key="row">
							<view class="cell" @click="cellClick(item, index, row)">
								<view class="cell-title">
									{{ item.name }}
								</view>
								<view class="" v-if="item.tempFilePath">
									保存
								</view>
								<u-icon name="arrow-right" color="#b2b2b2"></u-icon>
							</view>
							
							<u-line color="#eeeeee"></u-line>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
				this.getDownloadList();
			},

			cellClick(item, index, row) {
				uni.navigateTo({
					url: "/pages/download/browse?title=" + item.name + "&url=" + item.url
				})
			},
			getDownloadList() {
				const db = uniCloud.database();
				console.log("开始请求download-list");
				db.collection("download-list").where({
					"_id": this.paper_id
				}).get().then((res) => {
					console.log("获取download-list成功", JSON.stringify(res.result.data[0].items));
					let items = res.result.data[0].items;
					this.questionList = items;
				}).catch((e) => {
					console.log("获取download-list失败", e);
				});
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

	.item-title {
		color: #111111;
		font-size: 28rpx;
		font-weight: bold;
		padding-top: 24rpx;
		padding-left: 32rpx;
	}

	.item {
		display: flex;
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
		padding-right: 60rpx;
	}

	.ad-banner {
		border-radius: 8rpx;
		width: 100%;
		height: 300rpx;
		background-color: #ffffff;
		margin-top: 24rpx;
	}
</style>
