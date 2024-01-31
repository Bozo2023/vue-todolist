const {
    createApp
} = Vue
createApp({
    data(){
        return {
            newTask:'',
            tasks:[
                'fare i compiti', 
                'fare la spesa',
                'pulire casa'
            ]
        } 
    },
    create(){
        console.log('ciao')
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