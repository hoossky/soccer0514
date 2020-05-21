<template>
    <div id="wrapper">
    <header>
        <slot name ="header"
                :title="title"
                :login="login"
                :join="join"
                :mypage="mypage"
                :logout="logout"></slot>
    </header>
    <aside id="sidebar">
        <slot name="sidebar"></slot>
    </aside>
    <section id="content">
        <slot name="content"></slot>

    </section>
    <footer>
        <slot name="footer"
                :footer="footer"></slot>
    </footer>
    </div>
</template>

<script>
    export default {
        name: "Layout",
        data(){
            return{
                title : '축구 정보 시스템',
                login : '로그인',
                join : '회원 가입',
                content : '축구 경기 일정 검색',
                footer : '(사)축구선수협회',
                mypage : '마이페이지',
                logout : '로그아웃'
            }
        }
    }
</script>

<style scoped>
    #wrapper {
        padding: 5px;
        width: 960px;
        margin: 20px auto;
    }
    header {
        height: 100px;
        padding: 0 15px;
    }
    #content {
        width: 696px;
        float: left;
        padding: 5px 15px;
        min-height: 300px;
    }
    #sidebar {
        width: 200px;
        padding: 5px 15px;
        float: left;
    }
    footer {
        clear: both;
        padding: 0 15px;
    }

    @media screen and (max-width: 980px) {
        #pagewrap {
            width: 94%;
        }
        #content {
            clear: both;
            padding: 1% 4%;
            width: auto;
            float: none;
        }
        #sidebar {
            clear: both;
            padding: 1% 4%;
            width: auto;
            float: none;
        }
        header, footer {
            padding: 1% 4%;
        }
    }

    #content {
        background: #f8f8f8;
    }
    #sidebar {
        background: #f0efef;
    }
    header, #content, #middle, #sidebar {
        margin-bottom: 5px;
    }
    #pagewrap, header, #content, #middle, #sidebar, footer {
        border: solid 1px #ccc;
    }

</style>