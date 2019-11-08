<template>
  <div>
    <b-card>
      <div class="content-detail-content-info">
        <div class="content-detail-content-info-left">
          <div class="content-detail-content-info-left-number">
              {{items.id}}
            <!-- {{contentId}} -->
          </div>
          <div class="content-detail-content-info-left-subject">
            {{items.subject}}
           
          </div>
        </div>
        <div class="content-detail-content-info-right">
          <div class="content-detail-content-info-right-user">
            글쓴이: {{items.nickname}}
          </div>
          <div class="content-detail-content-info-right-created">
            등록일: {{items.lastlogin}}
          </div>
        </div>
      </div>
      <div class="content-detail-content">
        {{items.content}}
      </div>
      <div class="content-detail-button">
        <b-button variant="primary" @click="updateData">수정</b-button>
        <b-button variant="success" @click="deleteData">삭제</b-button>
      </div>
      <div class="content-detail-comment">
        <!-- <CommentList :contentId="contentId"/> -->
      </div>
    </b-card>
  </div>
</template>

<script>
import data from "@/data";
import CommentList from './CommentList';

export default {
  name: "ContentDetail",
  components: {
      CommentList
  },
  created(){
      this.fetchUsers();
  },
  data() {
    const id = Number(this.$route.params.id);
    const data = this.items;
    return {
      id: id,
      items : []
    };
  },
  methods: {
    deleteData() {
      this.$http.delete(`/api/delete/${this.id}`)
        .then((res) =>{
            console.log("detail 값 : ",res.data)
            this.items = res.data
            console.log("디스 아이템 : ",this.items)
            console.log("아이템 내부 uid : "+this.items.uid)
              if(this.items == "OK"){
                console.info("OK안으로 들어옴");
                this.$router.push({
                path: '/board2'
              })
            }
        });
      const content_index = data.Content.findIndex(item => item.content_id === this.contentId);
      data.Content.splice(content_index, 1)
      
    },
    updateData() {
      
      this.$router.push({
        path: `/CommentCreate2/${this.id}`
      })
    },
    fetchUsers(){
        
        console.log("한번 찍어보자 : "+this.id)
        this.$http.get(`/api/helloUser/${this.id}`)
        .then((res) =>{
            console.log("detail 값 : ",res.data)
            this.items = res.data
            console.log("디스 아이템 : ",this.items)
            console.log("아이템 내부 uid : "+this.items.uid)
        });
    }
  }
};
</script>
<style scoped>
.content-detail-content-info {
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
}
.content-detail-content-info-left {
  width: 720px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
.content-detail-content-info-right {
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
.content-detail-content {
  border: 1px solid black;
  margin-top: 1rem;
  padding-top: 1rem;
  min-height: 720px;
}
.content-detail-button {
  border: 1px solid black;
  margin-top: 1rem;
  padding: 2rem;
}
.content-detail-comment {
  border: 1px solid black;
  margin-top: 1rem;
  padding: 2rem;
}
</style>
