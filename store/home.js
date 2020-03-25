export const state = () => ({ menuList: [], productInfo: {} })

export const mutations = {
  setMenuList(state, value) {
    state.menuList = value
  },
  setProductInfo(state, value) {
    state.productInfo = value
  }
}

export const actions = {
  setMenu({ commit }, menus) {
    commit('setMenu', menus)
  }
}
