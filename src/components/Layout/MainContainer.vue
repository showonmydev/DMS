<template>
<div class="content-wrapper">
<div class="table-content">
  <div class="table-head clearfix">
    <div class="pull-left"> {{ tablegroup }} / </div>
    <div class="pull-right">1 Row Selected</div>
  </div>
  <el-table ref="singleTable" :data="getAllData" highlight-current-row border scroll @selection-change="handleSelectionChange" @current-change="handleCurrentChange" style="width: 100%">
    <el-table-column type="selection" label="ID" trigger="hover">
    </el-table-column>
    <el-table-column prop="Deviceinfo.name" width="120" sortable label="Name">
    </el-table-column>
    <el-table-column prop="Deviceinfo.model" sortable label="Model">
    </el-table-column>
    <el-table-column prop="Deviceinfo.type" sortable label="Type">
    </el-table-column>
    <el-table-column prop="Deviceinfo.group" sortable label="Group">
    </el-table-column>
    <el-table-column prop="Deviceinfo.MACAddress" sortable label="MAC Add.">
    </el-table-column>
    <el-table-column prop="Deviceinfo.IPAddress" sortable label="IP Add.">
    </el-table-column>
    <el-table-column prop="Deviceinfo.SerialNumber" sortable label="Serial">
    </el-table-column>
    <el-table-column prop="Deviceinfo.Version" sortable label="Version">
    </el-table-column>
  </el-table>
</div>
</div>
</template>
<!-- built files will be auto injected -->
<script>
import Vue from 'vue'
import ElTable from 'element-table'
import 'element-theme-chalk'
Vue.use(ElTable)
export default {
  props: [ 'tablegroup', 'tablegroupid' ],
  name: 'HelloWorld',
  data () {
    return {
      tableData: [],
      multipleSelection: []
    }
  },
  computed: {
    getAllData: function () {
      let data = this.$store.state
      let a = Object.values(data)
      return a[0][this.tablegroup][this.tablegroupid]
      // console.log(data)
      // //let data1 = Object.getOwnPropertyDescriptor(Object.getOwnPropertyDescriptor(data, this.tablegroup).value,this.tablegroupid).value;
      // let data1 = Object.getOwnPropertyDescriptor(data, this.tablegroup).value
      // console.log("final")
      // console.log(data1)
      // this.tableData = data1
      // console.log(this.tableData)
      // // console.log("hsfgdh")
      // return this.tableData
    }
  },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
      this.$emit('emitTableRowClick', this.multipleSelection)
    },
    handleCurrentChange (val) {
      this.multipleSelection = ['0', val]
      this.$emit('emitTableRowClick', this.multipleSelection)
      this.$refs.singleTable.clearSelection()
      this.$refs.singleTable.toggleRowSelection(val)
    }
  }
}
</script>
<style>
.content-wrapper .el-table {
    overflow-x: scroll
}
.content-wrapper .el-table__footer-wrapper, .content-wrapper .el-table__header-wrapper {
    overflow: visible
}
.content-wrapper .el-table__body-wrapper {
    overflow: visible
}
.table-head {
    padding: 10px
}
</style>
