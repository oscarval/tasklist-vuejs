<template>
  <div class="container">
    <!-- Input by to search in the list -->
    <form>
      <label for="">
    </form>
  </div>
</template>

<script>
// Services
import Todos from '../services/Todos'

export default {
  name: 'addtask',
  data : {},
  list : {},
  data () {
    // Generate the data of use un view
    return {
      data: this.data,
      list: this.list
    }
  },
  methods: {
    // add task to list
    addTask: (event)=>{

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
</style>