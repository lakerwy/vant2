<template>
  <div class="row">
    <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="audio" size="18" />
      </template>
    </van-nav-bar>
    <van-search v-model="value" shape="round" placeholder="输入项目名称/编号" />
    <van-tabs v-model="activeName">
      <van-tab title="待处理" name="a" class="tabs">
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
          <van-dropdown-item v-model="value2" :options="option2" />
          <van-dropdown-item v-model="value3" :options="option3" />
        </van-dropdown-menu>
        <Layout>
          <van-cell value="刚刚">
            <template #title>
              <span class="custom-title">采购计划（项目）的名称</span>
              <van-tag plain type="primary">审批中</van-tag>
            </template>
          </van-cell>
          <div class="information">
            <span>业务类型 : xxxxxx </span>
            <br />
            <span>上报人 : xxx </span>
            <br />
            <span>上报时间 : xxxx 年 xx 月 xx 号</span>
          </div>
        </Layout>
        <van-tabbar v-model="active">
          <van-tabbar-item badge="3">
            <span>新申请</span>
            <template #icon="props">
              <img :src="props.active ? icon.active : icon.inactive" />
            </template>
          </van-tabbar-item>
          <van-tabbar-item icon="records">我审批的</van-tabbar-item>
          <van-tabbar-item icon="setting-o">已提交</van-tabbar-item>
        </van-tabbar>
      </van-tab>
      <van-tab title="已处理" name="b">内容 2</van-tab>
    </van-tabs>
  </div>
</template>

<script>

export default {
  data() {
    return {
      value: "",
      activeName: "a",

      value1: 0,
      value2: "a",
      value3: "g",
      option1: [
        { text: "上报人", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 },
      ],
      option2: [
        { text: "上报时间", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" },
      ],
      option3: [
        { text: "批量处理", value: "g" },
        { text: "好评排序", value: "h" },
        { text: "销量排序", value: "i" },
      ],
      active: 0,
      icon: {
        active: "https://img01.yzcdn.cn/vant/user-active.png",
        inactive: "https://img01.yzcdn.cn/vant/user-inactive.png",
      },
    };
  },

  methods: {
    onClickLeft(){
      this.$router.push({
        name: 'goods'
      });

    },
    onClickRight() {

    },
  },
};
</script>

<style lang="less" scoped>
/deep/ .van-icon {
  font-size: 18px !important;
}
/deep/ .van-nav-bar__content {
  .van-icon-audio {
    color: white;
  }
  background: #0153A5;
  .van-nav-bar__text {
    color: white;
  }
  .van-icon {
    color: white;
  }
  .van-nav-bar__title{
    color: white;
    font-size: 18px;
  }
}
.van-nav-bar {
  background-color: #1890ff;
}
.van-nav-bar__text {
  color:#434343;
  font-size: 13px
};
.van-nav-bar__title {
  color: #434343;
  font-size: 13px !important;
}
.row {
  background-color: #fff;
}
.van-icon {
  font-size: 18px !important;
}
.van-ellipsis {
  font-size: 12px;
}
.van-tag--primary.van-tag--plain {
  margin-left: 8px;
}

.van-cell {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 0 0.42667rem;
  overflow: hidden;
  color: #323233;
  font-size: 0.37333rem;
  /* line-height: 0.64rem; */
  background-color: #fff;
}
.information {
  background: #fff;
  padding: 0 15px;
  span {
    font-size: 13px;
    line-height: 20px;
  }
}
.van-cell__value {
  position: relative;
  overflow: hidden;
  color: #969799;
  text-align: right;
  vertical-align: middle;
  word-wrap: break-word;
  font-size: 12px;
}
.van-cell {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .van-cell__title {
    -webkit-box-flex: 2;
    -webkit-flex: 2;
    flex: 2;

  }
  .van-cell__value {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
  }
}
</style>
