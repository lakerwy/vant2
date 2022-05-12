<template>
  <div class="goods">
    <van-nav-bar
      title="元博乐采采购与招标"
      :left-arrow="false"
      @click-left="onClickLeft"
      @click-right="onClickRight"
      :safe-area-inset-top="true"
    >
      <template #right>
        <van-icon name="search" size="24" />
      </template>
    </van-nav-bar>
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
        <img :src="thumb" />
      </van-swipe-item>
    </van-swipe>
    <van-notice-bar
      left-icon="volume-o"
      text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
    />
    <van-grid :border="false" :column-num="3">
      <van-grid-item>
        <div class="img" @click="$router.push({name: 'user'})">
          <img src="../../styles/img/syyd_fd_m.png" alt="" />
        </div>
        招标采购
      </van-grid-item>
      <van-grid-item>
        <div class="img" @click="$router.push({name: 'cart'})">
          <img src="../../styles/img/hotc_cont4.png" alt="" />
        </div>
        非招标采购
      </van-grid-item>
      <van-grid-item>
        <div class="img">
          <img src="../../styles/img/syyd_fd_m.png" alt="" />
        </div>
        供应商公示
      </van-grid-item>
    </van-grid>
    <div class="myBusiness">
      <div class="my_title">我的业务</div>
      <div class="my_list">
        <ul class="my_ul">
          <li>
            <div class="li_image">
              <img src="../../styles/img/syyd_fd_m.png" alt="" />
            </div>
            <p>业务查询</p>
          </li>
          <li>
            <div class="li_image">
              <img src="../../styles/img/syyd_fd_m.png" alt="" />
            </div>
            <p>业务待办</p>
          </li>
          <li>
            <div class="li_image">
              <img src="../../styles/img/hotc_cont4.png" alt="" />
            </div>
            <p>结果查询</p>
          </li>
          <li>
            <div class="li_image">
              <img src="../../styles/img/syyd_fd_m.png" alt="" />
            </div>
            <p>结果确认</p>
          </li>
        </ul>
      </div>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="more-o" dot>消息</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o" badge="5">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goods: {
        title: "美国伽力果（约680g/3个）",
        price: 2680,
        express: "免运费",
        remain: 19,
        thumb: ["Img/mob1.jpg", "Img/mob2.jpg", "Img/mob3.jpg"],
      },
      active:""
    };
  },

  methods: {
    onClickLeft() {},
    onClickRight() {},
  },
};
</script>

<style lang="less" scoped>
.goods {
  padding-bottom: 50px;
  .img {
    // width: 100px;
    // height: 100px;
  }
  &-swipe {
    img {
      width: 100%;
      height: 200px;
      display: block;
    }
  }

  .van-grid {
    margin-top: 10px;
    font-size: 12px;
  }
  .myBusiness {
    border-radius: 0.1rem;
    // padding: 0.2rem; 
    box-sizing: border-box;
    background: #fff;
    margin-top: 0.2rem;
  }

  .my_title {
    font-size: 0.4rem;
    font-weight: 500;
    color: #000;
    padding: 0.2rem;
    border-bottom: solid #f4f4f4 0.02rem;
  }

  .my_list {
    /* padding: 0.2rem; */
  }

  .my_ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .my_ul li {
    width: 44%;
    height: 1.5rem;
    border-radius: 0.15rem;
    background-color: #2d8cf0;
    margin-top: 0.22rem;
    display: flex;
    align-items: center;
  }

  .my_ul li:nth-child(1) {
    background-color: #2db7f5;
  }

  .my_ul li:nth-child(3) {
    background-color: #2db7f5;
  }

  .my_ul li:nth-child(4) {
    background-color: #19be6b;
  }

  .my_ul li p {
    color: #fff;
    font-size: 0.4rem;
  }

  .li_image img {
    width: 1.4rem;
    height: 1.4rem;
  }
}
</style>
