<template>
    <div>
    <div>카운터: {{getCount}}</div>
        <button @click="increment">더하기</button>
        <br>
        <button @click="decrement">빼기</button>
        <br>
        <button @click="incrementIfOdd">홀수일 때만 증가</button>
        <br>
        <button @click="incrementAsync">1초 후에 자동 증가</button>

        <div>
            <div>최근 5개 값의 로그: {{recentHistory}}</div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex' //액션으로 시작 게터로 값을 가져와 끝남
    export default {
        computed: mapGetters([ // 자동으로 이루어지는 기능
            'getCount',
            'recentHistory'
        ]),
        methods: mapActions([  //내가 선택하는 기능
            'increment',  //키값
            'decrement',
            'incrementIfOdd',
            'incrementAsync'
        ])
    }
</script>

<style scoped>

</style>