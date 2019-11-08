<template>
  <div>
    <!-- <ul>
      <li v-for="item in items">{{item}}</li>
    </ul> -->


    <b-table striped hover :items="items" :per-page="perPage" :current-page="currentPage" :fields="fields" @row-clicked="rowClick"></b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      align="center"
    ></b-pagination>
    <b-button @click="writeContent">글쓰기</b-button>
    <!-- <b-button @click="writeContent">글쓰기</b-button> -->

<!-- 
    <li v-for="item in items">
      {{item}}. <input type="text" v-model="item.uid">
      <button @click.prevent="saveReply(item)">Save</button>
    </li> -->
  </div>
  
</template>

<script>
  export default {
    

    created(){
      this.fetchUsers();
    },
    data() {
      return {
        currentPage:1,
        perPage: 10,
        fields: [
          {
            key: 'id',
            label: '글번호'
          },
          {
            key: 'subject',
            label: '제목'
          },
          {
            key: 'nickname',
            label: '이름'
          },
          {
            key: 'email',
            label: '이메일'
          },
          {
            key: 'lastlogin',
            label: '작성시간'
          },
        ],
        items:[]
      }
    },
    computed: {
      rows(){
        return this.items.length
      }

    },
    methods:{
      fetchUsers(){
        this.$http.get("/api/helloUser")
        .then((res) =>{
          // console.log("users.res>>"+JSON.stringify(res.data))
          this.items = res.data;
          // console.log("items : ",this.items.data)
        });
      },
      rowClick(item, index, e){
        this.$router.push({
          
          path:`/ContentDetail2/${item.id}`
        })
        console.log("확인해보자 : ",item.id);
      },
      writeContent() {
      this.$router.push({
        path: '/commentCreate2'
      })
    }
    }
  }
</script>
<style>
.pagination{
  margin-bottom: 10px;
}
</style>