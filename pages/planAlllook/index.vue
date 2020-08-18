<template>
	<view>
		<view class="searchHead isFlexalitem">
			<input type="text" placeholder="请输入要搜索的内容"  placeholder-style="font-size:28rpx;color:#999999">
			<image class="searchIcon" src="../../static/gymIcon/search.png"></image>
			<image class="rightIcon"  src="../../static/gymIcon/s.png"></image>
		</view>
		
		<view class="tabDataList isFlexalitem">
			<view :class="{'viewActive':tabIndex==0}" @click="tabDataList(0)">训练计划</view>
			<view :class="{'viewActive':tabIndex==1}" @click="tabDataList(1)">方案总结</view>
		</view>
		<view class="tabBox isFlexSpace">
			<view class="tabList isFlexSpace">
				<picker @change="pickDwChange" :range="pickDw"><view><text class="lineOne">{{inpDw}}</text><image src="../../static/gymIcon/under.png"></image></view></picker>
				<picker @change="pickXmChange" :range="pickXm"><view class="center"><text class="lineOne">{{inpXm}}</text><image src="../../static/gymIcon/under.png"></image></view></picker>
				<picker @change="pickCjChange" :range="pickCj"><view class="right"><text class="lineOne">{{inpCj}}</text><image src="../../static/gymIcon/under.png"></image></view></picker>
			</view>
		</view>
		
		
		<view class="main">
			<view class="moList">
				<view class="pickerName">学院体操王玉组08-20至08-26周计</view>
				<view class="pickerTime  isFlexalitem"><image src="../../static/gymIcon/nzb.png"></image><text>时间:</text><text>08:26</text>~<text>08:30</text></view>
				<view class="picerPreson isFlexalitem"><image src="../../static/homeIcon/my.png"></image><text>人员:</text><text>张三，李四，王五</text></view>
				<view class="moUnder">
					<textarea value="" placeholder="进行队员调节状态" />
				</view>
			</view>
				
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				Cindex     : 0,
				tabIndex   : 0,
				
				pickDw     : ['男范范德萨','女'],
				inpDw      : "机构",
				
				pickXm     : ['1','2'],
				inpXm      : "项目",
				
				pickCj     : ['50分','100分'],
				inpCj      : "周计划",
			}
		},
		onLoad() {

		},
		methods: {
			pickDwChange(e){
				this.Cindex=0;
				this.inpDw = this.pickDw[e.target.value];
			},
			pickXmChange(e){
				this.Cindex=0;
				this.inpXm = this.pickXm[e.target.value];
			},
			pickCjChange(e){
				this.Cindex=0;
				this.inpCj = this.pickCj[e.target.value];
			},
			showDrawer(e) {
				this.$refs[e].open()
			},
			cancle(){
				this.$refs['showRight'].close();
			},
			sure(){		//确定
				this.Cindex=2;
				this.$refs['showRight'].close();
			},
			showDefault(){
				this.Cindex=1;
			},
			look(){
				uni.navigateTo({
					url : "default"
				})
			},
			tabDataList(index){
				this.tabIndex = index;
			}
		}
	}
</script>
<style lang="less">
	page{
		background: #F6F8F7;
	}
	.searchHead{
		width: 100%;
		height: 80rpx;
		background: white;
		padding:0 20rpx 0 40rpx;
		box-sizing: border-box;
		position: fixed;
		top: 0;
		input{
			flex: 1;
			height: 60rpx;
			background:rgba(246,248,247,1);
			border-radius:30rpx;
			padding-left:96rpx;
			margin-right: 20rpx;
			font-size: 28rpx;
		}
		.searchIcon{
			width: 32rpx;
			height: 32rpx;
			position: absolute;
			top:24rpx;
			left:92rpx;
		}
		.rightIcon{
			width: 40rpx;
			height: 40rpx;
		}
	}
	.tabDataList{
		width: 710rpx;
		height: 64rpx;
		box-sizing: border-box;
		position: fixed;
		top: 80rpx;
		left: 50%;
		margin-left: -355rpx;
		background: white;
		border-radius:10rpx;
		border:2rpx solid rgba(20,146,255,1);
		view{
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 28rpx;
			color: #1492FF;
			height: 100%;
		}
		.viewActive{
			background: #1492FF;
			color: white;
		}
	}
	.tabBox{
		width: 100%;
		height: 88rpx;
		background: white;
		padding:0 20rpx 0 40rpx;
		box-sizing: border-box;
		position: fixed;
		top: 144rpx;
		z-index: 3;
		.tabList{
			width: 650rpx;
			height: 100%;
			font-size: 26rpx;
			color: #333333;
			font-weight: bold;
			padding: 0 42rpx;
			box-sizing:border-box;
			view{
				width:200rpx;
				display: flex;
				align-items:center;
				text{
					display:inline-block;
					max-width:120rpx;
				}
			}
			.center{
				justify-content: center;
			}
			.right{
				justify-content: flex-end;
			}
			image{
				width: 24rpx;
				height: 18rpx;
				margin-top:6rpx;
				margin-left: 8rpx;
			}
		}
		&>image{
			width: 24rpx;
			height: 22rpx;
			margin-top: 4rpx;
		}
	}
	.main{
		padding-top: 244rpx;
		.moList{
			width: 710rpx;
			background: white;
			margin: 0 auto;
			padding:10rpx 20rpx;
			box-sizing: border-box;
			.pickerName{
				font-size: 28rpx;
				color: #333333;
				font-weight: bold;
				margin-bottom: 28rpx;
			}
			.pickerTime,.picerPreson{
				font-size: 26rpx;
				color:#999999;
				margin-top: 10rpx;
				image{
					width: 26rpx;
					height: 28rpx;
					margin-right: 8rpx;
				}
				text:nth-of-type(1){
					margin-right: 16rpx;
				}
			}
			.moUnder{
				width: 670rpx;
				height: 90rpx;
				font-size: 26rpx;
				margin-top: 12rpx;
				textarea{
					font-size: 26rpx;
					background: #F6F8F7;
					height: 100%;
					width: 100%;
					padding: 12rpx;
					box-sizing: border-box;
				}
			}
		}
	}
</style>
