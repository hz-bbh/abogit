<template>
	<view>
		<view class="jx"></view>
		<view class="viewInp isFlexalitem"><view>名称</view><input type="text" placeholder="请填写名称"></view>

		<view class="jx"></view>
		<view class="viewInp isFlexalitem"><view>地点</view><input type="text" placeholder="请填写地址"></view>
		
		<view class="jx"></view>
		<view class="viewList isFlexSpace borNone"><view>运动员</view><image src="../../static/homeIcon/right.png"></image></view>
		
		<view class="jx"></view>
		<view class="viewList isFlexSpace borNone"><view>训练内容</view></view>
		<view class="viewList isFlexSpace isBlue borNone" @click="open"><view>{{popName}}</view><image src="../../static/homeIcon/right.png"></image></view>
		
		
		<!-- 早操 -->
		<view v-if="isShow" :class="{'isPadBom':isShow}">
			<view class="textReat">
				<textarea value="" placeholder="请输入内容" />
			</view>
			<view class="viewList isSmallHei isBlue isFlexSpace borNone"><view>负能量</view></view>
			<view class="listDataView"><input type="text"  placeholder="请输入负能量"></view>
			
			<view class="viewList isSmallHei isBlue isFlexSpace borNone"><view>负荷强度</view></view>
			<view class="listDataView"><input type="text"  placeholder="请输入负荷强度"></view>
			<view class="listDataView listDataViewAc"><input type="text"  placeholder="请输入时间"></view>
		</view>
		
		
		<view class="jx"></view>
		<view class="viewList isFlexSpace borNone"><view>课程小结</view></view>
		<textarea  class="ckText" value="" placeholder="请填写内容"  />
		
		
		
		
		<!-- 训练内容切换弹窗 -->
		<uni-popup ref="openSucess" type="bottom" >
			<view class="Popupbox">
				<view v-for="(item,index) in popList" :key="index" @click="changePop(item,index)">{{item}}</view>
			</view>
		</uni-popup>
	</view>
</template>
<script>
	export default {
		onLoad() {

		},
		data() {
			return {
				isShow: true,
				
				popIndex: 0,
				popName : "准备部分",
				popList : ["准备部分","基本部分","结束部分"]
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
				this.$refs['openSucess'].open();
			},
			changePop(name,index){
				this.popIndex = index;
				this.popName = name;
				this.$refs['openSucess'].close();
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
	
	.textReat textarea{
		width: 710rpx;
		height: 214rpx;
		background: white;
		padding:12rpx;
		box-sizing: border-box;
		font-size: 24rpx;
		border:2rpx solid rgba(231,231,231,1);
		margin: 0 auto;
	}
	.ckText{
		width: 100%;
		height: 200rpx;
		background: white;
		padding: 24rpx;
		box-sizing: border-box;
		font-size: 24rpx;
	}
	
	
	.Popupbox{
		border-radius:12rpx 12rpx 0px 0px;
		background: white;
		view{
			height:88rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 26rpx;
			color:#1492FF;
			font-weight: bold;
		}
	}
</style>
