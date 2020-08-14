<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	.lineOne{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.lineTow,.lineThree{
		overflow: hidden;
		text-overflow: ellipsis;
		display: flex;
		display: -webkit-box;
		-webkit-box-orient: vertical;
	}
	.lineTow{
		line-clamp:2;
		-webkit-line-clamp:2;
	}
	.lineThree{
		line-clamp:3;
		-webkit-line-clamp:3;
	}
	.isFlexalitem{
		display: flex;
		align-items: center;
	}
	.isFlexCenter{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.isFlexSpace{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.jx{
		height: 20rpx;
		background: #f6f7f8;
	}
	.borNone{
		border: none !important;
	}
</style>
