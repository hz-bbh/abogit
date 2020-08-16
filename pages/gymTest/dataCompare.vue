<template>
	<view>
		<view class="tabList isFlexCenter">
			<picker @change="pickDwChange"  :range-key="'testItem'" :range="pickDw"><view><text class="lineOne">{{inpDw}}</text><image src="../../static/gymIcon/under.png"></image></view></picker>
			
			<picker mode="date"  :start="startDate" :end="endDate"  @change="pickYearChange"  fields="year">
				<view><text class="lineOne">{{inpYear}}</text><image src="../../static/gymIcon/under.png"></image></view>
			</picker>
		</view> 	
			
		
		
		<view class="jx" style="margin-top: 88rpx;"></view>   
		<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts"></canvas>
		
		
		<view v-for="(item,index) in dataList">
			<view class="jx"></view>
			<view class="listTitle isFlexalitem">{{item.item_name}}</view>
			<view class="listInfo">
				<view class="listInfoName">{{item.phy_start_time}}</view>
				<view>
					<text class="isGray">成绩</text>
					<text>{{item.item_result}}</text>
					<text class="isGray">评分</text>
					<text>{{item.score}}</text>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	var _this;
	var canvaColumn;
	import uCharts from '../../components/u-charts/u-charts.js';
	function getDate(type) {
		const date = new Date();
	
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
	
		if (type === 'start') {
			year = year - 60;
		} else if (type === 'end') {
			year = year + 100;
		}
		month = month > 9 ? month : '0' + month;;
		day = day > 9 ? day : '0' + day;
	
		return `${year}`;
	}
	export default {
		onLoad(option) {
			console.log("optio: " + JSON.stringify(option));
			_this = this;
			_this.basicId = option.basicId;
			_this.initData();
			_this.initPickerXm();
			const date = new Date();
			this.inpYear = date.getFullYear();
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
				basicId    : "",
				dataList   : [],
				
				pickDw     : [],
				inpDw      : "项目",
				
				pickXm     : [],
				inpYear      : "",
				inpDwId    : "",
				//时间选择器参数
				startDate :getDate('start'),
				endDate   :getDate('end'),
				startTime : "",
				
				//echart
				cWidth  : "",
				cHeight : "",
				lineData: [{
					name: '成绩',
					data: [35, 20, 55, 30],
					color: '#BEF4ED',
				}],
				categories: ["第一季度","第二季度","第三季度","第四季度"],
			}
		},
		methods:{
			pickDwChange(e){
				this.inpDw    = this.pickDw[e.target.value].testItem;
				this.inpDwId  = this.pickDw[e.target.value].id;
				this.pickerApi();
			},
			pickYearChange(e){
				this.inpYear = e.target.value;
				this.pickerApi();
			},
			initPickerXm(){
				this.ajaxGet(null,"testItem/getTestItemList",(res)=>{
					_this.pickDw = res.data;
				})
			},
			initData(basicId){						//初始化接口
				var param = {
					basicId : _this.basicId,
					testYear: _this.inpYear
				}
				this.ajaxGet(param,"testItem/getTestListAll",(res)=>{
					console.log("res: " + JSON.stringify(res));
					_this.dataList = res.data;
				})
			},
			pickerApi(){
				var param = {
					page    : 1,
					limit   : 10,
					basicId : _this.basicId,
					itemId  : _this.inpDwId,
					testYear: _this.inpYear
				}
				console.log("param: " + JSON.stringify(param));
				this.ajaxGet(param,"testItem/getTestListAll",(res)=>{
					console.log("res: " + JSON.stringify(res));
					_this.dataList = res.data;
				})
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
						margin : 10,
					},
					title : {
						name : "你好"
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
						axisLineColor : "#BEF4ED",
						boundaryGap : "justify"
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
		background:white;
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
		width: 100%;
		height: 88rpx;
		font-size: 26rpx;
		color: #333333;
		font-weight: bold;
		padding: 0 42rpx;
		box-sizing:border-box;
		margin: 0 auto;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2;
		background: white;
		view{
			width:240rpx;
			display: flex;
			align-items:center;
			justify-content: center;
			text{
				display:inline-block;
				max-width:120rpx;
			}
		}
		.center{
			justify-content: center;
		}
		.right{
			justify-content: flex-end;
		}
		image{
			width: 24rpx;
			height: 18rpx;
			margin-top:6rpx;
			margin-left: 8rpx;
		}
	}
</style>
