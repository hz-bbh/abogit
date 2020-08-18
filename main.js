import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})



var ApiUrl = "http://gl.tyj.zj.gov.cn:10084/api-training/training/api/"										//接口地址
Vue.prototype.ajaxPost  = function(obj,apiName,succCallback){
	if(obj!=null){
		Object.assign(obj,{
			access_token : uni.getStorageSync('access_token')
		});
	}else{
		obj  = {
			access_token : uni.getStorageSync('access_token')
		}
	}
	uni.request({
		url: ApiUrl + apiName,
		data: obj,  
		method: 'POST',  
		header : {
			'content-type':'application/x-www-form-urlencoded',
			'api-token' : uni.getStorageSync('apiToken')
		},
		withCredentials:true,
		sslVerify : false,
		dataType: 'json',
		success: function (data) {
			if(data.data.code==0){
				succCallback(data.data);
			}else{
				// if(data.data.code==1){
				// 	location.href = "http://223.4.69.177/train-project/home.html"
				// }
				uni.showToast({
					title : data.data.msg
				})
			}		
		},
		fail: function (res) {	
			uni.showToast({
				title : JSON.stringify(res)
			})
		}
	})
}
//接口，ajax
Vue.prototype.ajaxGet  = function(obj,apiName,succCallback){
	var string = '';
	if(obj!=null){
		Object.assign(obj,{
			access_token : uni.getStorageSync('access_token')
		});
		var keys = Object.keys(obj);
		keys = keys.sort();
		var newArgs = {};
		keys.forEach(function (key) {
			newArgs[key] = obj[key];
		});
		for (var k in newArgs){
			string += '&' + k + '=' + newArgs[k];
		}
		string = string.substr(1);
	}else{
		string = "access_token="+uni.getStorageSync('access_token')
	}
	uni.request({
		url: ApiUrl + apiName+"?"+string,
		method: 'GET',  
		header : {
			'content-type':'application/x-www-form-urlencoded',
			'api-token' : uni.getStorageSync('apiToken')
		},
		dataType: 'json',
		withCredentials:true,
		sslVerify : false,
		success: function (data) {
			if(data.data.code==0){
				succCallback(data.data);
			}else{
				if(data.data.code==1){
					// location.href = "http://223.4.69.177/train-project/home.html"
				}
				console.log("请求失败: " + JSON.stringify(data.data));
				uni.showToast({
					title : data.data.msg
				})
			}
		},
		fail: function (res) {	
			uni.showToast({
				title : JSON.stringify(res)
			})
		}
	})
}

app.$mount()
