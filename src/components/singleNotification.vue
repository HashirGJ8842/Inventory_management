<template>
  <div :class="getCardStyle(notification.type)" style="width: 100%">
      <div v-if="notification.type == 'issue'">
          <div class="card-header">{{ getCardHeader(notification.type) }}</div>
            <div class="card-body">
            <p class="card-text">{{ notification.body }}</p>
            <v-btn>Approve</v-btn>
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
        }
    }
} 
</script>

<style>

</style>