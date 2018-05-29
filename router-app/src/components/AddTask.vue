<template>
  <div class="container">
    <div class="row padding">
      <div class="col-1">
        <button class="btn btn-secondary back" v-on:click="back">Back</button>
      </div>
    </div>
    <!-- Input by to search in the list -->
    <div class="input-group input-group-sm mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-sm">Title of task</span>
      </div>
       <input type="text" class="form-control" v-model="title" required placeholder="Enter title of task" />
    </div>
    <div>
      <button type="button" class="btn btn-primary" v-on:click="addTask">Add Task</button>
    </div>
  </div>
</template>

<script>
// Router
import router from '../router'

// Services
import Todos from '../services/Todos'

export default {
  name: 'addtask',
  data : {},
  list : [],
  data () {
    // Generate the data of use un view
    return {
      title: ""
    }
  },
  beforeMount(){
    // Before show all data, call to service to get list of items
    this.list = Todos.methods.getData();
    console.log(this.list);
  },
  methods: {
    // add task to list
    addTask: function (event){
      var obj = {
        completed : false,
        id : this.list.length,
        title: this.title,
        userId: 90
      }
      Todos.methods.addData(obj);
      router.go(-1);
    },
    back: function(){
      router.go(-1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  margin: auto;
}

a {
  color: #42b983;
}
.padding{
  padding: 10px;
}
</style>