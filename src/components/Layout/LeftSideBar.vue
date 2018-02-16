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
                <span data-toggle="collapse" data-target="#submenu-1" id="hello"><i class="fa fa-fw fa-share-alt"></i>{{key1}}</span>
                <ul id="submenu-1" class="collapse">
                  <li v-for="(list2, key2) in leftsidedata.L2" v-bind:key="key2" v-if="(list2.parentnode === key1)" class="sub-menu-list" id="hello">
                    <draggable @start="DragStart()" @end="DragStop()">
                    <ul v-if="(list2.name)">
                      <draggable @start="DragStart()" @end="DragStop()">
                      <li v-if="(list2.name)"><span data-toggle="collapse" v-bind:data-target="'#'+key2"><i class="fa fa-fw fa-share-alt"></i>{{list2.name}}</span>
                        <ul v-bind:id="key2" v-if="(list2.Device.name)" class="collapse">
                          <li v-if="(list2.Device.name)"><draggable @start="DragStart()" @end="DragStop()"><span>*{{list2.Device.name}}</span></draggable>
                            <ul>
                              <li v-for="(list3, key3) in leftsidedata.L3" v-bind:key="key3" v-if="(list3.parentnode === key2)">
                                <ul v-if="(list3.parentnode === key2)">
                                  <draggable @start="DragStart()" @end="DragStop()">
                                  <li v-if="(list3.name)"><span data-toggle="collapse" v-bind:data-target="'#'+key3"><i class="fa fa-fw fa-share-alt"></i>{{list3.name}}</span>
                                    <ul v-bind:id="key3" v-if="(list3.Device.name)" class="collapse">
                                      <li v-if="(list3.Device.name)"><draggable @start="DragStart()" @end="DragStop()"><span>*{{list3.Device.name}}</span></draggable>
                                        <ul>
                                          <li v-for="(list4, key4) in leftsidedata.L4" v-bind:key="key4" v-if="(list4.parentnode === key3)">
                                            <ul v-if="(list4.parentnode === key3)">
                                              <draggable @start="DragStart()" @end="DragStop()">
                                              <li v-if="(list4.name)"><span data-toggle="collapse" v-bind:data-target="'#'+key4"><i class="fa fa-fw fa-share-alt"></i>{{list4.name}}</span>
                                                <ul v-bind:id="key4" v-if="(list4.Device.name)" class="collapse">
                                                  <li v-if="(list4.Device.name)"><draggable @start="DragStart()" @end="DragStop()"><span>*{{list4.Device.name}}</span></draggable>
                                                    <ul>
                                                      <li v-for="(list5, key5) in leftsidedata.L5" v-bind:key="key5" v-if="(list5.parentnode === key4)">
                                                        <ul v-if="(list5.parentnode === key4)">
                                                          <draggable @start="DragStart()" @end="DragStop()">
                                                          <li v-if="(list5.name)"><span data-toggle="collapse" v-bind:data-target="'#'+key5"><i class="fa fa-fw fa-share-alt"></i>{{list5.name}}</span>
                                                            <ul v-bind:id="key5" v-if="(list5.Device.name)" class="collapse">
                                                              <li v-if="(list5.Device.name)"><draggable @start="DragStart()" @end="DragStop()"><span>*{{list5.Device.name}}</span></draggable>
                                                                <ul>
                                                                  <li v-for="(list6, key6) in leftsidedata.L6" v-bind:key="key6" v-if="(list6.parentnode === key5)">
                                                                    <ul v-if="(list6.parentnode === key5)">
                                                                      <draggable @start="DragStart()" @end="DragStop()">
                                                                      <li v-if="(list6.name)"><span data-toggle="collapse" v-bind:data-target="'#'+key6"><i class="fa fa-fw fa-share-alt"></i>{{list6.name}}</span>
                                                                        <ul v-bind:id="key6" v-if="(list6.Device.name)" class="collapse">
                                                                          <li v-if="(list6.Device.name)">
                                                                            <draggable @start="DragStart()" @end="DragStop()"><span>*{{list6.Device.name}}</span></draggable>
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
  props: ['name'],
  name: 'LeftSideBar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      leftsidedata: [],
      selected: undefined
    }
  },
  components: {
    draggable
  },
  methods: {
    DragStart () {
      console.log('info')
    },
    DragStop () {
      console.log('info')
    },
    DisplayData (groupname, keyname) {
      this.$emit('emitLeftSideBarClick', groupname, keyname)
    },
    onDropEvent (event) {
      console.log('info')
      // console.log(event.hasOwnProperty())
      // let dropOwnerId = event.owner.id
      // let dropthisText = event.items[0].innerText
      // let parentNode = event.droptarget.id
      // console.log(dropOwnerId)
      // console.log(dropthisText)
      // console.log(event.droptarget.id)
      // let a = Object.values(this.$store.state)
      // // let ownerid = this.leftsidedata[dropOwnerId]
      // // let dropdata = this.leftsidedata[dropOwnerId][parentNode.trim()]
      // console.log(this.leftsidedata[parentNode][dropthisText.trim()])
      // delete a['0'][dropOwnerId][dropthisText.trim()]
      // this.leftsidedata = a['0']
      // console.log(a)
    },
    onDropEnd (event) {
      // alert("fdg")
      console.log('Hello')
      console.log(event)
    }
  },
  beforeMount () {
    // let data = Object.values(this.$store.state)
    // this.leftsidedata = this.$store.state
    // console.log(this.leftsidedata)
    // this.$nextTick(function () {
    // Code that will run only after the entire view has been rendered
    // $('#hello').draggable();
    // alert('fdghfjd')
    // })
  }
}
</script>
