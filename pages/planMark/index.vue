<template>
	<view>
		<pageHead class="tName" name="计划制定">
			<image class="rightIcon" src="../../static/gymIcon/s.png"></image>
		</pageHead>
		<titleList name="训练计划"></titleList>
		<view class="moduleBox">
			<view v-for="(item,index) in moduleList" :key="item.id" @click="goPlan(item.id)"  :class="{'marLeft':index==0 || index ==4}" v-if="item.isShow" :style="{'background':item.bgColor}">
				<view class="moduleTitle">{{item.name}}</view>
				<view class="moduleTxt">时间</view>
				<view class="moduleTxt">内容</view>
			</view>
		</view>
		
		<titleList name="方案总结"></titleList>
		<view class="moduleBox">
			<view v-for="(item,index) in moduleList2" :key="item.id"   @click="goPlan(item.id)"  v-if="item.isShow"    :class="{'marLeft':index==0 || index ==4}"   :style="{'background':item.bgColor}">
				<view class="moduleTitle">{{item.name}}</view>
				<view class="moduleTxt">时间</view>
				<view class="moduleTxt">内容</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				moduleList : [
					{id:1,name:"课时计划",txt:"文本",src:"/static/homeIcon/jh.png",isShow:true,"bgColor":"#9BCCE6"},
					{id:2,name:"周计划",txt:"文本",src:"/static/homeIcon/jha.png",isShow:true,"bgColor":"#F2C279"},
					{id:3,name:"阶段计划",txt:"文本",src:"/static/homeIcon/xl.png",isShow:true,"bgColor":"#9CDFCE"},
					{id:4,name:"年计划",txt:"文本",src:"/static/homeIcon/xlj.png",isShow:true,"bgColor":"#F6C3C3"}
				],
				moduleList2 : [
					{id:5,name:"阶段总结",txt:"文本",src:"/static/homeIcon/jh.png",isShow:true,"bgColor":"#F6C3C3"},
					{id:6,name:"年度总结",txt:"文本",src:"/static/homeIcon/jha.png",isShow:true,"bgColor":"#9BCCE6"},
				],
			}
		},
		methods:{
			goPlan(id){
				if(id==1){
					uni.navigateTo({
						url : "lessonPlan"
					})
				}
				else if(id==2){
					uni.navigateTo({
						url : "weekPlan"
					})
				}
				else if(id==3){
					uni.navigateTo({
						url : "stangePlan"
					})
				}
				else if(id==4){
					uni.navigateTo({
						url : "yearPlan"
					})
				}
				else if(id==5){
					uni.navigateTo({
						url : "stangeAll"
					})
				}
				else if(id==6){
					uni.navigateTo({
						url : "yearAll"
					})
				}
			}
		}
	}
</script>
<style lang="less">
	page{
		padding-top: 88rpx;
		background: #f6f8f7;
	}
	.rightIcon{
		width: 30rpx;
		height: 30rpx;
	}
	.moduleBox{
		width: 710rpx;
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		&>view{
			width: 160rpx;
			height: 240rpx;
			position: relative;
			box-sizing: border-box;
			color: white;
			display: flex;
			align-items: center;
			flex-direction: column;
			border-radius:12rpx;
			opacity: 0.8;
			margin-left:22rpx;
			.moduleTitle{
				font-size: 28rpx;
				font-weight: bold;
				margin-bottom:32rpx;
				margin-top:32rpx;
			}
			.moduleTxt{
				font-size: 26rpx;
				opacity: 0.6;
				margin-top: 12rpx;
			}
		}
	}
	.marLeft{
		margin-left: 0 !important;
	}
</style>
