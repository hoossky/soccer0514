const state = {
    count: 0,
    limit : 5,
    history: []

}

const actions = {
    increment({commit}){ // 커밋 - 뮤테이션에 있는 기능을 건드려
        commit('increment')
    },
    decrement({commit}){
        commit('decrement')
    },
    incrementIfOdd({commit, state}){
        if((state.count + 1) % 2 === 0)
            commit('increment')
    },
    incrementAsync({commit}){
        setTimeout(()=>{
            commit('increment')
        }, 1000)

    },
    deleteLog({commit}){
        commit('deleteLog')
    }

}
const mutations = {
    increment(state){
        state.count++
        state.history.push('increment') //배열의 끝에 ()를 추가한다
    },
    decrement(state){
        state.count--
        state.history.push('decrement')
    },
    deleteLog(state){
        state.count = '0',
        state.history.length = ''


    }

}
const getters = {
    count(state){return state.count},

    recentHistory(state){
        const end = state.history.length
        const begin = end - state.limit <0 ? 0: end - state.limit
        return state.history.slice(begin,end).join(',')
    }

}
export default {
    name : 'counter',
    namespace : true,
    state,
    actions,
    mutations,
    getters
}


