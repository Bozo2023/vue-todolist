const {
    createApp
} = Vue
createApp({
    data(){
        return {
            newTask:{
                text:'',
                done:false
                },
            tasks:[
               {
                text:'fare i compiti',
                done:true
               } ,
               {
                text:'fare la spesa',
                done:true
               },
               {
                text:'pulire casa',
                done:true
               }
 
            ]
        } 
    },
    created(){
         
    },
    methods: {
        addTask(){

            if(this.newTask !== ''){
                this.tasks.push(this.newTask)
            }
            this.newTask = ''
        },
        removeTask(index){
            this.tasks.splice(index,1)
        }
    }
} ).mount('#app')