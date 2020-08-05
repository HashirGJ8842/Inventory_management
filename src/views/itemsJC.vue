<template>
    <div class="container">
        <h1 class="border-bottom m-4">Admin Section</h1>
        <div class="row">
            <div class="col-1">
            </div>
            <div class="col-6">
                <div class="m-4" v-for="item in items" :key="item.itemId">
                    <singleItem :item="item" :type="$route.params.type"/>
                </div>
            </div>
            <div class="col-1"></div>
            <div class="col-4">
                <Notif />
            </div>
        </div>
    </div>
</template>
<script>
import Notif from '../components/notification'
import { db } from '../main.js'
import singleItem from '../components/singleItem'
export default {
    components: {
        singleItem,
        Notif
    },
    data(){
        return{
            itemId: null,
            name: null,
            damaged: 0,
            total: 0,
            working: 0,
            items: [],
            factor: 1
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
            var itemsref = db.ref(`data/${this.$route.params.type}`);
            let item = [];
            itemsref.on('value', function(snapshot){
                for(const i in snapshot.val())
                {   
                    console.log(i)
                    var name = snapshot.val()[i].Name;
                    var total = snapshot.val()[i].Quantity;
                    var id = i;
                    item.push({
                        "itemId": id,
                        "Name": name,
                        "Total": total,
                    });
                }
            });
            this.items = item;
        },
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