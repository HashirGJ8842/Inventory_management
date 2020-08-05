<template>
  <div :class="getCardStyle(notification.type)" style="width: 100%">
      <div v-if="notification.type == 'issue'">
          <div class="card-header">{{ getCardHeader(notification.type) }}</div>
            <div class="card-body">
            <p class="card-text">{{ notification.body }}</p>
            <v-btn @click="agreedClickHandler(notification.email)">Approve</v-btn>
            <v-btn @click="rejectedClickHandler(notification.email)">Reject</v-btn>
            </div>
            <div class="card-footer">{{ notification.name }}</div>
      </div>
      <div v-else>
          <div class="card-header">{{ getCardHeader(notification.type) }}</div>
        <div class="card-body">
        <p class="card-text">{{ notification.body }}</p>
        </div>
        <div class="card-footer">{{ notification.name }}</div>
      </div>
  </div>
</template>

<script>
import { db } from '../main'
export default {
    props: ['notification'],
    methods: {
        getCardStyle(type)
        {
            if(type == "issue")
            {
                return "card text-white bg-secondary mb-3"
            }
            if(type == "stock")
            {
                return "card text-white bg-danger mb-3"
            }
            if(type == "change")
            {
                return "card text-white bg-primary mb-3"
            }
            if(type == "info-agreed")
            {
                return "card text-white bg-success mb-3"
            }
            if(type == "info-rejected")
            {
                return "card text-white bg-danger mb-3"
            }
        },
        getCardHeader(type)
        {
            return `Notification for :- ${type.charAt(0).toUpperCase() + type.slice(1)}`
        },
        agreedClickHandler(email)
        {
            db.ref('notification').push({
            Name: this.$store.state.user.displayName,
            Email: this.$store.state.user.email,
            Body: `${this.$store.state.user.displayName} has agreed to the booking.`,
            Type: 'info-agreed'
          })
        window.Email.send({
            SecureToken : "516b8123-d120-42df-9bc2-de17edd0f342",
            To : email,
            From : "abc@example.com",
            Subject : "You can issue your item, your request was accepted",
            Body : "<html><h2>Header</h2></html>"
        })
        this.$router.push({name: 'JC'})
        },
        rejectedClickHandler(email)
        {
            db.ref('notification').push({
            Name: this.$store.state.user.displayName,
            Email: this.$store.state.user.email,
            Body: `${this.$store.state.user.displayName} has rejected to the booking.`,
            Type: 'info-rejected'
          })
        window.Email.send({
            SecureToken : "516b8123-d120-42df-9bc2-de17edd0f342",
            To : email,
            From : "abc@example.com",
            Subject : "Sorry, You can't issue your item right now.",
            Body : "<html><h2>Request rejected</h2></html>"
        })
          this.$router.push({name: 'JC'})
        }
    }
} 
</script>

<style>

</style>