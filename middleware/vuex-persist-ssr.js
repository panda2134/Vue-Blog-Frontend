import VuexPersistence from 'vuex-persist'

export class MockStorage {
    index;
    key;

    get length() {
      return Object.keys(this).length
    }

    key(index) {
      return Object.keys(this)[index]
    }

    setItem(key, data) {
      this[key] = data.toString()
    }
    getItem(key) {
      return this[key]
    }
    removeItem(key) {
      delete this[key]
    }
    clear() {
      for (let key of Object.keys(this)) {
        delete this[key]
      }
    }
  }

export default function({ app, store }) {
    if (process.server) {
        console.log(1)
        new VuexPersistence({
            restoreState: (key, storage) => app.$cookies.get(key),
            saveState: (key, state, storage) => {},
            storage: new MockStorage()
        }).plugin(store);
        console.log(2)
    }
}