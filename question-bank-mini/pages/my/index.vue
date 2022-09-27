<template>
	<view class="content">
		<view class="header">
			<image class="image-bg" src="/static/my/bg.png" />
			<view style="padding-top: 200rpx;">
				<u-image :src="user.avatar" shape="circle" width="160rpx" height="160rpx"></u-image>
			</view>
			<view v-if="user.name" class="header-name" style="padding-top: 6rpx;">
				{{ user.name }}
			</view>
			<view v-if="!user.name" class="header-name" style="padding-top: 6rpx;" @click="login">
				登 录
			</view>
		</view>
		<view class="cell-bg">
			<view v-for="(item, index) in items" :key="index">
				<view class="cell" @click="cellClick(item)">
					<view class="cell-left">
						<u-image :src="item.icon" width="36rpx" height="36rpx"></u-image>
						<view class="cell-title">
							{{ item.title }}
						</view>
					</view>
					<u-icon name="arrow-right" color="#b2b2b2"></u-icon>
				</view>
				<u-line color="#f5f5f5"></u-line>
			</view>
		</view>
		<u-action-sheet :list="roles" v-model="show" :mask-close-able="false" @click="sheetClick" @close="sheetClose">
		</u-action-sheet>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: {

				},
				show: false,
				roles: [],
				icon: "/static/my/account.png",
				logo: '/static/logo.png',
				items: [{
						icon: "/static/my/collection.png",
						title: "收藏",
						url: "/pages/my/collection"
					},
					{
						icon: "/static/my/ticket.png",
						title: "下载券",
						url: "/pages/my/ticket"
					},
					{
						icon: "/static/my/feedback.png",
						title: "意见反馈",
						url: "/pages/my/feedback"
					},
					{
						icon: "/static/my/about.png",
						title: "关于我们",
						url: "/pages/my/about"
					},
					{
						icon: "/static/my/set.png",
						title: "设置",
						url: "/pages/my/set"
					}
				]
			}
		},
		onLoad() {
			this.getUserInfo();
		},
		methods: {
			login() {
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						console.log(loginRes);
					}
				});
			},
			cellClick(item) {
				console.log("url:", item.url)
				uni.navigateTo({
					url: item.url
				})
			},
			changeClick() {
				this.getInfoByRole()
				// uni.hideTabBar()
				// this.show = true
			},
			sheetClick(index) {
				uni.showTabBar()
				let roleId = this.roles[index].roleId
				this.roleToggle(roleId)
			},
			sheetClose() {
				uni.showTabBar()
			},
			// 获取用户信息
			getUserInfo() {
				this.$u.post('/user/getInfo', {

				}).then(res => {
					this.user = res.data
				})
			},
			// 获取用户角色列表
			getInfoByRole() {
				this.$u.post('/user/getInfoByRole', {

				}).then(res => {
					console.log("获取用户角色列表", res.data)
					for (var item of res.data) {
						item['text'] = item.rname;
					}
					this.roles = res.data;
					uni.hideTabBar()
					this.show = true
				})
			},
			// 切换角色
			roleToggle(roleId) {
				this.$u.post('/user/roleToggle', {
					roleId: roleId
				}).then(res => {
					console.log("切换角色", res.data)
					this.user = res.data
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
	}

	.image-bg {
		position: fixed;
		width: 100%;
		height: 678rpx;
		top: 0;
		left: 0;
		z-index: -1;
	}

	.header {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.header-name {
		font-size: 36rpx;
		font-weight: 500;
		color: #333333;
	}

	.header-position {
		font-size: 32rpx;
		font-weight: 400;
		color: #333333;
	}

	.header-btn {
		display: flex;
		margin-top: 14rpx;
		width: 144rpx;
		height: 56rpx;
		background: #333333;
		border-radius: 28rpx;
		justify-content: center;
		align-items: center;
	}

	.header-btn-text {
		color: white;
		font-size: 28rpx;
		font-weight: 500;
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
		height: 100rpx;
		padding-left: 32rpx;
		padding-right: 38rpx;
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
</style>
