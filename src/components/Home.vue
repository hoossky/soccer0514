<template>
    <div id="app">
            <div v-if="auth">
                <layout>
                <template #header="self">
                <router-link to="/"><h1 class="title">{{self.title}}</h1></router-link>
                <router-link to="login"><span class="login">{{self.login}}</span></router-link>
                <router-link to="join"><span class="join">{{self.join}}</span></router-link>
                </template>

            <template #sidebar>
               <h3>광고판</h3>
            </template>
                </layout>
            </div>
            <!--로그인 성공화면-->
        <layout>
            <template #header="self">
                <router-link to="/"><h1 class="title">{{self.title}}</h1></router-link>
                <router-link to="/mypage"><span class="login">{{self.mypage}}</span></router-link>
                <span @click="logout" class="join">{{self.logout}}</span>
            </template>
            <template #sidebar="self" >
                {{self.menu}}
                <ul class="menu">
                    <li v-for="i of sidebars" :key="i.menu">
                        <router-link :to="i.link">{{i.menu}}</router-link>
                    </li>
                </ul>
            </template>

            <template #content>
               <router-view/>
            </template>
            <template #footer="self">
                        {{self.footer}}
            </template>
         </layout>
    </div>
</template>

<script>
    import Layout from "../components/common/Layout.vue"
    import {mapState} from "vuex";
    export default {
        name: "Home",
        components : {Layout},
        data(){ //data : ()=>{
            return {
                sidebars: [
                    {menu: '등 록', link: '/register'},
                    {menu: '목 록', link: '/list'},
                    {menu: '검 색', link: '/search'},
                    {menu: '수 정', link: '/update'},
                    {menu: '삭 제', link: '/delete'},
                    {menu: '회원 수', link: '/vuexCounter'}
                ]
            }

        },
        computed : {
            ...mapState(
                {auth : state => state.player.auth

                }
            )
        },
        methods:{
                menu(i){
                    switch(i) {
                        case '등 록':
                            alert('0')
                            break;
                        case '목 록':
                            alert('1')
                            break;
                        case '검 색':
                            alert('2')
                            break;
                        case '수 정':
                            alert('3')
                            break;
                        case '삭 제':
                            alert('4')
                            break;
                        case '회원 수':
                            alert('5')
                            break;
                    }
                },
                logout(){
                    alert('로그아웃')
                },

            }
    }
</script>
<style scoped>
    ul.menu{
        position: relative;
        padding: 5px;
        list-style-type: none;
        font-style: italic;
    }
    .title{width: 300px;margin: 0 auto}
    .login{margin-right: 50px; float: right}
    .join{margin-right: 50px; float: right}
    .footer{width: 300px; margin: 0 auto}
</style>
