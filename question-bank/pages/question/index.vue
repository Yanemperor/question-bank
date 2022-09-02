<template>
	<view class="container">
		<view class="ad-banner">

		</view>
		<view class="subject-bg">
			<view v-for="(item,index) in subjects" :key="index" class="subject-cell">
				<view class="subject-cell-content">
					<u-image width="100rpx" height="100rpx" :src="item.img"></u-image>
					<view class="subject-cell-text">
						{{ item.title }}
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
				subjects: [{
						img: "/static/subject/yuwen.png",
						title: "类型1"
					},
					{
						img: "/static/subject/shuxue.png",
						title: "类型2"
					},
					{
						img: "/static/subject/english.png",
						title: "类型3"
					},
					{
						img: "/static/subject/zhengzhi.png",
						title: "类型4"
					},
					{
						img: "/static/subject/english.png",
						title: "类型3"
					},
					{
						img: "/static/subject/zhengzhi.png",
						title: "类型4"
					}
				]
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
		padding: 32rpx;
	}

	.ad-banner {
		border-radius: 8rpx;
		width: 100%;
		height: 300rpx;
		background-color: #ffffff;
	}

	.subject-bg {
		display: flex;
		flex-wrap: wrap;
		background-color: #ffffff;
		margin-top: 24rpx;
		border-radius: 8rpx;
	}

	.subject-cell {
		width: 25%;
		/* margin-top: 20rpx; */
	}

	.subject-cell-content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		padding-top: 24rpx;
		padding-bottom: 24rpx;
	}

	.subject-cell-text {
		padding-top: 4rpx;
		color: #333333;
		font-size: 32rpx;
	}
</style>
