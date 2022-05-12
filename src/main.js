import Vue from 'vue';
import App from './App';
import { router } from './router';
import 'lib-flexible/flexible'

import { Grid, GridItem } from 'vant';
import { NavBar } from 'vant';
import { Tab, Tabs } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Search } from 'vant';

Vue.use(Search);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(NavBar);
Vue.use(Grid);
Vue.use(GridItem);

import {
  NoticeBar,
  Button,
  Row,
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  SwipeItem,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton } from 'vant'
Vue.use(Button).use(Row).use(Col).use(Tag).use(Icon).use(Cell).use(CellGroup).use(Swipe).use(SwipeItem).use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(NoticeBar);





new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
