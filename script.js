const { createApp } = Vue
    createApp({
        data() {
            return {
                selectedPage: 'Home',
                nextpg: '',
                status: 'LOCKED'
                
                 
            }
        },
        methods: {

            pgchanger(nextpg, returnHome){
                this.selectedPage = nextpg
                let vue = this
                
                if(returnHome){            
                    vue.selectedPage='Home'    
                }
            },
            
            flipper(){
                if (this.status == 'OPEN'){
                    this.status = 'LOCKED'
                    
                }
                else if (this.status == 'LOCKED'){
                    this.status = 'OPEN'
                    
                    
                }
            },

            

        },


            
       
    }).mount('#app')
