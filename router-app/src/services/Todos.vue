<script>
import Vue from 'vue';
export default {
    name: 'Todos',
    /*
    Create a method getList to call to api and receive the data.
    */
    methods: {
        getList(){
           return Vue.http.get("https://jsonplaceholder.typicode.com/todos");
        }
    }
}
</script>
