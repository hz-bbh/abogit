<template>
	<view>
		<textarea class="inputSay"  v-model='inpText'  maxlength="200"  placeholder="请输入您的宝贵建议或遇到的问题～" placeholder-style="color:#666666"   :adjust-position="false"/>
		<view class="showNum">
			<text>0/200</text>
		</view>
		<view class="tel">
			<view class="telText">您的联系方式（非必填）</view>
			<input type="number" v-model="inpTel" placeholder="请输入你的联系方式"  maxlength="11">
		</view>
		
		<view class="submit isFlexCenter"  @click="submitBtn">点击提交</view>
		
		
		<!-- 添加成功弹窗 -->
		<uni-popup ref="open" type="center" >
			<view class="Popupbox">
				<image src="../../static/homeIcon/ideaSuce.png"></image>
				<view class="popName">提交信息成功</view>
				<view class="popBtn isFlexCenter" @click="goBack">我知道了</view>
			</view>
		</uni-popup>
	</view>
</template>
<script>
	var util = require('../../common/util.js');
	export default {
		data() {
			return {
				inpTel	 : "",
				inpText  : "",
			}
		},
		methods:{
			submitBtn(){
				var _this = this;
				if(this.inpTel.trim()!=''){
					if(!util.checkPhone(this.inpTel)){
						return
					}
					if(this.inpText.trim()==''){
						uni.showToast({
							title : "内容不能为空"
						})
						return
					}
				}else{
					if(this.inpText.trim()==''){
						uni.showToast({
							title : "内容不能为空"
						})
						return
					}
				}
				this.$refs['open'].open();
			},
			goBack(){
				uni.navigateBack();	
			}
		}
	}
</script>
<style lang="less">
	page{
		padding: 20rpx;
	}
	.inputSay{
		font-size: 24rpx;
		padding:24rpx 32rpx;
		box-sizing: border-box;
		height: 326rpx;
		line-height: 40rpx;
		text-align: justify;
		color: #999999;
		width: 100%;
		background:rgba(246,248,247,1);
	}
	.showNum{
		position: absolute;
		top: 295rpx;
		right: 36rpx;
		color: #999999;
		font-size: 22rpx;
	}
	.tel{
		.telText{
			font-size: 26rpx;
			margin: 24rpx 0;
			font-weight: bold;
			padding-left: 24rpx;
		}
		input{
			font-size: 26rpx;
			margin-top: 8rpx;
			height:80rpx;
			background:rgba(246,248,247,1);
			padding-left: 24rpx;
		}
	}
	.submit{
		width:626rpx;
		height:80rpx;
		background:linear-gradient(270deg,rgba(68,142,254,1) 0%,rgba(74,176,253,1) 100%);
		border-radius:12rpx;
		color: white;
		font-size:28rpx;
		margin:120rpx auto 0;
	}
	
	.Popupbox{
		width: 510rpx;
		height: 378rpx;
		background:rgba(255,255,255,1);
		border-radius:12rpx;
		padding: 42rpx 0 34rpx;
		box-sizing: border-box;
		text-align: center;
		image{
			width: 130rpx;
			height: 130rpx;
		}
		.popName{
			font-size: 28rpx;
			font-weight: bold;
			margin: 32rpx 0 46rpx;
		}
		.popBtn{
			width:130rpx;
			height:52rpx;
			border:2rpx solid rgba(228,228,228,1);
			font-size: 26rpx;
			color: #999999;
			margin: 0 auto;
		}
	}
</style>
