 <template>
 <!-- Header -->
  <header class="main-header clearfix">
    <div class="row">
      <div class="col-sm-4"><a href="#" class="logo_sec">
        <p class="logo-name"><span><b>Device</b> Manager</span></p>
        <span class="logo"><img src="./../../assets/images/logo.png" class="img-responsive"></span> </a> </div>
      <div class="col-sm-8 text-right">
        <ul class="nav nav-pills pull-right">
          <li @click="emitOnRefresh()"><a href="#" v-bind:title="titleTool.refresh" v-tippy="{ placement : 'bottom',  theme: 'tool', duration: 500, arrow: true, size: 'large' }"><i class="fa fa-refresh"></i></a></li>
          <li role="presentation" class="dropdown"> <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" v-bind:title="titleTool.add" v-tippy="{ placement : 'bottom',  theme: 'tool', duration: 500, arrow: true, size: 'large' }"> <i class="fa fa-plus"></i> <span class="caret"></span> </a>
            <ul class="dropdown-menu">
              <li><a href="#" @click="Newgroup('openModal')">Add Group</a></li>
              <li><a href="#" @click="Newdevice('openModal')">Add Device</a></li>
            </ul>
          </li>
          <li role="presentation" class="dropdown"> <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" v-bind:title="titleTool.settings" v-tippy="{ placement : 'bottom',  theme: 'tool', duration: 500, arrow: true, size: 'large' }"> <i class="fa fa-gear"></i> <span class="caret"></span> </a>
            <ul class="dropdown-menu">
              <li><a href="#" @click="Newgroup('openModal')">Add Group</a></li>
              <li><a href="#" @click="Newdevice('openModal')">Add Device</a></li>
            </ul>
          </li>
          <li role="presentation" class="dropdown"> <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" v-bind:title="titleTool.account" v-tippy="{ placement : 'bottom',  theme: 'tool', duration: 500, arrow: true, size: 'large' }"> {{name}} <span class="caret"></span> </a>
            <ul class="dropdown-menu">
              <li><a href="#" @click="Newgroup('openModal')">Add Group</a></li>
              <li><a href="#" @click="Newdevice('openModal')">Add Device</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="modal-addGroup">
      <modal name="add-group">
          <header class="modal-header">
            <slot name="header">
              <h4>Create New Group
              <button type="button" class="btn btn-close" @click="close('add-group')"><i class="fa fa-times"></i></button></h4>
            </slot>
          </header>
          <section class="modal-body">
            <slot name="body">
              <label>Please enter the name of the new group.</label>
              <input name="name" v-model="grpname"  type="text" class="form-control">
            </slot>
          </section>
          <footer class="modal-footer">
              <slot name="footer">
                <button type="button" class="btn-success btn" @click="Newgroup('addGroup')">Add</button>
                <button type="button" class="btn-default btn" @click="close('add-group')">Close me!</button>
            </slot>
          </footer>
      </modal>
      <modal name="add-device">
          <header class="modal-header">
            <slot name="header">
           <h4>Create New Device
              <button type="button" class="btn btn-close" @click="close('add-device')"><i class="fa fa-times"></i></button>
          </h4>  </slot>
          </header>
          <section class="modal-body">
            <slot name="body">
              <label>Please enter the name of the new device.</label>
              <input name="name" v-model="grpname"  type="text" class="form-control">
            </slot>
          </section>
          <footer class="modal-footer">
              <slot name="footer">
                <button type="button" class="btn-success btn" @click="Newdevice('addDevice')">Add</button>
                <button type="button" class="btn-default btn" @click="close('add-device')">Close me!</button>
            </slot>
          </footer>
      </modal>
      </div>
    </div>
    <!-- <ContextMenus ref="call"></ContextMenus> -->
  </header>
<!-- End Header -->
</template>
<script>
// import ContextMenus from './Custom/ContextMenu.vue'
export default {
  props: ['name'],
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      grpname: 'Group',
      titleTool: {}
    }
  },
  methods: {
    callContextFunction () {
      this.$refs.call.Newdevice()
    },
    emitOnRefresh () {
      this.$emit('Refresh', 'clicked on Refresh')
    },
    Newgroup (check) {
      if (check === 'openModal') {
        this.$modal.show('add-group')
      } else {
        let level = 'L2'
        let parent = 'uncategories'
        let check = this.CheckKey(this.grpname)
        // 10 means false 11 means true
        if (check === 10) {
          this.$store.commit('addStore', {level: level, name: this.grpname, parentnode: parent})
          this.$modal.hide('add-group')
        } else {
          this.$modal.hide('add-group')
          this.$modal.show('dialog', {
            title: 'Duplicate Name',
            input: '',
            text: 'The entered name is already in use.Please use a different one instead.',
            buttons: [
              {
                title: 'Ok',
                handler: () => {
                  this.$modal.hide('dialog')
                }
              }
            ]
          })
        }
      }
    },
    Newdevice (check) {
      if (check === 'openModal') {
        this.$modal.show('add-device')
      } else {
        let parentkey = 'uncategories'
        let check = this.CheckDevice(this.grpname)
        // 10 means false 11 means true
        if (check === 10) {
          this.$store.commit('addDevice', {
            parentkey: parentkey,
            name: this.grpname
          })
          this.$modal.hide('add-device')
        } else {
          this.$modal.hide('add-device')
          this.$modal.show('dialog', {
            title: 'Duplicate Name',
            input: '',
            text: 'The entered name is already in use.Please use a different one instead.',
            buttons: [
              {
                title: 'Ok',
                handler: () => {
                  this.$modal.hide('dialog')
                }
              }
            ]
          })
        }
      }
    },
    CheckDevice (namekey) {
      var check = 10
      let dataList = Object.values(this.$store.state.Device)
      dataList.forEach(element => {
        let levelList = Object.values(element)
        levelList.forEach(res => {
          if (namekey === res.name) {
            check = 11
          }
        })
      })
      return check
    },
    CheckKey (namekey) {
      var check = 10
      let dataList = Object.values(this.$store.state)
      dataList.forEach(element => {
        let levelList = Object.values(element)
        levelList.forEach(res => {
          if (namekey === res.name) {
            check = 11
          }
        })
      })
      return check
    },
    close (modelName) {
      this.$modal.hide(modelName)
    }
  },
  mounted () {
    this.titleTool = this.$store.state.Setting.toolTipTitle
    // console.log(this.titleTool)
  }
}
</script>
