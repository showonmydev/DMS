<template>
  <div class="Dashboard" v-on:click.right.prevent="ContextMenuFunction" v-on:click.left.prevent="ContextMenuDismissFunction">
    <div class="wrapper" style="height: auto; min-height: 100%;">
        <Header name="Super Admin" @Refresh="emitRefreshClickEvent"></Header>
        <div class="row_sec">
          <LeftSideBar @emitLeftSideBarClick="emitLeftSideBarClickEvent"></LeftSideBar>
          <MainContainer :tablegroup="tablegroup" :tablegroupid="groupid" @emitTableRowClick="emitTableRowClickEvent"></MainContainer>
          <RightSideBar :TableRowData="rightSidebar"></RightSideBar>
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
export default {
  name: 'Home',
  data () {
    return {
      contextData: {},
      context: {'display': '', 'left': '', 'top': ''},
      contextSetting: {'Expand': false, 'Newdevice': true, 'Newgroup': true, 'Rename': false, 'Delete': false, 'ExpandAll': false, 'CollapseAll': false},
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
      console.log(event)
      this.context.left = event.clientX + 'px'
      this.context.top = event.clientY + 'px'
      this.context.display = 'block'
      this.targetclick = event
      if (event.target.dataset.target === '#submenu-1') {
        /* Here is the setting when user click on group I have display some extra context menu */
        this.contextSetting.ExpandAll = true
        this.contextSetting.Newdevice = true
        this.contextSetting.Newgroup = true
        this.contextSetting.Rename = false
        this.contextSetting.Delete = false
        this.contextSetting.ExpandAll = true
        this.contextSetting.CollapseAll = true
        this.contextData = {'place': 'random', 'groupId': '', 'childID': ''}
        return false
      }
      if (event.target.dataset.target) {
        let group = event.target.dataset.target.replace('#', '')
        /* Here is the setting when user click on group I have display some extra context menu */
        this.contextSetting.ExpandAll = true
        this.contextSetting.Newdevice = true
        this.contextSetting.Newgroup = false
        this.contextSetting.Rename = true
        this.contextSetting.Delete = true
        this.contextSetting.ExpandAll = true
        this.contextSetting.CollapseAll = true
        this.contextData = {'place': 'random', 'groupId': group, 'childID': ''}
        return false
      }
      if (event.srcElement.id) {
        let targetEl = event.srcElement.id
        let groupName = targetEl.split('/')[0]
        let groupItem = targetEl.split('/')[1]
        /* Here is the setting when user click on group I have display some extra context menu */
        this.contextSetting.ExpandAll = false
        this.contextSetting.Newdevice = true
        this.contextSetting.Newgroup = false
        this.contextSetting.Rename = true
        this.contextSetting.Delete = true
        this.contextSetting.ExpandAll = false
        this.contextSetting.CollapseAll = true
        this.contextData = {'place': 'random', 'groupId': groupName, 'childID': groupItem}
        console.log(groupName, groupItem)
        return false
      }
      /* Here is the setting when user click on group I have display some extra context menu */
      this.contextSetting.ExpandAll = false
      this.contextSetting.Newdevice = true
      this.contextSetting.Newgroup = true
      this.contextSetting.Rename = false
      this.contextSetting.Delete = false
      this.contextSetting.ExpandAll = false
      this.contextSetting.CollapseAll = false
      this.contextData = {'place': 'random', 'groupId': '', 'childID': ''}
      return false
    },
    ContextMenuDismissFunction (event) {
      console.log(event)
      this.context.display = 'none'
      return false
    },
    emitRefreshClickEvent (value) {
      console.log(value)
    },
    emitLeftSideBarClickEvent (groupname, keyname) {
      this.tablegroup = groupname
      this.groupid = keyname
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
