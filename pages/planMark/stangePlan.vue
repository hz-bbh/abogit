<template>
	<view>
		<view class="jx"></view>
		<view class="viewInp isFlexalitem"><view>名称</view><input type="text" placeholder="请填写名称"></view>
		
		<view class="jx"></view>
		<view class="viewInp isFlexalitem"><view>地点</view><input type="text" placeholder="请填写地址"></view>
		
		<view class="jx"></view>
		<view class="viewList isFlexSpace borNone"><view>运动员</view><image src="../../static/homeIcon/right.png"></image></view>
		
		
		<view class="jx"></view>
		<picker mode="date"  :start="startDate" :end="endDate" @change="bindDateChange($event,1)"  fields="year">
			<view class="viewList isFlexSpace borNone">
				<view class="isFlexalitem"><view>年份</view><text>{{startTime}}</text></view>
				<image src="../../static/homeIcon/right.png"></image>
			</view>
		</picker>
		
		<view class="jx"></view>
		<view class="viewList isFlexSpace borNone"><view>1月第一周</view><image src="../../static/homeIcon/right.png"></image></view>
		<view class="viewList  isBlue isFlexSpace borNone"><view>内容</view></view>
		<textarea   placeholder="请输入" />
		<view class="viewList  isBlue isFlexSpace borNone"><view>阶段训练安排</view></view>
		<textarea   placeholder="请输入" />
		<view class="viewList  isBlue isFlexSpace borNone"><view>全年考核安排</view></view>
		<textarea   placeholder="请输入" />
		<view class="viewList  isBlue isFlexSpace borNone"><view>训练内容比例</view></view>
		<view class="viewListFlex isFlexSpace">
			<view>
				<view>一般素质</view>
				<view class="empty"></view>
			</view>
			<view>
				<view>专项素质</view>
				<view class="empty"></view>
			</view>
			<view>
				<view>技术</view>
				<view class="empty"></view>
			</view>
			<view>
				<view>战术</view>
				<view class="empty"></view>
			</view>
			<view>
				<view>其它</view>
				<view class="empty"></view>
			</view>
		</view>
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
				startTime : ""
			}
		},
		methods:{
			bindDateChange(e,type){
				this.startTime = e.detail.value;
			},
		}
	}
</script>

<style lang="less">
	page{
		background: white;
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
	
	
	textarea{
		width: 710rpx;
		height: 102rpx;
		background: white;
		padding:12rpx;
		box-sizing: border-box;
		font-size: 24rpx;
		border:2rpx solid rgba(231,231,231,1);
		margin: 0 auto;
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
</style>
