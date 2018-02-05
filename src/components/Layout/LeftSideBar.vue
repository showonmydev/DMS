<template>
<!-- left-side-bar -->
    <div class="left-sidebar-menu">
      <div class="top-list">
        <ul class="nav nav-tabs" role="tablist">
          <li role="presentation" class="active"><a href="#list" aria-controls="home" role="tab" data-toggle="tab">List</a></li>
          <li role="presentation"><a href="#map" aria-controls="profile" role="tab" data-toggle="tab">Map</a></li>
        </ul>
      </div>
      <div class="sidebar left tab-content">
        <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
        <div role="tabpanel" id="list" class="collapse navbar-collapse navbar-ex1-collapse active tab-pane">
          <ul class="nav navbar-nav side-nav">
            <li>
              <a href="#" class="active" data-toggle="collapse" data-target="#submenu-1"><i class="fa fa-fw fa-share-alt"></i> All <i class="fa fa-fw fa-angle-down pull-right"></i></a>
              <ul id="submenu-1" class="collapse">
                <li v-for="(list, key) in leftsidedata" v-bind:key="key">
                 <a href="#" data-toggle="collapse" v-bind:data-target="'#'+key"><i class="fa fa-fw fa-share-alt"></i> {{key}} <i class="fa fa-fw fa-angle-down pull-right"></i></a>
                  <ul v-bind:id="key" class="collapse">
                    <li v-for="(sublist, key1) in list" v-bind:key="key1">
                      <div class="checkbox">
                        <label>
                          <input type="radio" @click="DisplayData(key,key1)" name="checkbox">
                          {{key1}} </label>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
        <div id="map" class="tab-pane">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d56956.78256564693!2d80.9668914!3d26.8463475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1517484338666" width="100%" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['name'],
  name: 'LeftSideBar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      leftsidedata: []
    }
  },
  methods: {
    DisplayData (groupname, keyname) {
      this.$emit('emitLeftSideBarClick', groupname, keyname)
    }
  },
  beforeMount () {
    this.leftsidedata = this.$store.state.data
    console.log(this.leftsidedata)
  }
}
</script>
