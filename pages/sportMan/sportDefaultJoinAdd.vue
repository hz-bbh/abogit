<template>
	<view>
		<view class="jx"></view>
		<view class="viewInp isFlexalitem"><view>赛事名称</view><input type="text" placeholder="请填写名称"></view>
		
		<view class="jx"></view>
		<view class="viewInp isFlexalitem"><view>地点</view><input type="text" placeholder="请填写地址"></view>
		
		<view class="jx"></view>
		<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
			<view class="viewList isFlexSpace borNone">
				<view class="isFlexalitem"><view>时间</view><text>{{date}}</text></view>
				<image src="../../static/homeIcon/right.png"></image>
			</view>
		</picker>
		<view class="jx"></view>
		<view class="viewInp isFlexalitem"><view>基础体能</view></view>
		
		<view class="viewInpList isFlexalitem"><view>2000m测试</view><input type="text" placeholder="请填写地址"></view>
		<view class="viewInpList isFlexalitem"><view>地点</view><input type="text" placeholder="请填写地址"></view>
		<view class="viewInpList isFlexalitem"><view>地点</view><input type="text" placeholder="请填写地址"></view>
		<view class="viewInpList isFlexalitem"><view>地点</view><input type="text" placeholder="请填写地址"></view>
		<view class="viewInpList isFlexalitem"><view>地点</view><input type="text" placeholder="请填写地址"></view>
		<view class="viewInpList isFlexalitem"><view>地点</view><input type="text" placeholder="请填写地址"></view>
		<view class="viewInpList isFlexalitem"><view>地点</view><input type="text" placeholder="请填写地址"></view>
		<view class="viewInpList isFlexalitem"><view>地点</view><input type="text" placeholder="请填写地址"></view>
		<view class="viewInpList isFlexalitem"><view>地点</view><input type="text" placeholder="请填写地址"></view>
		<view class="viewInpList isFlexalitem"><view>地点</view><input type="text" placeholder="请填写地址"></view>
		<view class="btn isFlexCenter">自动评测</view>
		
		<view class="jx"></view>
		<view class="viewList isFlexSpace borNone">
			<view class="isFlexalitem"><view>专项指标</view><text></text></view>
		</view>
		<view class="viewList isFlexSpace borNone">
			<view class="isFlexalitem"><view>赛艇</view></view>
			<image src="../../static/homeIcon/right.png"></image>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				date: "请选择",
			}
		},
		methods:{
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			},
			bindDateChange(e){
				this.date = e.target.value
			},
			getDate(type) {
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
				return `${year}-${month}-${day}`;
			}
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
				width: 192rpx;
			}		
		}
		image{
			width: 28rpx;
			height:28rpx;
		}
	}
	.viewInpList{
		height: 50rpx;
		padding: 0 20rpx;
		box-sizing: border-box;
		background: white;
		margin-top: 10rpx;
		view{
			width: 350rpx;
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
	.btn{
		width:710rpx;
		height:70rpx;
		margin:28rpx auto 48rpx;
		background:rgba(20,147,255,1);
		border-radius:16rpx;
		font-size:28rpx;
		color: white;
	}
</style>
