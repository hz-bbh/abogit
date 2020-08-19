<template>
	<view>
		<view class="searchHead isFlexalitem">
			<input type="text" placeholder="请输入要搜索的内容"  confirm-type="search"  v-model="inpSearch"  @confirm="confirm" placeholder-style="font-size:28rpx;color:#999999">
			<image class="searchIcon" src="../../static/gymIcon/search.png"></image>
			<image class="rightIcon"  src="../../static/gymIcon/s.png"  @click="showDrawer('showRight')"></image>
		</view>
		
		<view class="tabBox isFlexSpace">
			<view class="tabList isFlexSpace">
				<picker @change="pickDwChange" :range-key="'unitType'"    :range="pickDw"><view><text class="lineOne">{{inpDw}}</text><image src="../../static/gymIcon/under.png"></image></view></picker>
				<picker @change="pickXmChange" :range-key="'testItem'"    :range="pickXm"><view class="center"><text class="lineOne">{{inpXm}}</text><image src="../../static/gymIcon/under.png"></image></view></picker>
				<picker @change="pickCjChange" :range="pickCj"><view class="right"><text class="lineOne">{{inpCj}}</text><image src="../../static/gymIcon/under.png"></image></view></picker>
			</view>
		</view>
		
		
		<view class="main">
			<view class="beiZhu">
				<text class="beiZtext">备注：</text>
				<text class="beiZtextTitle beiZtextTitleAc">性别</text>
				<text>全部</text>
				<text class="beiZtextTitle">运动种类</text>
				<text>全部</text>
			</view>
			
			<view class="goodListBox">
				<view class="good_list" v-for="(item,index) in list">
					<image class="good_list_photo" src="../../static/homeIcon/bz.png"></image>
					<view class="good_sex"><image  src="../../static/gymIcon/boy.png"></image></view>
					<view class="good_list_name">王囊</view>
					<view class="good_list_dui">体操队</view>
				</view>
			</view>
			
			
			
		</view>	
		 
		<!-- 右侧策划菜单 -->
		<uni-drawer ref="showRight" mode="right" :width="660">
			<view class="scroll-view">
				<scroll-view class="scroll-view-box">
					 <view class="scrollTitle">性别</view>
					 <view class="scrollBtnList">
						 <view  :class="{'isSRroll':sexListCin==index}" v-for="(item,index) in sexList"  :key="index" @click="rigSexChoose(index)">{{item}}</view>
					 </view>
					 <view class="scrollTitle">运动种类</view>
					 <view class="scrollBtnList">
						 <view  :class="{'isSRroll':otherListCin==index}" :key="index" v-for="(item,index) in otherList" @click="rigOtherChoose(index,item.itemId)">{{item.name}}</view>
					 </view>
				</scroll-view>
				<view class="scrollIsBtn isFlexSpace">
					 <view @click="cancle">重置</view>
					 <view class="isSRroll" @click="sure">确定</view>
				</view>
			</view>
		</uni-drawer>
	</view>
</template>
<script>
	var _this;
	var config = require('../../common/config.js');
	var util   = require('../../common/util.js');
	export default {
		onLoad(option) {
			uni.setStorageSync('apiToken','176c304a-c78e-4741-af62-5e8d72d78e3e');
			uni.setStorageSync('access_token','bd15dc12-c21b-4dd3-b67c-6593c5c54cf1');
			// uni.setStorageSync('apiToken',option.apiToken);
			// uni.setStorageSync('access_token',option.accessToken);
			_this = this;
			// this.init();
			// this.initPickerDw();
			// this.initPickerXm();
		},
		data() {
			return {
				inpSearch  : "",
				
				listInitData : [],
				
				
				pickIndex  : 0,
				pickDw     : [],
				inpDw      : "省级",
				deptId     : "",		
				
				
				
				pickXm     : [],
				inpXm      : "单位",
				inpXmID    : "",
				
				
				pickCj     : ['从高到低','从低到高'],
				inpCj      : "全部",
				inpCjNum   : 1,
				
				//侧滑数据
				sexList    : ["全部","男","女",],
				sexListCin : 0,
				sexName    : "男",
				

				otherList  : [{name:'全部', itemId :287},{name:'帆船', itemId:288},{name:'攀岩', itemId:288},{name:'击剑', itemId:288},{name:'马数',itemId:288},{name:'赛艇', itemId:288},{name:'自行车', itemId:288},{name:'设计', itemId:288},{name:'空手道', itemId:288}],
				baItemID   : 287,
				
				otherListCin: 0,
				
				itemDefault:"",
				
				basicSex :  "",
				baStarage: "",
				baEndage : "",
				
				lookData : [],
				
				
				list   : [1,2,3,23,12,321,3,123,12,31]
			}	
		},
		methods: {
			initPickerDw(){
				uni.showLoading({title :"请稍后"});
				setTimeout(function(){
					uni.hideLoading()
				},6000)
				this.ajaxGet(null,"findbycondition",(res)=>{
					uni.hideLoading()
					_this.pickDw = res.data;
				})
			},
			initPickerXm(){
				this.ajaxGet(null,"testItem/getTestItemList",(res)=>{
					_this.pickXm = res.data;
				})
			},
			pickDwChange(e){
				this.inpDw = this.pickDw[e.target.value].unitType;
				this.deptId= this.pickDw[e.target.value].deptId;
				this.pickInitParam();
				this.pickIndex = 0;
			},
			pickXmChange(e){
				this.inpXm = this.pickXm[e.target.value].testItem;
				this.inpXmID=this.pickXm[e.target.value].id;
				this.pickInitParam();
				this.pickIndex = 1;
			},
			pickCjChange(e){
				this.inpCj = this.pickCj[e.target.value];
				this.inpCjNum = e.target.value+1;
				this.pickInitParam();
			},
			pickInitParam(){
				this.basicSex = "";
				this.baStarage= "";
				this.baEndage = "";
				this.searchApiByPicker();
			},
			rigSexChoose(index){	//侧滑选择性别
				this.sexListCin = index;
				this.sexName   = this.sexList[index];
			},
			rigOtherChoose(index,itemId){	//侧滑其它选择
				this.otherListCin = index;
				this.baItemID = itemId;
			},
			showDrawer(e) {
				this.$refs[e].open();
			},
			cancle(){
				this.$refs['showRight'].close();
			},
			sure(){		//确定
				this.basicSex = this.sexName;
				this.searchScrolApi();
				this.$refs['showRight'].close();
			},
			confirm(){		//搜索
				if(this.inpSearch.trim()==''){
					uni.showToast({
						title : "输入不能为空"
					})
					return
				}
				var param = {
					page    :  1,
					limit   :  10,
					itemId  : this.inpXmID,		//项目ID  
					deptId  : this.deptId,		//单位ID
					orderNum: this.inpCjNum,
					basicName : this.inpSearch
				}
				this.ajaxGet(param,"testItem/getTestListAll",(res)=>{
					if(res.code==0){
						_this.getSrc(res.data);
						if(res.data==''){
							uni.showToast({
								title : "查询数据为空"
							})
						}else{
							uni.showToast({
								title : res.msg
							})
						}
					}
				})
			},
			init(){						//初始化接口
				this.ajaxGet(null,"testItem/getTestListAll",(res)=>{
					_this.getSrc(res.data);
				})
			},
			getSrc(data){
				for(var i=0;i<data.length;i++){
					var temp = data[i];
					var url  = config.getUserPhotoSrc+'api-file/files-anon/download?';
					var str = "access_token="+uni.getStorageSync('access_token')+"&fileID="+temp.file_info_url;
					if(temp.file_info_url!=null){
						_this.$set(temp,'imgSrc',url+str);
					}else{
						_this.$set(temp,'imgSrc','/static/icon/noPhoto.png');
					}
				}
				_this.listInitData = data;
			},
			searchApiByPicker(){		//picker选择
				var param = {
					page    :  1,
					limit   :  10,
					itemId  : this.inpXmID,		//项目ID  
					deptId  : this.deptId,		//单位ID
					orderNum: this.inpCjNum
				}
				this.ajaxGet(param,"testItem/getTestListAll",(res)=>{
					if(res.code==0){
						_this.getSrc(res.data);
						if(res.data==''){
							uni.showToast({
								title : "查询数据为空"
							})
						}else{
							uni.showToast({
								title : res.msg
							})
						}
					}
				})
			},
			searchScrolApi(){		//右侧筛选接口
				let param = {};
				if(this.basicSex=='全部'){			 //如果性别选择了全部，还要判断年龄是否选择了全部
					if(this.endAge=='all'){			 //年龄全部
						param = {
							page    :  1,
							limit   :  10,
							basicSex: '',
							itemId  : this.baItemID,		
							deptId  : this.deptId,		
							orderNum: this.inpCjNum
						}
					}else{							//年龄不全部
						param = {
							page    :  1,
							limit   :  10,
							basicSex: "",
							startAge: this.startAge,
							endAge  : this.endAge,
							itemId  : this.baItemID,		
							deptId  : this.deptId,		
							orderNum: this.inpCjNum,
						}
					}
				}else{
					if(this.endAge=='all'){				//查询全部年龄， startAge  endAge 不传
						param = {
							page    :  1,
							limit   :  10,
							basicSex: this.basicSex,
							itemId  : this.baItemID,	//项目ID
							deptId  : this.deptId,		//单位ID
							orderNum: this.inpCjNum
						}
					}
					else{
						param = {						//差选筛选条件
							page    :  1,
							limit   :  10,
							basicSex: this.basicSex,
							startAge: this.startAge,
							endAge  : this.endAge,
							itemId  : this.baItemID,		//项目ID
							deptId  : this.deptId,		//单位ID
							orderNum: this.inpCjNum
						}
					}
				}
				this.ajaxGet(param,"testItem/getTestListAll",(res)=>{
					if(res.code==0){
						_this.getSrc(res.data);
						if(res.data==''){
							uni.showToast({
								title : "查询数据为空"
							})
						}else{
							uni.showToast({
								title : res.msg
							})
						}
					}
				})
			},
			showDefault(item){
				this.itemDefault = item;
				console.log("item: " + JSON.stringify(item));
			},
			look(id){
				uni.navigateTo({
					url : "default?id="+id
				})
			}
		}
	}
</script>
<style lang="less">
	page{
		background: #F6F8F7;
	}
	.searchHead{
		width: 100%;
		height: 80rpx;
		background: white;
		padding:0 20rpx 0 40rpx;
		box-sizing: border-box;
		position: fixed;
		top: 0;
		z-index: 3;
		input{
			flex: 1;
			height: 60rpx;
			background:rgba(246,248,247,1);
			border-radius:30rpx;
			padding-left:96rpx;
			margin-right: 20rpx;
			font-size: 28rpx;
		}
		.searchIcon{
			width: 32rpx;
			height: 32rpx;
			position: absolute;
			top:24rpx;
			left:92rpx;
		}
		.rightIcon{
			width: 40rpx;
			height: 40rpx;
		}
	}
	.tabBox{
		width: 100%;
		height: 80rpx;
		background: white;
		box-sizing: border-box;
		position: fixed;
		top: 80rpx;
		z-index: 3;
		padding: 0 96rpx;
		.tabList{
			width: 100%;
			height: 100%;
			font-size: 26rpx;
			color: #333333;
			font-weight: bold;
			box-sizing:border-box;
			view{
				display: flex;
				align-items:center;
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
	}
	.main{
		padding-top: 160rpx;
		
	}
	
	
	/* 处理抽屉内容滚动 */
	.scroll-view {
		width: 100%;
		height: 100%;
		flex: 1;
		position: relative;
	}
	.scroll-view-box {
		flex: 1;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		padding: 70rpx 0rpx 0 34rpx;
		box-sizing: border-box;
	}
	.scrollTitle{
		font-size: 32rpx;
		font-weight: bold;
		color: #333333;
		margin-top: 30rpx;
		margin-bottom: 24rpx;
	}
	.scrollBtnList{
		display: flex;
		flex-wrap: wrap;
	}
	.scrollBtnList view{
		width: 20%;
		height: 44rpx;
		border-radius:12rpx;
		font-size: 28rpx;
		color: #999999;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 36rpx;
		margin-bottom: 20rpx;
		height:46rpx;
		background:rgba(246,248,247,1);
	}
	.scrollIsBtn{
		width:100%;
		height:54rpx;
		font-size: 28rpx;
		color: #999999;
		box-sizing: border-box;
		position: absolute;
		bottom: 94rpx;
		left: 0;
		background:rgba(246,248,247,1);
		view{
			flex: 1;
			height: 100%;
			line-height: 54rpx;
			text-align: center;
		}
	}
	.isSRroll{
		background:#1492FF !important;
		color: white !important;
	}

	.beiZhu{
		height: 72rpx;
		line-height: 72rpx;
		margin-left: 40rpx;
		font-size: 24rpx;
		color: #999999;
		font-weight: bold;
	}
	.beiZtext{
		margin-right: 20rpx;
	}
	.beiZtextTitle {
		margin-right: 10rpx;
		margin-left: 60rpx;
	}
	.beiZtextTitleAc{
		margin-left: 0 !important;
	}
	
	.goodListBox{
		width: 670rpx;
		margin: 0 auto;
	}
	.good_list{
		width: 194rpx;
		height: 222rpx;
		border: 1rpx solid red;
		float: left;
		margin-left: 44rpx;
		margin-bottom: 20rpx;
		box-sizing: border-box;
		flex-direction: column;
		text-align: center;
		position: relative;
		background: white;
		border-radius: 24rpx;
	}
	.good_list:nth-of-type(3n+1){
		margin-left: 0rpx !important;
	}
	.good_list_photo{
		width: 122rpx;
		height: 122rpx;
		border-radius: 50%;
	}
	.good_list_name{
		font-size: 28rpx;
		font-weight: bold;
		color: #333333;
	}
	.good_list_dui{
		font-size: 26rpx;
		color: #666666;
	}
	.good_sex{
		width: 40rpx;
		height: 40rpx;
		background: white;
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 8rpx;
		left: 128rpx;
		border-radius: 50%;
		image{
			width: 20rpx;
			height: 20rpx;
		}
	}
</style>
