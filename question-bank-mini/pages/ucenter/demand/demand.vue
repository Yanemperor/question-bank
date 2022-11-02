<template>
	<view class="content">
		<view class="cell-bg">
			<view v-for="(item, index) in items" :key="index">
				<view class="cell" @click="cellClick(item)">
					<view class="cell-left">
						<view class="cell-title">
							{{ "用户:" + item.content }}
						</view>
					</view>
					<!-- <image src="../../../static/my/done.png" mode=""></image> -->
					<image src="../../../static/my/done.png" mode="aspectFit" style="width: 128rpx; height: 128rpx;"></image>
				</view>
				<u-line color="#f5f5f5"></u-line>
			</view>
		</view>
		<view class="ad-banner" v-if="!userInfo.is_hidden_ad">
			<ad unit-id="adunit-a02c90eb01b74a15" ad-type="video" ad-theme="white"></ad>
		</view>
	</view>
</template>

<script>
	const db = uniCloud.database();

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
				items: []
			}
		},
		onLoad(options) {
			this.getOpendbFeedback();
		},
		methods: {
			getOpendbFeedback() {
				console.log("开始请求opendb-feedback：", this.paper_id);
				db.collection("opendb-feedback").where({
					"isShow": true,
				}).get().then((res) => {
					console.log("获取opendb-feedback成功", JSON.stringify(res.result.data));
					console.log("获取opendb-feedback成功", res.result.data);
					// this.items = res.result.data
					// var temps = []
					// for (var i = 0; i < res.result.data.length; i++) {
					// 	var item = res.result.data[i]
					// 	item.title = this.setTopicTitle(item.paper_type)
					// 	temps.push(item)
					// }
					this.items = res.result.data
				}).catch((e) => {
					console.log("获取opendb-feedback失败", e);
				});
			},
			cellClick(item) {
				

			},
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
		padding-top: 30rpx;
		padding-bottom: 30rpx;
		padding-left: 32rpx;
		padding-right: 60rpx;
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
