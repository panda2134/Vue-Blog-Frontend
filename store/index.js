export const state = () => ({});

export const mutations = {
    initMeta(state, meta) {
        state.meta = meta;
    }
};

export const actions = {
    async nuxtServerInit({ commit }) {
        const res = await this.$axios.$get('/meta');
        commit('initMeta', res.payload);
    }
};
