import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  'state': {
    'L1': {
      'all': {
        'name': 'All',
        'parentnode': null,
        'Device': null
      }
    },
    'L2': {
      'uncategories': {
        'name': 'Uncategories',
        'parentnode': 'all',
        'Device': {'name': 'TPE02-D01 This is 1'}
      },
      'tgtest': {
        'name': 'TG Test',
        'parentnode': 'all',
        'Device': {'name': 'TPE02-D01 This is 2'}
      }
    },
    'L3': {
      'teo1': {
        'name': 'TE-O1',
        'parentnode': 'uncategories',
        'Device': {'name': 'TPE02-D01 This is 3'}
      },
      'teo5': {
        'name': 'TE-O5',
        'parentnode': 'tgtest',
        'Device': {'name': 'TPE02-D01 This is 4'}
      }
    },
    'L4': {
      'teo10789': {
        'name': 'TE10',
        'parentnode': 'teo5',
        'Device': {'name': 'TPE02-D01 This is 5'}
      },
      'teo389': {
        'name': 'TE-O3',
        'parentnode': 'teo5',
        'Device': {'name': 'TPE02-D01 This is 6'}
      }
    },
    'L5': {
      'teo145': {
        'name': 'TE10',
        'parentnode': 'teo389',
        'Device': {'name': 'TPE02-D01 This is 7'}
      },
      'teo311': {
        'name': 'TE-O3',
        'parentnode': 'teo389',
        'Device': {'name': 'TPE02-D01 This is 8'}
      }
    },
    'L6': {
      'teo11': {
        'name': 'TE10',
        'parentnode': 'teo10789',
        'Device': {'name': 'TPE02-D01 This is 9'}
      },
      'teo31': {
        'name': 'TE-O3',
        'parentnode': 'teo10789',
        'Device': {'name': 'TPE02-D01 This is 10'}
      }
    }
  }
})

export default store
