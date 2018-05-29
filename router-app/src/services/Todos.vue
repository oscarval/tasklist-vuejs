<script>
import Vue from 'vue';
export default {
    name: 'Todos',
    list: {},
    methods: {
        getList(){
           return Vue.http.get("https://jsonplaceholder.typicode.com/todos");
        //    .then(data =>{
        //         console.log("first");
        //         this.list = data.json();
        //     }, error => {
        //         console.error(error);
        //     });
        }
    }
}
</script>
