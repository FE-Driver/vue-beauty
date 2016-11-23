<template lang="html">

  <div class="main-wrapper">
    <div class="ant-row">
      <div class="ant-col-xs-24 ant-col-sm-24 ant-col-md-6 ant-col-lg-4">
        <v-menu class="aside-container" mode="inline">
          <v-menu-item v-link="{ name: 'css', activeClass: 'ant-menu-item-selected' }">
            全局CSS样式
          </v-menu-item>
          <v-sub-menu title="Basic">
            <v-menu-item v-link="{ name: 'button', activeClass: 'ant-menu-item-selected' }">
              Button 按钮
            </v-menu-item>
            <v-menu-item v-link="{ name: 'font', activeClass: 'ant-menu-item-selected' }">
              Icon 图标
            </v-menu-item>
            <v-menu-item v-link="{ name: 'layout', activeClass: 'ant-menu-item-selected' }">
              Layout 栅格
            </v-menu-item>
          </v-sub-menu>
          <v-sub-menu title="Form Controls">
            <v-menu-item v-link="{ name: 'cascader', activeClass: 'ant-menu-item-selected' }">
              Cascader 级联控件
            </v-menu-item>
            <v-menu-item v-link="{ name: 'checkbox', activeClass: 'ant-menu-item-selected' }">
              Checkbox 多选框
            </v-menu-item>
            <v-menu-item v-link="{ name: 'form', activeClass: 'ant-menu-item-selected' }">
              Form 表单
            </v-menu-item>
            <v-menu-item v-link="{ name: 'input', activeClass: 'ant-menu-item-selected' }">
              Input 输入框
            </v-menu-item>
            <v-menu-item v-link="{ name: 'inputNumber', activeClass: 'ant-menu-item-selected' }">
              InputNumber 数字输入框
            </v-menu-item>
            <v-menu-item v-link="{ name: 'radio', activeClass: 'ant-menu-item-selected' }">
              Radio 单选框
            </v-menu-item>
            <v-menu-item v-link="{ name: 'rate', activeClass: 'ant-menu-item-selected' }">
              Rate 评分
            </v-menu-item>
            <v-menu-item v-link="{ name: 'select', activeClass: 'ant-menu-item-selected' }">
              Select 选择器
            </v-menu-item>
            <v-menu-item v-link="{ name: 'slider', activeClass: 'ant-menu-item-selected' }">
              Slider 滑动输入条
            </v-menu-item>
            <v-menu-item v-link="{ name: 'switch', activeClass: 'ant-menu-item-selected' }">
              Switch 开关
            </v-menu-item>
            <v-menu-item v-link="{ name: 'timePicker', activeClass: 'ant-menu-item-selected' }">
              TimePicker 时间选择框
            </v-menu-item>
            <v-menu-item v-link="{ name: 'transfer', activeClass: 'ant-menu-item-selected' }">
              Transfer 穿梭框
            </v-menu-item>
            <v-menu-item v-link="{ name: 'treeSelect', activeClass: 'ant-menu-item-selected' }">
              TreeSelect 树选择
            </v-menu-item>
            <v-menu-item v-link="{ name: 'upload', activeClass: 'ant-menu-item-selected' }">
              Upload 文件上传
            </v-menu-item>
            <v-menu-item v-link="{ name: 'datepicker', activeClass: 'ant-menu-item-selected' }">
              Datepicker 日期选择框
            </v-menu-item>
            <v-menu-item v-link="{ name: 'multiselect', activeClass: 'ant-menu-item-selected' }">
              Multiselect 多选
            </v-menu-item>
          </v-sub-menu>
          <v-sub-menu title="Views">
            <v-menu-item v-link="{ name: 'alert', activeClass: 'ant-menu-item-selected' }">
              Alert 警告提醒
            </v-menu-item>
            <v-menu-item v-link="{ name: 'progress', activeClass: 'ant-menu-item-selected' }">
              Progress进度条
            </v-menu-item>
            <v-menu-item v-link="{ name: 'badge', activeClass: 'ant-menu-item-selected' }">
              Badge 徽标数
            </v-menu-item>
            <v-menu-item v-link="{ name: 'card', activeClass: 'ant-menu-item-selected' }">
              Card 卡片
            </v-menu-item>
              <v-menu-item v-link="{ name: 'carousel', activeClass: 'ant-menu-item-selected' }">
                  Carousel 走马灯
              </v-menu-item>
            <v-menu-item v-link="{ name: 'collapse', activeClass: 'ant-menu-item-selected' }">
              Collapse 折叠面板
            </v-menu-item>
            <v-menu-item v-link="{ name: 'notification', activeClass: 'ant-menu-item-selected' }">
              Notification 通知提醒框
            </v-menu-item>
            <v-menu-item v-link="{ name: 'message', activeClass: 'ant-menu-item-selected' }">
              Message 全局提示
            </v-menu-item>
            <v-menu-item v-link="{ name: 'popover', activeClass: 'ant-menu-item-selected' }">
              Popover 气泡卡片
            </v-menu-item>
            <v-menu-item v-link="{ name: 'popconfirm', activeClass: 'ant-menu-item-selected' }">
              Popconfirm 气泡确认框
            </v-menu-item>
            <v-menu-item v-link="{ name: 'modal', activeClass: 'ant-menu-item-selected' }">
              Modal 模态框
            </v-menu-item>
            <v-menu-item v-link="{ name: 'tag', activeClass: 'ant-menu-item-selected' }">
              Tag 标签
            </v-menu-item>
            <v-menu-item v-link="{ name: 'timeline', activeClass: 'ant-menu-item-selected' }">
              Timeline 时间轴
            </v-menu-item>
            <v-menu-item v-link="{ name: 'tree', activeClass: 'ant-menu-item-selected' }">
              Tree 树形控件
            </v-menu-item>
            <v-menu-item v-link="{ name: 'datatable', activeClass: 'ant-menu-item-selected' }">
              Datatable 数据表格
            </v-menu-item>
            <v-menu-item v-link="{ name: 'morePanel', activeClass: 'ant-menu-item-selected' }">
              MorePanel 更多条件面板
            </v-menu-item>
          </v-sub-menu>
          <v-sub-menu title="Navigation">
            <v-menu-item v-link="{ name: 'breadcrumb', activeClass: 'ant-menu-item-selected' }">
              Breadcrumb 面包屑
            </v-menu-item>
            <v-menu-item v-link="{ name: 'menu', activeClass: 'ant-menu-item-selected' }">
              Menu 导航菜单
            </v-menu-item>
            <v-menu-item v-link="{ name: 'pagination', activeClass: 'ant-menu-item-selected' }">
              Pagination 分页
            </v-menu-item>
            <v-menu-item v-link="{ name: 'steps', activeClass: 'ant-menu-item-selected' }">
              Steps 步骤条
            </v-menu-item>
            <v-menu-item v-link="{ name: 'tabs', activeClass: 'ant-menu-item-selected' }">
              Tabs 标签页
            </v-menu-item>
          </v-sub-menu>
          <v-sub-menu title="Other">
            <v-menu-item v-link="{ name: 'affix', activeClass: 'ant-menu-item-selected' }">
              Affix 固钉
            </v-menu-item>
            <v-menu-item v-link="{ name: 'backTop', activeClass: 'ant-menu-item-selected' }">
              BackTop 回到顶部
            </v-menu-item>
            <v-menu-item v-link="{ name: 'queueAnim', activeClass: 'ant-menu-item-selected' }">
              QueueAnim 进出场动画
            </v-menu-item>
            <v-menu-item v-link="{ name: 'spin', activeClass: 'ant-menu-item-selected' }">
              Spin 加载中
            </v-menu-item>
            <v-menu-item v-link="{ name: 'tooltip', activeClass: 'ant-menu-item-selected' }">
              Tooltip 文字提示
            </v-menu-item>
          </v-sub-menu>
          <v-sub-menu title="Docs">
            <v-menu-item v-link="{ name: 'apiTable', activeClass: 'ant-menu-item-selected' }">
              ApiTable api表格
            </v-menu-item>
            <v-menu-item v-link="{ name: 'codeBox', activeClass: 'ant-menu-item-selected' }">
              CodeBox 代码示例
            </v-menu-item>
          </v-sub-menu>
        </v-menu>
      </div>
      <div class="main-container ant-col-xs-24 ant-col-sm-24 ant-col-md-18 ant-col-lg-20">
        <router-view keep-alive></router-view>
      </div>
    </div>
  </div>

</template>

<script>

export default {
}
</script>

<style lang="less">

.main-wrapper {
    width: 96%;
    margin: 0 auto;
    border-radius: 6px;
    padding: 24px 0 0;
    margin-bottom: 24px;
    background-color: #fff;
    overflow: hidden;
    position: relative;
}

.main-container {
    padding: 0 6% 120px 4%;
    margin-left: -1px;
    min-height: 500px;
    border-left: 1px solid #e9e9e9;
}

.markdown{
  color: #666;
  font-size: 14px;
  line-height: 1.8;

  h1 {
      color: #404040;
      font-weight: 500;
      line-height: 40px;
      margin-bottom: 24px;
      margin-top: 8px;
      font-size: 28px;
      font-family: lato,Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;
  }

  hr{
    border-radius: 10px;
    height: 3px;
    border: 0;
    background: #eee;
    margin: 20px 0;
  }

  p, pre {
      margin: 1em 0;
  }

  pre{
    padding: 1em;
    background-color: #F7F7F7;
    border-radius: 6px;
  }

  h2 {
      font-size: 22px;
  }

  h2, h3,  h4,  h5,  h6 {
      color: #404040;
      font-family: lato,Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;
      margin: 1.6em 0 .6em;
      font-weight: 500;
      clear: both;
  }

  code,kbd,pre,samp{
    font-family: Consolas, monospace;
  }

  code{
    margin: 0 3px;
  }

  & > ul li{
    list-style: circle;
    margin-left: 20px;
  }

  & > ol li{
    list-style: decimal;
    margin-left: 20px;
    padding-left: 8px;
  }
}

.code-boxes-col-2-1{
  display: inline-block;
  vertical-align: top;
  padding: 0 8px;
}

.aside-container {
    padding-bottom: 50px;
}

.aside-container .ant-menu-item a, .aside-container .ant-menu-submenu-title span, .aside-container>.ant-menu-item {
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
}

</style>