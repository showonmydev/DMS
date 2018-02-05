<template>
<div class="content-wrapper">
<div class="table-content">
	<el-table :data="getAllData" border scroll style="width: 100%" @selection-change="handleSelectionChange">
    <el-table-column type="selection" label="ID">
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
  name: 'HelloWorld',
  data() {
      return {
        tableData: [],
        multipleSelection: []
      };
  },
  computed: {
    getAllData: function() {
        let data = this.$store.state.data
        this.tableData = data.TPE01.TPE01D01
        return this.tableData
    }
  },
  methods: {
    handleSelectionChange(val) {
       this.multipleSelection = val;
       console.log(this.multipleSelection)
    }
  }
}
</script>