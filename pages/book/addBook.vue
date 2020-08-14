<template>
	<view>
		<view class="title isFlexSpace">
			<view class="isFlexCenter back" @click="back">
				<image src="../../static/icon/back.png" mode=""></image>
			</view>
			<view class="titleName">训练图文</view>
			<view class="titleIcon">
				<text >提交</text>
			</view>
		</view>
		
		<view class="main">
		
			<view class="jx"></view>
			<view class="heatList isFlexalitem">
				<text>标题</text>
				<input type="text" placeholder="请填写名称">
			</view>
			<view class="jx"></view>	
			<view class="heatList isFlexalitem">
				<text>内容</text>
			</view>
			<view>
				<textarea value="" placeholder="请填写内容" />
			</view>
			<view class="jx"></view>
			<view class="heatList isFlexSpace">
				<text>运动员</text>
				<image src="../../static/homeIcon/right.png"></image>
			</view>
			
			<view class="upLoad isFlexalitem" >
				<view class="picList" v-for="(item,index) in picList" :key="index" v-if="picList.length>0">
					<image @click="showbig(index)" class="showPicImg" :src="item"></image>
					<image class="showClose"  @click="close(index)" src="../../static/homeIcon/editClose.png"></image>
				</view>
				<view class="unloadView isFlexCenter"  @click="choosePic"><image src="../../static/homeIcon/addPhoto.png"></image></view>
			</view>
			<view class="send isFlexCenter" @click="send">发布</view>
		</view>
		
		
	</view>
</template>
<script>
	var _this;
	export default {
		onLoad() {
			_this = this;
		},
		data() {
			return {
				picList : [],
				len     : 0,
				inpText : ""
			}
		},
		methods:{
			input(e){
				this.len = e.detail.value.length;
			},
			back(){
				uni.navigateBack()
			},
			choosePic(){
				var num = 6 - this.picList.length;
				if(this.picList.length>=6){
					uni.showModal({
						content: "最多选择6张！",
						showCancel: false
					});
					return;
				}
				uni.chooseImage({
				    count: num, 				 //最多选几张
				    sizeType: ['compressed'],    //可以指定是原图还是压缩图，默认二者都有
				    success: function (res) {
						res.tempFilePaths.forEach((item)=>{
							_this.picList.push(item);
						})
						if(_this.picList.length>5){
							var str = _this.picList.slice(0,6);
							_this.picList = str;
						}
				    }
				});
			},
			close(index){
				this.picList.splice(index,1);
			},
			showbig(index){
				uni.previewImage({
					current : index,
					urls    : this.picList
				});
			},
			send(){
				if(this.inpText.trim()==""){
					uni.showToast({
						title : "日记内容不能为空~",
						icon  : "none"
					})
					return
				}
				if(this.picList.length<2){
					uni.showToast({
						title : "美丽日记图片至少上传2张",
						icon  : "none"
					})
					return
				}
				//先走上传方法
				var arry = [];
				uni.showLoading({
					title : "上传请稍后"
				})
				setTimeout(function(){		//不管是否上传成功都要关闭提示
					uni.hideLoading();
				},6000);
				for(var i=0;i<this.picList.length;i++){
					var temp = this.picList[i];
					uni.uploadFile({
						url     : _this.upLoadurl, 		
						filePath: temp,
						name    : 'file',
						success: (uploadFileRes) => {
							var parse = JSON.parse(uploadFileRes.data);
							arry.push(parse.data[0]);
							//解决异步处理的方法， 这里其实要同步，但是官方没有同步方法
							if(arry.length==_this.picList.length){
								 //继续走提交接口方法
								 _this.sendApi(arry);
							}
						}
					});
				}
			},
			sendApi(arry){
				var info={
					UserId	: uni.getStorageSync('userId'),
					Pic1	: arry[0],	
					Pic2	: arry[1],		
					Pic3    : arry[2],	
					Pic4	: arry[3],	
					Pic5	: arry[4],	
					Pic6	: arry[5],	
					Describe: _this.inpText,
					Click	: 0,
					Zan		: 0,
					DiscussNum :0
				}
				var param = {
					diaries  : JSON.stringify(info),
					token    : uni.getStorageSync('token')
				}
				_this.ajax(param,"Diaries/AddDiaries", function(data){ 			//校验是不是花期的正式会员
					if(data.state==1){
						_this.checkDiary(data.data);
					}else{
						uni.showToast({
							title : data.text,
							icon  : "none"
						})
					}
				})
			},
			checkDiary(id){				
				uni.getSystemInfo({
				    success: function (res) {
				        var param = {
				        	ID       : id,
				        	UserID   : uni.getStorageSync('userId'),
				        	token    : uni.getStorageSync('token'), 
				        	ip       : "",	
				        	modelId  : res.model,
				        	clientId : ""
				        }
				        _this.ajax(param,"Diaries/CheckDiariesByID", function(data){ 
							if(data.state==1){
								uni.showToast({
									title : "发布成功"
								})
								setTimeout(function(){
									uni.navigateBack();
								},1000)
							}else{
								uni.showToast({
									title : data.text,
									icon  : "none"
								})
							}
							uni.hideLoading();
				        })
				    }
				});
			}
		}
	}
</script>
<style lang="less">
	.pages-mine-sign_in .uni-page-head-hd {
		display: none;
	}
	page{
		background: #f6f8f7;
	}
	
	.title{
		width: 100%;
		height: 88rpx;
		line-height: 88rpx;
		font-size: 36rpx;
		font-weight: bold;
		text-align: center;
		position: fixed;
		top: 0;
		left: 0;
		z-index:3;
		background:white;
		padding-right: 20rpx;
		box-sizing: border-box;
		view{
			width: 20%;
		}
		.titleName{
			width:60%;
		}
		.titleIcon{
			display: flex;
			justify-content: flex-end;
			font-size: 28rpx;
			color: #1492FF;
		}
		.back{
			justify-content: flex-start;
		}
		image{
			width: 16rpx;
			height: 28rpx;
			margin-left: 28rpx;
		}
	}
	.main{
		padding-top: 88rpx;
	}
	
	.heatList{
		height: 78rpx;
		background: white;
		font-size: 28rpx;
		padding: 0 20rpx;
		font-weight: bold;
		input{
			font-weight: 400;
			margin-left: 136rpx;
			font-size: 26rpx;
		}
		image{
			width: 24rpx;
			height: 24rpx;
		}
	}
	
	
	textarea{
		width: 100%;
		height: 190rpx !important;
		background: white;
		padding: 32rpx 20rpx;
		margin: 0 auto;
		font-size:28rpx;
		color: #333333;
	}
	.textNumBox{
		display: flex;
		justify-content: flex-end;
	}
	.textNum{
		padding: 0 24rpx;
		height:36rpx;
		background:rgba(245,245,245,1);
		border-radius:14rpx;
		font-size: 20rpx;
		font-weight:500;
		color:rgba(204,204,204,1);
		margin-right: 50rpx;
	}
	.ItAlert{
		width:650rpx;
		height:99rpx;
		background:rgba(254,247,235,1);
		border-radius:16rpx;
		margin:24rpx auto 0;
		font-weight:400;
		color:rgba(255,181,62,1);
		font-size: 26rpx;
		padding: 0 32rpx;
		box-sizing: border-box;
		text-align: justify;
	}
	.editLine{
		height: 1rpx;
		background: #EEEEEE;
		width: 650rpx;
		margin: 40rpx auto 0;
	}
	.chooseImg{
		text-align: center;
		font-size: 28rpx;
		color: #333333;
		margin-top: 48rpx;
		image{
			width: 42rpx;
			height: 42rpx;
			margin-right: 8rpx;
		}
	}

	
	.upLoad{
		position: relative;
		padding: 32rpx 20rpx;
		box-sizing: border-box;
		flex-wrap: wrap;
		view{
			width: 160rpx;
			height: 160rpx;
			border-radius: 8rpx;
			margin-right: 24rpx;
			margin-bottom: 24rpx;
		}
		.unloadView{
			background: #FFFFFF;
			image{
				width: 40rpx;
				height: 40rpx;
			}
		}
		.picList{
			position: relative;
			overflow: hidden;
			.showPicImg{
				width: 100%;
				height: 100%;
				border-radius: 8rpx;
			}
			.showClose{
				width: 28rpx;
				height: 28rpx;
				position: absolute;
				top: 8rpx;
				right: 8rpx;
			}
		}
		.unloadViewActive{
			width: 250rpx;
			background: white !important;
			position: relative;
			.unLoadText{
				font-size: 20rpx;
				color: #999999;
				position: absolute;
				bottom:0rpx;
				left:0rpx;
			}
		}
	}
	
	.send{
		width:650rpx;
		height:88rpx;
		background:linear-gradient(90deg,rgba(56,249,215,1),rgba(67,233,123,1));
		border-radius:12rpx;
		font-size:32rpx;
		font-weight:500;
		color: white;
		position: fixed;
		left: 50%;
		margin-left: -325rpx;
		bottom: 0rpx;
		bottom: constant(safe-area-inset-bottom);  
		bottom: env(safe-area-inset-bottom);  
	}
</style>
