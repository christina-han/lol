<template>
  <div id="app">
    <div class="container">
      <h1>lol Champions skins cart</h1>
          <Table border ref="selection" :columns="columns" :data="data1">
            <template slot-scope="{ row }" slot="image">
              <img class="cover-fit" :src="row.image" alt="">
             </template>

            <template slot-scope="{ row }" slot="total">
              <span>{{computedTotal(row.price, row.count)}}</span>
             </template>

             <template slot-scope="{ index}" slot="action">
                <Button type="error" @click="remove(index)">Delete</Button>
             </template>
          </Table>

          <div class="footer">
            <h1>Total: {{total}}</h1>
            <p>
                <Button type="success" @click="submit()">Pay</Button>
            </p>
          </div>
          
          <!-- <Button @click="handleSelectAll(true)">Set all selected</Button>
          <Button @click="handleSelectAll(false)">Cancel all selected</Button> -->
    </div>
  </div>
</template>


<script>
  import BigNumber from "bignumber.js";
    export default {
       name: 'App',
        data () {
            return {
                columns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: 'Number',
                        key: 'number',
                        type: 'index',
                    },
                    {
                        title: 'Image',
                        key: 'image',
                        slot: 'image',
                        width: 250,
                    },
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Price',
                        key: 'price'
                    },
                     {
                        title: 'Quantity',
                        key: 'count',
                        render: (h, params) => {
                          return h('div',[
                            h('InputNumber', {
                              props: {
                                max: 100,
                                min: 0,
                                value: params.row.count,
                              },
                              on: {
                                'on-change': (value) => {
                                  this.data1[params.index].count = value;
                                }
                              }
                            })
                          ])
                        }
                    },
                     {
                        title: 'Total Price',
                        slot: 'total'
                    },
                     {
                        title: 'Action',
                        key: 'action',
                        slot: 'action'
                    },
                ],
                data1: [
                    {
                        id: '0',
                        image: "/images/Irelia.jpg",
                        name: 'PROJECT: Irelia',
                        price: '43.65',
                        count: 0
                    },
                    {
                        id: '1',
                        image: '/images/Irelia2.jpg',
                        name: 'Aviator Irelia',
                        price: '76.63',
                        count: 0
                    },
                    {
                        id: '2',
                        image: '/images/Zilean.jpg',
                        name: 'Sugar Rush Zilean',
                        price: '43.65',
                        count: 0
                    },
                    {
                        id: '3',
                        image: '/images/Yuumi.jpg',
                        name: 'Battle Principal Yuumi',
                        price: '50.65',
                        count: 0
                    },
                    {
                        id: '4',
                        image: '/images/XinZhao.jpg',
                        name: 'Secret Agent Xin Zhao',
                        price: '83.25',
                        count: 0
                    },
                    {
                        id: '5',
                        image: '/images/Nunu.jpg',
                        name: 'Nunu & Willump',
                        price: '43.65',
                        count: 0
                    },
                    {
                        id: '6',
                        image: '/images/Lux.jpg',
                        name: 'Elementalist Lux',
                        price: '76.63',
                        count: 0
                    },
                    {
                        id: '7',
                        image: '/images/Gnar.jpg',
                        name: 'Super Galaxy Gnar',
                        price: '76.63',
                        count: 0
                    },
                   
                ]
            }
        },
        methods: {
            // handleSelectAll (status) {
            //     this.$refs.selection.selectAll(status);
            // },
            computedTotal(price, count){
              return new BigNumber(price).multipliedBy(count).toFixed(2);
            },
            remove(index){
               this.$Modal.confirm({
                    title: 'Hint',
                    content: '<p>Are you sure you want to delete this product？</p>',
                    onOk: () => {
                        this.$Message.info('Deleted');
                        this.data1.splice(index, 1);
                    },
                    onCancel: () => {
                        // this.$Message.info('cancel delete');
                    }
                });
              
            },
            submit(){
              const req = this.data1.map(item => ({id: item.id, count: item.count}));
              console(req)
            }
        },
        computed: {
          total(){
            const num = this.data1.reduce((a, b) =>{
              return new BigNumber(a).plus(new BigNumber(b.count).multipliedBy(b.price));
            },0)
            return new BigNumber(num).toFixed(2);
          }
        }
    }
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    margin-top: 60px;
  }
  .container{
    width: 1200px;
    margin: 0 auto;
  }
  .cover-fit{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .footer{
    text-align: right;
    margin: 50px 0 100px 0;
  }
</style>
