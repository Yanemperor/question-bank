<template>
	<view class="container">
		<view class="ad-banner" v-if="!userInfo.is_hidden_ad">
			<ad unit-id="adunit-3a28792b1a5747d3"></ad>
		</view>
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
		<view class="view-btn" @click="toAd">
			<view class="view-btn-text">
				广告太多？ 试试免广告功能吧！
			</view>
		</view>
	</view>
</template>

<script>
	let interstitialAd = null
	import {
		store,
		mutations
	} from '@/uni_modules/uni-id-pages/common/store.js'
	export default {
		computed: {
			userInfo() {
				return store.userInfo
			}
		},
		data() {
			return {
				subjects: [{
						img: "/static/subject/yuwen.png",
						title: "大学语文",
						paper_id: "top_up_language"
					},
					{
						img: "/static/subject/english.png",
						title: "大学英语",
						paper_id: "top_up_english"
					},
					{
						img: "/static/subject/zhengzhi.png",
						title: "政治",
						paper_id: "top_up_political"
					},
					{
						img: "/static/subject/jiaoyu.png",
						title: "教育理论",
						paper_id: "top_up_educational_theory"
					},
					{
						img: "/static/subject/minfa.png",
						title: "民法",
						paper_id: "top_up_civil_law"
					},
					{
						img: "/static/subject/yishu.png",
						title: "艺术概论",
						paper_id: "top_up_introduction_art"
					},
					{
						img: "/static/subject/shengtai.png",
						title: "生态学",
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
				mutations.updateUserInfo()
				console.log("####", store.userInfo.is_hidden_ad)
				if (store.userInfo.is_hidden_ad) {
					return
				}
				
				if (wx.createInterstitialAd) {
					interstitialAd = wx.createInterstitialAd({
						adUnitId: 'adunit-3a5ff13e60d7adaf'
					})
					interstitialAd.onLoad(() => {
						console.log('onLoad event emit')
						this.showAd()
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
			toAd() {
				uni.navigateTo({
					url: "/pages/ucenter/ad/index"
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
	
	.view-btn {
		margin-top: 40rpx;
		margin-left: 40rpx;
		margin-right: 40rpx;
		height: 88rpx;
		background-color: #2979ff;
		border-radius: 12rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.view-btn-text {
		font-size: 32rpx;
		font-weight: 500;
		color: #FFFFFF;
	}
</style>
