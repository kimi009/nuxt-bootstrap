<template>
  <div class="home-header">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-brand href="#">
        <img class="logo" src="~/assets/icon/logo.jpg" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav @mouseleave="leave">
          <template v-for="item in menuItems">
            <b-nav-item :key="item.key" href="#" @mouseenter="enter(item)">{{
              item.name
            }}</b-nav-item>
          </template>
        </b-navbar-nav>
        <nav-right />
      </b-collapse>
    </b-navbar>

    <b-collapse v-model="visible" class="menu-collapse">
      <b-container fluid class="menu-item-detail" @mouseleave="leave">
        <b-row
          class="text-left"
          align-h="start"
          cols="1"
          cols-sm="2"
          cols-md="4"
          cols-lg="6"
        >
          <template v-for="item in currentSelectedItem.children">
            <b-col :key="item.key" class="item-col" cols-sm="4">
              <div class="title">
                <nuxt-link to="/about">{{ item.name }}</nuxt-link>
              </div>
              <template v-for="subItem in item.children">
                <div
                  :key="subItem"
                  class="detail"
                  @click="detailItemClick(subItem)"
                >
                  {{ subItem }}
                </div>
              </template>
            </b-col>
          </template>
        </b-row>
      </b-container>
    </b-collapse>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NavRight from '@/components/Home/NavRight'
export default {
  name: 'HomeHeader',
  components: {
    NavRight
  },
  // props:{
  //   menuItems:{
  //     type:Array,
  //     required:true
  //   }
  // },
  data() {
    return {
      // menuItems: [
      //   {
      //     key: 'order',
      //     name: '工单',
      //     children: [
      //       {
      //         key: 'test',
      //         name: '测试',
      //         children: ['测试111', '测试12', '测试13', '测试14']
      //       },
      //       {
      //         key: 'test4',
      //         name: '测试2',
      //         children: ['测试23', '测试22', '测试25', '测试28']
      //       },
      //       {
      //         key: 'test45',
      //         name: '测试',
      //         children: ['测试1141', '测试312', '测试213', '测试134']
      //       },
      //       {
      //         key: 'test43',
      //         name: '测试2',
      //         children: ['测试2423', '测试232', '测试325', '测试2328']
      //       }
      //     ]
      //   },
      //   {
      //     key: 'help',
      //     name: '帮助',
      //     children: [
      //       {
      //         key: 'about',
      //         name: '关于',
      //         children: []
      //       }
      //     ]
      //   }
      // ],
      currentSelectedItem: {},
      visible: false
    }
  },
  computed: {
    ...mapState({
      menuItems: (state) => state.home.menuList
    })
  },
  methods: {
    enter(item) {
      this.currentSelectedItem = this.menuItems.find((i) => i.key === item.key)
      this.visible =
        this.currentSelectedItem.children &&
        this.currentSelectedItem.children.length > 0
    },
    leave() {
      this.visible = false
    },
    detailItemClick(subItem) {
      this.visible = false
    }
  }
}
</script>

<style lang="less" scoped>
.home-header {
  .logo {
    width: 32px;
    border-radius: 50%;
  }
  .menu-collapse {
    z-index: 100;
    position: absolute;
    left: 0;
    right: 0;
  }
  .menu-item-detail {
    padding: 30px;
    background-color: #000000;
    .item-col {
      color: #ffffff;
      .title {
        font-size: 15px;
        font-weight: bold;
        padding-bottom: 10px;
        border-bottom: 1px solid hsla(0, 0%, 100%, 0.8);
        margin-bottom: 10px;
        &:hover {
          cursor: pointer;
          color: #00bcc8;
        }
      }
      .detail {
        &:hover {
          cursor: pointer;
          color: #00bcc8;
        }
      }
    }
  }
}
</style>
