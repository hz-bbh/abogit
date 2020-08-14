<template>
	<view>
		<view class="searchHead isFlexalitem">
			<input type="text" placeholder="请输入要搜索的记录"  placeholder-style="font-size:28rpx;color:#999999">
			<image class="searchIcon" src="../../static/gymIcon/search.png"></image>
			<image class="rightIcon"  src="../../static/gymIcon/s.png"></image>
		</view>
		
		<view class="tabBox isFlexSpace">
			<view class="tabList isFlexSpace">
				<picker @change="pickDwChange" :range="pickDw"><view><text class="lineOne">{{inpDw}}</text><image src="../../static/gymIcon/under.png"></image></view></picker>
				<picker @change="pickXmChange" :range="pickXm"><view><text class="lineOne">{{inpXm}}</text><image src="../../static/gymIcon/under.png"></image></view></picker>
				<picker @change="pickCjChange" :range="pickCj"><view><text class="lineOne">{{inpCj}}</text><image src="../../static/gymIcon/under.png"></image></view></picker>
			</view>
			<image src="../../static/gymIcon/all.png" @click="showDrawer('showRight')"></image>
		</view>
		
		
		<view class="main">
			
			<view v-if="Cindex==0">
				<view class="objectList isFlexSpace"  @click="showDefault">
					<view class="isFlexalitem">
						<image class="objectPhoto" src="../../static/logo.png"></image>
						<view>
							<view><image src="../../static/gymIcon/name.png"></image><text class="objectName">李四</text><image src="../../static/gymIcon/type.png"></image><text>篮球</text></view>
							<view class="nzBox"><image src="../../static/gymIcon/nz.png"></image><text>2012.02.23</text></view>
						</view>
					</view>
					
					<view class="circle isFlexCenter">
						<image class="sex" src="../../static/gymIcon/boy.png" ></image>
					</view>
					<image class="masou" src="../../static/gymIcon/masou.png"></image>
				</view>
				
				<view class="objectList isFlexSpace"  @click="showDefault">
					<view class="isFlexalitem">
						<image class="objectPhoto" src="../../static/logo.png"></image>
						<view>
							<view><image src="../../static/gymIcon/name.png"></image><text class="objectName">张三</text><image src="../../static/gymIcon/type.png"></image><text>足球</text></view>
							<view class="nzBox"><image src="../../static/gymIcon/nz.png"></image><text>2012.02.23</text></view>
						</view>
					</view>
					
					<view class="circle isFlexCenter">
						<image class="sex" src="../../static/gymIcon/girl.png" ></image>
					</view>
					<image class="masou" src="../../static/gymIcon/masou.png"></image>
				</view>
			</view>
			
			
			<view v-if="Cindex==1">
				<view class="tableBox">
					<view class="tableBoxTitle isFlexSpace">
						<view class="isFlexalitem">
							<image src="../../static/gymIcon/nzb.png"></image>
							<text>2020年5月1日备份</text>
						</view>
						<text @click="look">查看详情</text>
					</view>
					
					<view class="tableTab isFlexalitem">
						<view class="tableOne">姓名</view>
						<view class="tableTabproject borLeftNone">项目</view>
						<view class="tableOne borLeftNone">成绩</view>
						<view class="tableOne borLeftNone">评分</view>
					</view>
					<view class="tableListInfo">
						<view class="tableListInfoName">李白哈哈</view>
						<view class="tableListInfoRight">
							<view class="tableListInfoRightTap isFlexalitem">
								<view class="tableListName borNoneTop" >分电视剧看风景肯放到手机里</view>
								<view class="tableListCj isRed borNoneTop">100</view>
								<view class="tableListFs borNoneTop">60</view>
							</view>
							
							<view class="tableListInfoRightTap isFlexalitem">
								<view class="tableListName">分电视剧看风景肯放到手机里</view>
								<view class="tableListCj isRed">100</view>
								<view class="tableListFs ">60</view>
							</view>
							
							
							<view class="tableListInfoRightTap isFlexalitem">
								<view class="tableListName">分电视剧看风景肯放到手机里放暑假了对方家里宽带收费记录卡撒旦金克拉数据来看</view>
								<view class="tableListCj isRed">100</view>
								<view class="tableListFs isDeepBlue">60</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			
			<view v-if="Cindex==2">
				<view class="titleHead isFlexSpace">
					<view class="isFlexalitem">
						<text class="titleHeadBlack">条件:</text>
						<text>性别 男</text>
						<text style="margin-left: 22rpx;">年龄段</text>
						<text>18~20</text>
					</view>
					<view><text class="titleHeadBlack">总数</text><text>2</text></view>
				</view>
				
				<view class="titleListData   isFlexalitem   titleListDataActive">
					<view>时间</view>
					<view class="borLeftNone">姓名</view>
					<view class="borLeftNone">性别</view>
					<view class="borLeftNone">成绩</view>
					<view class="borLeftNone">评分</view>
				</view>
				<view class="titleListData   isFlexalitem borNoneTopAvtive">
					<view>2012.02/02</view>
					<view class="borLeftNone">张三</view>
					<view class="borLeftNone isSmallFont">男</view>
					<view class="borLeftNone">80</view>
					<view class="borLeftNone">7.5</view>
				</view>
			</view>
		</view>
		 
		<!-- 右侧策划菜单 -->
		<uni-drawer ref="showRight" mode="right" :width="582" >
			<view class="scroll-view">
				<scroll-view class="scroll-view-box" scroll-y="true">
					 <view class="scrollTitle">性别</view>
					 <view class="scrollBtnList">
						 <view class="isBlue">你好</view>
						 <view>haha</view>
					 </view>
					 <view class="scrollTitle">年龄段</view>
					 <view class="scrollBtnList">
						 <view class="isBlue">你好</view>
						 <view>haha</view>   
						 <view>分段函数返1</view>
						 <view>分段函数返</view>
						 <view>分段函数返</view>
						 <view>分段函数返2</view>
					 </view>
					 <view class="scrollTitle">其它项</view>
					 <view class="scrollBtnList">
						 <view class="isBlue">你好</view>
						 <view>haha</view>
						 <view>分段函数返1</view>
						 <view>分段函数返</view>
						 <view>分段函数返</view>
						 <view>分段函数返2</view>
					 </view>
					 <view class="scrollIsBtn isFlexSpace">
						 <view @click="cancle">取消</view>
						 <view>|</view>
						 <view class="isBlue" @click="sure">确定</view>
					 </view>
				</scroll-view>
			</view>
		</uni-drawer>

	</view>
</template>
<script>
	export default {
		data() {
			return {
				Cindex     : 0,
				
				pickDw     : ['男范范德萨','女'],
				inpDw      : "单位",
				
				pickXm     : ['1','2'],
				inpXm      : "项目",
				
				pickCj     : ['50分','100分'],
				inpCj      : "成绩",
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
	.tabBox{
		width: 100%;
		height: 80rpx;
		background: white;
		padding:0 20rpx 0 40rpx;
		box-sizing: border-box;
		position: fixed;
		top: 80rpx;
		.tabList{
			width: 650rpx;
			height: 100%;
			font-size: 26rpx;
			color: #333333;
			font-weight: bold;
			padding: 0 42rpx;
			box-sizing:border-box;
			view{
				display: flex;
				align-items:center;
				text{
					display:inline-block;
					max-width:240rpx;
				}
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
		padding-top: 180rpx;
		.objectList{
			width:710rpx;
			height:106rpx;
			background:rgba(140,217,199,1);
			border-radius:16rpx;
			margin: 0 auto 20rpx;
			padding: 0 52rpx 0 20rpx;
			box-sizing: border-box;
			font-size: 26rpx;
			color: #FFFFFF;
			position: relative;
			.objectPhoto{
				width: 64rpx;
				height: 64rpx;
				border-radius: 50%;
				margin-right: 36rpx;
			}
			view>view{
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
			.nzBox{
				margin-top: 12rpx;
				font-weight: bold;
			}
			.objectName{
				margin-right: 46rpx;
			}
			.masou{
				width: 82rpx;
				height: 82rpx;
			}
			.sex{
				width: 14rpx;
				height: 16rpx;
			}
			.circle{
				width: 28rpx;
				height: 28rpx;
				background:rgba(140,217,199,1);
				border-radius: 50%;
				position: absolute;
				top: 20rpx;
				left: 70rpx;
			}
		}
	}
	
	
	/* 处理抽屉内容滚动 */
	.scroll-view {
		width: 100%;
		height: 100%;
		flex: 1
	}
	.scroll-view-box {
		flex: 1;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		padding: 70rpx 0rpx 0 34rpx;
		box-sizing: border-box;
	}
	.scrollTitle{
		font-size: 32rpx;
		font-weight: bold;
		color: #333333;
		margin-top: 30rpx;
		margin-bottom: 24rpx;
	}
	.scrollBtnList{
		display: flex;
		flex-wrap: wrap;
	}
	.scrollBtnList view{
		height: 44rpx;
		background: #1492FF;
		padding: 0 24rpx;
		border-radius:12rpx;
		font-size: 28rpx;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		margin-right: 20rpx;
		margin-bottom: 12rpx;
		opacity:0.6;
	}
	.scrollIsBtn{
		width:238rpx;
		height:48rpx;
		background:rgba(20,146,255,1);
		border-radius:28rpx;
		margin: 140rpx auto 0;
		font-size: 28rpx;
		color: white;
		padding: 0 36rpx;
		box-sizing: border-box;
		view{
			opacity: 0.6;
		}
	}
	.isBlue{
		opacity:1 !important;
	}
	
	
	// 表格
	.tableBoxTitle{
		font-size: 26rpx;
		color: #333333;
		padding: 0 20rpx;
		font-weight: bold;
		margin-top: 6rpx;
		image{
			width: 20rpx;
			height: 22rpx;
			margin-right: 10rpx;
		}
		&>text{
			color: #8CD9C7;
			font-weight: 500;
		}
	}
	.tableTab{
		width: 710rpx;
		height: 64rpx;
		background:#E0F1ED;
		margin:16rpx auto 0;
		view{
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 26rpx;
			color: #8EDAC8;
			height: 100%;
			border: 1rpx solid #98DDCD;
			box-sizing: border-box;
		}
	}
	.tableListInfo{
		width: 710rpx;
		margin:0rpx auto 0;
		border: 1rpx solid #98DDCD;
		box-sizing: border-box;
		border-top: none;
		display: flex;
	}
	.tableListInfoName{
		width: 100rpx;
		font-size: 26rpx;
		color: #333333;
		font-weight: bold;
		box-sizing: border-box;
		text-align: center;
		padding: 0 24rpx;
		display: flex;
		align-items: center;
	}
	.tableListInfoRight{
		width: 610rpx;
		box-sizing: border-box;
		font-size: 26rpx;
		color: #333333;
		text-align: center;
	}
	.tableListInfoRightTap{
		width: 610rpx;
		box-sizing: border-box;
		display: grid;
		grid-template-columns:410rpx 100rpx 100rpx;
		view{
			box-sizing: border-box;
			padding: 24rpx 12rpx;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			border-left: 1rpx solid #98DDCD;
			border-top: 1rpx solid #98DDCD;
		}
	}
	.tableListName,.tableTabproject{
		width: 410rpx;
		padding: 0 12rpx;
		box-sizing: border-box;
	}
	.tableOne,.tableListCj,.tableListFs{
		width: 100rpx;
	}
	
	
	
	
	.titleHead{
		color: #8CD9C7;
		font-size: 26rpx;
		font-weight: 500;
		padding: 0 20rpx;
		margin-bottom: 20rpx;
		.titleHeadBlack{
			color: #333333;
			font-size: 24rpx;
			font-weight: bold;
			margin-right:24rpx;
		}
	}
	.titleListData{
		width: 710rpx;
		height: 64rpx;
		margin: 0 auto;
		view{
			display: flex;
			align-items: center;
			justify-content: center;
			box-sizing: border-box;
			border: 1rpx solid #98DDCD;
			font-size: 26rpx;
			height: 100%;
			flex:1.5;
		}
		&>view:nth-of-type(1){
			flex: 3;
		}
		&>view:nth-of-type(2){
			flex: 2;
		}
	}
	
	.isBold{
		font-weight: bold;
	}
	.isRed{
		color: #E16464 !important;
	}
	.isDeepBlue{
		color: #1492FF !important;
	}
	.borNoneTop{
		border-top: none !important;
	}
	.borLeftNone{
		border-left: none !important;
	}
	.borNoneTopAvtive{
		view{
			border-top: none;
		}
		font-weight: bold;
	}
	.titleListDataActive{
		color : #8CD9C7;
		background: #E0F1ED;
	}
	.isSmallFont{
		font-size: 24rpx !important;
	}
</style>
