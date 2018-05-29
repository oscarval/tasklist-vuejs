<script>
import Vue from 'vue';
export default {
    name: 'Todos',
    list: {},
    /*
    Create a method getList to call to api and receive the data.
    */
    methods: {
        // get data of api
        getList(){
           return Vue.http.get("https://jsonplaceholder.typicode.com/todos").then(resp=>{
               this.list = resp.body;
               return resp.body;
           });
        },
        // get all data of memory
        getData(){
            return this.list;
        },
        // add object to list
        addData(obj){
            this.list.push(obj);
        }

    }
}
</script>
