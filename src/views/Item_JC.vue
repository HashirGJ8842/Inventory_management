<template>
    <div class="container">
        <h1 class="border-bottom m-4">Admin's Section</h1>
        <div class="row">
            <div class="col-lg-1">
            </div>
            <div class="col-lg-6">
                <div class="m-4" v-for="name in names" :key="name.id">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title" style="display: flex; align-items: left">{{ name.name }}</h5>
                            <div style="align-items: center"> 
                                <router-link :to="redirect(name.id)" style="text-decoration: none; color: white; align-items: right"><a class="btn btn-primary">Book from here</a></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-1"></div>
            <div class="col-lg-4">
                <Notif />          
            </div>
        </div>
    </div>
</template>
<script>
import Notif from '../components/notification'
import { db } from '../main.js'
export default {
    components: {
        Notif
    },
    data(){
        return{
            show: false,
            itemId: null,
            name: null,
            damaged: 0,
            total: 0,
            working: 0,
            names: [],
            factor: 1,
        }
    },
    mounted(){
        this.getItems()
        this.check()
    },
    created(){
        this.check()
    },
    methods:{
        check(){
            if(!this.$store.state.admin)
            {
                this.$router.push({name: 'Home'}).catch(() => {})
            }
        },
        async getItems()
        {
            /* eslint-disable */
            var itemsref = db.ref('data');
            let name = [];
            itemsref.on('value', function(snapshot){
                for(const i in snapshot.val())
                {
                    name.push({
                        id: i,
                        name: snapshot.val()[i].name}
                        );
                }
            });
            this.names = name;
        },
        redirect(id)
        {
            return `ItemJC/${id}`
        }
        /*writeUserData() {
        db.ref(this.itemId).set({
            name: this.name,
            damaged: this.damaged,
            total: this.total,
            working: this.total - this.damaged,
        });
    }*/
    }
}
</script>
<style scoped>

</style>