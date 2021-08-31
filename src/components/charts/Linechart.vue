<script>

  import { Line } from 'vue-chartjs';

  export default {

    mixins: [ Line ],
    props: {

        chartdata: {

            type: Object,
            default: null
        },
        options: {

            type: Object,
            default: null
        }
    },
    data() {

      return {


      };
    },
    mounted(){

      this.renderChart( this.chartdata, this.options );

    }
  };
</script>
