<template>
  <div class="page-home">
    <banner />
    <product-des :product-info="productInfo" style="marginTop:30px;" />
    <div class="more-prodcut">
      <nuxt-link to="/product">查看更多产品 ></nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Banner from '@/components/Home/Banner'
import ProductDes from '@/components/Home/ProductDes'
export default {
  layout: 'home',
  components: {
    Banner,
    ProductDes
  },
  async asyncData({ store, $axios }) {
    const { list } = await $axios.get('/home/navInfo')
    global.console.log(list)
    store.commit('home/setMenuList', list)
    const { product } = await $axios.get('/home/productInfo')
    store.commit('home/setProductInfo', product)
    // return { list: [] }
  },
  data() {
    return {
      title: '首页'
    }
  },
  computed: {
    ...mapState({
      productInfo: (state) => state.home.productInfo
    })
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>

<style lang="less" scoped>
.page-home {
  background-color: #f5f7f9;
  .more-prodcut {
    text-align: center;
    a {
      font-size: 14px;
      color: #989898;
    }
  }
}
</style>
