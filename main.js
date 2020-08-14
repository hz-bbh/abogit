import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})


var ApiUrl = "http://openapi.v3.test.huaqimy.com/api/"										//接口地址
Vue.prototype.ajax  = function(obj,apiName,succCallback){
	var _this = this;
	console.log("参数==========: " + JSON.stringify(obj));
	uni.request({
		url : ApiUrl + apiName,
		data: obj,  
		method: 'POST',  
		header : {'content-type':'application/x-www-form-urlencoded'},
		dataType: 'json',
		success: function (data) {
			succCallback(data.data);
		},
		fail: function (res) {	
			uni.showToast({
				title: '网络连接异常，请稍后重试！',
				icon : 'none'
			});
		}
	})
}

app.$mount()
