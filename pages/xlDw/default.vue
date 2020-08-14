<template>
	<view>
		<pageHead name="训练单位"></pageHead>
		<view class="bgImg">
			<image src="../../static/homeIcon/jh.png" mode=""></image>
		</view>
		
		<view class="bgSecond"></view>
		
		<view class="headTitle isFlexalitem">
			<view :class="{'active':Cindex==0}"  @click="change(0)">简介</view>
			<view :class="{'active':Cindex==1}"  @click="change(1)">基本信息</view>
		</view>
		
		<view v-if="Cindex==0">
			<view class="jjTxt" >
				<view :class="{'lineTow':isMore}">
					{{intro}}
				</view>
				<view class="isMoreBtn" @click="lookMore" v-if="isMore">更多</view>
			</view>
		</view>
		
		<view v-if="Cindex==1">
			<view class="dwInfo">
				<view class="enrollTime" :key="index" v-for="(obj,index) in objList"><view><image src="../../static/homeIcon/bz.png" alt=""><text>{{obj.name}}:</text></view><view>{{obj.txt}}</view></view>
			</view>
		</view>
		
		<view class="titleList isFlexalitem">设施配置</view>
		<view class="moduleBox isFlexSpace">
			<view v-for="(item,index) in moduleList" :key="item.id" v-if="item.isShow" >
				<view>
					<view class="moduleTitle">{{item.name}}</view>
					<view class="moduleTxt">{{item.txt}}</view>
				</view>
				<image :src="item.src"></image>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		onLoad() {
			this.init();
		},
		data() {
			return {
				list : [1,2,3,4],
				Cindex : 0,
				intro  : "",
				introAll  : "浙江体育技术学院于，2006年7月，批准建校，是一所由省体育局主管，接受省教育厅指放到手机里开发的数据库近段时间付款的实际付款了但是尽量克服交流看法是东京理科房间里开始房间里空间",
				isMore : true		,//更多简介
				
				
				moduleList : [
					{id:1,name:"行政楼",txt:"文本",src:"/static/homeIcon/jh.png",isShow:true},
					{id:2,name:"场馆",txt:"文本",src:"/static/homeIcon/jha.png",isShow:true},
					{id:3,name:"食宿",txt:"文本",src:"/static/homeIcon/xl.png",isShow:true},
					{id:4,name:"保障",txt:"文本",src:"/static/homeIcon/xlj.png",isShow:true},
					{id:5,name:"一卡通",txt:"文本",src:"/static/homeIcon/xlj.png",isShow:true},
				],
				objList : [
					{name:"创办时间",txt:"2004年6月"},
					{name:"类别",txt:"体育类"},
					{name:"所属地区",txt:"中国浙江"},
					{name:"主管部门",txt:"浙江省"},
					{name:"学院类型",txt:"公立大学"},
					{name:"学校代码",txt:"111111"},
					{name:"学校官网",txt:"http://www.wzbbh.top"},
				]
			}
		},
		methods:{
			init(){
				this.intro = this.introAll.substr(0,42)+"...";
			},
			change(index){
				this.Cindex = index;
			},
			lookMore(){
				this.isMore = false;
				this.intro  = this.introAll;
			}
		}
	}
</script>
<style lang="less">
	page{
		background: #f6f8f7;
	}
	.bgImg{
		width: 100%;
		height: 306rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.bgSecond{
		width: 710rpx;
		height: 220rpx;
		border: 1rpx solid red;
		margin:  -176rpx auto 0;
		position: relative;
		z-index: 2;
	}
	.headTitle{
		font-size: 28rpx;
		font-weight: bold;
		padding-left:40rpx;
		height: 76rpx;
		color: #999999;
		view{
			position: relative;
			margin-right: 116rpx;
			height: 48rpx;
		}
	}
	.active{
		color: #333333 !important;
	}
	.active::after{
		content: '';
		width: 96%;
		height: 8rpx;
		background:linear-gradient(296deg,rgba(109,192,248,1) 0%,rgba(104,165,252,1) 100%);
		border-radius:4rpx;
		position: absolute;
		bottom: 0;
		left: 2%;
	}
	.jjTxt{
		width: 710rpx;
		background: white;
		margin: 0 auto;
		color: #666666;
		font-size: 28rpx;
		text-align: justify;
		padding-top: 10rpx;
		padding-left: 20rpx;
		padding-right: 20rpx;
		padding-bottom: 26rpx;
		box-sizing: border-box;
		position: relative;
		color: #666666;
		border-radius:20rpx;
		font-weight: bold;
	}
	.isMoreBtn{
		text-align: right;
		font-size: 24rpx;
		color: #999999;
		font-weight: bold;
		margin-top: 6rpx;
		margin-right: 20rpx;
	}
	.titleList{
		height: 74rpx;
		color: #000000;
		font-size: 32rpx;
		padding-left: 40rpx;
		font-weight: bold;
	}
	
	
	.moduleBox{
		width: 710rpx;
		margin: 0 auto;
		flex-wrap: wrap;
		&>view{
			width: 350rpx;
			height: 176rpx;
			margin-bottom: 10rpx;
			position: relative;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-left: 20rpx;
			background:rgba(255,255,255,1);
			border-radius:20rpx;
			image{
				width: 144rpx;
				height: 144rpx;
			}
			.moduleTitle{
				font-size: 32rpx;
				font-weight: bold;
				position: relative;
				z-index: 1;
			}
			.moduleTxt{
				font-size: 24rpx;
				color: #999999;
				margin-top: 12rpx;
				font-weight: bold;
			}
		}
	}
	
	.dwInfo{
		width: 710rpx;
		border-radius: 20rpx;
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		padding-left: 20rpx;
		box-sizing: border-box;
		padding-top: 20rpx;
		padding-bottom:22px;
		background: white;
	}
	
	
	.enrollTime{
		display: flex;
		align-items: center;
		font-size: 28rpx;
		color: #333333;
		font-weight: bold;
		box-sizing:border-box;
		width:55%;
		margin-bottom: 20rpx;
	}
	.enrollTime view{
		display: flex;
		align-items: center;
	}
	.enrollTime:nth-child(even){
		width: 45%;
		text-align: right;
		display: flex;
		justify-content: space-between;
		padding-right: 20rpx;
	}
	.enrollTime:nth-last-of-type(1){
		width: 100%;
	}
	.enrollTime text{
		color: #666666 !important;
		margin-right:24rpx;
	}
	.enrollTime image{
		width: 30rpx;
		height: 30rpx;
		margin-right:8rpx;
	}
</style>
