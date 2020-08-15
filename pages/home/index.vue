<template>
	<view>
		<view class="title isFlexSpace">
			<view></view>
			<view class="titleName" @click="openSheet">训练管理系统</view>
			<view class="titleIcon">
				<image @click="openBj" src="../../static/homeIcon/bj.png" v-if="isshowBefore"></image>
				<text v-if="!isshowBefore"  @click="goFinsh">完成</text>
			</view>
		</view>
		<view class="isShowBj" :class="{'isShowBjAc':isShowBj}">
			<view class="borNone" @click="goBj">编辑</view>
			<view @click="lookAll">查看全部</view>
		</view>
		
		<!-- 前台展示区域 -->
		<view class="main" @click.stop="closeIsShowBj"  v-if="isshowBefore">
			<view class="moduleBox isFlexSpace">
				<view v-for="(item,index) in moduleList" :key="item.id" v-if="item.isShow" @click="goDefault(item.id)">
					<image :src="item.src"></image>
					<view class="moduleTitle">{{item.name}}</view>
					<view class="moduleTxt">{{item.txt}}</view>
					<view class="moduleBjIcon isFlexCenter" v-if="isShowBjIcon"  @click.stop="hidden(index)">一</view>
				</view>
			</view>
			
			
			<view class="headView isFlexalitem" v-if="objectList!=''">人员</view>
			<objectList  :objectList="objectList"    @changOne="changOne"   @goClick="goUrl" :isShowBjIcon="isShowBjIcon"  :type="0"></objectList>
			
			<view class="headView isFlexalitem" v-if="objectOnline!=''">实时在线</view>
			<objectList  :objectList="objectOnline"  @changTow="changTow"   @goClick="goUrl" :isShowBjIcon="isShowBjIcon"  :type="1"></objectList>
			
			<view class="headView isFlexalitem" v-if="objectJy!=''">反馈与建议</view>
			<objectList  :objectList="objectJy"      @changThree="changThree"  @goClick="goUrl" :isShowBjIcon="isShowBjIcon"  :type="2"></objectList>
		</view>
		
		
		<!-- 后台管理模块 -->
		<view v-if="!isshowBefore">
			<view class="dragTitle isFlexSpace">
				<text>前台模块展示</text>
				<text class="isGray">按住拖动调整顺序</text>
			</view>
			<shmily-drag-image ref="dragImage" :list.sync="listData"  :custom="true" @addImage="addImage"  :type="0"></shmily-drag-image>
			
			<view class="dragTitle isFlexSpace">
				<text>添加模块</text>
			</view>
			<shmily-drag-image ref="dragImage" :list.sync="listData" @update="update"  :custom="true" @addImage="addImage" :type="1"></shmily-drag-image>
		</view>
		
		
		<!-- 添加成功弹窗 -->
		<uni-popup ref="openSucess" type="center" >
			<view class="Popupbox" @click="closeSheet()">
				<image src="../../static/homeIcon/iknow.png"></image>
				<view>添加了新功能模块</view>
			</view>
		</uni-popup>
		
	</view>
</template>
<script>
	export default {
		data() {
			return {
				moduleList : [
					{id:1,name:"计划指定",txt:"文本",src:"/static/homeIcon/jh.png",isShow:true},
					{id:2,name:"计划总览",txt:"文本",src:"/static/homeIcon/jha.png",isShow:true},
					{id:3,name:"训练单位",txt:"文本",src:"/static/homeIcon/xl.png",isShow:true},
					{id:4,name:"训练基地",txt:"文本",src:"/static/homeIcon/xlj.png",isShow:true},
				],
				objectList : [
					{id:1,name:"运动员",src:"/static/homeIcon/ydy.png"},
					{id:2,name:"教练员",src:"/static/homeIcon/jl.png"},
					{id:3,name:"保障人员",src:"/static/homeIcon/bz.png"},
					{id:4,name:"管理人员",src:"/static/homeIcon/gl.png"},
					{id:5,name:"体能测试",src:"/static/homeIcon/tn.png"},
				],
				objectOnline: [
					{id:6,name:"训练直播",src:"/static/homeIcon/zb.png"},
					{id:7,name:"训练图文",src:"/static/homeIcon/tw.png"},
					{id:8,name:"统计分析",src:"/static/homeIcon/tj.png"},
				],
				objectJy: [
					{id:9,name:"反馈与意见",src:"/static/homeIcon/yj.png"},
				],
				
				isShowBj : false,			//是否显示编辑的布局
				
				isShowBjIcon : false,		//是否显示每个模块的右上角按钮
				
				isshowBefore : true,		//true 展示前端页面，false展示添加模块界面
				
				listData: [
					{id:1,name:"运动员",src:"/static/homeIcon/ydy.png"},
					{id:2,name:"教练员",src:"/static/homeIcon/jl.png"},
					{id:3,name:"保障人员",src:"/static/homeIcon/bz.png"},
					{id:4,name:"管理人员",src:"/static/homeIcon/gl.png"},
					{id:5,name:"体能测试",src:"/static/homeIcon/tn.png"},
				],
			}
		},
		methods:{
			openBj(){
				this.isShowBj = !this.isShowBj;
			},
			closeIsShowBj(){
				this.isShowBj = false;
				this.isShowBjIcon = false;
			},
			goBj(){
				this.isShowBjIcon = true;
				this.isShowBj  = false;
			},
			hidden(index){		//4大模块
				this.moduleList[index].isShow = false;
			},
			changOne(e){
				this.objectList = e;
			},
			changTow(e){
				this.objectOnline = e;
			},
			changThree(e){
				this.objectJy = e;
			},
			lookAll(){
				this.isShowBj  = false;
				this.isshowBefore = false;
			},
			update(e){
				console.log("e: " + JSON.stringify(e));
			},
			goFinsh(){
				this.isshowBefore = true;
			},
			openSheet(){
				this.$refs['openSucess'].open();
			},
			closeSheet(){
				this.$refs['openSucess'].close();
			},
			goDefault(id){
				if(id==1){
					uni.navigateTo({
						url : "../planMark/index"
					})
				}
				else if(id==2){
					uni.navigateTo({
						url : "../planAlllook/index"
					})
				}
				else if(id==3){
					uni.navigateTo({
						url : "../xlDw/index"
					})
				}
				else if(id==4){
					uni.navigateTo({
						url : "../xlJd/index"
					})
				}
			},
			goUrl(id){
				if(id==7){
					uni.navigateTo({
						url : "../book/index"
					})
				}else if(id==9){
					uni.navigateTo({
						url : "idea"
					})
				}
			}
		}
	}
</script>
<style lang="less">
	page{
		padding-top: 88rpx;
		padding-bottom: 24rpx;
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
		background: #F6F8F7;
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
			font-size: 24rpx;
		}
		image{
			width: 20rpx;
			height: 20rpx;
		}
	}
	.isShowBj{
		width: 120rpx;
		height: 98rpx;
		background:rgba(255,255,255,1);
		border-radius:20rpx;
		background: white;
		position: fixed;
		right:64rpx;
		top: -120rpx;
		z-index: 3;
		text-align: center;
		view{
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 18rpx;
			height: 49rpx;
			border-top: 1rpx solid #e7e7e7;
		}
		opacity: 0;
		transition: all 0.3s;
	}
	.isShowBjAc{
		top: 40rpx !important;
		opacity: 1 !important;
	}
	.main{
		padding: 0 20rpx;
		box-sizing: border-box;
	}
	.moduleBox{
		flex-wrap: wrap;
		&>view{
			width: 350rpx;
			height: 176rpx;
			margin-top: 10rpx;
			position: relative;
			padding: 20rpx 0 0 40rpx;
			box-sizing: border-box;
			color: white;
			image{
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
			}
			.moduleTitle{
				font-size: 32rpx;
				font-weight: bold;
				position: relative;
				z-index: 1;
			}
			.moduleTxt{
				font-size: 24rpx;
				opacity: 0.6;
				margin-top:12rpx;
			}
			.moduleBjIcon{
				width:32rpx;
				height: 32rpx;
				background: #1296DB;
				border-radius: 50%;
				color: white;
				font-size: 18rpx;
				position: absolute;
				top:8rpx;
				right: 8rpx;
				z-index: 2;
			}
		}
	}
	.headView{
		height: 74rpx;
		font-weight: bold;
		font-size: 32rpx;
	}
	
	
	
	.dragTitle{
		font-size: 32rpx;
		font-weight: bold;
		padding: 0 22rpx;
		.isGray{
			color: #999999;
			font-size: 24rpx;
			font-weight: 400;
		}
	}
	.Popupbox{
		width: 488rpx;
		height: 634rpx;
		position: relative;
		image{
			width: 100%;
			height: 100%;
		}
		view{
			position: absolute;
			width: 400rpx;
			text-align: center;
			left: 50%;
			margin-left: -200rpx;
			top:400rpx;
			font-size: 32rpx;
			color: #666666;
		}
	}
</style>
