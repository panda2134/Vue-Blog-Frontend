import VuexPersistence from 'vuex-persist'

export default ({ app, store }) => {
    if (process.client) {
        window.onNuxtReady(() => {
            new VuexPersistence({
                restoreState: (key, storage) => app.$cookies.get(key),
                saveState: (key, state, storage) =>
                    app.$cookies.set(key, state, {
                        maxAge: 3 * (24 * 60 * 60),
                        sameSite: true
                    }),
            }).plugin(store);
        });
    }
}