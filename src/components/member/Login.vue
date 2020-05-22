<template>
    <div>
    <h2>로그인</h2>
        <div class="imgcontainer">
            <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" class="avatar">
        </div>

        <div class="container">
            <label></label>
            <input type="text" @keyup.enter="moveToPassword" v-model = "userid" placeholder="Enter Userid" name="userid" required>
            <h3>입력한 아이디 : {{userid}}</h3>
            <label></label>
            <input type="password" @keyup.enter="login" v-model = "password" placeholder="Enter Password" name="password" required>
            <h3>입력한 비번 : {{password}}</h3>
            <label>
                <input type="checkbox" checked="checked" name="remember"> Remember me
            </label>

            <button @click="login" type="submit">Login</button>

        </div>

        <div class="container" style="background-color:#f1f1f1">
            <button type="button" class="cancelbtn">Cancel</button>
            <span class="psw">Forgot <a href="#">password?</a></span>
        </div>
    </div>
</template>

<script>

    import {mapState} from 'vuex'
    export default {
        computed : {
            ...mapState(
                {fail: state => state.player.fail,
                    auth : state => state.player.auth
                }
            )
        },
        data(){
            return {
                userid:'',
                password : ''
            }
        },

        methods : {
            login(){
                alert('유저 아이디: '+this.userid)
                this.$store.dispatch('player/login',{playerId: '2000003', backNo: '40'})//어나니머스 함수
            }, // dispatch 방향 설정(액션의 player/login으로 방향)

            moveToPassword(){
                document.getElementById('password').focus() //$('#').val()

            }
        }
    }
</script>

<style scoped>
    form {border: 3px solid #f1f1f1;}

    input[type=text], input[type=password] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }

    button {
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
    }

    button:hover {
        opacity: 0.8;
    }

    .idinquiry {
        width: auto;
        padding: 10px 18px;
        background-color: #4CAF50;
    }
    .pwinquiry {
        width: auto;
        padding: 10px 18px;
        background-color: #4CAF50;
    }
    .join {
        width: auto;
        padding: 10px 18px;
        background-color: #4CAF50;
    }

    .imgcontainer {
        text-align: center;
        margin: 24px 0 12px 0;
    }

    img.avatar {
        width: 40%;
        border-radius: 50%;
    }

    .container {
        padding: 16px;
    }

    span.psw {
        float: right;
        padding-top: 16px;
    }


    @media screen and (max-width: 300px) {
        span.psw {
            display: block;
            float: none;
        }
        .cancelbtn {
            width: 100%;
        }
    }
</style>