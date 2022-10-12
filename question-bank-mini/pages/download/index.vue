<template>
	<view class="container">
		<u-navbar leftText="返回" title="真题下载" :safeAreaInsetTop="false" placeholder="true" safeAreaInsetTop="true">
			<view class="nav" slot="left" @click="navChange">
				<image src="/static/nav/change.png" mode="heightFix" style="width: 40rpx; height: 40rpx;"></image>
				<view class="nav-text">
					{{currentChangeName}}
				</view>
			</view>
		</u-navbar>
		<view class="ad-banner">
			<ad unit-id="adunit-faa8bf5c01819ee8" ad-type="video" ad-theme="white"></ad>
		</view>
		<view class="subject-bg">
			<view v-for="(item,index) in subjects" :key="index" class="subject-cell">
				<view class="subject-cell-content" @click="itemClick(item)">
					<!-- <u-image width="100/rpx" height="100rpx" :src="item.img"></u-image> -->
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
	export default {
		data() {
			return {
				subjects: [],
				changeIndex: true,
				currentChangeName: "类型一",
				changes: [{
						name: "专升本",
						subjects: [{
								img: "/static/subject/yuwen.png",
								title: "大学语文",
								paper_id: "top_up_language"
							},
							{
								img: "/static/subject/shuxue.png",
								title: "高数一",
								paper_id: "top_up_advanced_mathematics_1"
							},
							{
								img: "/static/subject/shuxue.png",
								title: "高数二",
								paper_id: "top_up_advanced_mathematics_2"
							},
							{
								img: "/static/subject/english.png",
								title: "大学英语",
								paper_id: "top_up_english"
							},
							{
								img: "/static/subject/zhengzhi.png",
								title: "大学政治",
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
								img: "/static/subject/shengtai1.png",
								title: "生态学",
								paper_id: "top_up_ecology"
							}
						]
					},
					{
						name: "高起专",
						subjects: [{
								img: "/static/subject/yuwen.png",
								title: "语文",
								paper_id: "high_up_language"
							},
							{
								img: "/static/subject/shuxue.png",
								title: "数学(理)",
								paper_id: "high_up_mathematics_science"
							},
							{
								img: "/static/subject/shuxue.png",
								title: "数学(文)",
								paper_id: "high_up_mathematics_arts"
							},
							{
								img: "/static/subject/english.png",
								title: "英语",
								paper_id: "high_up_english"
							},
							{
								img: "/static/subject/like.png",
								title: "理化综合",
								paper_id: "high_up_physical_chemical_synthesis"
							},
							{
								img: "/static/subject/wenke.png",
								title: "史地综合",
								paper_id: "high_up_comprehensive_history"
							}
						]
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
			this.subjects = this.changes[0].subjects;
		},
		methods: {
			itemClick(item) {
				uni.navigateTo({
					url: "/pages/download/list?paper_id=" + item.paper_id
				})
			},
			navChange() {
				this.changeIndex = !this.changeIndex
				if (this.changeIndex) {
					this.currentChangeName = this.changes[0].name
					this.subjects = this.changes[0].subjects
				} else {
					this.currentChangeName = this.changes[1].name
					this.subjects = this.changes[1].subjects
				}
			},
			onShareAppMessage(res) {
				if (res.from === 'button') { // 来自页面内分享按钮
					console.log(res.target)
				}
				return {
					title: '成考真题', //分享的名称
					path: '/pages/download/index',
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

	.nav {
		display: flex;
		padding-left: 10rpx;
	}

	.nav-text {
		color: #333333;
		font-size: 28rpx;
		font-weight: 500;
		line-height: 20px;
		padding-left: 8rpx;
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
