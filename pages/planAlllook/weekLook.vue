<template>
	<view>
		<view class="jx"></view>
		<view class="main">
			<planHeadLook :obj="objInfo"  ></planHeadLook>
			<table border="1" cellpadding="0" cellspacing="0">
				<tr>
					<th class="isTableName">本周任务</th>
					<th class="renWuInp" :colspan="5">
						<textarea value="" placeholder="请输入" />
					</th>
				</tr>
				<tr class="trTitle">
					<th>日期</th>
					<th>早操</th>
					<th>上午</th>
					<th>下午</th>
					<th>晚上</th>
					<th>考勤</th>
				</tr>
				
				<tr class="tableXx" v-for="(item,index) in weekList" :key="index">
					<th>{{item.name}}</th>
					<th>{{item.zao}}</th>
					<th>{{item.sw}}</th>
					<th>{{item.zw}}</th>
					<th>{{item.ws}}</th>
					<th>{{item.kq}}</th>
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
					startTime : "2010.02.03",
					endTime : "2020.08.17",
					add  : "张三，李四，王五",
					background : "#F3CC92"
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
		padding:20rpx 0 54rpx;
	}
	table {
		width: 710rpx;
		margin: 0 auto;
		border: 1rpx solid #F3CC92;
		border-collapse: collapse;
		.trTitle{
			height: 58rpx;
			color: #F3CC92;
			background: #FDF5E9;
			font-size: 26rpx;
		}
		.isTableName{
			width: 96rpx;
			background: green;
			color: #F3CC92;
			background: #FDF5E9;
			font-size: 26rpx;
			padding: 0 12rpx;
			box-sizing: border-box;
		}
		.renWuInp{
			// width: 614rpx;
			height: 176rpx;
			textarea{
				text-align: left;
				width: 100%;
				height: 100%;
				font-size: 24rpx;
				padding: 12rpx;
				box-sizing: border-box;
			}
		}
		.tableXx{
			th:nth-of-type(1){
				color: #F3CC92;
				background: #FDF5E9;
			}
			th{
				padding: 48rpx 0;
				box-sizing: border-box;
				font-size: 26rpx;
			}
		}
	}
</style>
