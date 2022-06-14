export const state = () => ({
  menu: false,
})

export const getters = {
  getMenuInfo(state){
    return state.menu
  }
}

export const actions = {

  async setMenuInfo({commit}){
    commit("SET_MENU")
  },
}

export const mutations = {
  SET_MENU (state){
    state.menu = !state.menu
  },
}
