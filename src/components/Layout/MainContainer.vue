<template>
<div class="content-wrapper">
<div class="table-content">
  <div class="table-head clearfix">
    <div class="pull-left"> {{ tablegroup }} / </div>
    <div class="pull-right">1 Row Selected</div>
  </div>
  <el-table ref="singleTable" :data="tableData" highlight-current-row border scroll @selection-change="handleSelectionChange" @current-change="handleCurrentChange" style="width: 100%">
    <el-table-column type="selection" label="ID" trigger="hover">
    </el-table-column>
    <el-table-column prop="name" width="120" sortable label="Name">
    </el-table-column>
    <el-table-column prop="model" sortable label="Model">
    </el-table-column>
    <el-table-column prop="type" sortable label="Type">
    </el-table-column>
    <el-table-column prop="group" sortable label="Group">
    </el-table-column>
    <el-table-column prop="MACAddress" sortable label="MAC Add.">
    </el-table-column>
    <el-table-column prop="IPAddress" sortable label="IP Add.">
    </el-table-column>
    <el-table-column prop="SerialNumber" sortable label="Serial">
    </el-table-column>
    <el-table-column prop="Version" sortable label="Version">
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
      tableData: [{'name': 'text', 'model': 'text', 'type': 'text', 'group': 'text', 'MACAddress': 'text', 'IPAddress': 'text', 'SerialNumber': 'text', 'Version': 'text'}],
      multipleSelection: []
    }
  },
  computed: {
    getAllData: function () {
      return {'name': 'text', 'model': 'text', 'type': 'text', 'group': 'text', 'MACAddress': 'text', 'IPAddress': 'text', 'SerialNumber': 'text', 'Version': 'text'}
      // let data = this.$store.state
      // let a = Object.values(data)
      // if (this.tablegroupid === 'empty') {
      //   let data = Object.values(a[0][this.tablegroup])
      //   let arr = []
      //   data.forEach(function (value, i) {
      //     value.forEach(function (value1, i) {
      //       arr.push(value1)
      //     })
      //   })
      //   return arr
      // } else {
      //   return a[0][this.tablegroup][this.tablegroupid]
      // }
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
