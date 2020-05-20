import axios from 'axios'

const state = {
    context: 'http://localhost:3000',
    password : '',
    player : {},
    fail : false,
    auth : false
}
const actions = {
    async login({commit}, payload){
        const url = state.context + `players/${payload.playerId}/access`
        const headers = {
            authorization: 'JWT fefege..',
            Accept : 'application/json',
            'Content-Type': 'application/json'
        }

        axios.post(url, payload, headers)
        .then(({data})=>{
            alert('자바를 다녀옴')
            commit('LOGIN_COMMIT', data)
        })
        .catch(()=>{
            alert('서버 전송 실패')
                state.fail = true
        })
    },
    async join({commit}){
        commit('join')
    }
}
const  mutations = {
    join(){
        alert('회원 가입 버튼 클릭!!')
    },
    LOGIN_COMMIT(state, data){
        state.auth = true
        state.player = data.player
        localStorage.setItem('token', data.token)
        localStorage.setItem('playerId', data.player.playerId)
        if(data.player.auth === 'USER'){
            alert('일반 사용자')
            /*일반 사용자*/
        }else{
            alert('관리자')
            /*관리자*/
        }
    }
}
const getters = {

}
export default{
    name : 'player',
    namespaced : true,
    state,
    actions,
    mutations,
    getters
}