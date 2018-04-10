<template>
  <div class="Dashboard" @mousedown="ContextMenuDismissFunction1" v-on:click.left.prevent="ContextMenuDismissFunction">
    <div class="wrapper" style="height: auto; min-height: 100%;">
        <Header name="Super Admin" @Refresh="emitRefreshClickEvent"></Header>
        <div class="row_sec">
          <!--Here is maincontainer and rightsidebar wrap into single div-->
          <div class="WrapTo">
            <div class="lftbar" v-on:click.right.prevent="ContextMenuFunction" v-on:click.left.prevent="ContextMenuDismissFunction">
              <LeftSideBar :clickTarget="targetclick" @emitLeftSideBarClick="emitLeftSideBarClickEvent"></LeftSideBar>
            </div>
            <div class="centerBar" v-on:click.right.prevent="ContextMenuFunctionForTable" v-on:click.left.prevent="ContextMenuDismissFunction">
            <MainContainer :clickTarget="targetclick" :tablegroup="tablegroup" :tablegroupid="groupid" @emitTableRowClick="emitTableRowClickEvent"></MainContainer>
            </div>

            <RightSideBar :TableRowData="rightSidebar"></RightSideBar>
          </div>
          <!--END Here is maincontainer and rightsidebar wrap into single div-->
        </div>
    </div>
    <ContextMenu :StyleContext="context" :ActionData="contextData" :clickTarget="targetclick" :contextDisplaySetting="contextSetting"></ContextMenu>
  </div>
</template>
<style src="./../assets/css/style.css"></style>
<script>
import Header from './Layout/Header.vue'
import LeftSideBar from './Layout/LeftSideBar.vue'
import MainContainer from './Layout/MainContainer.vue'
import RightSideBar from './Layout/RightSideBar.vue'
import ContextMenu from './Layout/Custom/ContextMenu.vue'
import $ from 'jQuery'
export default {
  name: 'Home',
  data () {
    return {
      contextData: {},
      context: {'display': '', 'left': '', 'top': ''},
      contextSetting: {'ExpandCollapse': true, 'ShowHideColumn': false, 'Expand': false, 'Newdevice': true, 'Newgroup': true, 'Rename': false, 'Delete': false, 'ExpandAll': false, 'CollapseAll': false},
      targetclick: {},
      tablegroup: 'TPE01',
      groupid: 'TPE01D01',
      rightSidebar: [],
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Header,
    LeftSideBar,
    MainContainer,
    RightSideBar,
    ContextMenu
  },
  methods: {
    ContextMenuFunction (event) {
      let targetElement
      if (!event.target.dataset.type) {
        targetElement = $(event.target).parents('span')[0].dataset
      } else if (event.target) {
        targetElement = event.target.dataset
      }
      console.log(targetElement)
      // let parent_type=$(event.target).parents('span')[0];
      // console.log(parent_type.dataset.type)
      // console.log($(event).parents('li'))
      // console.log('Its ME')
      this.context.left = event.clientX + 'px'
      this.context.top = event.clientY + 'px'
      this.context.display = 'block'
      this.targetclick = event
      console.log('Its ME')
      if (targetElement.groupkey === 'uncategories' && targetElement.type === 'group') {
        this.contextSetting.ShowHideColumn = false
        this.contextSetting.Newdevice = false
        this.contextSetting.Newgroup = false
        this.contextSetting.Rename = false
        this.contextSetting.Delete = false
        this.contextSetting.Newdevice = true
        this.contextData = {'data': targetElement}
        return false
      }
      if (targetElement.type === 'group') {
        /* Here is the setting when user click on group I have display some extra context menu */
        this.contextSetting.ShowHideColumn = false
        this.contextSetting.Newdevice = true
        this.contextSetting.Newgroup = true
        this.contextSetting.Rename = true
        this.contextSetting.Delete = true
        this.contextData = {'data': targetElement}
        return false
      }
      if (targetElement.type === 'device') {
        /* Here is the setting when user click on group I have display some extra context menu */
        this.contextSetting.ShowHideColumn = false
        this.contextSetting.Newdevice = true
        this.contextSetting.Newgroup = false
        this.contextSetting.Rename = true
        this.contextSetting.Delete = true
        this.contextData = {'data': targetElement}
        return false
      }
      /* Here is the setting when user click on group I have display some extra context menu */
      // this.contextSetting.ShowHideColumn = false
      // this.contextSetting.Newdevice = false
      // this.contextSetting.Newgroup = false
      // this.contextSetting.Rename = false
      // this.contextSetting.Delete = false
      // this.contextData = {'data': event.target.dataset}
      // return false
    },
    ContextMenuFunctionForTable (event) {
      console.log(event)
      this.context.left = event.clientX + 'px'
      this.context.top = event.clientY + 'px'
      this.context.display = 'block'
      this.contextSetting.ShowHideColumn = true
      this.contextSetting.Newdevice = false
      this.contextSetting.Newgroup = false
      this.contextSetting.Rename = false
      this.contextSetting.Delete = false
      return false
    },
    ContextMenuDismissFunction (event) {
      this.targetclick = event
      this.context.display = 'none'
      return false
    },
    ContextMenuDismissFunction1 (event) {
      this.targetclick = event
    },
    emitRefreshClickEvent (value) {
      console.log(value)
    },
    emitLeftSideBarClickEvent (groupname, keyname) {
      this.tablegroup = groupname
      this.groupid = keyname
      alert('fdgh')
    },
    emitTableRowClickEvent (tableclickdata) {
      if (tableclickdata.length !== 0) {
        this.rightSidebar = tableclickdata[tableclickdata.length - 1]
      } else {
        this.rightSidebar = {'Deviceinfo': '', 'Status': ''}
      }
    }
  }
}
</script>
<style>
.WrapTo {
  width:100%
}
</style>
