<template>
	<view>
		<pageHead class="changBg"  background="#1493FF"  name="注册信息" color="#ffffff" backImg="/static/icon/backw.png"></pageHead>
		
		<view class="main">
			<view class="bgImg"></view>
			<view class="viewInfo">
				<image src="../../static/homeIcon/jh.png" mode=""></image>
				<view>白炳辉</view>
			</view>
			
			<tabList :tabs="tabList"  @tabChoose="tabChoose" class="tabList"  backColor="#1493FF" hei="68"  color="#ffffff"></tabList>
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
		onLoad() {
			this.list = this.listCountry;
		},
		data() {
			return {
				tabList : [
					"全国注册协议",
					"省注册协议"
				],
				listCountry : [
					{id:0,name:"代表区县市",txt:"暂无数据",src:"/static/sportIcon/regiter (1).png",type:1},
					{id:1,name:"注册单位",txt:"清华大学",src:"/static/sportIcon/regiter (3).png",type:1},
					{id:2,name:"注册项目",txt:"暂无数据",src:"/static/sportIcon/regiter (4).png",type:1},
					{id:3,name:"协议开始时间",txt:"2013-07-12",src:"/static/sportIcon/regiter (5).png",type:1},
					{id:4,name:"协议终止时间",txt:"暂无数据",src:"/static/sportIcon/regiter (2).png",type:1},
					{id:5,name:"监护人",txt:"暂无数据",src:"/static/sportIcon/regiter (6).png",type:1},
				],
				listPrivoce : [
					{id:0,name:"注册编号",txt:"暂无数据",src:"/static/sportIcon/zhuce.png",type:1},
					{id:1,name:"交流单位",txt:"清华大学",src:"/static/sportIcon/regiter (3).png",type:1},
					{id:2,name:"注册项目",txt:"暂无数据",src:"/static/sportIcon/regiter (4).png",type:1},
					{id:3,name:"协议开始时间",txt:"2013-07-12",src:"/static/sportIcon/regiter (5).png",type:1},
					{id:4,name:"协议终止时间",txt:"暂无数据",src:"/static/sportIcon/regiter (2).png",type:1},
					{id:5,name:"双重注册单位",txt:"暂无数据",src:"/static/sportIcon/regiter (3).png",type:1},
					{id:6,name:"双层协议开始时间",txt:"暂无数据",src:"/static/sportIcon/regiter (5).png",type:1},
					{id:7,name:"双层协议终止时间",txt:"暂无数据",src:"/static/sportIcon/regiter (2).png",type:1},
				],
				list : []
			}
		},
		methods:{
			tabChoose(index){
				console.log("index: " + JSON.stringify(index));
				if(index==0){
					this.list = this.listCountry;
				}else{
					this.list = this.listPrivoce;
				}
			}
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
		height:455rpx;
		background: #1493ff;
		border-radius:50%;
		margin-left:-620rpx;
		position: absolute;
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
	.tabList{
		margin-bottom: 10rpx;
	}
</style>
