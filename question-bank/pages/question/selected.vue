<template>
	<view class="container">
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
		<view class="ad-banner">
		
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
				}]
			}
		},
		onLoad() {
			wx.showShareMenu({
				withShareTicket: true,
				//设置下方的Menus菜单，才能够让发送给朋友与分享到朋友圈两个按钮可以点击
				menus: ["shareAppMessage", "shareTimeline"]
			});
		},
		methods: {
			cellClick() {
				uni.navigateTo({
					url: "/pages/question/answer"
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
