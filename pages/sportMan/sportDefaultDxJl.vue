<template>
	<view>
		<pageHead class="changBg"  background="#1493FF"  name="带训教练" color="#ffffff" backImg="/static/icon/backw.png"></pageHead>
		
		<view class="main">
			<view class="bgImg"></view>
			<view class="infoBox">
				<image class="infoPhoto" src="../../static/homeIcon/jh.png"></image>
				
				<view class="infoTop isFlexSpace">
					<view class="isFlexCenter">
						<text>吴彦祖</text>
						<view class="isState isFlexCenter">集训</view>
					</view>
					<view class="minZu isFlexCenter">汉族</view>
				</view>
				<view class="infoPresonTab isFlexSpace">
					<view class="isFlexCenter"><text>年龄</text>18</view>
				</view>
				
				<view class="tabModule">
					<view v-for="(obj,index) in objInfo"  :key="index">
						<view class="tabModuleName">{{obj.txt}}</view>
						<view>{{obj.name}}</view>
					</view>
				</view>
			</view>
			
			<!-- 横向模块 -->
			<view class="nexTabList">
				<view v-for="(obj,index) in nexTabList" :key="index"  @click="goDefault(obj.id)">
					<image :src="obj.src" mode=""></image>
					<view>{{obj.name}}</view>
				</view>
			</view>
			
			<!-- 底部长列表 -->
			<view class="objList" v-for="(obj,index) in list" :key="index">
				<image class="objListImg" :src="obj.src" ></image>
				<!--lineOne父容器跟子容器都要加上  -->
				<view class="goodContent">
					<view class="objListName">{{obj.name}}</view>
					<view class="objListTime">浙江省圣诞节范德萨</view>
				</view>
			</view>
			   
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				type   :  1   ,				//1是运动员青训， 2是运动员专业
				objInfo   : [
					{ name:"籍贯",txt:"山东"},
					{ name:"注册项目",txt:"赛艇"},
					{ name:"文化程度",txt:"高中"},
					{ name:"职称",txt:"初级教练员"}
				],
				nexTabList : [
					{id:0,name:"带训运动员",src:"/static/sportIcon/s1 (2).png",type:1},
					{id:1,name:"荣誉成绩",src:"/static/sportIcon/s1 (1).png",type:1},
					{id:2,name:"培训",src:"/static/sportIcon/s1 (3).png",type:1},
					{id:3,name:"职称评定",src:"/static/sportIcon/s1 (4).png",type:1}
				],
				list : [
					{id:0,name:"工作单位",src:"/static/sportIcon/sport1 (7).png",type:1},
					{id:1,name:"带训项目",src:"/static/sportIcon/sport1 (8).png",type:1},
					{id:4,name:"身份证号",src:"/static/sportIcon/sport1 (12).png",type:1},
					{id:5,name:"护照号",src:"/static/sportIcon/sport1 (13).png",type:1},
					{id:7,name:"联系方式",src:"/static/sportIcon/sport1 (14).png",type:1},
					{id:6,name:"带训人数",src:"",type:1},
				]
			}
		},
		methods:{
			goDefault(id){
				switch(id){
					case 0 : 
						uni.navigateTo({
							url : "sportDefaultDxJl"
						})
					break;
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
		width:840rpx;
		height:250rpx;
		background: #1493ff;
		border-radius:50%;
		margin-left:-420rpx;
		position: fixed;
		z-index: 1;
		top: 0;
		left: 50%;
	}
	
	.infoBox{
		width: 710rpx;
		height: 238rpx;
		margin: 34rpx auto  0;
		background: white;
		border-radius:16rpx;
		position: relative;
		z-index: 2;
		.infoPhoto{
			position: absolute;
			top: -34rpx;
			left: 12rpx;
			width: 120rpx;
			height: 120rpx;
			border-radius: 50%;
		}
		.infoSex{
			width: 36rpx;
			height: 36rpx;
			background: #1493ff;
			position: absolute;
			top: -46rpx;
			left:98rpx;
			border-radius:50%;
			image{
				width: 20rpx;
				height: 22rpx;
			}
		}
		.infoTop{
			height: 68rpx;
			padding-left: 162rpx;
			font-size: 28rpx;
			color: #333333;
			font-weight: bold;
		}
		.isState{
			width:78rpx;
			height:32rpx;
			background:#A578FF;
			border-radius:8rpx;
			margin-left: 16rpx;
			color: white;
			font-size: 24rpx;
		}
		.minZu{
			width:78rpx;
			height:32rpx;
			background:rgba(37,171,255,1);
			border-radius:8rpx 0px 0px 8rpx;
			color: white;
			font-size: 22rpx;
		}
		.infoPresonTab{
			padding-left: 162rpx;
			padding-right: 82rpx;
			box-sizing: border-box;
			color: #333333;
			font-size: 28rpx;
			font-weight: bold;
			text{
				color: #666666;
				font-size: 24rpx;
				margin-right: 10rpx;
			}
		}
		.tabModule{
			padding-left:60rpx;
			padding-right: 36rpx;
			box-sizing: border-box;
			display: flex;
			flex-wrap: wrap;
			justify-content:space-between;
			font-size: 26rpx;
			font-weight: bold;
			color: #666666;
			margin-top: 40rpx;
			&>view{
				height: 119rpx;
				box-sizing: border-box;
				text-align: center;
			}
			.tabModuleName{
				font-size: 28rpx;
				color: #333333;
			}
		}
	}
	.nexTabList{
		width:710rpx;
		background:rgba(255,255,255,1);
		position: relative;
		z-index: 3;
		border-radius:16rpx;
		margin: 20rpx auto;
		font-size: 24rpx;
		font-weight: bold;
		color:#333333;
		display: flex;
		flex-wrap: wrap;
		box-sizing: border-box;
		padding-bottom: 14rpx;
		&>view{
			width: 25%;
			text-align: center;
			box-sizing: border-box;
			padding-top:20rpx;
		}
		image{
			width: 50rpx;
			height: 50rpx;
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
