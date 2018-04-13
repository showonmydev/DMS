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
        <div style="color:white" role="tabpanel" id="list" class="collapse navbar-collapse navbar-ex1-collapse active tab-pane">
            <ul>
              <li v-for="(list1, key1) in leftsidedata.L1" v-bind:key="key1" class="nav navbar-nav side-nav all-list" id="hello">
                <span data-level="L1" data-parent="all" data-type='group' v-bind:data-key="key1" v-bind:data-groupkey="key1" id="hello"><i class="fa fa-caret-down" data-toggle="collapse" data-target="#submenu-1"></i><i class="fa fa fa-share-alt"></i>{{key1}}</span>
                <ul id="submenu-1" class="collapse in left-nav-device-container">
                  <li v-for="(list2, key2) in leftsidedata.L2" v-bind:key="key2" v-if="(list2.parentnode === key1)" class="sub-menu-list" data-level='L2' v-bind:data-parent="list2.parentnode">
                    <draggable :move="checkMove" :options="{group:'people'}">
                    <ul v-if="(list2.name)">
                      <draggable @end="moved" @start="DragStart('L2', list2.parentnode, list2.name, 'group', key2)">
                      <li v-if="(list2.name)"><drop @drop="DropStart('L2', list2.parentnode, list2.name, 'group')" @dragover="handleDragover('L2', list2.parentnode, list2.name, 'group')" @dragleave="handledragleave('L2', list2.parentnode, list2.name, 'group')"><span id="uncategories-top" data-level="L2" data-parent="uncategory" data-type='group' v-bind:data-groupkey="key2"><i class="fa fa-caret-down" data-toggle="collapse" v-bind:data-target="'#'+key2" v-bind:id="key2+'1'"></i><i class="fa fa fa-share-alt"></i><span class="groupInspan" @click="deviceClick(key2)">{{list2.name}}</span></span></drop>
                        <ul v-bind:id="key2" v-bind:class="{'collapse left-nav-device-container': collaps, 'collapse in left-nav-device-container': !collaps}">
                          <li><drop @drop="DropStart('L2', list2.parentnode, list2.name, 'group')" @dragover="handleDragover('L2', list2.parentnode, list2.name, 'group')" @dragleave="handledragleave('L2', list2.parentnode, list2.name, 'group')"><draggable @end="ListDragEnd('L2', list2.parentnode, list2.Device, 'device', key2)" @start="DragStart('L2', list2.parentnode, list2.Device, 'device', key2)"><span v-for="(device, devicekey) in leftsidedata.Device[key2]" v-bind:key="devicekey" v-bind:data-key="devicekey" data-level="L2" data-type='device' v-bind:data-groupkey="key2" v-bind:data-devicekey="device.name" v-bind:data-parent="list2.parentnode" v-bind:title="device.name" v-tippy="{ placement : 'bottom',  theme: 'tool', duration: 500, arrow: true, size: 'large' }"><i class="fa fa-angle-double-right"></i>{{device.name}}</span></draggable></drop>
                            <ul class="left-nav-device-container">
                              <li v-for="(list3, key3) in leftsidedata.L3" v-bind:key="key3" v-bind:data-key="key3" v-if="(list3.parentnode === key2)" data-level='L3' v-bind:data-parent="list3.parentnode">
                                <ul v-if="(list3.parentnode === key2)" class="left-nav-device-container">
                                  <draggable  @end="moved" @start="DragStart('L3', list3.parentnode, list3.name, 'group', key3)">
                                  <li v-if="(list3.name)"><drop @drop="DropStart('L3', list3.parentnode, list3.name, 'group')" @dragover="handleDragover('L3', list3.parentnode, list3.name, 'group')" @dragleave="handledragleave('L3', list3.parentnode, list3.name, 'group')"><span id="L3123" data-level="L3" v-bind:data-groupkey="key3" v-bind:data-parent="list3.parentnode" data-type='group'><i class="fa fa-caret-down" data-toggle="collapse" v-bind:data-target="'#'+key3" v-bind:id="key3+'1'"></i><i class="fa fa fa-share-alt"></i><span @click="deviceClick(key3)" class="groupInspan">{{list3.name}}</span></span></drop>
                                    <ul v-bind:id="key3" v-bind:class="{'collapse left-nav-device-container': collaps, 'collapse in left-nav-device-container': !collaps}">
                                      <li><drop @drop="DropStart('L3', list3.parentnode, list3.name, 'group')" @dragover="handleDragover('L3', list3.parentnode, list3.name, 'group')" @dragleave="handledragleave('L3', list3.parentnode, list3.name, 'group')"><draggable @end="ListDragEnd('L3', list3.parentnode, list3.Device, 'device', key3)" @start="DragStart('L3', list3.parentnode, list3.Device, 'device', key3)"><span v-for="(device3, devicekey3) in leftsidedata.Device[key3]" v-bind:key="devicekey3" v-bind:data-key="devicekey3" data-level="L3" data-type='device' v-bind:data-groupkey="key3" v-bind:data-devicekey="device3.name" v-bind:data-parent="list3.parentnode"  v-bind:title="device3.name" v-tippy="{ placement : 'bottom',  theme: 'tool', duration: 500, arrow: true, size: 'large' }"><i class="fa fa-angle-double-right"></i>{{device3.name}}</span></draggable></drop>
                                        <ul class="left-nav-device-container">
                                          <li v-for="(list4, key4) in leftsidedata.L4" v-bind:key="key4" v-if="(list4.parentnode === key3)" data-level='L4' v-bind:data-parent="list4.parentnode">
                                            <ul v-if="(list4.parentnode === key3)" class="left-nav-device-container">
                                              <draggable  @end="moved" @start="DragStart('L4', list4.parentnode, list4.name, 'group', key4)">
                                              <li v-if="(list4.name)"><drop @drop="DropStart('L4', list4.parentnode, list4.name, 'group')" @dragover="handleDragover('L4', list4.parentnode, list4.name, 'group')" @dragleave="handledragleave('L4', list4.parentnode, list4.name, 'group')"><span id="L4123" data-level="L4" v-bind:data-parent="list4.parentnode" data-type='group' v-bind:data-groupkey="key4"><i class="fa fa-caret-down" data-toggle="collapse" v-bind:data-target="'#'+key4" v-bind:id="key4+'1'"></i><i class="fa fa fa-share-alt"></i><span class="groupInspan" @click="deviceClick(key4)">{{list4.name}}</span></span></drop>
                                                <ul v-bind:id="key4" v-bind:class="{'collapse left-nav-device-container': collaps, 'collapse in left-nav-device-container': !collaps}">
                                                  <li><drop @drop="DropStart('L4', list4.parentnode, list4.name, 'group')" @dragover="handleDragover('L4', list4.parentnode, list4.name, 'group')" @dragleave="handledragleave('L4', list4.parentnode, list4.name, 'group')"><draggable @end="ListDragEnd('L4', list4.parentnode, list4.Device, 'device', key4)" @start="DragStart('L4', list4.parentnode, list4.Device, 'device', key4)"><span v-for="(device4, devicekey4) in leftsidedata.Device[key4]" v-bind:key="devicekey4" v-bind:data-key="devicekey4" data-level="L4" data-type='device' v-bind:data-groupkey="key4" v-bind:data-devicekey="device4.name" v-bind:data-parent="list4.parentnode"  v-bind:title="device4.name" v-tippy="{ placement : 'bottom',  theme: 'tool', duration: 500, arrow: true, size: 'large' }"><i class="fa fa-angle-double-right"></i>{{device4.name}}</span></draggable></drop>
                                                    <ul class="left-nav-device-container">
                                                      <li v-for="(list5, key5) in leftsidedata.L5" v-bind:key="key5" v-if="(list5.parentnode === key4)" data-level='L5' v-bind:data-parent="list5.parentnode">
                                                        <ul v-if="(list5.parentnode === key4)" class="left-nav-device-container">
                                                          <draggable @end="moved" @start="DragStart('L5', list5.parentnode, list5.name, 'group', key5)">
                                                          <li v-if="(list5.name)"><drop @drop="DropStart('L5', list5.parentnode, list5.name, 'group')" @dragover="handleDragover('L5', list5.parentnode, list5.name, 'group')" @dragleave="handledragleave('L5', list5.parentnode, list5.name, 'group')"><span id="L4123" data-level="L5" v-bind:data-parent="list5.parentnode" data-type='group' v-bind:data-groupkey="key5"><i class="fa fa-caret-down" data-toggle="collapse" v-bind:data-target="'#'+key5" v-bind:id="key5+'1'"></i><i class="fa fa fa-share-alt"></i><span class="groupInspan" @click="deviceClick(key5)">{{list5.name}}</span></span></drop>
                                                            <ul v-bind:id="key5" v-bind:class="{'collapse left-nav-device-container': collaps, 'collapse in left-nav-device-container': !collaps}">
                                                              <li><drop @drop="DropStart('L5', list5.parentnode, list5.name, 'group')" @dragover="handleDragover('L5', list5.parentnode, list5.name, 'group')" @dragleave="handledragleave('L5', list5.parentnode, list5.name, 'group')"><draggable @end="ListDragEnd('L5', list5.parentnode, list5.Device, 'device', key5)" @start="DragStart('L5', list5.parentnode, list5.Device, 'device', key5)"><span v-for="(device5, devicekey5) in leftsidedata.Device[key5]" v-bind:key="devicekey5" v-bind:data-key="devicekey5" data-level="L5" v-bind:data-groupkey="key5" data-type='device' v-bind:data-devicekey="device5.name" v-bind:data-parent="list5.parentnode"  v-bind:title="device5.name" v-tippy="{ placement : 'bottom',  theme: 'tool', duration: 500, arrow: true, size: 'large' }"><i class="fa fa-angle-double-right"></i>{{device5.name}}</span></draggable></drop>
                                                                <ul class="left-nav-device-container">
                                                                  <drop @drop="DropStart('L6', list6.parentnode, list6.name, 'group')" @dragover="handleDragover('L6', list6.parentnode, list6.name, 'group')" @dragleave="handledragleave('L6', list6.parentnode, list6.name, 'group')">
                                                                  <li v-for="(list6, key6) in leftsidedata.L6" v-bind:key="key6" v-if="(list6.parentnode === key5)" data-type='group' data-level='L6' v-bind:data-parent="list6.parentnode">
                                                                    <ul v-if="(list6.parentnode === key5)" class="left-nav-device-container">
                                                                      <draggable  @end="moved" @start="DragStart('L6', list6.parentnode, list6.name, 'group', key6)">
                                                                      <li v-if="(list6.name)"><span id="L5123" data-level="L6" data-type='group' v-bind:data-parent="list6.parentnode" v-bind:data-groupkey="key6"><i class="fa fa fa-share-alt"></i><span class="fa fa-caret-down groupInspan" @click="deviceClick(key6)">{{list6.name}}</span></span>
                                                                        <ul v-bind:id="key6" v-bind:class="{'collapse left-nav-device-container': collaps, 'collapse in left-nav-device-container': !collaps}">
                                                                          <li>
                                                                            <draggable @end="ListDragEnd('L6', list6.parentnode, list6.Device, 'device', key6)" @start="DragStart('L6', list6.parentnode, list6.Device, 'device', key6)"><span v-for="(device6, devicekey6) in leftsidedata.Device[key6]" v-bind:key="devicekey6" v-bind:data-key="devicekey6" data-level="L6" data-type='device' v-bind:data-groupkey="key6" v-bind:data-devicekey="device6.name" v-bind:data-parent="list6.parentnode"  v-bind:title="device6.name" v-tippy="{ placement : 'bottom',  theme: 'tool', duration: 500, arrow: true, size: 'large' }"><i class="fa fa-angle-double-right"></i>{{device6.name}}</span></draggable>
                                                                          </li>
                                                                        </ul>
                                                                      </li>
                                                                      </draggable>
                                                                    </ul>
                                                                  </li>
                                                                  </drop>
                                                                </ul>
                                                              </li>
                                                            </ul>
                                                          </li>
                                                          </draggable>
                                                        </ul>
                                                      </li>
                                                    </ul>
                                                  </li>
                                                </ul>
                                              </li>
                                              </draggable>
                                            </ul>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </li>
                                  </draggable>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      </draggable>
                    </ul>
                    </draggable>
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
import draggable from 'vuedraggable'
export default {
  props: ['name', 'clickTarget'],
  name: 'LeftSideBar',
  data () {
    return {
      dropdata: {},
      msg: 'Welcome to Your Vue.js App',
      selected: undefined,
      activeNames: 'fdjh'
    }
  },
  components: {
    draggable
  },
  computed: {
    collaps: function () {
      return this.$store.state.Setting.context
    },
    leftsidedata: function () {
      return this.$store.getters.getAll
    },
    getAll: function () {
      return this.$store.getters.getAll
    }
  },
  methods: {
    add: function () {
      alert('dfsj')
    },
    replace: function () {
      alert('jhfg')
    },
    moved (ev, info) {
      return true
    },
    checkMove: function (evt) {
      // alert(evt.draggedContext.element.name);
      return (evt.draggedContext.element.name !== 'apple')
    },
    handleChange () {
      console.log('changed')
    },
    inputChanged (value) {
      this.activeNames = value
    },
    getComponentData () {
      return {
        on: {
          change: this.handleChange,
          input: this.inputChanged
        },
        props: {
          value: 'this.activeNames'
        }
      }
    },
    DragStop1 (newIndex, element) {
      alert('sdgh')
    },
    DragStop (ev) {
      console.log(ev.target)
    },
    DragStart (level, parentnode, name = '', devicetype, key) {
      console.log('Drag Start')
      console.log(level, parentnode, name, devicetype, key)
      // this is added when user drop any device or group from sidebar
      // this.DropTempDataSidebar = {level: level, parentnode: parentnode, name: name, devicetype: devicetype, key: key}
      if (key) {
        // next drop stage
        let containerParentKey = this.$store.state.Setting.GetParentKey.parentnode
        let getdeviceIndex = this.clickTarget.target.dataset.key
        let deviceList = this.$store.state.Device[key][getdeviceIndex]
        this.dropdata = {level: level, parentnode: parentnode, name: name, devicetype: devicetype, parentKey: key}
        if (devicetype === 'device') {
          if (containerParentKey !== '' && containerParentKey !== null && containerParentKey !== undefined) {
            this.$store.commit('AppendDataIntoTableSchema', {list: deviceList, parentKey: key, index: getdeviceIndex})
          } else {
            this.$store.commit('AppendDataIntoTableSchema', {list: deviceList, parentKey: key, index: getdeviceIndex})
          }
        }
      }
    },
    DisplayData (groupname, keyname) {
      this.$emit('emitLeftSideBarClick', groupname, keyname)
    },
    onDropEvent (event) {
      console.log('info')
    },
    onDropEnd (event) {
      console.log('Hello')
      console.log(event)
    },
    deviceClick (parent) {
      this.$store.commit('SetParentKey', {parentnode: parent})
      this.$store.commit('AddDataIntoTable', parent)
    },
    handledragleave (level, parentnode, name = '', type) {
      // console.log('Handledragleave')
    },
    DropStart (level, parentnode, name, type) {
      console.log(level, parentnode, name, type)
      console.log('INn')
      var dropData = this.clickTarget.target.dataset
      var deatilsForGroup = this.dropdata
      console.log('clickTarget')
      console.log(this.dropdata)
      if (dropData.type === 'device') {
        this.$store.commit('DropDeviceFromSideBar', {dropdata: dropData, dropfrom: {level: level, parentnode: parentnode, name: name}})
        console.log('Device')
      }
      if (deatilsForGroup.devicetype === 'group') {
        this.$store.commit('DropGroupFromSideBar', {dropdata: deatilsForGroup, dropfrom: {level: level, parentnode: parentnode, name: name}})
        console.log('Group')
      }
    },
    ListDragEnd (level, parentnode, name = '', type) {

    },
    handleDragover (level, parentnode, name = '', type) {
      // console.log('DragOver')
    }
  }
}
</script>
