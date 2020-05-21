import axios from 'axios'
import router from '../router'
const state = {
    context: 'http://localhost:3000',
    player : {},
    fail : false,
    auth : false
}
const actions = {
    async login({commit}, payload){
        const url = state.context + `/players/${payload.playerId}/access`
        const headers = {
            authorization: 'JWT fefege..',
            Accept : 'application/json',
            'Content-Type': 'application/json'
        }
        axios.post(url, payload, headers)
            .then(({data})=>{
                alert('자바를 다녀옴')
                if(data.result){
                    commit('LOGIN_COMMIT', data)
                }else{
                    commit('FAIL_COMMIT')
                }

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
        if(data.player.teamId !== 'K01'){
            alert('일반 사용자')
            router.push('/')
        }else{
            alert('관리자')
            router.push('/')
        }
    },
    FAIL_COMMIT(state){ //액션의 커밋 파라미터에 따라서
        state.fail = true //실패 했으니 넘기기


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