<template>
	<view>
		<view class="jx"></view>
		<view class="main">
			<planHeadLook :obj="objInfo"  ></planHeadLook>
			<table border="1" cellpadding="0" cellspacing="0">
				<tr>
					<th class="isTableName isTableNameOne">内容</th>
					<th></th>
				</tr>
				<tr>
					<th class="isTableName">阶段训练安排</th>
					<th></th>
				</tr>
				<tr>
					<th class="isTableName">全年考核安排</th>
					<th></th>
				</tr>
			</table>
			
			<table class="tableNext" border="1" cellpadding="0" cellspacing="0">
				 <tr>
					<th rowspan="2" class="isTableName">我是占位符</th>
					<th>一般素质</th>
					<th>专项素质</th>
					<th>技术</th>
					<th>战术</th>
					<th>其他</th>
				</tr>
				<tr>
					<th></th>
					<th></th>
					<th></th>
					<th></th>
					<th></th>
				</tr>
			</table>
			
		</view>
		<planUnderLook></planUnderLook>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				objInfo : {
					name : "学院体操王玉组08-20至08-26周计",
					startTime : "2020.08.17",
					endTime : "2020.08.17",
					add  : "杭州市",
					background : "#AEE3D6"
				},
				weekList : [
					{
						name:"周一",zao : "12",sw  : "",zw  : "",ws  : "",kq  : ""
					},
					{
						name:"周二",zao : "",sw  : "",zw  : "",ws  : "",kq  : ""
					},
					{
						name:"周三",zao : "",sw  : "",zw  : "",ws  : "",kq  : ""
					},
					{
						name:"周四",zao : "",sw  : "",zw  : "",ws  : "",kq  : ""
					},
					{
						name:"周五",zao : "",sw  : "",zw  : "",ws  : "",kq  : ""
					},
					{
						name:"周六",zao : "",sw  : "",zw  : "",ws  : "",kq  : ""
					},
					{
						name:"周日",zao : "",sw  : "",zw  : "",ws  : "",kq  : ""
					}
				]
			}
		},
	}
</script>
<style lang="less">
	page{
		padding-bottom: 20rpx;
	}
	.main{
		background: white;
		padding:20rpx 0 34rpx;
	}
	table {
		width: 710rpx;
		margin: 0 auto;
		border: 1rpx solid #AEE3D6;
		border-collapse: collapse;
		.isTableName{
			width: 208rpx;
			height: 160rpx;
			color: #AEE3D6;
			background: #EFF9F7;
			font-size: 26rpx;
			padding:0rpx 12rpx;
			box-sizing: border-box;
		}
		.isTableNameOne{
			padding: 48rpx 12rpx;
		}
	}
	.tableNext{
		margin-top: 20rpx;
		font-size: 28rpx;
		th{
			height: 64rpx;
			color: #AEE3D6;
		}
	}
</style>
