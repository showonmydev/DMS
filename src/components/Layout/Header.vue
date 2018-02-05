 <template>
 <!-- Header -->
  <header class="main-header clearfix">
    <div class="row">
      <div class="col-sm-4"><a href="#" class="logo_sec">
        <p class="logo-name"><span><b>Device</b> Manager</span></p>
        <span class="logo"><img src="../../assets/images/logo.png" class="img-responsive"></span> </a> </div>
      <div class="col-sm-8 text-right">
        <ul class="nav nav-pills pull-right">
          <li @click="emitOnRefresh()"><a href="#"><i class="fa fa-refresh"></i></a></li>
          <li role="presentation" class="dropdown"> <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i class="fa fa-plus"></i> <span class="caret"></span> </a>
            <ul class="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </li>
          <li role="presentation" class="dropdown"> <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i class="fa fa-gear"></i> <span class="caret"></span> </a>
            <ul class="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </li>
          <li role="presentation" class="dropdown"> <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> {{name}} <span class="caret"></span> </a>
            <ul class="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </header>
<!-- End Header -->
</template>
<script>
export default {
  props: [
    'name'
  ],
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    emitOnRefresh () {
      this.$emit('Refresh', 'clicked on Refresh')
    }
  }
}
</script>
