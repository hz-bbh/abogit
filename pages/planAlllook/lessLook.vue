<template>
	<view>
		<view class="jx"></view>
		<view class="main">
			<planHeadLook :obj="objInfo"  ></planHeadLook>
			<table border="1" cellpadding="0" cellspacing="0">
				<tr>
					<th class="isTableName isTableNameOne">准备部分</th>
					<th></th>
				</tr>
				<tr>
					<th class="isTableName">负荷量</th>
					<th></th>
				</tr>
				<tr>
					<th class="isTableName">负荷强度</th>
					<th></th>
				</tr>
				<tr>
					<th class="isTableName">时间</th>
					<th></th>
				</tr>
			</table>
			
			<table class="tableNext" border="1" cellpadding="0" cellspacing="0">
				<tr>
					<th class="isTableName">课后小结</th>
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
					startTime : "",
					endTime : "2020.08.17",
					add  : "杭州市",
					background : "#ADD4E9"
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
		border: 1rpx solid #ADD4E9;
		border-collapse: collapse;
		.isTableName{
			width: 96rpx;
			height: 118rpx;
			color: #ADD4E9;
			background: #EFF6FB;
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
			height: 150rpx;
		}
	}
</style>
