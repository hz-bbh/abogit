<template>
	<view>
		<view class="searchHead isFlexalitem">
			<input type="text" placeholder="请输入要搜索的记录"  confirm-type="search"  v-model="inpSearch"  @confirm="confirm" placeholder-style="font-size:28rpx;color:#999999">
			<image class="searchIcon" src="../../static/gymIcon/search.png"></image>
			<image class="rightIcon"  src="../../static/gymIcon/s.png"  @click="showDrawer('showRight')"></image>
		</view>
		
		<view class="main">
			<view v-for="(item,index) in joinList" class="joinList">
				<view class="objectList isFlexSpace">
					<view>
						<view><text class="objectName">礼拜</text></view>
						<view class="nzBox isFlexCenter" >
							<image src="../../static/icon/nav.png"></image><text class="city">浙江省</text>
							<image src="../../static/gymIcon/nz.png"></image><text>2012.03.02</text>
						</view>
					</view>
					<image class="masou" src="../../static/gymIcon/masou.png"></image>
				</view>
				<view class="rankList">
					<view class='rankView'>男子单浆2000米</view>
					<view class="rankTabList isFlexSpace">
						<view><view>伦次</view><view class="rankTitle">决赛</view></view>
						<view><view>伦次</view><view class="rankTitle">决赛</view></view>
						<view><view>伦次</view><view class="rankTitle">决赛</view></view>
					</view>
				</view>
			</view>
		</view>
		
		
		<view class="addBtn"  @click="goAdd">
			<image src="../../static/homeIcon/dragAdd.png"></image>
		</view>
	</view>
</template>  
<script>
	export default {
		data() {
			return {
				joinList : [1,2,3,4,5,6]
			}
		},
		methods:{
			goAdd(){
				uni.navigateTo({
					url : "sportDefaultJoinAdd"
				})
			}
		}
	}
</script>
<style lang="less">
	.searchHead{
		width: 100%;
		height: 80rpx;
		background: white;
		padding:0 20rpx 0 40rpx;
		box-sizing: border-box;
		position: fixed;
		top: 0;
		z-index: 3;
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
	.main{
		padding-top: 100rpx;
	}
	.rankList{
		width: 710rpx;
		height: 212rpx;
		background: white;
		border-radius:0 0 16rpx 16rpx;
		margin: 0 auto;
		padding-top: 24rpx;
		box-sizing: border-box;
		.rankView{
			display: inline-block;
			height:44rpx;
			line-height: 44rpx;
			background:rgba(255,239,215,1);
			border-radius:0px 12px 12px 0px;
			color: #FFCE24;
			font-size: 26rpx;
			padding: 0 26rpx 0 40rpx;
			box-sizing: border-box;
			font-weight: bold;
		}
		.rankTabList{
			font-size: 26rpx;
			color: #666666;
			font-weight: bold;
			margin-top: 40rpx;
			&>view{
				flex: 1;
				text-align: center;
			}
		}
		.rankTitle{
			flex: 1;
			font-size: 28rpx;
			color: #333333;
		}
	}
	
	.joinList{
		margin-bottom: 20rpx;
	}
	.objectList{
		width:710rpx;
		height:134rpx;
		background:rgba(140,217,199,1);
		border-radius:16rpx 16rpx 0 0;
		margin: 0 auto;
		padding: 0 56rpx 0 40rpx;
		box-sizing: border-box;
		font-size: 26rpx;
		color: #FFFFFF;
		position: relative;
		view{
			view{
				display: flex;
				align-items: center;
			}
			image{
				width: 22rpx;
				height: 22rpx;
				margin-right: 10rpx;
			}
		}
		.city{
			margin-right: 44rpx;
		}
		.objectName{
			font-size: 28rpx;
			font-weight: bold;
			margin-bottom: 12rpx;
		}
		.masou{
			width: 84rpx;
			height: 84rpx;
		}
	}
	.addBtn{
		width: 72rpx;
		height: 72rpx;
		position: fixed;
		bottom: 176rpx;
		right: 38rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
</style>