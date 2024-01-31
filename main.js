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
            const task={
                ...this.newTask
            }

            if(this.newTask !== ''){
                this.tasks.unshift(this.newTask)
            }
            this.newTask = ''
        },
        removeTask(index){
            this.tasks.splice( index , 1)
        },
        checkText(index){
            this.tasks[index].done = !this.tasks[index].done
        }
    }
} ).mount('#app')