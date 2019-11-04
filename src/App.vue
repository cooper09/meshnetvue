<template>
  <center><div class="col-md-8 col-md-offset-2 tables">
        <div id="people">
        <!--    <v-client-table :data="tableData" :columns="columns"> -->
                <v-client-table :data="startData" :columns="columns">
               <!--    <template slot="edit" slot-scope="props">
                <center><div>
                        <a class="fa fa-edit" :href="edit(props.row.id)">Multi-Line Facebook Ad Campaign</a>
                    </div></center> 
                </template> -->
            </v-client-table>
        </div>
    <!--    DEBUG: {{startData}} -->
    </div></center>
</template>

<script>
    import {ServerTable, ClientTable, Event} from 'vue-tables-2';
    import Vue from 'vue';
    import axios from 'axios';

    Vue.use(ClientTable, {
        perPage: 5
    }, false);

export default {
  methods: {
    edit: function(id){
	    return "#"
    }
  },//end methods
          data() {
            return {
                columns: ['Multiline Facebook Ads', 'timestamp','campaign','medium','source'],
                tableData: [
                    {id:1, name:"John",age:"20"},
                    {id:2, name:"Jane",age:"24"},
                    {id:3, name:"Susan",age:"16"},
                    {id:4, name:"Chris",age:"55"},
                    {id:5, name:"Dan",age:"40"}
                ]
            };
        },//end data
        computed: {
        startData() {
            return this.$store.state.startData;
        }
        },//end computed
        created() {
            this.$store.dispatch('getData');
        } //end created  */
}//end default
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 1em
}

.VuePagination__count {
    /*display:none; */
    color: blue;
}

.people {
    background: #aaa;
    padding: 1em;
}

.tables {
    margin-top: 2em;
}


</style>
