<template>
  <div class="hello">
    <div class="container">

      <div class="column">
        <div
          class="item"
          v-for="item in 5"
        ></div>
      </div>
      <div class="column">
        <div
          class="item"
          v-for="item in 5"
        ></div>
      </div>
      <div class="column">
        <div
          class="item"
          v-for="item in 5"
        ></div>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data () {
            return {

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .hello{
    width: 100%;
    height: 100%;
    display: flex;
    .container{
      display: flex;
      flex: 1;
      overflow-x: hidden;
      overflow-y: auto;
      .column{
        display: flex;
        flex-flow: column nowrap;
        width: calc(100%/3);
        &:nth-child(1){
          background: black;
          display: flex;
          .item{
            background: red;
            padding: 8px;
            margin-bottom: 20px;
            height: 880px;
          }
        }
        &:nth-child(2){

          .item{
            background: bisque;
            padding: 8px;
            margin-bottom: 30px;
            height: 280px;
          }
        }
        &:nth-child(3){

          .item{
            background: aqua;
            padding: 8px;
            margin-bottom: 40px;
            height: 380px;
          }
        }
      }
    }
  }

</style>
