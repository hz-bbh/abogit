<template>
	<view>
		<view class="jx"></view>
		<view class="viewInp isFlexalitem"><view>名称</view><input type="text" placeholder="请填写名称"></view>
		
		<view class="jx"></view>
		
		<picker mode="date"  :start="startDate" :end="endDate" @change="bindDateChange($event,1)">
			<view class="viewList isFlexSpace borNone">
				<view class="isFlexalitem"><view>开始时间</view><text>{{startTime}}</text></view>
				<image src="../../static/homeIcon/right.png"></image>
			</view>
		</picker>
		
		
		<picker mode="date"  :start="startDate" :end="endDate" @change="bindDateChange($event,2)">
			<view class="viewList isFlexSpace borNone">
				<view class="isFlexalitem"><view>结束时间</view><text>{{endTime}}</text></view>
				<image src="../../static/homeIcon/right.png"></image>
			</view>
		</picker>

		
		<view class="jx"></view>
		<view class="viewInp isFlexalitem"><view>地点</view><input type="text" placeholder="请填写地址"></view>
		
		<view class="jx"></view>
		<view class="viewList isFlexSpace borNone"><view>运动员</view><image src="../../static/homeIcon/right.png"></image></view>
		
		<view class="jx"></view>
		
		
		<picker @change="weekChange"   :range="dataWeek">
			<view class="viewList isFlexSpace borNone"><view>{{weekName}}</view><image src="../../static/homeIcon/right.png"></image></view>
		</picker>
		<view class="viewList isFlexSpace isBlue borNone" @click="open"><view>出席</view><image src="../../static/homeIcon/right.png"></image></view>
		
		
		<!-- 早操 -->
		<view v-if="isShow" :class="{'isPadBom':isShow}">
			<view class="object" v-for="(item,index) in projectData" :key="index">
				<view class="viewList isSmallHei isBlue isFlexSpace borNone"><view>{{item.name}}</view><image src="../../static/icon/addorg.png" @click="add(item.id)"></image></view>
				<view class="listData" :class="{'isMarNone':num==0,'isSon':num>0}" v-for="(obj,num) in item.dataList" :key="num">
					<view class="listDataView">
						<input type="text" v-if="num==0" placeholder="请输入训练科目">
						<input class="isPaddingMax" v-if="num>0" type="text" placeholder="请输入运动项目">
					</view>
					
					<view class="listDataTime">
						<picker @change="timeChange($event,item.id,num)"  :range="dataTime">
							{{obj.time}}
						</picker>
					</view>
				
					<view class="listDateDel" v-if="num>0" @click="Delete(item.id,num)">删除</view>
				</view>
			</view>
		</view>
		
		
		<view class="jx"></view>
		<view class="viewList isFlexSpace borNone"><view>本周内容</view></view>
		<textarea value="" placeholder="请输入内容" />
		
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
	
		return `${year}-${month}-${day}`;
	}
	export default {
		onLoad() {
			var myDate = new Date();
			var day  = myDate.getDay();
			this.dataWeek = this.dataWeek.filter((item,index)=>{		//取出当前可选日期
				if(index+1>=day){
					return item
				}
			})
			this.weekName = this.dataWeek[0];
			for(var i=1;i<=60;i++){
				this.dataTime.push(i+'分');
			}
		},
		data() {
			return {
				weekName : "",
				dataWeek : ["周一","周二","周三","周四","周五","周六","周日"],
				dataTime : [],
				isShow   : false,
				projectData : [
					{
						id  : 1,
						name:"早操",
						dataList:[]
					},
					{
						id  : 2,
						name:"上午",
						dataList:[]
					},
					{
						id  : 3,
						name:"下午",
						dataList:[]
					},
					{
						id  : 4,
						name:"晚上",
						dataList:[]
					}
				],
				startTime : "",
				endTime   : "",
				//时间选择器参数
				startDate :getDate('start'),
				endDate   :getDate('end'),
			}
		},
		methods:{
			weekChange(e){
				this.weekName = this.dataWeek[e.target.value];
			},
			timeChange(e,id,num){
				for(var i=0;i<this.projectData.length;i++){
					var temp = this.projectData[i];
					if(temp.id==id){
						temp.dataList[num].time = this.dataTime[e.target.value];
						break;
					}
				}
			},
			bindDateChange(e,type){
				if(type==1){
					this.startTime = e.detail.value;
				}else{
					this.endTime = e.detail.value;
				}
			},
			open(){
				this.isShow = true;
			},
			add(id){
				for(var i=0;i<this.projectData.length;i++){
					var temp = this.projectData[i];
					if(temp.id==id){
						var obj = {
							time : "时间(分)"
						}
						temp.dataList.push(obj);
						break;
					}
				}
			},
			Delete(id,index){
				for(var i=0;i<this.projectData.length;i++){
					var temp = this.projectData[i];
					if(temp.id==id){
						temp.dataList.splice(index,1);
						break;
					}
				}
			}
		}
	}
</script>
<style lang="less">
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
				width: 192rpx;
			}		
		}
		image{
			width: 28rpx;
			height:28rpx;
		}
	}
	.listData{
		height: 56rpx;
		display: flex;
		justify-content: space-between;
		color:#999999;
		font-size: 26rpx;
		padding: 0 20rpx;
		box-sizing:border-box;
		margin-top: 12rpx;
		background: white;
		.listDataView{
			flex: 1;
			border:2rpx solid rgba(231,231,231,1);
			height: 100%;
			display: flex;
			align-items: center;
			margin-right: 26rpx;
		}
		input{
			width: 100%;
			color: #333333;
			font-size: 26rpx;
			padding-left: 10rpx;
		}
		.listDataTime{
			width: 166rpx;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			border:2rpx solid rgba(231,231,231,1);
		}
		.listDateDel{
			height: 100%;
			color: #FE3116;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			font-weight: bold;
			margin-left: 28rpx;
		}
	}
	
	.isPadBom{
		padding-bottom: 40rpx !important;
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
		padding: 0 20rpx !important;
	}
	.isBlue{
		color: #1492FF;
		height: 56rpx !important;
	}
	textarea{
		width: 100%;
		height: 200rpx;
		background: white;
		padding: 24rpx;
		box-sizing: border-box;
		font-size: 24rpx;
		border-top: 1rpx solid #EEEEEE;
	}
</style>
