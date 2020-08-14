<template>
	<view class="objectListBox">
		<view v-for="(obj,index)  in objectList"   class="objectList"  :class="{'objectListActive':index==0 || index==4}"   :key="index"  @click="goClick(obj.id)">
			<image :src="obj.src"  :class="{'noRadius':obj.isNoRadius}"></image>
			<view>{{obj.name}}</view>
			<view class="objectListIcon isFlexCenter"  @click.stop="hide(index)" v-if="isShowBjIcon">一</view>
		</view>
	</view>
</template>
<script>
	export default {
		props:{
			objectList :Array,
			isShowBjIcon : false,
			type : Number
		},
		methods:{
			goClick(id){
				this.$emit('goClick',id);
			},
			hide(index){
				var _this = this;
				this.objectList.splice(index,1);
				if(this.objectList.length==0){			//删除完了标题也不显示
					switch(this.type){
						case 0 : 						//人员删完了
						_this.$emit("changOne",this.objectList);		
						break;
						case 1 :						//实时在线删完了
						_this.$emit("changTow",this.objectList);	
						break;
						case 2 :						//反馈意见删完了
						_this.$emit("changThree",this.objectList);	
						break;
					}
				}
			}
		}
	}
</script>
<style>
	.objectListBox{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.objectList{
		width:170rpx;
		height:176rpx;
		background:rgba(255,255,255,1);
		box-shadow:0px 4rpx 20rpx 0px rgba(246,248,247,1);
		border-radius:20rpx;
		box-sizing: border-box;
		font-size: 24rpx;
		font-weight: bold;
		margin-bottom:10rpx;
		margin-left: 10rpx;
		color: #555555;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		position: relative;
	}
	.objectListActive{
		margin-left: 0rpx !important;
	}
	.objectList image{
		width: 94rpx;
		height: 94rpx;
		border-radius: 50%;
		margin-bottom: 10rpx;
	}
	.noRadius{
		width: 72rpx !important;
		border-radius: 0 !important;
	}
	
	.objectListIcon{
		width:32rpx;
		height: 32rpx;
		background: #1296DB;
		border-radius: 50%;
		color: white;
		font-size: 0.18rem;
		position: absolute;
		top:8rpx;
		right: 8rpx;
		z-index: 2;
	}
</style>
