<template>
	<view>
		<view class="jx"></view>
		<view class="main">
			<planHeadLook :obj="objInfo"  ></planHeadLook>
			<table border="1" cellpadding="0" cellspacing="0">
				<tr>
					<th class="isTableName">内容</th>
					<th></th>
				</tr>
				<tr>
					<th class="isTableName">目标</th>
					<th></th>
				</tr>
				<tr>
					<th class="isTableName">手段</th>
					<th></th>
				</tr>
				<tr>
					<th class="isTableName">安排</th>
					<th></th>
				</tr>
				<tr>
					<th class="isTableName">措施</th>
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
					background : "#F6C3C3"
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
		border: 1rpx solid #F6C3C3;
		border-collapse: collapse;
		.isTableName{
			width: 94rpx;
			height: 118rpx;
			color: #F6C3C3;
			background: #FDF3F3;
			font-size: 26rpx;
			padding:0rpx 12rpx;
			box-sizing: border-box;
		}
	}
</style>
