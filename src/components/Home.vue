<template>
  <div class="Dashboard">
    <div class="wrapper" style="height: auto; min-height: 100%;">
        <Header name="Super Admin" @Refresh="emitRefreshClickEvent"></Header>
        <div class="row_sec">
          <LeftSideBar @emitLeftSideBarClick="emitLeftSideBarClickEvent"></LeftSideBar>
          <MainContainer :tablegroup="tablegroup" :tablegroupid="groupid" @emitTableRowClick="emitTableRowClickEvent"></MainContainer>
          <RightSideBar :TableRowData="rightSidebar"></RightSideBar>
      </div>
    </div>
  </div>
</template>
<style src="./../assets/css/style.css"></style>
<script>
import Header from './Layout/Header.vue'
import LeftSideBar from './Layout/LeftSideBar.vue'
import MainContainer from './Layout/MainContainer.vue'
import RightSideBar from './Layout/RightSideBar.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
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
    RightSideBar
  },
  methods: {
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
