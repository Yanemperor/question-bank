<!-- 0 判断题
1 选择题
2 多选题
3 阅读选择题 阅读理解
4 填空题
5 简答题 辨析题 文言文 论述题 现代文阅读 写作题
6 日常对话题
7 完形填空题 -->
<template>
	<view>
		<view id="top-box" class="cu-bar bg-white solid-bottom">
			<view class="action text-black">
				<text>{{ currentType }}</text>
			</view>
			<view class="action">
				<view class="padding-right-sm" v-if="isShowArticle">
					<u-button text="显示文章" size="mini" plain shape="circle" type="success" @click="show = true">
					</u-button>
				</view>
				<button class="cu-btn bg-green shadow" @tap="showCardModal" data-target="modalCard">答题卡</button>
			</view>
		</view>
		<view class="cu-modal" :class="modalCard=='modalCard'?'show':''" @tap="hideCardModal">
			<view class="cu-dialog" @tap.stop>

				<scroll-view class="page padding" :scroll-y=true :style="{'height':swiperHeight}">
					<view class="cu-bar solid-bottom">
						<view class="action">
							<text class="cuIcon-title text-red"></text>答题卡
						</view>

						<button class="cu-btn bg-green shadow" @tap="submit" data-target="modalCard">交卷</button>
					</view>
					<view class="grid col-5 ">
						<view class="margin-tb-sm text-center" v-for="(subject,index) in subjectList" :key="index">
							<button v-if="subject.userAnswer.length===0" class="cu-btn round line-grey"
								@click="AppointedSubject(index)">{{index+1}}</button>
							<button v-if="subject.userAnswer.length!=0" class="cu-btn round"
								:class="[subject.userAnswer==subject.answer?'bg-green':'bg-red']"
								@click="AppointedSubject(index)">{{index+1}}</button>
						</view>
					</view>

				</scroll-view>
			</view>
		</view>
		<view class="cu-modal padding " :class="modalError=='modalError'?'show':''" @tap="hideErrorModal">
			<view class="cu-dialog bg-white" @tap.stop>

				<view class="cu-bar solid-bottom ">
					<view class="action">
						<text class="cuIcon-title text-red"></text>试题纠错
					</view>
				</view>

				<radio-group class="block">
					<view class="cu-list menu text-left">
						<view class="cu-item cu-item-error" v-for="error in errorList">
							<radio :value="error"></radio>
							<view class="title text-black margin-left">{{error}}</view>
						</view>
					</view>
				</radio-group>

				<view class="padding flex flex-direction ">
					<button class="cu-btn bg-red margin-tb-sm lg" @click="SubmitError">提 交</button>
				</view>
			</view>
		</view>
		<form>
			<swiper :current="subjectIndex" class="swiper-box" @change="SwiperChange" :style="{'height':swiperHeight}">
				<swiper-item v-for="(subject,index) in subjectList">
					<view v-if="index-subjectIndex>=-1&&index-subjectIndex<=1">
						<view class="cu-bar bg-white solid-bottom">
							<view class="action text-black">
								<text class="cuIcon-title text-red"></text>
								<view v-if="subject.type !== 6 && subject.title.length <= 500">
									{{ index + 1 + "."  + subject.title }}
								</view>
								<view v-else-if="subject.type === 6">
									第{{ subject.No }}题
								</view>
								<view v-else-if="subject.title.length > 500">
									第{{ index + 1 }}题
								</view>
							</view>
						</view>
						<view>
							<!-- 单选 -->
							<radio-group class="block" @change="RadioboxChange"
								v-if="subject.type===0 || subject.type===1 || subject.type===3 || subject.type===6 || subject.type===7">
								<label class="cu-form-group" v-for="option in subject.options" :key="option.key">
									<radio :value="option.key"
										:checked="subject.userAnswer.indexOf(option.key) > -1?true:false"></radio>
									<view class="title text-black" v-if="subject.typeName != '发音题'">
										{{option.key}}.{{option.value}}
									</view>
									<view class="title text-black" v-if="subject.typeName == '发音题'">
										<view class="flex">
											{{option.key}}.
											<rich-text :nodes="option.value"></rich-text>
										</view>
									</view>
								</label>
							</radio-group>
							<!-- 多选 -->
							<checkbox-group class="block" @change="CheckboxChange" v-else-if="subject.type===2">
								<label class="cu-form-group" v-for="option in subject.options">
									<checkbox :value="option.key"
										:class="subject.userAnswer.indexOf(option.key) > -1?'checked':''"
										:checked="subject.userAnswer.indexOf(option.key) > -1?true:false"></checkbox>
									<view class="title  text-black">{{option.key}}.{{option.value}}</view>
								</label>
							</checkbox-group>

							<view v-else-if="subject.type===4">
								<view class="cu-form-group solid-bottom">
									<view class="title  text-black">
										答：
									</view>
									<input placeholder="文本输入框" name="input" v-model="subject.userAnswer"
										@blur="textInput"></input>
								</view>
							</view>

							<view v-else-if="subject.type===5">
								<view class="cu-bar cu-bar-title bg-white margin-top">
									<view class="action  text-black">
										答：
									</view>
								</view>
								<view class="cu-form-group solid margin">
									<textarea maxlength="-1" @blur="textInput" v-model="subject.userAnswer"
										placeholder="多行文本输入框"></textarea>
								</view>
							</view>

						</view>

						<view v-show="subject.showAnswer" class="margin-top solid-top">
							<view class="cu-bar">
								<view class="action  text-grey">
									<text>正确答案：</text>
									<text class="solid-bottom  padding-left text-green">{{subject.answer}}</text>
								</view>
							</view>
							<view class="cu-bar cu-bar-title" v-if="subject.parsing">
								<view class="action  text-grey">
									<text>解析：</text>
								</view>
							</view>
							<view class="text-content padding  text-grey" v-if="subject.parsing">
								{{subject.parsing}}
							</view>
						</view>

					</view>
				</swiper-item>
			</swiper>
		</form>
		<view id="foot-box" class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="MoveSubject(-1)">
				<view class="cuIcon-cu-image">
					<text class="lg cuIcon-back text-gray"></text>
				</view>
				<view class="text-gray">上一题</view>
			</view>
			<view class="action" @click="MoveSubject(1)">
				<view class="cuIcon-cu-image">
					<text class="lg text-gray cuIcon-right"></text>
				</view>
				<view class="text-gray">下一题</view>
			</view>

			<view v-if="!isUserWrong" class="action" @click="FavorSubject">
				<view class="cuIcon-cu-image">
					<text class="lg cuIcon-favor" :class="[userFavor?'text-red':'text-gray']"></text>
				</view>
				<view :class="[userFavor?'text-red':'text-gray']">收藏</view>
			</view>
			
			<view v-else class="action" @click="wrongSubject">
				<view class="cuIcon-cu-image">
					<text class="lg cuIcon-favor" :class="[isUserWrong?'text-red':'text-gray']"></text>
				</view>
				<view :class="[isUserWrong?'text-red':'text-gray']">错题</view>
			</view>
			
			

			<view class="action" @click="ShowAnswerChange">
				<view class="cuIcon-cu-image">
					<text class="lg text-gray cuIcon-question"></text>
				</view>
				<view class="text-gray">解答</view>
			</view>
			<view class="action" @tap="showErrorModal" data-target="modalError">
				<view class="cuIcon-cu-image">
					<text class="lg text-gray cuIcon-warn"></text>
				</view>
				<view class="text-gray">纠错</view>
			</view>
		</view>
		<u-popup :show="show" mode="bottom" @close="close" @open="open">
			<view class="padding-sm">
				<text>{{ article }}</text>
			</view>
		</u-popup>
		<u-modal :show="modalShow" :title='modelTitle' showCancelButton="true" confirmText="去登录"
			@cancel="modalShow=false" @confirm="modalConfirm"></u-modal>
		<u-modal :show="submitShow" title='您还有未完成的题目,是否提交？' showCancelButton="true" @cancel="submitShow=false"
			@confirm="submitConfirm"></u-modal>
		<u-popup :show="conclusionShow" mode="center" :round="10" @close="submitShow=false">
			<view class="conclusion-content">
				<view class="conclusion-content-title">
					<text>共答对:<text style="color: #5ac725;">{{ correctCount }}</text>题, 答错:<text style="color: #f56c6c;">{{ wrongTopics.length }}</text>题, 总共:<text style="color: #3c9cff;">{{ subjectList.length }}</text>题</text>
				</view>
				<u-text text="(注意：简答题无法统计, 只要回答都会统计为正确)" type="info"></u-text>
				<view class="" style="margin-top: 40rpx">
					<u-button type="primary" text="错题再战" @click="wrongTopicNext"></u-button>
				</view>
				<view class="" style="margin-top: 20rpx">
					<u-button type="primary" text="保存到错题集" @click="saveWrongTopic"></u-button>
				</view>
				<view class="" style="margin-top: 20rpx">
					<u-button type="primary" text="休息一会" @click="toBack"></u-button>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import {
		store,
		mutations
	} from '@/uni_modules/uni-id-pages/common/store.js'
	export default {
		data() {
			return {
				modalShow: false,
				submitShow: false,
				conclusionShow: false,
				show: false,
				article: "", // 文章
				isShowArticle: false,
				userFavor: false, //是否已收藏
				currentType: "", //当前题型
				subjectIndex: 0, //跳转索引
				autoShowAnswer: true, //答错是否显答案
				autoRadioNext: true, //判断题、单项题，自动移下一题
				swiperHeight: '800px', //
				title: '',
				subjectList: [],
				modalCard: null, //显示答题卡
				modalError: null, //纠错卡
				errorList: ['题目不完整', '答案不正确', '含有错别字', '图片不存在', '解析不完整', '其他错误'],
				correctCount: 0,
				wrongTopics: [],
				modelTitle: "请登录后再收藏题目吧",
				isUserWrong: false,
			}
		},
		onReady() {

			var tempHeight = 800;
			var _me = this;
			uni.getSystemInfo({
				//获取手机屏幕高度信息，让swiper的高度和手机屏幕一样高                
				success: function(res) {
					// console.log(res.model);                    
					// console.log(res.pixelRatio);                    
					// console.log(res.windowWidth);                    
					// console.log(res.windowHeight);
					// //这里是手机屏幕高度                    
					// console.log(res.language);                    
					// console.log(res.version);                    
					// console.log(res.platform);                    
					tempHeight = res.windowHeight;
					console.log("屏幕可用高度 " + tempHeight);

					uni.createSelectorQuery().select("#top-box").fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						tempHeight -= data.height;
						console.log("减掉顶部后的高度 " + tempHeight);

						uni.createSelectorQuery().select("#foot-box").fields({
							size: true,
							scrollOffset: true
						}, (data) => {
							tempHeight -= data.height;
							console.log("减掉底部后的高度 " + tempHeight);
							_me.swiperHeight = tempHeight + 'px';
							console.log("滑屏最后高度 " + _me.swiperHeight);
						}).exec();

					}).exec();
				}
			});

		},
		onLoad(options) {
			uni.setNavigationBarTitle({
				title: this.title
			});
			if (options.isUserWrong) {
				this.isUserWrong = true
			}
			
			if (options.json) {

				let json = decodeURIComponent(options.json)
				console.log("options.json:", JSON.stringify(json));

				var details = JSON.parse(json);
				//添加用户显示答案字段
				// for (var i = 0; i < details.length; i++) {
				// 	// this.$set(details[i], "showAnswer", false);
				// 	details[i].showAnswer = false;
				// }
				var temps = []
				details.map((item, index) => {
					temps.push(Object.assign(item, {
						"showAnswer": false,
						"userAnswer": ""
					}))
				})

				console.log("detail:", JSON.stringify(temps));
				this.subjectList = temps;
				this.currentType = this.subjectList[0].typeName;
				this.userFavor = this.subjectList[0].userFavor;
				this.isUserWrong = this.subjectList[0].isUserWrong;
				let title = this.subjectList[0].title;
				if (this.subjectList[0].article) {
					this.article = this.subjectList[0].article;
					this.isShowArticle = true;
				} else if (title.length > 500) {
					this.article = title;
					this.isShowArticle = true;
				} else {
					this.isShowArticle = false;
				}
			}
		},
		methods: {
			userInfo() {
				return store.userInfo
			},
			hasLogin() {
				return store.hasLogin
			},
			showCardModal: function(e) {
				this.modalCard = e.currentTarget.dataset.target
			},
			hideCardModal: function(e) {
				this.modalCard = null
			},
			showErrorModal: function(e) {
				// this.modalError = e.currentTarget.dataset.target
				uni.navigateTo({
					url: '/uni_modules/uni-feedback/pages/opendb-feedback/opendb-feedback'
				})
			},
			hideErrorModal: function(e) {
				this.modalError = null
			},
			SwiperChange: function(e) { //滑动事件

				let index = e.target.current;

				if (index != undefined) {
					this.subjectIndex = index;
					this.currentType = this.subjectList[index].typeName;
					this.userFavor = this.subjectList[index].userFavor;
					this.isUserWrong = this.subjectList[index].isUserWrong;
					this.article = this.subjectList[index].article;
					let title = this.subjectList[index].title;
					console.log("titleCount", title.length)
					if (this.subjectList[index].type === 6) {
						this.article = this.subjectList[index].title;
						this.isShowArticle = true;
					} else if (title.length > 500) {
						this.article = title;
						this.isShowArticle = true;
					} else {
						this.isShowArticle = false;
					}
				}
			},
			RadioboxChange: function(e) { //单选选中

				var items = this.subjectList[this.subjectIndex].options;
				var values = e.detail.value;
				console.log(values);
				this.subjectList[this.subjectIndex].userAnswer = values;
				if (values == this.subjectList[this.subjectIndex].answer) {
					// 答对切换到下一题
					if (this.autoRadioNext && this.subjectIndex < this.subjectList.length - 1) {
						this.subjectIndex += 1;
					};
				} else {
					// 答错显示答案
					this.ShowAnswerChange()
				}
			},
			CheckboxChange: function(e) { //复选选中

				var items = this.subjectList[this.subjectIndex].options;
				var values = e.detail.value;
				this.subjectList[this.subjectIndex].userAnswer = "";
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
						if (items[i].key == values[j]) {

							this.subjectList[this.subjectIndex].userAnswer += items[i].key;
							break
						}
					}
				}
			},
			textInput: function(e) { //填空题
				this.subjectList[this.subjectIndex].userAnswer = e.detail.value;
			},
			ShowAnswerChange: function(e) { //显示答案

				if (this.subjectList[this.subjectIndex].showAnswer) {
					this.subjectList[this.subjectIndex].showAnswer = false;
				} else {

					this.subjectList[this.subjectIndex].showAnswer = true;
				}
			},
			modalConfirm() {
				console.log("去登录")
				uni.redirectTo({
					url: '/uni_modules/uni-id-pages/pages/login/login-withoutpwd',
				});
			},
			FavorSubject: function(e) { //收藏题
				if (!this.hasLogin()) {
					this.modelTitle = "请登录后再收藏题目吧"
					this.modalShow = true
					return
				}
				let userInfo = this.userInfo()
				let topic = this.subjectList[this.subjectIndex]
				console.log("userInfo:", JSON.stringify(userInfo))

				if (this.userFavor) {
					this.collect(userInfo, topic, false)
				} else {
					this.collect(userInfo, topic, true)
				}

			},
			collect(userInfo, topic, isCollect) {
				const db = uniCloud.database();
				console.log("开始请求topic-collect：", this.paper_id);
				console.log("topic-collect:", userInfo._id)
				console.log("topic-collect:", topic._id)
				console.log("topic-collect:", topic.paper_type)
				console.log("topic-collect:", topic.type)
				if (isCollect) {
					db.collection("topic-collect").add({
						"user_id": userInfo._id,
						"topic_id": topic._id,
						"paper_type": topic.paper_type,
						"topic_type": topic.type
					}).then((res) => {
						console.log("获取topic-collect成功", JSON.stringify(res.result.data));
						this.userFavor = true;
						this.subjectList[this.subjectIndex].userFavor = true;
					}).catch((e) => {
						console.log("获取topic-collect失败", e);
					});
				} else {
					db.collection("topic-collect").where({
						"user_id": userInfo._id,
						"topic_id": topic._id
					}).remove().then((res) => {
						console.log("获取topic-collect成功", JSON.stringify(res.result.data));
						this.userFavor = false;
						this.subjectList[this.subjectIndex].userFavor = false;
					}).catch((e) => {
						console.log("获取topic-collect失败", e);
					});
				}
			},

			MoveSubject: function(e) { //上一题、下一题

				if (e === -1 && this.subjectIndex != 0) {
					this.subjectIndex -= 1;
				}
				if (e === 1 && this.subjectIndex < this.subjectList.length - 1) {
					this.subjectIndex += 1;
				}
			},

			AppointedSubject: function(e) { //题卡指定

				this.modalCard = null;
				this.subjectIndex = e;
			},

			SubmitError: function(e) { //提交纠错

				this.modalError = null;
			},

			open() {
				// console.log('open');
			},
			close() {
				this.show = false
				// console.log('close');
			},
			// 交卷
			submit() {
				this.modalCard = null;
				var isDone = true
				for (var i = 0; i < this.subjectList.length; i++) {
					let item = this.subjectList[i]
					if (item.userAnswer === "") {
						isDone = false
						break;
					}
				}
				if (isDone) {
					// 全部完成
					this.showConclusion()
				} else {
					// 还有未完成
					this.submitShow = true
				}
			},
			submitConfirm() {
				this.submitShow = false
				this.showConclusion()
			},
			showConclusion() {
				var temps = []
				for (var i = 0; i < this.subjectList.length; i++) {
					let item = this.subjectList[i]
					console.log("item:", item)
					if (item.answer == item.userAnswer) {
						continue
					}
					if (item.userAnswer === "") {
						temps.push(item)
					} else if (item.type===0 || item.type===1 || item.type===3 || item.type===6 || item.type===7) {
						item.userAnswer = ""
						item.showAnswer = false
						temps.push(item)
					}
				}
				this.wrongTopics = temps
				this.correctCount = this.subjectList.length - this.wrongTopics.length
				this.conclusionShow = true
			},
			// 错题再战
			wrongTopicNext() {
				this.subjectList = this.wrongTopics
				this.subjectIndex = 0
				this.conclusionShow = false
			},
			// 保存错题
			saveWrongTopic() {
				if (!this.hasLogin()) {
					this.modelTitle = "请登录后再保存错题吧"
					this.conclusionShow = false
					this.modalShow = true
					return
				}
				let userInfo = this.userInfo()
				var temps = []
				this.wrongTopics.map((item, index) => {
					if (item.type===0 || item.type===1 || item.type===3 || item.type===6 || item.type===7) {
						var temp = {
							"user_id": userInfo._id,
							"topic_id": item._id,
							"paper_type": item.paper_type,
							"topic_type": item.type
						}
						temps.push(temp)
					}
				})
				console.log("temps", temps)
				
				var that = this;
				uniCloud.callFunction({
					name: "wrong-topic",
					data: {
						"user_id": store.userInfo._id,
						"wrongTopics": temps
					},
					success(res) {						
						// console.log("openTest", JSON.stringify(res.result.data))
						console.log("获取wrong-topic成功", JSON.stringify(res.result.data));
						that.conclusionShow = false
						that.toBack()
					},
					fail(e) {
						console.log("获取wrong-topic失败", e);
					}
				})
			},
			wrongSubject() {
				if (!this.hasLogin()) {
					this.modelTitle = "请登录后再添加错题吧"
					this.modalShow = true
					return
				}
				let userInfo = this.userInfo()
				let topic = this.subjectList[this.subjectIndex]
				console.log("userInfo:", JSON.stringify(userInfo))
				
				if (this.isUserWrong) {
					this.wrongCollect(userInfo, topic, false)
				} else {
					this.wrongCollect(userInfo, topic, true)
				}
			},
			wrongCollect(userInfo, topic, isCollect) {
				const db = uniCloud.database();
				if (isCollect) {
					db.collection("wrong-topic").add({
						"user_id": userInfo._id,
						"topic_id": topic._id,
						"paper_type": topic.paper_type,
						"topic_type": topic.type
					}).then((res) => {
						console.log("获取wrong-topic成功", JSON.stringify(res.result.data));
						this.isUserWrong = true;
						this.subjectList[this.subjectIndex].isUserWrong = true;
					}).catch((e) => {
						console.log("获取wrong-topic失败", e);
					});
				} else {
					db.collection("wrong-topic").where({
						"user_id": userInfo._id,
						"topic_id": topic._id
					}).remove().then((res) => {
						console.log("获取wrong-topic成功", JSON.stringify(res.result.data));
						this.isUserWrong = false;
						this.subjectList[this.subjectIndex].isUserWrong = false;
					}).catch((e) => {
						console.log("获取wrong-topic失败", e);
					});
				}
			},
			// 返回
			toBack() {
				uni.navigateBack()
			}

		}
	}
</script>

<style>
	@import "../../colorui/animation.css";

	page {
		background-color: #FFFFFF;
	}

	.cu-form-group {
		justify-content: flex-start
	}

	.cu-form-group .title {
		padding-left: 30upx;
		padding-right: 0upx;
	}

	.cu-form-group+.cu-form-group {
		border-top: none;
	}

	.cu-bar-title {
		min-height: 50upx;
	}

	.cu-list.menu>.cu-item-error {
		justify-content: flex-start;
	}
	
	.conclusion-content {
		padding: 40rpx 60rpx;
	}
	.conclusion-content-title {
		display: flex;
	}
</style>
