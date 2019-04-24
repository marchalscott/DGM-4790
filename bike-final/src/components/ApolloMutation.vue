<template>
  <div class="about">
      {{error}}
      {{returnedItem}}
        <v-container>
          <v-flex xs12>
            <v-text-field v-model="item.myVarOne" label="My Var" required></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-checkbox v-model="item.myBoolOne" label="My Bool" required></v-checkbox>
          </v-flex>
      <v-btn @click="submitCreate()">Create</v-btn>
        </v-container>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  data: () => ({
    error: "",
    item: {
      myVarOne: "",
      myBoolOne: Boolean
    },
    returnedItem: {}
  }),
  methods: {
    submitCreate: function() {
      this.$apollo.mutate({
          mutation: gql`
            mutation createOne(
              $myVarOne: String
              $myBoolOne: Boolean
            ) {
              createItem(
                data: {
                  myVarOne: $myVarOne,
                  myBoolOne: myBoolOne
                }
              ) {
                myVarOne,
                myBoolOne
              }
            }
          `,
          variables: {
            myVarOne: this.item.myVarOne,
            myBoolOne: this.item.myBoolOne,
          }
        })
        .then(res => {
          this.returnedItem = res.data;
        })
        .catch(err => {
          this.error = err;
        });
    }
  }
};
</script>
