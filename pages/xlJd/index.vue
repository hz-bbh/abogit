<template>
	<view>
		<pageHead name="训练基地" color="#ffffff" backImg="/static/icon/backw.png"></pageHead>
		<view class="bgImg">
			<image src="../../static/homeIcon/jh.png" mode=""></image>
		</view>
		
		
		<view class="presonTalk" :class="{'presonTalkActive':index==0}" v-for="(item,index) in list" :key="index">
			<image class="presonTalkimage" src="../../static/homeIcon/bz.png" alt="">
			<view class="presonInfo">
				<view><text>为梦想而战分范德萨范德萨是</text></view>
				<view>简介|平面图</view>
			</view>
			<image class="talkPlay" src="../../static/homeIcon/bz.png" alt="">
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				list : [1,2,3,4]
			}
		},
	}
</script>
<style lang="less">
	.bgImg{
		width: 100%;
		height: 334rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
	page{
		background: #f6f8f7;
	}
	.presonTalk{
		width: 710rpx;
		height: 200rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		margin: 0 auto 20rpx;
		background: white;
		border-radius:20rpx;
		position: relative;
		z-index: 2;
	}
	.presonTalkActive{
		margin-top: -56rpx !important;
	}
	.presonTalkimage{
		width: 144rpx;
		height: 144rpx;
		border-radius: 50%;
		margin-right:59rpx;
		margin-left: 32rpx;
	}
	.presonInfo{
		flex: 1;
		height:100%;
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		justify-content: center;
	}
	.presonInfo>view:nth-of-type(1){
		width:350rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		display: inline-block;
		margin-bottom:12rpx;
		font-size: 32rpx;
		color: #000000;
		font-weight: bold;
	}
	.presonInfo>view:nth-of-type(1) text:nth-of-type(2),.presonInfo>view:nth-of-type(2){
		font-size:24rpx;
		color: #999999;
		font-weight: bold;
	}
	.talkPlay{
		width: 64rpx;
		height: 64rpx;
		margin-right:40rpx;
	}
</style>
