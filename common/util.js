

function setNumer(times) { 
	var h = Math.floor(times/3600);
	var m = Math.floor(times%3600/60);
	var s = Math.floor(times%60);
	//转换格式
	h = h>9?h:"0"+h;
	m = m>9?m:"0"+m;
	s = s>9?s:"0"+s; 
	//在页面上显示
	return {h:h,m:m,s:s};
}

// 数组去重
function arryClear(arr){
	var tmp = new Array();
	for(var i in arr){
		if(tmp.indexOf(arr[i])==-1){
			tmp.push(arr[i]);
		}
	}
	return tmp;
}


//获得当前时间
function getNowTime(){
	var date = new Date();
	var year = date.getFullYear();
	var month= date.getMonth()+1;
	var day  = date.getDate();
	month = month>9?month:"0"+month;
	day   = day>9?day:"0"+day; 
	var str = year+"-"+month+"-"+day
	return str
}



//数组对象去重复,arry数组，Object根据的对象名
function arryClearObj(arry,Object){
	var result = [];
	var obj = {};
	for(var j=0;j<arry.length;j++){
		if(!obj[arry[j][Object]]){
		   result.push(arry[j]);
		   obj[arry[j][Object]] = true;
		}
	}
	return result;
}



//正则清理所有标签
function clearHtml(str){								
	var outTxet = str.replace(/<[^>]+>/g, "");
	return outTxet;
}
//正则去除换行跟空格
function clearALL(str){
	var outTxet = str.replace(/[\r\n]/g, ""); 
	return outTxet; 
}



// 验证手机号码
function checkPhone(num){
	const zz = /^1[3456789]\d{9}$/;
	if(!zz.test(num)){
		uni.showToast({
			title : "请输入正确的手机号码",
			icon  : "none"
		});
		return false
	}
	return true;
}
//6-12位密码
function checkPass(num){
	if(num.length<6){
		uni.showToast({
			title : "请输入6-12位密码",
			icon  : "none"
		});
		return false
	}
	return true;
}

//验证码输入是否为空
function checkCode(num){
	if(num.trim()==''){
		uni.showToast({
			title : "验证码错误",
			icon  : "none"
		});
		return false
	}
	return true;
}


//60秒倒计时
var num=60;
function timeOut(){
	if(num <= 0) {
		num = 60;
	} else {
		num--;
	}
	return num
}
function resetNum(){
	num = 60;
}



//内存字节转换
function conver(limit){  
	var size = "";  
	if( limit < 0.1 * 1024 ){ //如果小于0.1KB转化成B  
		size = limit.toFixed(2) + "B";    
	}else if(limit < 0.1 * 1024 * 1024 ){//如果小于0.1MB转化成KB  
		size = (limit / 1024).toFixed(2) + "KB";              
	}else if(limit < 0.1 * 1024 * 1024 * 1024 * 1024){ //如果小于0.1GB转化成MB  
		// size = (limit / (1024 * 1024)).toFixed(2) + "MB";  
		size = (limit / (1024 * 1024)).toFixed(2);  
	}else{ //其他转化成GB  
		size = (limit / (1024 * 1024 * 1024)).toFixed(2) + "GB";  
	}  
	var sizestr = size + "";   
	var len = sizestr.indexOf("\.");  
	var dec = sizestr.substr(len + 1, 2);  
	if(dec == "00"){//当小数点后为00时 去掉小数部分  
		return sizestr.substring(0,len) + sizestr.substr(len + 3,2);  
	}  
	return sizestr;  
}


//内存字节转换
function converMB(limit){  
	var size = "";  
	if(limit < 0.1 * 1024 * 1024 * 1024 * 1024){				//转换多少MB
		size = (limit / (1024 * 1024)).toFixed(2);  
	}
	var sizestr = size + "";   
	var len = sizestr.indexOf("\.");  
	var dec = sizestr.substr(len + 1, 2);  
	if(dec == "00"){//当小数点后为00时 去掉小数部分  
		return sizestr.substring(0,len) + sizestr.substr(len + 3,2);  
	}  
	return sizestr;  
}


//微信分享app
const httpUrl = "https://www.zjlanghun.com/logo.png";		//分享缩略图
function goShare(obj){ 
	console.log("obj: " + JSON.stringify(obj));
	uni.showActionSheet({
	    itemList: ['微信好友', '分享到朋友圈'],
	    success: function (res) {
			if(res.tapIndex==0){	//微信好友	
				uni.share({
				    provider: "weixin",
				    scene: "WXSceneSession",
				    type: 0,
				    href: obj.href,
				    title: obj.title,
				    summary: obj.intro,
				    imageUrl: httpUrl,
				    success: function (res) {
				        // console.log("success:" + JSON.stringify(res));
				    },
				    fail: function (err) {
				        // console.log("fail:" + JSON.stringify(err));
				    }
				});
			}else{		//分享到朋友圈
				uni.share({
				    provider: "weixin",
				    scene: "WXSenceTimeline",
				    type: 0,
				    href: obj.href,
				    title: obj.title,
				    summary: obj.intro,
				    imageUrl: httpUrl,
				    success: function (res) {
				        // console.log("success:" + JSON.stringify(res));
				    },
				    fail: function (err) {
				        // console.log("fail:" + JSON.stringify(err));
				    }
				});
			}
	    },
	    fail: function (res) {
	        // console.log(res.errMsg);
	    }
	});
}





function checkCard(code){
	var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};  
	if(!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/.test(code)){  
		 uni.showToast({
		 	title : "身份证有误"
		 });
	}else if(!city[code.substr(0,2)]){  
		 uni.showToast({
		 	title : "身份证有误，请重新输入！",
		 	icon  : "none"
		 });
	}else{  
	    //18位身份证需要验证最后一位校验位  
	    if(code.length == 18){  
	        code = code.split('');  
	        //∑(ai×Wi)(mod 11)  
	        //加权因子  
	        var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];  
	        //校验位  
	        var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];  
	        var sum = 0;  
	        var ai = 0;  
	        var wi = 0;  
	        for (var i = 0; i < 17; i++)  
	        {  
	            ai = code[i];  
	            wi = factor[i];  
	            sum += ai * wi;  
	        }  
	        if(parity[sum % 11] != code[17].toUpperCase()){  
	             uni.showToast({
	             	title : "身份证有误"
	             });
	             return false;
	        }else{
				//身份证正确
				return true;
	        }
	    }else{
	    		uni.showToast({
	    			title : "身份证有误，请重新输入！",
	    			icon  : "none"
	    		});
	    		return false;
	    }
	}  
}



//未登录跳转
function goLoginWelcome(){
	uni.navigateTo({
		url : "../login/loginWelcome"
	})
}
	






//隐藏手机号和银行卡号中间数字
function phoneStr(str){
	var strStart = ""+str.substring(-1,3);
	var strLast = str.substring(7);
	var newPhonw = strStart+"****"+strLast;
	return newPhonw
}
function bankStr(str){
	var strStart = ""+str.substring(-1,4);
	var strLast =""+ str.substr(str.length-4);
	var newBank = strStart + "****" + "****" + strLast;
	return newBank
}


function isMp3OrMp4(str){
	var strLast = str.split(".");
	return strLast[1]
}



/*
	url 服务器上传路径如（京运的地址 ： http://work.hzjyty.com/system/oss/upload ）;
	fileObj 自己页面定义的input file，（例如 ： var fileObj =  document.getElementById("file").files[0]）；
	paramArry 参数  （无传null, 有的话传入数组对象，例如： [{name:1,id:1}]这种形式）；
	func 成功返回；
	onprogress 当前进度条状态回调；
	error 失败回调
*/
// xhr原生上传文件
function xhrUpladFile(url,fileObj,paramArry,func,onprogress,error) {
	var form = new FormData(); 
	form.append("file", fileObj);
	if(paramArry!=null){
		paramArry.forEach((item)=>{
			form.append(item.name,item.value)
		})
	}
	var xhr = new XMLHttpRequest();  
	xhr.open("post",url, true); 
	xhr.withCredentials = true;
	xhr.upload.onprogress = function(e){	//上传开始执行方法
	   // console.log("已上传===" + JSON.stringify(e.loaded));
	   // console.log("总大小===" + JSON.stringify(e.total));
	   onprogress(e.loaded,e.total);
	};;
	xhr.onreadystatechange = function(){
			switch(xhr.readyState) {
			case 0 :
					//console.log("请求未初始化");
				break; 
			case 1 :
					//console.log("请求启动，尚未发送");
				break;
			case 2 :
					// console.log("请求发送，尚未得到响应");
				break;
			case 3 : 
					//console.log("请求开始响应，收到部分数据");
				break;
			case 4 :
				if(xhr.status == 200){
					 var data = JSON.parse(xhr.responseText);
					  console.log(JSON.stringify(data));
					  func(data);
				}
			break;
		}
	}
	xhr.onerror =  function(err){//请求失败
		 console.log("上传失败！");
		 error(err);
	}; 
	xhr.send(form); //开始上传，发送form数据
}



module.exports = {
	setNumer     : setNumer,
	arryClear    : arryClear,
	clearHtml    : clearHtml,
	checkPhone   : checkPhone,
	checkPass	 : checkPass,
	checkCode	 : checkCode,
	timeOut      : timeOut,
	phoneStr     : phoneStr,
	bankStr		 : bankStr,
	conver		 : conver,
	goLoginWelcome : goLoginWelcome,
	resetNum     : resetNum,
	goShare      : goShare,
	isMp3OrMp4   : isMp3OrMp4,
	checkCard    : checkCard,
	clearALL	 : clearALL,
	xhrUpladFile : xhrUpladFile,
	converMB     : converMB,
	arryClearObj : arryClearObj,
	getNowTime   : getNowTime
}