<template>
	<view class="container">
		<view class="head-title"> 广告管理 </view>
		<view class="view-btn" @click="playAd">
			<view class="view-btn-text">
				观看一次广告，6~8小时无广告
			</view>
		</view>
		<!-- <view class="view-btn" @click="test">
			<view class="view-btn-text">
				测试测试
			</view>
		</view> -->

		<view class="ad-banner" v-if="!userInfo.is_hidden_ad">
			<ad unit-id="adunit-a02c90eb01b74a15" ad-type="video" ad-theme="white"></ad>
		</view>
	</view>
</template>

<script>
	let rewardedVideoAd = null
	const db = uniCloud.database();
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

			}
		},
		onLoad(options) {
			this.initAd();
		},
		methods: {
			initAd() {
				if (wx.createRewardedVideoAd) {
					rewardedVideoAd = wx.createRewardedVideoAd({
						adUnitId: 'adunit-769c67caa7356c80'
					})
					rewardedVideoAd.onLoad(() => {
						console.log('onLoad event emit')
					})
					rewardedVideoAd.onError((err) => {
						console.log('onError event emit', err)
					})
					rewardedVideoAd.onClose(res => {
						// 用户点击了【关闭广告】按钮
						if (res && res.isEnded) {
							// 正常播放结束，可以下发游戏奖励
							this.cancelAd()
						} else {
							// 播放中途退出，不下发游戏奖励
						}
					})
				}
			},
			playAd() {
				if (rewardedVideoAd) {
					rewardedVideoAd.show().catch(() => {
						// 失败重试
						rewardedVideoAd.load()
							.then(() => rewardedVideoAd.show())
							.catch(err => {
								console.log('激励视频 广告显示失败')
							})
					})
				}
			},
			cancelAd() {
				this.setIsHiddenAd(true)
				this.setLastLookAdTime(Date.now())
				mutations.updateUserInfo()
			},
			setIsHiddenAd(is_hidden_ad) {
				console.log(is_hidden_ad);
				mutations.updateUserInfo({
					is_hidden_ad
				})
			},
			setLastLookAdTime(last_look_ad_time) {
				console.log(last_look_ad_time);
				mutations.updateUserInfo({
					last_look_ad_time
				})
			},
			test() {
				uniCloud.callFunction({
					name: "timer",
					data: {

					},
					success(res) {
						// console.log("openTest", JSON.stringify(res.result.data))
						console.log("获取timer成功", JSON.stringify(res));

					},
					fail(e) {
						console.log("获取timer失败", e);
					}
				})
			}
		}
	}
</script>

<style>
	.container {
		padding: 32rpx;
	}

	.head-title {
		font-size: 16px;
		font-weight: 500;
		color: #000000;
		line-height: 24px;
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

	.ad-banner {
		margin-top: 40rpx;
		border-radius: 8rpx;
		width: 100%;
		background-color: #ffffff;
	}
</style>
