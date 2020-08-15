<template>
	<view>
		<view class="jx"></view>
		<view class="viewInp isFlexalitem"><view>名称</view><input type="text" placeholder="请填写名称"></view>
		
		<view class="jx"></view>
		<view class="viewInp isFlexalitem"><view>地点</view><input type="text" placeholder="请填写地址"></view>
		
		
		<view class="jx"></view>
		<picker mode="date"  :start="startDate" :end="endDate" @change="bindDateChange($event,3)"  fields="year">
			<view class="viewList isFlexSpace borNone">
				<view class="isFlexalitem"><view>年份</view><text>{{yearTime}}</text></view>
				<image src="../../static/homeIcon/right.png"></image>
			</view>
		</picker>
		<picker mode="date"  :start="startDate" :end="endDate" @change="bindDateChange($event,1)">
			<view class="viewList isFlexSpace">
				<view class="isFlexalitem"><view>开始时间</view><text>{{startTime}}</text></view>
				<image src="../../static/homeIcon/right.png"></image>
			</view>
		</picker>
		
		
		<picker mode="date"  :start="startDate" :end="endDate" @change="bindDateChange($event,2)">
			<view class="viewList isFlexSpace">
				<view class="isFlexalitem"><view>结束时间</view><text>{{endTime}}</text></view>
				<image src="../../static/homeIcon/right.png"></image>
			</view>
		</picker>
		
		
		
		
		<view class="jx"></view>
		<view class="viewList isFlexSpace borNone"><view>运动员</view><image src="../../static/homeIcon/right.png"></image></view>
		
		
		<view class="jx"></view>
		<view class="viewList isFlexSpace borNone"><view>内容</view></view>
		<textarea value="" placeholder="请填写内容" />
	</view>
</template>

<script>
	function getDate(type) {
		const date = new Date();
	
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
	
		if (type === 'start') {
			year = year - 60;
		} else if (type === 'end') {
			year = year + 2;
		}
		month = month > 9 ? month : '0' + month;;
		day = day > 9 ? day : '0' + day;
	
		return `${year}`;
	}
	export default {
		data() {
			return {
				//时间选择器参数
				startDate :getDate('start'),
				endDate   :getDate('end'),
				startTime : "",
				endTime   : "",
				yearTime  : ""
			}
		},
		methods:{
			bindDateChange(e,type){
				if(type==1){
					this.startTime = e.detail.value;
				}else if(type==2){
					this.endTime = e.detail.value;
				}else{
					this.yearTime = e.detail.value;
				}
			},
		}
	}
</script>

<style lang="less">
	page{
		padding-bottom: 40rpx;
		box-sizing: border-box;
	}
	.viewInp{
		height: 78rpx;
		padding: 0 20rpx;
		box-sizing: border-box;
		background: white;
		view{
			width: 192rpx;
			font-size: 28rpx;
			color: #333333;
			font-weight: bold;
		}
		input{
			flex: 1;
			font-size: 26rpx;
			color: #333333;
		}
	}
	
	.object{
		background: white;
	}
	.viewList{
		height: 78rpx;
		padding: 0 40rpx 0 20rpx;
		box-sizing: border-box;
		background: white;
		border-top: 1rpx solid #EEEEEE;
		font-size: 28rpx;
		color: #333333;
		font-weight: bold;
		view{
			view{
				width: 200rpx;
			}		
		}
		image{
			width: 28rpx;
			height:28rpx;
		}
	}
	
	
	.listDataView{
		width:690rpx;
		margin-left: 40rpx;
		border:2rpx solid rgba(231,231,231,1);
		height: 56rpx;
		display: flex;
		align-items: center;
		box-sizing: border-box;
	}
	.listDataViewAc{
		margin-top: 26rpx;
	}
	input{
		width: 100%;
		color: #333333;
		font-size: 26rpx;
		padding-left: 10rpx;
	}
	
	.isPadBom{
		padding-bottom: 20rpx !important;
		background: white;
	}
	.isSon{
		padding-left: 40rpx !important;
	}
	.isMarNone{
		margin-top: 0rpx;
	}
	.isPaddingMax{
		padding-left: 30rpx !important;
	}
	.isSmallHei{
		padding: 0 40rpx !important;
	}
	.isBlue{
		color: #1492FF;
		height: 56rpx !important;
	}
	
	.viewListFlex{
		width: 710rpx;
		font-size: 24rpx;
		margin: 0 auto;
		color: #999999;
		text-align: center;
		.empty{
			width: 120rpx;
			height: 38rpx;
			border:2rpx solid rgba(231,231,231,1);
			margin-top:6rpx ;
		}
	}
	
	textarea{
		width: 100%;
		height: 200rpx;
		background: white;
		padding:0 24rpx;
		box-sizing: border-box;
		font-size: 24rpx;
	}
</style>
