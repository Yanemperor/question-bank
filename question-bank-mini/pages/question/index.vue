<template>
	<view class="container">
		<!-- <view class="ad-banner">
			<ad unit-id="adunit-3a28792b1a5747d3"></ad>
		</view> -->
		<view class="subject-bg">
			<view v-for="(item,index) in subjects" :key="index" class="subject-cell">
				<view class="subject-cell-content" @click="itemClick(item)">
					<image :src="item.img" mode="heightFix" style="width: 60rpx; height: 60rpx;"></image>
					<view class="subject-cell-text">
						{{ item.title }}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	let interstitialAd = null
	export default {
		data() {
			return {
				subjects: [{
						img: "/static/subject/yuwen.png",
						title: "类型1",
						paper_id: "top_up_language"
					},
					{
						img: "/static/subject/english.png",
						title: "类型2",
						paper_id: "top_up_english"
					},
					{
						img: "/static/subject/zhengzhi.png",
						title: "类型3",
						paper_id: "top_up_political"
					},
					{
						img: "/static/subject/jiaoyu.png",
						title: "类型4",
						paper_id: "top_up_educational_theory"
					},
					{
						img: "/static/subject/minfa.png",
						title: "类型5",
						paper_id: "top_up_civil_law"
					},
					{
						img: "/static/subject/yishu.png",
						title: "类型6",
						paper_id: "top_up_introduction_art"
					},
					{
						img: "/static/subject/shengtai.png",
						title: "类型6",
						paper_id: "top_up_ecology"
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
			this.initAd()
		},
		methods: {
			itemClick(item) {
				uni.navigateTo({
					url: "/pages/question/selected?paper_id=" + item.paper_id
				})
			},
			initAd() {
				if (wx.createInterstitialAd) {
					interstitialAd = wx.createInterstitialAd({
						adUnitId: 'adunit-3a5ff13e60d7adaf'
					})
					interstitialAd.onLoad(() => {
						console.log('onLoad event emit')
						// this.showAd()
					})
					interstitialAd.onError((err) => {
						console.log('onError event emit', err)
					})
					interstitialAd.onClose((res) => {
						console.log('onClose event emit', res)
					})
				}
			},
			showAd() {
				if (interstitialAd) {
					interstitialAd.show().catch((err) => {
						console.error(err)
					})
				}
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
		padding: 32rpx;
	}

	.ad-banner {
		border-radius: 8rpx;
		width: 100%;
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
		padding-top: 6rpx;
		color: #333333;
		font-size: 28rpx;
	}
</style>
