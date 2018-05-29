<template>
  <div class="container">
    <!-- Input by to search in the list -->
    <div class="row padding">
      <div class="input-group mb-3">
        <input type="text" class="form-control" v-model="paramSearch" name="paramSearch" v-on:keyup="searchTask"  placeholder="Search task" /> 
      </div>
    </div> 
    <!-- Button for add task -->
    <div class="row padding">
      <div class="col-4 offset-8">
        <button type="button" class="btn btn-primary" v-on:click="addTask">Add Task</button>
      </div>
    </div>
    <div class="row "> 
      <div class="col-12">
        <ul class="list-group">
          <!-- Show the data in list -->
          <li class="list-group-item clearfix" v-for="(todo,index) in listFilter">
            <input type="checkbox" id="checkbox" v-model="todo.completed" v-on:click="markCompleted(index)">
            <label for="checkbox">{{ todo.title }}</label>
            <span class="pull-right button-group">
                <button v-on:click="removeItem(index)" type="button" class="btn btn-danger remove"><span class="glyphicon glyphicon-remove"></span> Del</button>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

// Router
import router from '../router'


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
  // Add task in the list (call to page of AddTask)
  addTask: function(){
    router.push({ name: "AddTask" });
  },
  // remove item of list
  removeItem: function(index){
    this.todos.splice(index, 1);
  },
  // mark item like completed
  markCompleted(index){
    this.todos[index].completed = !this.todos[index].completed;
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
.remove{
  float:right;
}
.padding{
  padding: 10px;
}
</style>