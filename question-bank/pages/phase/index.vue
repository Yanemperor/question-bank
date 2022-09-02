<template>
	<view class="container">
		<view v-for="(item,index) in items" :key="index">
			<view class="selected-view" @click="pushTabbar">
				<view class="text">
					{{ item.title }}
				</view>
			</view>
		</view>
	</view>
</template>

<script>	
	export default {
		data() {
			return {
				items: [
					{
						"title": "类型一",
						"type": "top_up"
					},
					{
						"title": "类型二",
						"type": "high_up"
					},
				]
			}
		},
		methods: {
			pushTabbar() {
				console.log("123123")
				wx.switchTab({
				  url: '/pages/question/index'
				})
			}
		}
	}
</script>

<style>
	.container {
		padding: 32rpx;
	}
	.selected-view {
		border-radius: 8rpx;
		background-color: #2979ff;
		height: 120rpx;
		width: 100%;
		display: flex;
		align-items: center;
		margin-top: 20rpx;
	}
	.text {
		color: #ffffff;
		font-size: 36rpx;
		padding-left: 36rpx;
	}
</style>