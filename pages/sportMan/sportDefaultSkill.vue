<template>
	<view>
		<view class="jx"></view>
		<view class="listImg" v-for="(item,index) in listYx" :key="index" v-if="type==1">
			<image :src="item.src"></image>
		</view>
		
		<view class="listImg" v-for="(item,index) in listZy" :key="index" v-if="type==2">
			<image :src="item.src"></image>
		</view>
	</view>
</template>
<script>
	export default {
		onLoad() {
			
		},
		data(){
			return{
				type : 2,
				listYx : [
					{id:1,src:"../../static/sportIcon/skillyx (1).png"},
					{id:2,src:"../../static/sportIcon/skillyx (2).png"},
					{id:3,src:"../../static/sportIcon/skillyx (3).png"},
					{id:4,src:"../../static/sportIcon/skillyx (4).png"},
					{id:5,src:"../../static/sportIcon/skillyx (5).png"},
					{id:6,src:"../../static/sportIcon/skillyx (6).png"},
					{id:7,src:"../../static/sportIcon/skillyx (7).png"},
					{id:8,src:"../../static/sportIcon/skillyx (8).png"},
				],
				listZy : [
					{id:1,src:"../../static/sportIcon/zyskill (1).png"},
					{id:2,src:"../../static/sportIcon/zyskill (2).png"},
					{id:3,src:"../../static/sportIcon/zyskill (3).png"},
					{id:4,src:"../../static/sportIcon/zyskill (4).png"},
					{id:5,src:"../../static/sportIcon/zyskill (5).png"},
					{id:6,src:"../../static/sportIcon/zyskill (6).png"},
					{id:7,src:"../../static/sportIcon/zyskill (7).png"},
					{id:8,src:"../../static/sportIcon/zyskill (8).png"},
				]
			}
		}
	}
</script>
<style lang="less">
	.listImg{
		width:710rpx;
		height:172rpx;
		margin:0rpx auto 30rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
</style>
