<template>
  <div class="container">
    <div>
      <input v-model="paramSearch" name="paramSearch" type="text" v-on:keyup="searchTask"  placeholder="Search task" /> 
    </div>  
    <ul>
      <li v-for="todo in listFilter">
        <input type="checkbox" id="checkbox" v-model="todo.completed">
        <label for="checkbox">{{ todo.title }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
// Services
import Todos from '../services/Todos'

export default {
  name: 'tasklist',
  todos: {},
  listFilter: {},
  paramSearch: '',
  data () {
    return {
      todos: this.todos,
      paramSearch: this.paramSearch,
      listFilter: this.listFilter
    }
  },
  beforeMount(){
   Todos.methods.getList().then(data=>{
     data.json().then(resp=>{
       this.todos = data.body;
       this.listFilter = data.body;
     });
   });
  },
methods: {
  searchTask: function(event){
    this.listFilter =  this.todos.filter( (item) => {
      return item.title.toLowerCase().indexOf(this.paramSearch.toLowerCase()) != -1;
    });
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  margin: auto;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
  text-align: left;
}

a {
  color: #42b983;
}
</style>