<template>
	<view>
		<view class="tabList isFlexSpace">
			<picker @change="pickDwChange" :range="pickDw"><view><text class="lineOne">{{inpDw}}</text><image src="../../static/gymIcon/under.png"></image></view></picker>
			<picker @change="pickXmChange" :range="pickXm"><view><text class="lineOne">{{inpXm}}</text><image src="../../static/gymIcon/under.png"></image></view></picker>
		</view>
		<view class="jx"></view>
		<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts"></canvas>
		
		
		<view>
			<view class="jx"></view>
			<view class="listTitle isFlexalitem">背脊垃圾</view>
			<view class="listInfo">
				<view class="listInfoName">8月6日</view>
				<view>
					<text class="isGray">成绩</text>
					<text>78</text>
					<text class="isGray">评分</text>
					<text>7.8</text>
				</view>
			</view>
		</view>
		
		<view>
			<view class="jx"></view>
			<view class="listTitle isFlexalitem">背脊垃圾</view>
			<view class="listInfo">
				<view class="listInfoName">8月6日</view>
				<view>
					<text class="isGray">成绩</text>
					<text>78</text>
					<text class="isGray">评分</text>
					<text>7.8</text>
				</view>
			</view>
		</view>
		
		<view>
			<view class="jx"></view>
			<view class="listTitle isFlexalitem">背脊垃圾</view>
			<view class="listInfo">
				<view class="listInfoName">8月6日</view>
				<view>
					<text class="isGray">成绩</text>
					<text>78</text>
					<text class="isGray">评分</text>
					<text>7.8</text>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	var _this;
	var canvaColumn;
	import uCharts from '../../components/u-charts/u-charts.js';
	export default {
		onLoad() {
			_this = this;
			
		},
		onReady() {
			const query = uni.createSelectorQuery().in(this);
			query.select('#canvasColumn').boundingClientRect(data => {
				_this.cWidth = data.width;
				_this.cHeight = data.height;
				_this.init();
			}).exec();
		},
		data() {
			return {
				cWidth  : "",
				cHeight : "",
				lineData: [{
					name: '成绩',
					data: [35, 20, 55, 30],
					color: '#BEF4ED',
				}],
				categories: ["第一季度","第二季度","第三季度","第四季度"],
				
				
				
				pickDw     : ['男范范德萨','女'],
				inpDw      : "单位",
				
				pickXm     : ['1','2'],
				inpXm      : "项目",
				
				pickCj     : ['50分','100分'],
				inpCj      : "成绩",
			}
		},
		methods:{
			pickDwChange(e){
				this.inpDw = this.pickDw[e.target.value];
			},
			pickXmChange(e){
				this.inpXm = this.pickXm[e.target.value];
			},
			pickCjChange(e){
				this.inpCj = this.pickCj[e.target.value];
			},
			init(){
				canvaColumn = new uCharts({
					$this      : _this,
					canvasId   : "canvasColumn",
					type	   : "area", //图表类型pie、line、column、area、ring、radar、arcbar、gauge、candle、bar、mix、rose、word
					fontSize   : 12,
					width	   : _this.cWidth,
					height	   : _this.cHeight,
					legend:{
						show:true,
						position : "top",
						float : "left",
						margin : 10
					},
					dataLabel:true,
					dataPointShape:true,
					background:'#FFFFFF',
					pixelRatio:1,
					animation: true,
					categories:_this.categories,
					series: _this.lineData,
					xAxis : {
						gridType : 'dash',
						gridColor:'#BEF4ED',
						gridEval : 1,
						axisLineColor : "#BEF4ED"
					},
					yAxis: {
						gridType : 'dash',
						gridColor:'#ffffff',
						data : [
							{
								axisLineColor : "#BEF4ED",
								min:0,
								max:100,
								dashLength:8,
								splitNumber:5,
							}
						]
					},	
					extra: {
						area:{
							type: 'straight',
							opacity:0.6,
							addLine:true,
							width:2
						}
					}
				});
			}
		}
	}
</script>
<style lang="less">
	#canvasColumn {
		width: 100%;
		height: 500rpx;
		box-sizing: border-box;
	}
	.jxMar{
		margin-top: 200rpx;
	}
	page{
		font-size:28rpx;
		color: #333333;
	}
	.listTitle{
		height:68rpx;
		border-bottom: 1rpx solid #e7e7e7;
		padding-left: 20rpx;
		font-weight: bold;
	}
	.listInfo{
		padding: 12rpx 20rpx;
		text{
			font-weight: bold;
			margin-right: 40rpx;
		}
		.listInfoName{
			font-weight: bold;
		}
		.isGray{
			color: #666666;
			font-weight: 500;
			margin-right: 20rpx;
		}
	}
	
	
	
	.tabList{
		width: 450rpx;
		height: 82rpx;
		font-size: 26rpx;
		color: #333333;
		font-weight: bold;
		padding: 0 42rpx;
		box-sizing:border-box;
		margin: 0 auto;
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
</style>
