<template>
  <div id="app">
    {{posts}}
    <div v-for="post in posts" v-bind:key="post">
      <h1></h1>
      <p></p>
    </div>
    <button v-on:click="searchTerm">글 불러오기</button>
  </div>
</template>

<script>

export default {
  name: 'app',
  data: function () {
    return {
      posts: [],
      flag: false
    }
  },
  
  methods: {
    searchTerm: function () {
        
      this.$http.get(`/api/helloUser/1`)
      .then((result) => {
        console.log(result)
        console.log(result.config)
        console.log(result.data)
        this.posts = result.data
        console.log("post.length : "+this.posts.uid.length)
        
      })
    }
  },
  computed: {
    hasResult: function () {
    }
  },
}
</script>

