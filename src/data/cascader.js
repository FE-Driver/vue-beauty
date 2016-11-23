export default{ 
	data1 : {
		children: [{
			value: 'zhejiang',
			text: '浙江',
			children: [{
				value: 'hangzhou',
				text: '杭州',
				children: [{
					value: 'xihu',
					text: '西湖'
				}],
			}],
		}, {
			value: 'jiangsu',
			text: '江苏',
			children: [{
				value: 'nanjing',
				text: '南京',
				children: [{
					value: 'zhonghuamen',
					text: '中华门'
				}],
			}],
		}, {
			value: 'sichuan',
			text: '四川',
			children: [{
				value: 'chengdu',
				text: '成都',
				children: [{
					value: 'qingyangqu',
					text: '青羊区'
				},{
					value: 'wuhouqu',
					text: '武侯区'
				},{
					value: 'jinjiang',
					text: '锦江区'
				},{
					value: 'chenghuaqu',
					text: '成华区'
				},{
					value: 'jinniuqu',
					text: '金牛区'
				}]
			},{
				value: 'mianyang',
				text: '绵阳'
			},{
				value: 'panzhihua',
				text: '攀枝花'
			}]
		}]
	},
	data2:{
		placeholder:'请选择城市',
		children: [{
			value: 'zhejiang',
			text: '浙江',
			children: [{
				value: 'hangzhou',
				text: '杭州',
				children: [{
					value: 'xihu',
					text: '西湖'
				}],
			}],
		}, {
			value: 'jiangsu',
			text: '江苏',
			children: [{
				value: 'nanjing',
				text: '南京',
				children: [{
					value: 'zhonghuamen',
					text: '中华门'
				}],
			}],
		}, {
			value: 'sichuan',
			text: '四川',
			children: [{
				value: 'chengdu',
				text: '成都',
				children: [{
					value: 'qingyangqu',
					text: '青羊区'
				},{
					value: 'wuhouqu',
					text: '武侯区'
				},{
					value: 'jinjiang',
					text: '锦江区'
				},{
					value: 'chenghuaqu',
					text: '成华区'
				},{
					value: 'jinniuqu',
					text: '金牛区'
				}]
			},{
				value: 'mianyang',
				text: '绵阳'
			},{
				value: 'panzhihua',
				text: '攀枝花'
			}]
		}]
	},
	data3:{
		placeholder:'请选择城市',
		children: [{
			value: 'zhejiang',
			text: '浙江',
			children: [{
				value: 'hangzhou',
				text: '杭州',
				children: [{
					value: 'xihu',
					text: '西湖'
				}],
			}],
		}, {
			value: 'jiangsu',
			text: '江苏',
			children: [{
				value: 'nanjing',
				text: '南京',
				children: [{
					value: 'zhonghuamen',
					text: '中华门'
				}],
			}],
		}, {
			value: 'sichuan',
			text: '四川',
			select : true,
			children: [{
				value: 'chengdu',
				text: '成都',
				select : true,
				children: [{
					value: 'qingyangqu',
					text: '青羊区',
					select : true
				},{
					value: 'wuhouqu',
					text: '武侯区'
				},{
					value: 'jinjiang',
					text: '锦江区'
				},{
					value: 'chenghuaqu',
					text: '成华区'
				},{
					value: 'jinniuqu',
					text: '金牛区'
				}]
			},{
				value: 'mianyang',
				text: '绵阳'
			},{
				value: 'panzhihua',
				text: '攀枝花'
			}]
		}]
	},
	data4:{
		placeholder:'请选择机构',
		children: [{
			value: 'zgs',
			text: '总公司',
			children: [{
				value: 'sh_dep',
				text: '上海分部',
				children: [{
					value: 'xihu',
					text: '技术部'
				}]
			},{
				value: 'bg_dep',
				text: '北京分部',
				children: [{
					value: 'hr',
					text: '人事部'
				},{
					value: 'yy',
					text: '运营部'
				}]
			},{
				value: 'bg_dep',
				text: '广州分部',
				children: [{
					value: 'xs',
					text: '销售部'
				}]
			}],
		}]
	}
}