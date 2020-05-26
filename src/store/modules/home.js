const state = {
  shift: 'movies',
  footerHeight: 0
}
const getters = {}
const actions = {
  setHomeShift ({ commit }, v) {
    commit('setHomeShiftData', v)
  },
  setFooterHeight ({ commit }, v) {
    commit('setFooterHeightData', v)
  }
}
const mutations = {
  setHomeShiftData (state, v) {
    state.shift = v
  },
  setFooterHeightData (state, v) {
    state.footerHeight = v
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
