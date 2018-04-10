<template>
  <div>
    <div v-bind:style="StyleContext" class="contextMenu">
      <a href="javascript:;" v-show='contextDisplaySetting.ShowHideColumn' @click="ShowHideColumn">Show/HideColumn</a>
      <a href="javascript:;" v-if='!contextDisplaySetting.ShowHideColumn' v-show='contextDisplaySetting.ExpandCollapse' @click="ExpandCollapse">Expand (Collapse)</a>
      <a href="javascript:;" v-show='contextDisplaySetting.Expand' @click="Expand">Expand (Collapse)</a>
      <a href="javascript:;" v-show='contextDisplaySetting.Newdevice' @click="Newdevice">New device</a>
      <a href="javascript:;" v-show='contextDisplaySetting.Newgroup'  @click="Newgroup">New group</a>
      <a href="javascript:;" v-show='contextDisplaySetting.Rename' @click="Rename('context')">Rename</a>
      <a href="javascript:;" v-show='contextDisplaySetting.Delete' @click="Delete">Delete</a>
      <a href="javascript:;" v-if='!contextDisplaySetting.ShowHideColumn' v-show='this.$store.state.Setting.context' @click="ExpandAll">Expand all</a>
      <a href="javascript:;" v-if='!contextDisplaySetting.ShowHideColumn' v-show='!this.$store.state.Setting.context' @click="CollapseAll">Collapse all</a>
    </div>
    <div class="ContextModel">
      <div class="inside-ContextModel">
      <modal name="add-new-group">
          <header class="modal-header">
            <slot name="header">
              <h4>Create New Group
              <button type="button" class="btn btn-close" @click="close('add-new-group')"><i class="fa fa-times"></i></button></h4>
            </slot>
          </header>
          <section class="modal-body">
            <slot name="body">
              <label>Please enter the name of the new group.</label>
              <input name="name" v-model="name"  type="text" class="form-control">
            </slot>
          </section>
          <footer class="modal-footer">
              <slot name="footer">
                <button type="button" class="btn-success btn" @click="Add">Add</button>
                <button type="button" class="btn-default btn" @click="close('add-new-group')">Close me!</button>
            </slot>
          </footer>
      </modal>
      <modal name="add-new-device">
          <header class="modal-header">
            <slot name="header">
           <h4>   Create New Device
              <button type="button" class="btn btn-close" @click="close('add-new-device')"><i class="fa fa-times"></i></button>
          </h4>  </slot>
          </header>
          <section class="modal-body">
            <slot name="body">
              <label>Please enter the name of the new device.</label>
              <input name="name" v-model="name"  type="text" class="form-control">
            </slot>
          </section>
          <footer class="modal-footer">
              <slot name="footer">
                <button type="button" class="btn-success btn" @click="AddDevice">Add</button>
                <button type="button" class="btn-default btn" @click="close('add-new-device')">Close me!</button>
            </slot>
          </footer>
      </modal>
      <modal name="rename">
          <header class="modal-header">
            <slot name="header">
            <h4>  Rename
              <button type="button" class="btn btn-close" @click="close('rename')"><i class="fa fa-times"></i></button>
          </h4>  </slot>
          </header>
          <section class="modal-body">
            <slot name="body">
            <label>Please Enter New Name</label>
            <input name="name" v-model="name"  type="text" class="form-control">
            </slot>
          </section>
          <footer class="modal-footer">
              <slot name="footer">
                <button type="button" class="btn-success btn" @click="Rename('rename')">Rename</button>
                <button type="button" class="btn-default btn" @click="close('rename')">Close me!</button>
            </slot>
          </footer>
      </modal>
      </div>
      <v-dialog/>
    </div>
  </div>
</template>
<script>
import { EventBus } from './../../EventBus/event-bus.js'
import $ from 'jQuery'
export default {
  props: ['StyleContext', 'clickTarget', 'contextDisplaySetting', 'ActionData'],
  name: 'ContextMenu',
  data () {
    return {
      collaps: false,
      msg: 'Welcome to Your Vue.js App',
      name: 'Group'
    }
  },
  methods: {
    ExpandCollapse () {
      let target = this.ActionData.data.groupkey
      $('#' + target + '1').click()
    },
    ShowHideColumn () {
      // this is use for communicate child to child component
      EventBus.$emit('communicateAllChildToChild', '0')
    },
    Expand (event) {
      console.log(event)
      // this.$modal.show("hello-world");
      return true
    },
    Add () {
      let level = this.ActionData.data.level
      let parent = this.ActionData.data.groupkey
      let check = this.CheckKey(this.name)
      if (level === 'L6') {
        this.$modal.hide('add-new-group')
        this.$modal.show('dialog', {
          title: 'Message',
          input: '',
          text: 'Sorry you can not create group. you are in level 6',
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
      // console.log('check')
      // console.log(check)
      // 10 means false 11 means true
      if (check === 10) {
        this.$store.commit('addStore', {level: level, name: this.name, parentnode: parent})
        this.$modal.hide('add-new-group')
        this.$modal.show('dialog', {
          title: 'Message',
          input: '',
          text: 'Group has been added Successfully',
          buttons: [
            {
              title: 'Ok',
              handler: () => {
                this.$modal.hide('dialog')
              }
            }
          ]
        })
      } else {
        this.$modal.hide('add-new-group')
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
    },
    AddDevice () {
      let parentkey = this.ActionData.data.groupkey
      let check = this.CheckDevice(this.name)
      // 10 means false 11 means true
      if (check === 10) {
        this.$store.commit('addDevice', {'parentkey': parentkey, 'name': this.name})
        this.$modal.hide('add-new-device')
        this.$modal.show('dialog', {
          title: 'Message',
          input: '',
          text: 'Device has been added Successfully',
          buttons: [
            {
              title: 'Ok',
              handler: () => {
                this.$modal.hide('dialog')
              }
            }
          ]
        })
      } else {
        this.$modal.hide('add-new-device')
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
    },
    Newdevice (event) {
      this.$modal.show('add-new-device')
    },
    Newgroup (event) {
      this.$modal.show('add-new-group')
    },
    close (modelName) {
      this.$modal.hide(modelName)
    },
    DuplicateGroup (event) {
      // console.log(event);
      this.$modal.show('dialog', {
        title: 'Duplicate Name',
        input: '',
        text: 'label>The entered name is already in use.</label><br>Please use a diffrent one instead',
        buttons: [
          {
            title: 'OK',
            handler: () => {
              this.$modal.hide('dialog')
            }
          }
        ]
      })
      return false
    },
    Rename (event) {
      // console.log(this.ActionData.data)
      let type = this.ActionData.data.type
      let level = this.ActionData.data.level
      var groupkey = this.ActionData.data.groupkey
      var devicekey = this.ActionData.data.devicekey
      let key = this.ActionData.data.key
      if (event === 'context') {
        if (type === 'group') {
          this.name = groupkey
        } else {
          this.name = devicekey
        }
        this.$modal.show('rename')
      } else {
        if (type === 'group') {
          let check = this.CheckKey(this.name)
          this.$modal.hide('rename')
          if (check === 10) {
            let newName = this.name
            this.$store.commit('RenameGroup', {'level': level, 'name': newName, 'groupkey': groupkey})
          } else {
            this.$modal.hide('rename')
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
                }]
            })
          }
        } else {
          let check = this.CheckDevice(this.name)
          this.$modal.hide('rename')
          let devicekey = this.ActionData.data.devicekey
          if (check === 10) {
            let newName = this.name
            this.$store.commit('RenameDevice', {'level': level, 'name': newName, 'groupkey': groupkey, 'devicekey': devicekey, 'key': key})
          } else {
            this.$modal.hide('rename')
            this.$modal.show('dialog', {
              title: 'Duplicate Name',
              input: '',
              text: 'he entered name is already in use.Please use a different one instead.',
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
      }
      return true
    },
    Delete (event) {
      let level = this.ActionData.data.level
      let type = this.ActionData.data.type
      let key = this.ActionData.data.key
      // var groupkey = this.ActionData.data.groupkey
      var devicekey = this.ActionData.data.devicekey
      console.log(type)
      this.$modal.show('dialog', {
        title: 'Delete ' + type,
        input: '',
        text:
          '<label>' + type + '“' + devicekey + '” is going to be deleted.</label><br>This cannot be undone. Please confirm the action',
        buttons: [
          {
            title: 'Delete',
            handler: () => {
              if (type === 'group') {
                let groupkey = this.ActionData.data.groupkey
                this.$store.commit('DeleteStoreGroup', {'level': level, 'groupkey': groupkey})
                this.$modal.hide('dialog')
                alert('Deleted successfully')
              }
              if (type === 'device') {
                let groupkey = this.ActionData.data.groupkey
                let devicekey = this.ActionData.data.devicekey
                this.$store.commit('DeleteDevice', {'level': level, 'key': key, 'groupkey': groupkey, 'devicekey': devicekey})
                this.$modal.hide('dialog')
                alert('Deleted successfully')
              }
            }
          },
          {
            title: 'Cancel'
          }
        ]
      })
      return false
    },
    ExpandAll (event) {
      // console.log("yes")
      this.$store.state.Setting.context = false
    },
    CollapseAll (event) {
      // console.log("yes")
      this.$store.state.Setting.context = true
    },
    CheckKey (namekey) {
      var check = 10
      let dataList = Object.values(this.$store.state)
      dataList.forEach(element => {
        let levelList = Object.values(element)
        levelList.forEach(res => {
          // console.log(namekey)
          // console.log(res)
          if (namekey === res.name) {
            check = 11
          }
        })
      })
      return check
    },
    CheckDevice (namekey) {
      var check = 10
      let dataList = Object.values(this.$store.state.Device)
      // console.log('device')
      // console.log(dataList)
      dataList.forEach(element => {
        let levelList = Object.values(element)
        levelList.forEach(res => {
          if (namekey === res.name) {
            check = 11
          }
        })
      })
      return check
    }
  }
}
</script>
<style>
.contextMenu,.modal-addGroup{
  position: absolute;
  background: #ec6c00;
  z-index: 999;
  border-radius: 5px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
}
.contextMenu a {
  color: #fff;
  display: block;
  padding: 12px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.contextMenu a:hover {
  text-decoration: none;
  background: #fff;
  border-color: #ccc;
  color: #1e3250;
}
.ContextModel .btn-close,.modal-addGroup .btn-close,.modal-ShowHide .btn-close{
  float:right;
  background: none;
border: none;
    margin-top: -10px;
}
.ContextModel .fa{
  color:#b7b6b6;
}
.ContextModel .modal-body{
  padding: 25px 20px;
}
.inside-ContextModel .v--modal,.modal-ShowHide .v--modal{
  height: 265px!important;
}
 .modal-addGroup .v--modal{
  height: 240px!important;
}
.ContextModel label,.modal-addGroup label {
  text-transform:capitalize;
 color:#777;
 padding-bottom:10px;
}
.vue-dialog .dialog-content{padding: 0px;}
.vue-dialog .dialog-c-title{
      padding: 20px 20px;
    border-bottom: 1px solid #ddd;
}
.vue-dialog .dialog-c-text{
  padding: 20px 20px;
}
.collapse ul > li >ul> li{
  white-space:  nowrap;
  padding:0 0px 0 12px;
}
.sidebar{
  background:#EC6C00;
  }
  .modal-addGroup .tbl_callSetting{
margin-top: -10px;
  }
  .modal-ShowHide .modal-footer{
        float: left;
    width: 100%;
  }
  .tbl-title{padding:0px 0;font-weight:600;color:#fff;}
  .sidebar{width: 100%;height:550px;overflow-y: auto;}
  .main-right-sidebar .table-responsive {overflow-x: hidden;}
  /* .sidebar-collapse .content-wrapper{width:70%;} */
  .sidebar-collapse .content-wrapper .demo-content{overflow-x: auto;}
  .left-sidebar-menu .fa-angle-double-right{ padding-right: 5px;font-weight: 600; padding-left: 5px;}
  .table-head .pull-right{color: #fff;}
  .collapse ul > li >ul li span{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;}
  .collapse ul > li >ul li .fa{font-family: fontAwesome;}
</style>
