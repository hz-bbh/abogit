<template>
	<view>
		<pageHead class="changBg"  background="#1493FF"  name="学籍信息" color="#ffffff" backImg="/static/icon/backw.png"></pageHead>
		
		<view class="main">
			<view class="bgImg"></view>
			
			<view class="viewInfo">
				<image src="../../static/homeIcon/jh.png" mode=""></image>
				<view>白炳辉</view>
			</view>
			
			<!-- 底部长列表 -->
			<view class="objList" v-for="(obj,index) in list" :key="index">
				<image class="objListImg" :src="obj.src" ></image>
				<!--lineOne父容器跟子容器都要加上  -->
				<view class="goodContent">
					<view class="objListName">{{obj.name}}</view>
					<view class="objListTime">{{obj.txt}}</view>
				</view>
			</view>
			   
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				list : [
					{id:0,name:"政治面貌",txt:"群众",src:"/static/sportIcon/study (1).png",type:1},
					{id:1,name:"学校名称",txt:"清华大学",src:"/static/sportIcon/study (2).png",type:1},
					{id:2,name:"状态",txt:"毕业",src:"/static/sportIcon/study (3).png",type:1},
					{id:3,name:"入学年份",txt:"2013-07-12",src:"/static/sportIcon/study (5).png",type:1},
					{id:4,name:"所学专业",txt:"运动管理学",src:"/static/sportIcon/study (4).png",type:1},
				]
			}
		},
		methods:{
			
		}
	}
</script>
<style lang="less">
	.main{
		padding-top: 88rpx;
		position: relative;
	}
	.bgImg{
		width:1240rpx;
		height:372rpx;
		background: #1493ff;
		border-radius:50%;
		margin-left:-620rpx;
		position: fixed;
		z-index: 1;
		top: 0;
		left: 50%;
	}
	
	.viewInfo{
		position: relative;
		z-index: 2;
		text-align: center;
		padding-top: 20rpx;
		font-size: 28rpx;
		color: #333333;
		font-weight: bold;
		margin-bottom:10rpx;
		image{
			width: 120rpx;
			height: 120rpx;
			border-radius: 50%;
			margin-bottom: 6rpx;
		}
	}
	
	
	.objList{
		width:710rpx;
		height:108rpx;
		background:rgba(255,255,255,1);
		border-radius:16rpx;
		box-sizing: border-box;
		padding:0rpx 38rpx;
		display: flex;
		align-items: center;
		margin: 0 auto 20rpx;
		font-size: 26rpx;
		font-weight: bold;
		color: #666666;
		position: relative;
		z-index: 3;
	}
	.objListImg{
		width: 44rpx;
		height:44rpx;
		margin-right: 18rpx;
	}
	.objListTime{
		font-size: 28rpx;
		color: #333333;
	}
</style>
