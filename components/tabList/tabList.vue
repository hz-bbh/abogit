<template>
	<view class="top-warp"  :class="{'isFiexd':fiexd}" :style="{'height':hei+'rpx','background':backColor,'color':color,'top':top+'rpx'}">
		<view  class="tabList"  :style="{'color':Cindex===i?color:nextColor,'font-size':fontSize+'rpx'}"   v-for="(tab, i) in tabs" :key="i" :class="{'active':Cindex===i}" @click="tabChoose(i)">{{tab}}</view>
		<view class="tabLine"   :style="{left:lineLift,'background':color,'height':tabLineHei+'rpx'}"></view>
	</view>
</template>
<script>
	export default {
		props:{
			tabs : Array,
			hei  : String,
			fontSize : {
				type : Number,
				default : 28
			},
			backColor : String,
			color : {
				type : String,
				default : "#333333"
			},
			nextColor : {
				type : String,
				default : "#333333"
			},
			fiexd : Boolean,
			top   : {
				type : Number,
				default : 0
			},
			tabLineHei: {
				type : Number,
				default : 4
			},
		},
		data() {
			return {
				Cindex : 0
			}
		},
		computed:{
			lineLift() {
				return  100/this.tabs.length*(this.Cindex + 1) - 100/(this.tabs.length*2) + '%';
			}
		},
		methods:{
			tabChoose(index){
				this.Cindex = index;
				this.$emit("tabChoose",index);
			},
			listenPerson(e){	
				this.Cindex = e;
			}
		}
	}
</script>
<style>
	.top-warp{
		width: 100%;
		background-color: white;
		text-align: center;
		position: relative;
		left: 0;
		z-index: 3;
		display: flex;
		justify-content:space-between;
	}
	.tabList{
		font-weight:300;
		font-size: 28rpx;
		flex:1;
		box-sizing: border-box;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.top-warp .active{
		font-size: 32rpx;
		font-weight:600;
		transition: all 0.1s;
	}
	.tabLine{
		position: absolute;
		bottom: 0;
		width:40rpx;
		height:4rpx;
		border-radius: 8rpx;
		transform: translateX(-50%);
		transition: left .3s;
	}
	.isFiexd{
		position: fixed !important;
	}
</style>
