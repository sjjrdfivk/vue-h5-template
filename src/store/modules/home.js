const state = {
  shift: 'movies'
}
const getters = {}
const actions = {
  setHomeShift ({ commit }, v) {
    commit('setHomeShiftData', v)
  }
}
const mutations = {
  setHomeShiftData (state, v) {
    state.shift = v
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
