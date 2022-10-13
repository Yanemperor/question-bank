<template>
	<view class="container">
		<view class="ad-banner" v-if="!userInfo.is_hidden_ad">
			<ad unit-id="adunit-13e1b5fb5b226b0e" ad-type="video" ad-theme="white"></ad>
		</view>
		<view class="view-btn" @click="viewBtnClick">
			<view class="view-btn-text">
				查看
			</view>
		</view>
		<view v-if="tempFilePath" class="save-btn" @click="playAd">
			<view class="save-btn-text">
				观看广告，即可保存文件
			</view>
		</view>

		<view v-if="isLookAd" class="save-btn" @click="saveBtnClick">
			<view class="save-btn-text">
				保存文件
			</view>
		</view>
	</view>
</template>

<script>
	import {
		store,
		mutations
	} from '@/uni_modules/uni-id-pages/common/store.js'
	let rewardedVideoAd = null

	export default {
		computed: {
			userInfo() {
				return store.userInfo
			}
		},
		data() {
			return {
				url: "",
				tempFilePath: "",
				title: "",
				isLookAd: false
			}
		},
		onLoad(options) {
			wx.showShareMenu({
				withShareTicket: true,
				//设置下方的Menus菜单，才能够让发送给朋友与分享到朋友圈两个按钮可以点击
				menus: ["shareAppMessage", "shareTimeline"]
			});
			this.initData(options);
			this.initAd();
		},
		methods: {
			initAd() {
				if (wx.createRewardedVideoAd) {
					rewardedVideoAd = wx.createRewardedVideoAd({
						adUnitId: 'adunit-b392486bb2b18ada'
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
							this.isLookAd = true
							// 正常播放结束，可以下发游戏奖励
							this.saveBtnClick()
						} else {
							// 播放中途退出，不下发游戏奖励
						}
					})
				}
			},
			playAd() {
				if (this.isLookAd) {
					this.saveBtnClick()
				} else {
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
				}

			},
			initData(options) {
				this.url = options.url
				this.title = options.title
				uni.setNavigationBarTitle({
					title: this.title
				});
				console.log('url:', this.url)
			},
			viewBtnClick() {
				var that = this;
				uni.showLoading({
					title: '正在打开...'
				});
				uni.downloadFile({
					url: that.url, //仅为示例，并非真实的资源
					success: (res) => {
						if (res.statusCode === 200) {
							console.log('下载成功');
							uni.hideLoading();
							var filePath = res.tempFilePath; // 临时文件存储路径
							that.tempFilePath = filePath;
							uni.openDocument({
								filePath: encodeURI(filePath),
								// fileType: 'pdf',
								success: function(res) {
									console.log('打开文档成功');
								},
								fail: function(err) {
									uni.showToast({
										title: '打开失败',
										duration: 1500,
										icon: 'none'
									});
									console.log('打开失败');
								}
							});
						}
					},
					fail: function(err) {
						console.log('下载失败原因', err);
						uni.hideLoading();
					}
				});
			},
			saveBtnClick() {
				wx.shareFileMessage({
					filePath: this.tempFilePath,
					success() {
						console.log("转发成功");
					},
					fail(fail) {
						console.log(fail);
					},
				})
			},
			onShareAppMessage(res) {
				if (res.from === 'button') { // 来自页面内分享按钮
					console.log(res.target)
				}
				return {
					title: '成考真题', //分享的名称
					path: '/pages/download/browse?title=' + this.title + "&url=" + this.url,
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

	.save-btn {
		margin-top: 30rpx;
		margin-left: 40rpx;
		margin-right: 40rpx;
		height: 88rpx;
		background-color: #FFFFFF;
		border-radius: 12rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.save-btn-text {
		font-size: 32rpx;
		font-weight: 500;
		color: #2979ff;
	}
</style>
