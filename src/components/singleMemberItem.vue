<template>
  <div :class="setAttribute(item.Total)">
  <div class="body">
    <h5 class="card-title">{{ item.Name }}</h5>
    <div v-if="show">
    <p class="card-text">Number of items:- {{ item.Total }}</p>
      <a @click="show = false" style="color: white" :class="setButtonAttribute(item.Total)">
        Book
        </a>
    </div>
    <div v-else>
        <p>Enter the number of items you want to book:-</p>
      <input class="form-control" v-model="value" :placeholder="setValue()" />
      <button @click="insideClickHandler()" style="color: white" :class="setButtonAttribute(item.Total)"> Save </button>
      <p class="text-muted"> This will notify other admins that the change is made. </p>
    </div>
  </div>
</div>
</template>

<script>
import { db } from '../main'
export default {
    props: ['item'],
    data: () => ({
      value: "",
      absolute: true,
      show: true
    }),
    created() {
      console.log("Came Here")
    },
    methods: {
      setValue()
      {
        return parseInt(this.$props.item.Total)
      },
      insideClickHandler()
      {
        console.log(this.$props.item.id)
        if(this.value)
        {
          db.ref('notification').push({
            Name: this.$store.state.user.displayName,
            Email: this.$store.state.user.email,
            Body: `${this.$store.state.user.displayName} wants to book ${this.value} ${this.$props.item.Name}'s from the inventory.`,
            Type: 'issue'
          })
        }
        console.log('saved')
        this.show = true
        this.$router.push({name: 'Members'})
      },
      setButtonAttribute(number)
      {
        if(number>=0&&number<=4)
        {
          return 'btn btn-danger'
        }
        if(number>4&&number<=9)
        {
          return 'btn btn-primary'
        }
        if(number>9)
        {
          return 'btn btn-success'
        }
      },
      setAttribute(number)
      {
        if(number>=0&&number<=4)
        {
          return 'danger'
        }
        if(number>4&&number<=9)
        {
          return 'primary'
        }
        if(number>9)
        {
          return 'success'
        }
      }
    }
}
</script>

<style scoped>
  .danger {
    border: solid darkred;
    color: darkred;
    background-color: rgb(255, 184, 184);
  }
  .success {
    border: solid darkgreen;
    color: darkgreen;
    background-color: rgb(211, 255, 184);
  }
  .primary {
    border: solid darkblue;
    color: darkblue;
    background-color: rgb(184, 255, 243);
  }
</style>