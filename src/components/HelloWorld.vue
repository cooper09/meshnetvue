<template>
  <div class="hello">
 
    <chartjs-doughnut v-bind:labels="labels"
      v-bind:datasets="datasets.campaign"
      v-bind:option="option"
    ></chartjs-doughnut>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      //labels: ["NYC","Buffalo", "Syracuse","Albany","Rochester","Utica","Mount Vernon","Schenectady","New Rochelle","Yonkers"],
      labels: ["NYC","Buffalo", "Syracuse","Albany"],
      datasets: [
        {
          data: this.$store.getters.chartData,
          backgroundColor: ["Red","Yellow","Purple","Green", "Orange"]
        }
      ],
      option:{
        title: {
          display: true,
          position: "bottom", 
          text: "Top New York Metropolitan Responses by Regions"
        }//end title
      }//end option
    };//end return
  },//end data
  computed: {
    startData() {
                return this.$store.state.startData;
            }
        },//end computed
}//end export default
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
