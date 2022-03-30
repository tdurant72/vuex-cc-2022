export default {
    namespaced: true,
    state: {
        counter: {
            count: 0
        }
    },
    mutations: {
        INCEMENT_COUNTER: function (state) {
            state.counter.count = state.counter.count + 1;
        },
        DECEMENT_COUNTER: function (state) {
            state.counter.count = state.counter.count - 1;
        },
        INCEMENT_COUNTER_BY: function (state, payload) {
            state.counter.count = state.counter.count + payload.value;
        }
    },
    actions: {
        incrementCounter: function ({
            commit
        }) {
            return commit("INCEMENT_COUNTER")
        },
        decrementCounter: function ({
            commit
        }) {
            return commit("DECEMENT_COUNTER")
        },
        incrementCounterBy: function ({
            commit
        }, payload) {
            return commit("INCEMENT_COUNTER_BY", payload)
        },
    },

}