<template>
  <div>
    <b-input v-model="subject" placeholder="제목을 입력해 주세요"></b-input>
    <b-form-textarea
      v-model="context"
      placeholder="내용을 입력해 주세요"
      rows="3"
      max-rows="6"
    ></b-form-textarea>
    <b-button @click="updateMode ? uploadContent() : uploadContent()">저장</b-button>
    <b-button @click="cancle">취소</b-button>
  </div>
</template>
<script>
import data from '@/data'
export default {
  name: 'Create',
  data() {
    return {
      subject: '',
      context: '',
      updateMode: this.$route.params.id > 0 ? true : false
    }
  },
  created(){
    const id = Number(this.$route.params.id)
    this.$http.get(`/api/helloUser/${id}`)
    .then(res=>{
      this.result = res.data
      console.log("result : ",this.result.subject)
      if(this.$route.params.id >0){
        console.log("여기까지 들어왔다.")
        this.subject = this.result.subject
        this.context = this.result.content
      }
    })
  },
  
  methods: {
    uploadContent() {
      
      console.log("궁금하네: ?" +this.subject+"이것도?"+this.context)
      this.$http.post("/api/create",
      {content : this.context, subject : this.subject})
      .then(res =>{
        this.result = res.data
        console.log("리설트 ok 아닌가 "+this.result )
        if(this.result === "OK"){
          console.log("여기 안으로 들어왔다!!");
          this.$router.push({
            path: '/Board2'
          })
        }
      })
    },
    updateContent() {
      // this.$http.pust(`/api/`)

      this.$router.push({
        path: '/board/free/'
      })
    },
    cancle() {
      this.$router.push({
        path: '/Board2'
      })
    }
  }
}
</script>