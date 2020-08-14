<template>
	<view>
		<view class="searchHead isFlexalitem">
			<input type="text" placeholder="请输入搜索内容"  placeholder-style="font-size:28rpx;color:#999999">
			<image class="searchIcon" src="../../static/gymIcon/search.png"></image>
			<image class="rightIcon"  src="../../static/homeIcon/my.png"  @click="goMyBook"></image>
		</view>
		
		<view class="tabList isFlexSpace">
			<picker @change="pickDwChange" :range="pickDw"><view><text class="lineOne">{{inpDw}}</text><image src="../../static/gymIcon/under.png"></image></view></picker>
			<picker @change="pickXmChange" :range="pickXm"><view><text class="lineOne">{{inpXm}}</text><image src="../../static/gymIcon/under.png"></image></view></picker>
		</view>
		
		<view class="columnBox">
			<view class="myCard">
				<view class="list" v-for="(obj,index) in loveList" :key="obj.ID"  v-if="index%2!=0" @click="goDiary(obj.ID)" >
					<image :src="obj.Pic1" mode="center"></image>  
					<view class="UserName">{{obj.UserName}}</view>
					<view class="Describe">
						<image class="loveIcon" src="../../static/homeIcon/lovey.png"></image>
						{{obj.Describe}}
					</view> 
					
				</view>
			</view>
			
			<view class="myCard">
				<view class="list" v-for="(obj,index) in loveList" :key="obj.ID"  v-if="index%2!=1" @click="goDiary(obj.ID)" >
					<image :src="obj.Pic1" mode="center"></image>  
					<view class="UserName">{{obj.UserName}}</view>
					<view class="Describe">
						<image class="loveIcon" src="../../static/homeIcon/lovey.png"></image>
						{{obj.Describe}}
					</view> 
				</view>
			</view>
		</view>
		<view class="loadWait">{{loadWait}}</view>
		<view class="addBom" @click='addBook'>
			<image src="../../static/homeIcon/dragAdd.png"></image>
		</view>
	</view>
</template>
<script>
	var _this;
	export default {
		onLoad() {
			_this = this;
			this.init();
		},
		onReachBottom(){				//上拉加载
			this.page++;
			setTimeout(function(){
				_this.init();
			},500);
		},  
		data() {
			return {
				pickDw     : ['男范范德萨','女'],
				inpDw      : "单位",
				
				pickXm     : ['1','2'],
				inpXm      : "项目",
				
				pickCj     : ['50分','100分'],
				inpCj      : "成绩",
				
				loveList : [],
				page     : 1,
				have     : true,
				loadWait : "加载中"
			}
		},
		methods:{
			pickDwChange(e){
				this.Cindex=0;
				this.inpDw = this.pickDw[e.target.value];
			},
			pickXmChange(e){
				this.Cindex=0;
				this.inpXm = this.pickXm[e.target.value];
			},
			init(){
				var param = {
					userID : 7298,
					rows : 10,
					page : _this.page,
					have : true
				}
				if(_this.have){
					this.ajax(param,"Diaries/GetDiariesByPage",function(data){
						if(data.state==1){
							_this.loveList = _this.loveList.concat(data.data);
						}else{
							if(_this.page>1){
								_this.have = false;
								_this.loadWait = 'End';
							}
							uni.showToast({title: data.text});
						}
					})
				}
			},
			load(){
				console.log("1111")
			},
			goMyBook(){
				uni.navigateTo({
					url : "myBook"
				})
			},
			addBook(){
				uni.navigateTo({
					url : "addBook"
				})
			}
		}
	}
</script>

<style lang="less">
	page{
		background: #FFFFFF;
		padding-top: 162rpx;
		font-size: 28rpx;
	}
	.searchHead{
		width: 100%;
		height: 80rpx;
		background: white;
		padding:0 32rpx 0 20rpx;
		box-sizing: border-box;
		position: fixed;
		top: 0;
		z-index: 3;
		input{
			flex: 1;
			height: 60rpx;
			background:rgba(246,248,247,1);
			border-radius:30rpx;
			padding-left:94rpx;
			margin-right: 28rpx;
			font-size: 28rpx;
		}
		.searchIcon{
			width: 32rpx;
			height: 32rpx;
			position: absolute;
			top:24rpx;
			left:78rpx;
		}
		.rightIcon{
			width: 52rpx;
			height: 48rpx;
		}
	}
	
	.tabList{
		width: 100%;
		height: 82rpx;
		font-size: 26rpx;
		color: #333333;
		font-weight: bold;
		padding: 0  200rpx;
		box-sizing:border-box;
		margin: 0 auto;
		position: fixed;
		top: 80rpx;
		left:0;
		z-index: 3;
		background: white;
		view{
			display: flex;
			align-items:center;
			text{
				display:inline-block;
				max-width:2.4rem;
			}
		}
		image{
			width: 24rpx;
			height: 18rpx;
			margin-top:6rpx;
			margin-left: 8rpx;
		}
	}
	
	
	
	.columnBox{
		background: #f6f8f7;
		display: flex;
		justify-content: space-between;
		padding:20rpx;
		box-sizing: border-box;
	}
	.myCard{
		width:350rpx;
		box-sizing: border-box;
	}
	
	.myCard>view{
		width: 100%;
		overflow: auto;
		border-radius: 20rpx 20rpx 0 0;
		margin-bottom: 10rpx;
		border: 1rpx solid lightgrey;
		box-sizing: border-box;
		position: relative;
	}
	.list image{
		width: 100%;
	}
	.Describe{
		font-size: 26rpx;
		text-align: justify;
		padding: 0  100rpx 16rpx 20rpx;
		box-sizing: border-box;
		color: #666666;
		word-break: break-word;
		position: relative;
	}
	.UserName{
		font-weight: bold;
		font-size: 28rpx;
		margin-top:16rpx;
		padding: 0 20rpx;
		box-sizing: border-box;
	}
	.loveIcon{
		width: 32rpx !important;
		height: 32rpx;
		position: absolute;
		top: 32rpx;
		right: 34rpx;
		z-index: 2;
	}
	
	
	/* 加载样子 */
	.loadWait{
		background:#f6f8f7;
		text-align: center;
		font-size: 28rpx;
		height:100rpx;
		line-height:100rpx;
		position: relative;
	}
	.addBom{
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		background: white;
		position: fixed;
		bottom: 232rpx;
		right: 60rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
</style>
