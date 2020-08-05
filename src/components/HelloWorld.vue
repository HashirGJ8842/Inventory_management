<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          {{message}}
        </h1>
        <div v-if="show">
          <v-btn @click="authentication">
            Sign In
          </v-btn>
        </div>
        <div v-else>
          <h6>Redirecting you to Item's section shortly...</h6>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { authenticate, provider, db } from '../main.js'
  export default {
    name: 'HelloWorld',
    data: () => ({
      user: {},
      admin: false,
      message: "Inventory Management App",
      show: true
    }),
    beforeMount() {
      this.getUser()
    },
    methods: {
      authentication() {
        authenticate.signInWithRedirect(provider);
      },
      async getUser() {
        var snapshot = await authenticate.getRedirectResult()
        var Ref = await db.ref('admins')       
        this.user = snapshot.user
        if(this.user)
        {
          var User = this.user
          var admin = false
          this.$store.commit('setUser', User)
          Ref.on('value', function(snapshot){
            for(const i in snapshot.val())
            {
              console.log(User.uid)
              console.log(snapshot.val()[i])
              if(snapshot.val()[i] == User.uid)
              {
                console.log('True')
                admin = true
              }
            }
          })
          setTimeout(() => {
            this.$store.commit('setAdmin', admin)
          if(this.$store.state.admin == true)
          {
            this.message = "Welcome admin"
            this.show = false
            setTimeout(() => {
            this.$router.push({name: 'JC'})
          }, 4000);
          }
          if(this.$store.state.admin == false)
          {

            this.message = "Welcome User"
            this.show = false
            setTimeout(() => {
            this.$router.push({name: 'Members'})
          }, 4000);
          }
          }, 4000)
          console.log(admin)
          
        }
      }
    }
  }
</script>
