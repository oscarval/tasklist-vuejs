<template>
  <div class="container">
    <!-- Input by to search in the list -->
    <div>
      <input v-model="paramSearch" name="paramSearch" type="text" v-on:keyup="searchTask"  placeholder="Search task" /> 
    </div> 
    <div>
      <bottom v-on:click="addTask">Add Task</bottom>
    </div>
    <div> 
      <ul>
        <!-- Show the data in list -->
        <li v-for="todo in listFilter">
          <input type="checkbox" id="checkbox" v-model="todo.completed">
          <label for="checkbox">{{ todo.title }}</label>
        </li>
      </ul>
    </div>
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
    // Generate the data of use un view
    return {
      todos: this.todos,
      paramSearch: this.paramSearch,
      listFilter: this.listFilter
    }
  },
  beforeMount(){
    // Before show all data, call to service to get data of api
    Todos.methods.getList().then( (resp) => {
        this.todos =  Todos.methods.getData();
        this.listFilter = Todos.methods.getData();
        console.log(this.listFilter);
    });
  },
methods: {
  // method to search items in list if the value of input of paramSearch exist en the title of
  // item of list todo
  searchTask: function(event){
    this.listFilter =  this.todos.filter( (item) => {
      return item.title.toLowerCase().indexOf(this.paramSearch.toLowerCase()) != -1;
    });
  },
  addTask: function(event){
    
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