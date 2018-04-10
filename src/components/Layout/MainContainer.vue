<template>
<drop @drop="divOuter">
<div class="content-wrapper" id="resizable">
<div class="table-content">
  <div class="table-head clearfix">
      <div class="left-top pull-left"> <a class="left-sidebar-toggle" href="#"><span class="glyphicon glyphicon-backward"></span></a>  &nbsp;&nbsp;<div class="tbl-title"> {{ tablegroup }} / </div> </div>
    <div class="pull-right">1 Row Selected</div>
  </div>
  <div class="container-fluid y-scroll">
        <div class="demo-content">
    <drop @drop="drop" @dragover="handleDragover" @dragleave="handledragleave">
      <table id="footerTable" class="sar-table ui-widget-content table table-bordered">
        <thead>
            <tr><th><div class="checkbox"><label><input type="checkbox" value=""><span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span></label></div>              </th>
                <th class="accept" v-if="tempColdata.name">Name</th>
                <th class="accept" v-if="tempColdata.model">Model</th>
                <th class="accept" v-if="tempColdata.type">Type</th>
                <th class="accept" v-if="tempColdata.group">Group</th>
                <th class="accept" v-if="tempColdata.mcaAddress">MCA Add.</th>
                <th class="accept" v-if="tempColdata.ipAddress">IP Add.</th>
                <th class="accept" v-if="tempColdata.serial">Serial</th>
                <th class="accept" v-if="tempColdata.version">Version</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(data, key) in tableData" v-bind:key="key">
                <th><div class="checkbox" @click="getDeviceInfo(key)"><label><input type="checkbox" value=""><span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span></label></div></th>
                <td v-if="tempColdata.name"><span v-if="editableData.info != key" v-on:dblclick="InLineEdit(data, key, 'name')">{{data.name}}</span> <span v-if="editableData.info == key" @click.self="InLineDataUpdate(data, key)"><input type="text" autofocus class="editable form-control" v-model="editableData.editableDataValue"></span></td>
                <td v-if="tempColdata.model"><span v-if="editableData.info != key+199" v-on:dblclick="InLineEdit(data, key+199, 'model')">{{data.model}}</span> <span v-if="editableData.info == key+199" @click.self="InLineDataUpdate(data, key)"><input autofocus type="text" class="editable form-control" v-model="editableData.editableDataValue"></span></td>
                <td v-if="tempColdata.type"><span v-if="editableData.info != key+299" v-on:dblclick="InLineEdit(data, key+299, 'type')">{{data.type}}</span> <span v-if="editableData.info == key+299" @click.self="InLineDataUpdate(data, key)"><input autofocus type="text" class="editable form-control" v-model="editableData.editableDataValue"></span></td>
                <td v-if="tempColdata.group"><span v-if="editableData.info != key+399" v-on:dblclick="InLineEdit(data, key+399, 'group')">{{data.group}}</span> <span v-if="editableData.info == key+399" @click.self="InLineDataUpdate(data, key)"><input autofocus type="text" class="editable form-control" v-model="editableData.editableDataValue"></span></td>
                <td v-if="tempColdata.mcaAddress"><span v-if="editableData.info != key+499" v-on:dblclick="InLineEdit(data, key+499, 'MACAddress')">{{data.MACAddress}}</span> <span v-if="editableData.info == key+499" @click.self="InLineDataUpdate(data, key)"><input autofocus type="text" class="editable form-control" v-model="editableData.editableDataValue"></span></td>
                <td v-if="tempColdata.ipAddress"><span v-if="editableData.info != key+599" v-on:dblclick="InLineEdit(data, key+599, 'IPAddress')">{{data.IPAddress}}</span> <span v-if="editableData.info == key+599" @click.self="InLineDataUpdate(data, key)"><input autofocus type="text" class="editable form-control" v-model="editableData.editableDataValue"></span></td>
                <td v-if="tempColdata.serial"><span v-if="editableData.info != key+699" v-on:dblclick="InLineEdit(data, key+699, 'SerialNumber')">{{data.SerialNumber}}</span> <span v-if="editableData.info == key+699" @click.self="InLineDataUpdate(data, key)"><input autofocus type="text" class="editable form-control" v-model="editableData.editableDataValue"></span></td>
                <td v-if="tempColdata.version"><span v-if="editableData.info != key+799" v-on:dblclick="InLineEdit(data, key+799, 'Version')">{{data.Version}}</span> <span v-if="editableData.info == key+799" @click.self="InLineDataUpdate(data, key)"><input autofocus type="text" class="editable form-control" v-model="editableData.editableDataValue"></span></td>
            </tr>
            <tr v-if="hover" style="background-color:gray;color:white">
                <th><div class="checkbox"><label><input type="checkbox" value=""><span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span></label></div></th>
                <td v-if="tempColdata.name">{{DroptableData.name}}</td>
                <td v-if="tempColdata.model">{{DroptableData.model}}</td>
                <td v-if="tempColdata.type">{{DroptableData.type}}</td>
                <td v-if="tempColdata.group">{{DroptableData.group}}</td>
                <td v-if="tempColdata.mcaAddress">{{DroptableData.MACAddress}}</td>
                <td v-if="tempColdata.ipAddress">{{DroptableData.IPAddress}}</td>
                <td v-if="tempColdata.serial">{{DroptableData.SerialNumber}}</td>
                <td v-if="tempColdata.version">{{DroptableData.Version}}</td>
            </tr>
        </tbody>
      </table>
    </drop>
    </div>
    <div class="modal-ShowHide">
    <modal name="show-hide-column">
          <header class="modal-header">
            <slot name="header">
           <h4>Show/Hide Column
              <button type="button" class="btn btn-close" @click="close"><i class="fa fa-times"></i></button>
          </h4>  </slot>
          </header>
          <section class="modal-body row col-md-12">
            <slot name="body">
                    <div class="col-md-6">
                        <input type="checkbox" id="name-checkbox" v-if="(column.name ? 'true':'false')" @click="checkState('name',column.name)"  v-model="column.name">
                        <label>Name</label>
                    </div>
                    <div class="col-md-6">
                        <input type="checkbox" id="model-checkbox" v-if="(column.model ? 'true':'false')" @click="checkState('model',column.model)" v-model="column.model">
                        <label>Model</label>
                    </div>
                    <div class="col-md-6">
                        <input type="checkbox" id="type-checkbox" v-if="(column.type ? 'true':'false')" @click="checkState('type',column.type)" v-model="column.type">
                        <label>Type</label>
                    </div>
                    <div class="col-md-6">
                        <input type="checkbox" id="group-checkbox" v-if="(column.group ? 'true':'false')" @click="checkState('group',column.group)" v-model="column.group">
                        <label>Group</label>
                    </div>
                    <div class="col-md-6">
                        <input type="checkbox" id="mcaAddress-checkbox" v-if="(column.mcaAddress ? 'true':'false')" @click="checkState('mcaAddress',column.mcaAddress)" v-model="column.mcaAddress">
                        <label>MCA Add.</label>
                    </div>
                    <div class="col-md-6">
                        <input type="checkbox" id="ipAddress-checkbox" v-if="(column.ipAddress ? 'true':'false')" @click="checkState('ipAddress',column.ipAddress)" v-model="column.ipAddress">
                        <label>IP Address</label>
                    </div>
                    <div class="col-md-6">
                        <input type="checkbox" id="serial-checkbox" v-if="(column.serial ? 'true':'false')" @click="checkState('serial',column.serial)" v-model="column.serial">
                        <label>Serial</label>
                    </div>
                    <div class="col-md-6">
                        <input type="checkbox" id="version-checkbox" v-if="(column.version ? 'true':'false')" @click="checkState('version',column.version)" v-model="column.version">
                        <label>Version</label>
                    </div>
            </slot>
          </section>
          <footer class="modal-footer">
              <slot name="footer">
                <button type="button" class="btn-green btn" @click="updateColumnSetting">Update</button>
                <button type="button" class="btn-default btn" @click="close">Cancel</button>
            </slot>
          </footer>
      </modal>
      </div>
    </div>
</div>
</div>
</drop>
</template>
<!-- built files will be auto injected -->
<script>
import { EventBus } from './../EventBus/event-bus.js'
export default {
  props: [ 'tablegroup', 'tablegroupid', 'clickTarget' ],
  name: 'HelloWorld',
  data () {
    return {
      // tableData: [{'name': 'text', 'model': 'text', 'type': 'text', 'group': 'text', 'MACAddress': 'text', 'IPAddress': 'text', 'SerialNumber': 'text', 'Version': 'text'}],
      multipleSelection: [],
      hover: false,
      editableData: {info: null, editableDataValue: null, editableKey: null},
      checkIfOutsideDrop: true,
      tempColdata: {name: true, model: true, type: true, group: true, mcaAddress: true, ipAddress: true, serial: true, version: true}
    }
  },
  created: function () {
    EventBus.$on('communicateAllChildToChild', clickCount => {
      console.log(`Oh1, that's nice. It's gotten clicks! :)`)
      this.showHideColumn()
    })
  },
  computed: {
    column: function () {
      return this.$store.state.Setting.showHideColumn
    },
    tableData: function () {
      this.checkIfOutsideDrop = 'true'
      return this.$store.state.Setting.DisplayTableData
    },
    DroptableData: function () {
      return this.$store.state.Setting.DragdropContainer.list
    }
  },
  methods: {
    InLineEdit (data, key, fieldName) {
      console.log('InlineEdit')
      this.editableData.editableDataValue = data[fieldName]
      this.editableData.editableKey = fieldName
      this.editableData.info = key
    },
    InLineDataUpdate (data1, key) {
      if (this.editableData) {
        console.log('Here Is Update')
        console.log(this.editableData)
        console.log('Click Target')
        let parentNode = this.$store.state.Setting.GetParentKey.parentnode
        let name = this.editableData.editableKey
        let value = this.editableData.editableDataValue
        console.log(data1)
        this.$store.commit('UpdateInlineEdit', {key: parentNode, name: name, value: value, numKey: key})
        this.editableData.info = null
        this.editableData.editableDataValue = null
        this.editableData.editableKey = null
      }
    },
    updateColumnSetting () {
      let data = this.$store.state.Setting.showHideColumn
      this.tempColdata.name = data.name
      this.tempColdata.model = data.model
      this.tempColdata.type = data.type
      this.tempColdata.group = data.group
      this.tempColdata.mcaAddress = data.mcaAddress
      this.tempColdata.ipAddress = data.ipAddress
      this.tempColdata.serial = data.serial
      this.tempColdata.version = data.version
      this.close()
    },
    dragStart (event) {
      event.dataTransfer.setData('Text', event.target.id)
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
      this.$emit('emitTableRowClick', this.multipleSelection)
    },
    handleCurrentChange (val) {
      this.multipleSelection = ['0', val]
      this.$emit('emitTableRowClick', this.multipleSelection)
      this.$refs.singleTable.clearSelection()
      this.$refs.singleTable.toggleRowSelection(val)
    },
    checkState (field, val) {
      let fieldVal
      if (val === true) {
        fieldVal = false
      } else {
        fieldVal = true
      }
      this.$store.commit('ShowHideDetails', {key: field, value: fieldVal})
    },
    showHideColumn () {
      this.$modal.show('show-hide-column')
    },
    close () {
      this.$modal.hide('show-hide-column')
    },
    drop (event, data) {
      let containerParentKey = this.$store.state.Setting.GetParentKey.parentnode
      this.$store.commit('AppendDataIntoActualPlace', containerParentKey)
      this.hover = false
      this.checkIfOutsideDrop = false
    },
    divOuter () {
      if (this.checkIfOutsideDrop) {
        console.log('fgdh')
        this.$store.commit('RecoverTableSchemaDropOtherSide')
        this.checkIfOutsideDrop = false
      }
    },
    handleDragover () {
      if (!this.hover) {
        this.hover = true
      }
    },
    handledragleave () {
      if (this.hover) {
        this.hover = false
      }
    },
    getDeviceInfo (key) {
      this.$store.commit('GetDeviceFullInfo', this.tableData[key])
    }
  },
  mounted () {
    // tempColdata = this.$store.state.Setting.showHideColumn
  }
}
</script>
<style>
.editable {
    width :90%;
    height : 90%;
}
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
    padding: 18px;
        background: #1E3250;
}
#Table_azam {
    display: table;
    width:100%;
}
#Title_azam {
    display: table-caption;
    text-align: center;
    font-weight: bold;
    font-size: larger;
}
#Heading_azam {
    display: table-row;
    /* font-weight: bold; */
    text-align: center;
    background: #f5f5f5;
    color: #080808;
    font-size: 16px;
}
#Row_azam {
    display: table-row;
}
#Cell_azam {
    display: table-cell;
    border: 0.222em solid #020202;
    border-width: thin;
    padding-left: 5px;
    padding-right: 5px;
}
#content_azam{
    padding-top: 8px;
    text-align:center;
}
#head_azam{
    padding-top: 8px;
}
.scroll-azam{overflow-x:scroll; padding-left: 0px; padding-right: 0px;}
/*Radio and Checkbox START*/
.checkbox label:after, .radio label:after {
    content: '';
    display: table;
    clear: both;
}

.checkbox .cr,
.radio .cr {
    position: relative;
    display: inline-block;
    border: 1px solid #a9a9a9;
    border-radius: .25em;
    width: 1.3em;
    height: 1.3em;
    float: left;
    margin-right: .5em;
}
.radio .cr {
    border-radius: 50%;
}
.checkbox .cr .cr-icon,
.radio .cr .cr-icon {
    position: absolute;
    font-size: .8em;
    line-height: 0;
    top: 50%;
    left: 20%;
}
.checkbox label input[type="checkbox"],
.radio label input[type="radio"] {
    display: none;
}
.checkbox label input[type="checkbox"] + .cr > .cr-icon,
.radio label input[type="radio"] + .cr > .cr-icon {
    transform: scale(3) rotateZ(-20deg);
    opacity: 0;
    transition: all .3s ease-in;
}
.checkbox label input[type="checkbox"]:checked + .cr > .cr-icon,
.radio label input[type="radio"]:checked + .cr > .cr-icon {
    transform: scale(1) rotateZ(0deg);
    opacity: 1;
}

.checkbox label input[type="checkbox"]:disabled + .cr,
.radio label input[type="radio"]:disabled + .cr {
    opacity: .5;
}

  .left-top{display: inline-flex}
  .y-scroll{overflow: scroll;height: 500px;    padding: 10px;}
  .left-sidebar-toggle{color: #fff;}

</style>
