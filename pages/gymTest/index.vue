<template>
	<view>
		<view class="searchHead isFlexalitem">
			<input type="text" placeholder="请输入要搜索的记录"  confirm-type="search"  v-model="inpSearch"  @confirm="confirm" placeholder-style="font-size:28rpx;color:#999999">
			<image class="searchIcon" src="../../static/gymIcon/search.png"></image>
			<image class="rightIcon"  src="../../static/gymIcon/s.png"  @click="showDrawer('showRight')"></image>
		</view>
		
		<view class="tabBox isFlexSpace">
			<view class="tabList isFlexSpace">
				<picker @change="pickDwChange" :range-key="'unitType'"    :range="pickDw"><view><text class="lineOne">{{inpDw}}</text><image src="../../static/gymIcon/under.png"></image></view></picker>
				<picker @change="pickXmChange" :range-key="'testItem'"    :range="pickXm"><view class="center"><text class="lineOne">{{inpXm}}</text><image src="../../static/gymIcon/under.png"></image></view></picker>
				<picker @change="pickCjChange" :range="pickCj"><view class="right"><text class="lineOne">{{inpCj}}</text><image src="../../static/gymIcon/under.png"></image></view></picker>
			</view>
			<image src="../../static/gymIcon/all.png" @click="changeShowDom"></image>
		</view>
		
		
		<view class="main">
			<view v-if="Cindex==0">
				<view class="objectList isFlexSpace"  @click="look(item.id)" v-for="(item,index) in listInitData" :key="index">
					<view class="isFlexalitem">
						<image class="objectPhoto" src="../../static/logo.png"></image>
						<view>
							<view>
								<image src="../../static/gymIcon/name.png"></image>
								<text class="objectName">{{item.basic_name}}</text>
								<image v-if="pickIndex==0" src="../../static/gymIcon/type.png"></image>
								<image v-if="pickIndex==1" src="../../static/gymIcon/game.png"></image>
								<text v-if="pickIndex==0">{{item.basic_reg_item}}</text>
								<text v-if="pickIndex==1">{{item.item_result}}</text>
							</view>
							<view class="nzBox" v-if="pickIndex==0"><image src="../../static/gymIcon/nz.png"></image><text>{{item.phy_start_time}}</text></view>
							<view class="nzBox" v-if="pickIndex==1"><image src="../../static/gymIcon/nz.png"></image><text>{{item.basic_reg_item}}</text></view>
						</view>
					</view>
					
					<view class="circle isFlexCenter">
						<image class="sex" src="../../static/gymIcon/boy.png" v-if="item.basic_sex=='男'" ></image>
						<image class="sex" src="../../static/gymIcon/girl.png" v-if="item.basic_sex=='女'" ></image>
					</view>
					<image class="masou" src="../../static/gymIcon/masou.png"></image>
				</view>
				
				<view class="noData isFlexCenter" v-if="listInitData==''">
					暂无当前查询数据
				</view>
			</view>
			
			
			<view v-if="Cindex==1">
				<view class="tableBox" v-for="(item,index) in listInitData" :key="index">
					<view class="tableBoxTitle isFlexSpace">
						<view class="isFlexalitem">
							<image src="../../static/gymIcon/nzb.png"></image>
							<text>{{item.phy_start_time}}</text>
						</view>
						<text @click="look">查看详情</text>
					</view>
					<table  border="1" cellpadding="0" cellspacing="0">
						<tr class="titleTr titleListDataActive">
							<th class="tableOne">姓名</th>
							<th class="tableTabproject borLeftNone">项目</th>
							<th class="tableOne">成绩</th>
							<th class="tableOne">评分</th>
						</tr>
						
						<tr>
							<th class="isSmall">{{item.basic_name}}</th>
							<th class="tableTabproject borLeftNone">{{item.item_name}}</th>
							<th>{{item.item_result}}</th>
							<th>{{item.score}}</th>
						</tr>
					 </table>
				</view>
			</view>
			
			
			<view v-if="Cindex==2">
				<view class="titleHead isFlexSpace">
					<view class="isFlexalitem">
						<text class="titleHeadBlack">条件:</text>
						<text>性别</text>
						<text style="margin-left: 8rpx;" v-if="basicSex!=''">{{basicSex}}</text>  <text style="margin-left: 8rpx;" v-if="basicSex==''">全部</text>
						<text style="margin-left: 22rpx;">年龄段</text>
						<text style="margin-left: 8rpx;" v-if="baStarage<24">{{baStarage}}~{{baEndage}}</text>
						<text style="margin-left: 8rpx;" v-if="baEndage==''||baEndage=='all'">{{baStarage}}</text>
					</view>
					<view><text class="titleHeadBlack">总数</text><text>{{listInitData.length}}</text></view>
				</view>
				
				<view class="titleListData   isFlexalitem   titleListDataActive">
					<view>时间</view>
					<view class="borLeftNone">姓名</view>
					<view class="borLeftNone">性别</view>
					<view class="borLeftNone">成绩</view>
					<view class="borLeftNone">评分</view>
				</view>
				<view class="titleListData   isFlexalitem borNoneTopAvtive"  v-for="(item,index) in listInitData">
					<view>{{item.phy_start_time}}</view>
					<view class="borLeftNone">{{item.basic_name}}</view>
					<view class="borLeftNone isSmallFont">{{item.basic_sex}}</view>
					<view class="borLeftNone">{{item.item_result}}</view>
					<view class="borLeftNone">{{item.score}}</view>
				</view>
			</view>
		</view>
		 
		<!-- 右侧策划菜单 -->
		<uni-drawer ref="showRight" mode="right" :width="582">
			<view class="scroll-view">
				<scroll-view class="scroll-view-box" scroll-y="true">
					 <view class="scrollTitle">性别</view>
					 <view class="scrollBtnList">
						 <view  :class="{'isBlue':sexListCin==index}" v-for="(item,index) in sexList" @click="rigSexChoose(index)">{{item}}</view>
					 </view>
					 <view class="scrollTitle">年龄段</view>
					 <view class="scrollBtnList">
						<view  :class="{'isBlue':ageListCin==index}" v-for="(item,index) in ageList" @click="rigAgeChoose(index)">
							<text v-if="item.min<24">{{item.min}}~{{item.max}}</text>
							
							<text v-if="item.max==''">{{item.min}}</text>
							<text v-if="item.max=='all'">{{item.min}}</text>
						</view>
					 </view>
					 <view class="scrollTitle">其它项</view>
					 <view class="scrollBtnList">
						 <view  :class="{'isBlue':otherListCin==index}" v-for="(item,index) in otherList" @click="rigOtherChoose(index,item.itemId)">{{item.name}}</view>
					 </view>
					 <view class="scrollIsBtn isFlexSpace">
						 <view @click="cancle">取消</view>
						 <view>|</view>
						 <view class="isBlue" @click="sure">确定</view>
					 </view>
				</scroll-view>
			</view>
		</uni-drawer>

	</view>
</template>
<script>
	var _this;
	export default {
		onLoad() {
			_this = this;
			this.init();
			this.initPickerDw();
			this.initPickerXm();
		},
		data() {
			return {
				Cindex     : 0,
				inpSearch  : "",
				
				listInitData : [],
				
				
				pickIndex  : 0,
				pickDw     : [],
				inpDw      : "单位",
				deptId     : "",		
				
				
				
				pickXm     : [],
				inpXm      : "项目",
				inpXmID    : "",
				
				
				pickCj     : ['从高到低','从低到高'],
				inpCj      : "成绩",
				inpCjNum   : 1,
				
				//侧滑数据
				sexList    : ["男","女","全部"],
				sexListCin : 0,
				sexName    : "男",
				
				ageList    : [{min:6,max:8},{min:9,max:11},{min:12,max:14},{min:15,max:17},{min:18,max:20},{min:21,max:23},{min:"24以上",max:""},{min:"全部",max:"all"}],
				ageListCin : 0,
				otherList  : [{name:'100米', itemId :287},{name:'400米', itemId:288}],
				otherListCin: 0,
				startAge :  "6",
				endAge   :  "8",
				
				itemDefault:"",
				
				basicSex :  "",
				baStarage: "",
				baEndage : ""
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
				this.Cindex = 0;
				this.searchApiByPicker();
			},
			rigSexChoose(index){	//侧滑选择性别
				this.sexListCin = index;
				this.sexName   = this.sexList[index];
			},
			rigAgeChoose(index){	//侧滑年龄
				this.ageListCin = index;
				this.startAge   =  this.ageList[index].min;
				this.endAge     =  this.ageList[index].max;
			},
			rigOtherChoose(index,itemId){	//侧滑其它选择
				this.otherListCin = index;
				this.itemId = itemId;
			},
			showDrawer(e) {
				this.$refs[e].open();
			},
			cancle(){
				this.$refs['showRight'].close();
			},
			sure(){		//确定
				this.Cindex   = 2;
				this.basicSex = this.sexName;
				this.baStarage= this.startAge;
				this.baEndage = this.endAge;
				this.searchScrolApi();
				this.$refs['showRight'].close();
			},
			changeShowDom(){
				if(this.Cindex==0){
					this.Cindex = 1;
				}else if(this.Cindex==1){
					this.Cindex = 0;
				}else{
					this.Cindex = 0;
				}
			},
			confirm(){		//搜索
				uni.showToast({
					title : "功能未开放"
				})
				return
				if(this.inpSearch.trim()==''){
					uni.showToast({
						title : "输入不能为空"
					})
					return
				}
			},
			init(){						//初始化接口
				this.ajaxGet(null,"testItem/getTestListAll",(res)=>{
					_this.listInitData = res.data;
				})
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
						_this.listInitData = res.data;
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
							itemId  : this.inpXmID,		
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
							itemId  : this.inpXmID,		
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
							itemId  : this.inpXmID,		//项目ID
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
							itemId  : this.inpXmID,		//项目ID
							deptId  : this.deptId,		//单位ID
							orderNum: this.inpCjNum
						}
					}
				}
				this.ajaxGet(param,"testItem/getTestListAll",(res)=>{
					if(res.code==0){
						_this.listInitData = res.data;
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
				this.Cindex=1;
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
		padding:0 20rpx 0 40rpx;
		box-sizing: border-box;
		position: fixed;
		top: 80rpx;
		z-index: 3;
		.tabList{
			width: 650rpx;
			height: 100%;
			font-size: 26rpx;
			color: #333333;
			font-weight: bold;
			padding: 0 42rpx;
			box-sizing:border-box;
			view{
				width: 176rpx;
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
		&>image{
			width: 24rpx;
			height: 22rpx;
			margin-top: 4rpx;
		}
	}
	.main{
		padding-top: 180rpx;
		.objectList{
			width:710rpx;
			height:130rpx;
			background:rgba(140,217,199,1);
			border-radius:16rpx;
			margin: 0 auto 20rpx;
			padding: 0 52rpx 0 20rpx;
			box-sizing: border-box;
			font-size: 26rpx;
			color: #FFFFFF;
			position: relative;
			.objectPhoto{
				width: 64rpx;
				height: 64rpx;
				border-radius: 50%;
				margin-right: 36rpx;
			}
			view>view{
				view{
					display: flex;
					align-items: center;
				}
				image{
					width: 22rpx;
					height: 22rpx;
					margin-right: 10rpx;
				}
			}
			.nzBox{
				margin-top: 12rpx;
				font-weight: bold;
			}
			.objectName{
				margin-right: 46rpx;
			}
			.masou{
				width: 82rpx;
				height: 82rpx;
			}
			.sex{
				width: 14rpx;
				height: 16rpx;
			}
			.circle{
				width: 28rpx;
				height: 28rpx;
				background:rgba(140,217,199,1);
				border-radius: 50%;
				position: absolute;
				top: 32rpx;
				left: 70rpx;
			}
		}
	}
	
	
	/* 处理抽屉内容滚动 */
	.scroll-view {
		width: 100%;
		height: 100%;
		flex: 1
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
		background: #1492FF;
		border-radius:12rpx;
		font-size: 28rpx;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 20rpx;
		margin-bottom: 12rpx;
		opacity:0.6;
	}
	.scrollIsBtn{
		width:238rpx;
		height:48rpx;
		background:rgba(20,146,255,1);
		border-radius:28rpx;
		margin: 140rpx auto 0;
		font-size: 28rpx;
		color: white;
		padding: 0 36rpx;
		box-sizing: border-box;
		view{
			opacity: 0.6;
		}
	}
	.isBlue{
		opacity:1 !important;
	}
	
	
	// 表格
	.tableBoxTitle{
		font-size: 26rpx;
		color: #333333;
		padding: 0 20rpx;
		font-weight: bold;
		margin-top: 6rpx;
		image{
			width: 20rpx;
			height: 22rpx;
			margin-right: 10rpx;
		}
		&>text{
			color: #8CD9C7;
			font-weight: 500;
		}
	}
	
	table{
		width: 710rpx;
		margin:12px auto;
		border:0.5rpx solid #8CD9C7;
		border-collapse:collapse;
		font-size: 26rpx;
		th{
			padding:12rpx 0;
		}
	}
	
	.tableTab{
		width: 710rpx;
		height: 64rpx;
		background:#E0F1ED;
		margin:16rpx auto 0;
		view{
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 26rpx;
			color: #8EDAC8;
			height: 100%;
			border: 1rpx solid #98DDCD;
			box-sizing: border-box;
		}
	}
	.tableListInfo{
		width: 710rpx;
		margin:0rpx auto 0;
		border: 1rpx solid #98DDCD;
		box-sizing: border-box;
		border-top: none;
		display: flex;
	}
	.tableListInfoName{
		width: 100rpx;
		font-size: 26rpx;
		color: #333333;
		font-weight: bold;
		box-sizing: border-box;
		text-align: center;
		padding: 0 24rpx;
		display: flex;
		align-items: center;
	}
	.tableListInfoRight{
		width: 610rpx;
		box-sizing: border-box;
		font-size: 26rpx;
		color: #333333;
		text-align: center;
		height: 100%;
	}
	.tableListInfoRightTap{
		width: 610rpx;
		box-sizing: border-box;
		display: grid;
		grid-template-columns:410rpx 100rpx 100rpx;
		view{
			box-sizing: border-box;
			padding: 24rpx 12rpx;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			border-left: 1rpx solid #98DDCD;
			border-top: 1rpx solid #98DDCD;
		}
	}
	.tableListName,.tableTabproject{
		width: 410rpx;
		padding: 0 12rpx;
		box-sizing: border-box;
	}
	.tableOne,.tableListCj,.tableListFs{
		width: 100rpx;
	}
	
	
	.noData{
		height: 400rpx;
		color: #999999;
		font-size: 28rpx;
	}
	
	.titleHead{
		color: #8CD9C7;
		font-size: 26rpx;
		font-weight: 500;
		padding: 0 20rpx;
		margin-bottom: 20rpx;
		.titleHeadBlack{
			color: #333333;
			font-size: 24rpx;
			font-weight: bold;
			margin-right:24rpx;
		}
	}
	.titleListData{
		width: 710rpx;
		height: 64rpx;
		margin: 0 auto;
		view{
			display: flex;
			align-items: center;
			justify-content: center;
			box-sizing: border-box;
			border: 1rpx solid #98DDCD;
			font-size: 26rpx;
			height: 100%;
			flex:1.5;
		}
		&>view:nth-of-type(1){
			flex: 3;
		}
		&>view:nth-of-type(2){
			flex: 2;
		}
	}
	
	.isBold{
		font-weight: bold;
	}
	.isRed{
		color: #E16464 !important;
	}
	.isDeepBlue{
		color: #1492FF !important;
	}
	.borNoneTop{
		border-top: none !important;
	}
	.borLeftNone{
		border-left: none !important;
	}
	.borNoneTopAvtive{
		view{
			border-top: none;
		}
		font-weight: bold;
	}
	.titleListDataActive{
		color : #8CD9C7;
		background: #E0F1ED;
	}
	.isSmallFont{
		font-size: 24rpx !important;
	}
	
	
	.isSmall{
		padding: 12rpx 24rpx !important;
		min-width:50rpx !important;
		box-sizing: border-box;
	}
	.teShu{
		font-size: 24rpx;
		color: #8CD9C7;
		th{
			padding: 0 24rpx;
			box-sizing: border-box;
			text-align:center;
			white-space:pre-line;
			word-wrap:break-word;
			word-break:break-all;
		}
	}
</style>
