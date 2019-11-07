<template>
  <div class="hello">
    Chart goes here...
    <chartjs-doughnut v-bind:labels="labels"
      v-bind:datasets="datasets"
      v-bind:option="option"
    ></chartjs-doughnut>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      labels: ["apples","peaches", "pumpkin pie"],
      datasets: [
        {
          data: [20,30,50],
          backgroundColor: ["Red","Yellow","Purple"]
        }
      ],
      option:{
        title: {
          display: true,
          position: "bottom", 
          text: "Fruits"
        }//end title
      }//end option
    };//end return
  }//end data
}//end export default
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
