<template>
  <div class="card">
    <van-nav-bar title="非招标公告" left-text="返回" left-arrow fixed @click-left="onClickLeft">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <van-search class="search" v-model="searchValue" placeholder="输入项目名称/编号" />
    <div class="tabs">
      <van-tabs v-model="active" >
        <van-tab title="招标采购" name="1"></van-tab>
        <van-tab title="询价采购" name="2"></van-tab>
        <van-tab title="竞价采购" name="3"></van-tab>
      </van-tabs>
      <ul class="tabList">
        <li v-for="item in tabData" :key="item.id">
          <div class="list">
            <h3>{{item.title}}</h3>
            <span>{{ item.date }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      searchValue: "",
      active: '1',
      tabData: [
        {id:1, title: "授权采购集团2019询价公告", date: "2020-05-11 11:05:33"},
        {id:1, title: "432询价公告", date: "2020-05-11 11:05:33"},
        {id:1, title: "432询价公告", date: "2020-05-11 11:05:33"},
        {id:1, title: "432询价公告", date: "2020-05-11 11:05:33"},
        {id:1, title: "432询价公告", date: "2020-05-11 11:05:33"},
        {id:1, title: "432询价公告", date: "2020-05-11 11:05:33"},
        {id:1, title: "432询价公告", date: "2020-05-11 11:05:33"},
        {id:1, title: "432询价公告", date: "2020-05-11 11:05:33"},
        {id:1, title: "授权采购集团2019询价公告", date: "2020-05-11 11:05:33"},
        {id:1, title: "授权采购集团2019询价公告", date: "2020-05-11 11:05:33"},
      ]
    };
  },
  methods: {
    onClickLeft(){
      this.$router.push({
        name: 'goods'
      });

    }
  }
};
</script>

<style lang="less" scoped>
/deep/ .van-icon {
  font-size: 18px !important;
}
/deep/ .van-nav-bar__content {
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
.card {
  .search {
    margin-top: 50px;
  }
  .tabList{
    overflow: auto;
    height: calc(100vh - 100px);
    margin-top: 5px;
    background: #ffffff;
    li {
      width: 100%;
      border-bottom: 1px solid #F4F4F4;
      .list {
        padding: 10px 20px;
        h3 {
          margin: 0;
          margin-bottom: 10px;
          font-size: 16px;
          font-weight: normal;
          color: rgb(14,14,14);
        }
        span {
          font-size: 14px;
          color: #CFCFCF;
        }
      }
    }
  }
}
</style>
