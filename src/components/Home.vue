<template>
    <div id="app">
        <layout>
            <template #header="self">
                <router-link to="home"><h1 id="title">{{self.title}}</h1></router-link>
                <router-link to="login"><span id="login">{{self.login}}</span></router-link>
                <router-link to="join"><span id="join">{{self.join}}</span></router-link>

            </template>
            <template #sidebar="self" >
                {{self.menu}}

                <ul class="menu">
                    <li v-for="i of sidebars" :key="i.menu">
                        <router-link to="counter">{{i.menu}}</router-link>
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
    export default {
        name: "Home",
        components : {Layout},
        data(){ //data : ()=>{
            return{
                sidebars :[
                    {menu: '쓰 기'},
                    {menu: '목 록'},
                    {menu: '검 색'},
                    {menu: '수 정'},
                    {menu: '삭 제'},
                    {menu: '회원 수'}
                ]

            }
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
    #title{width: 300px;margin: 0 auto}
    #login{margin-right: 50px; float: right}
    #join{margin-right: 50px; float: right}
    #footer{width: 300px; margin: 0 auto}
</style>
