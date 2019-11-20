<template>
  <div class="col-md-8 col-md-offset-2">
        <div id="people">
            <v-client-table :data="tableData" :columns="columns">
                <template slot="edit" slot-scope="props">
                   <div>
                        <a class="fa fa-edit" :href="edit(props.row.id)">thing</a>
                    </div>
                </template>
            </v-client-table>
        </div>
    </div>
</template>

<script>
    import {ServerTable, ClientTable, Event} from 'vue-tables-2';
    import Vue from 'vue';
    import axios from 'axios';

    Vue.use(ClientTable, {
        perPage: 3
    }, false);

export default {
  methods: {
    edit: function(id){
	    return "#"
    }
  },//end methods
          data() {
            return {
                columns: ['edit', 'id','name','age', 'campaign'],
                tableData: [
                    {id:1, name:"John",age:"20"},
                    {id:2, name:"Jane",age:"24"},
                    {id:3, name:"Susan",age:"16"},
                    {id:4, name:"Chris",age:"55"},
                    {id:5, name:"Dan",age:"40"}
                ]
            };
        }//end data
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
}

.VuePagination__count {
    display:none;
}
</style>
