<template>
<div class="main-right-sidebar" id="also">
      <div class="right-top"><a class="right-sidebar-toggle" href="#" v-bind:title="titleTools.actionPanel" v-tippy="{ placement : 'bottom',  theme: 'tool', duration: 500, arrow: true, size: 'large' }"><span class="glyphicon glyphicon-backward"></span></a></div>
      <div class="col-xs-4 right-tabs-icons">
        <!-- Nav tabs -->
        <ul class="nav nav-tabs tabs-left">
          <li class="active info"><a href="#info" data-toggle="tab" v-bind:title="titleTools.information" v-tippy="{ placement : 'bottom',  theme: 'tool', duration: 500, arrow: true, size: 'large' }"><i class="fa fa-info-circle"></i></a></li>
          <li class="control"><a href="#control" data-toggle="tab" v-bind:title="titleTools.controls" v-tippy="{ placement : 'bottom',  theme: 'tool', duration: 500, arrow: true, size: 'large' }"><i class="fa fa-wrench"></i></a></li>
          <li class="update"><a href="#update" data-toggle="tab" v-bind:title="titleTools.softwareUpgrade" v-tippy="{ placement : 'bottom',  theme: 'tool', duration: 500, arrow: true, size: 'large' }"><i class="fa fa-sign-in"></i></a></li>
          <li class="scheduling"><a href="#scheduling" data-toggle="tab" v-bind:title="titleTools.scheduling" v-tippy="{ placement : 'bottom',  theme: 'tool', duration: 500, arrow: true, size: 'large' }"><i class="fa fa-calendar"></i></a></li>
        </ul>
      </div>
      <div class="col-xs-12 right-tabs-con">
        <!-- Tab panes -->
        <div class="tab-content">
          <div class="tab-pane active info_div" id="info">
            <div class="box-body table-responsive no-padding">
              <table class="table table-hover">
                <tbody>
                <tr>
                  <th colspan="2">Device Info</th>
                  <th colspan="2">Status</th>
                </tr>
                <tr>
                  <td>Name</td>
                  <td v-if="tableFullInfo">{{tableFullInfo.name}}</td>
                  <td v-else></td>
                  <td><span class="label label-success">Power</span></td>
                  <td v-if="tableFullInfo">{{tableFullInfo.Power}}</td>
                  <td v-else></td>
                </tr>
                <tr>
                  <td>Model</td>
                  <td v-if="tableFullInfo">{{tableFullInfo.model}}</td>
                  <td v-else></td>
                  <td><span class="label label-warning">Source</span></td>
                  <td v-if="tableFullInfo">{{tableFullInfo.Source}}</td>
                  <td v-else></td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td v-if="tableFullInfo">{{tableFullInfo.type}}</td>
                  <td v-else></td>
                  <td><span class="label label-primary">Signal Status</span></td>
                  <td v-if="tableFullInfo">{{tableFullInfo.SignalStatus}}</td>
                  <td v-else></td>
                </tr>
                <tr>
                  <td>Group</td>
                  <td v-if="tableFullInfo">{{tableFullInfo.group}}</td>
                  <td v-else></td>
                  <td><span class="label label-danger">AV Mute</span></td>
                  <td v-if="tableFullInfo">{{tableFullInfo.AVMute}}</td>
                  <td v-else></td>
                </tr>
                <tr>
                  <td>MAC Address</td>
                  <td v-if="tableFullInfo">{{tableFullInfo.MACAddress}}</td>
                  <td v-else></td>
                  <td><span class="label label-warning">Mute</span></td>
                  <td v-if="tableFullInfo">{{tableFullInfo.Mute}}</td>
                  <td v-else></td>
                </tr>
                <tr>
                  <td>IP Address</td>
                  <td v-if="tableFullInfo">{{tableFullInfo.IPAddress}} <br> <a class="btn-edit-btn" href="#">Edit</a></td>
                  <td v-else></td>
                  <td><span class="label label-danger">Picture Mode:</span></td>
                  <td v-if="tableFullInfo">{{tableFullInfo.PictureMode}}</td>
                  <td v-else></td>
                </tr>
                <tr>
                  <td>Serial Number:</td>
                  <td v-if="tableFullInfo">{{tableFullInfo.SerialNumber}}</td>
                  <td v-else></td>
                  <td><span class="label label-primary">Ambient Sensor</span></td>
                  <td v-if="tableFullInfo">{{tableFullInfo.AspectRatio}}</td>
                  <td v-else></td>
                </tr>
                <tr>
                  <td>Group</td>
                  <td v-if="tableFullInfo">{{tableFullInfo.Version}}</td>
                  <td v-else></td>
                  <td><span class="label label-danger">AV Mute</span></td>
                  <td v-if="tableFullInfo">{{tableFullInfo.AmbientSensor}}</td>
                  <td v-else></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td><span class="label label-danger">Error</span></td>
                  <td v-if="tableFullInfo">{{tableFullInfo.Error}}</td>
                  <td v-else></td>
                </tr>
              </tbody></table>
            </div>
          </div>
          <div class="tab-pane control_div" id="control">Profile Tab.</div>
          <div class="tab-pane update_div" id="update">Messages Tab.</div>
          <div class="tab-pane scheduling_div" id="scheduling">Settings Tab.</div>
          <section class="progress clearfix">
            <div class="progress-radial progress-45 setsize">
              <div class="overlay setsize">
                <p>CPU <span v-if="tableFullInfo">{{tableFullInfo.CPU}}%</span></p>
              </div>
            </div>
            <div class="progress-radial progress-55 setsize">
              <div class="overlay setsize">
                <p>Memory <span v-if="tableFullInfo">{{tableFullInfo.Memory}}%</span></p>
              </div>
            </div>
            <div class="progress-radial progress-30 setsize">
              <div class="overlay setsize">
                <p>Network <span v-if="tableFullInfo">{{tableFullInfo.Network}}Mbps</span></p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  props: ['TableRowData'],
  name: 'RightSideBar',
  data () {
    return {
      titleTools: {},
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    tableFullInfo: function () {
      return this.$store.state.Setting.DisplayIndividualData
    }
  },
  mounted () {
    this.titleTools = this.$store.state.Setting.toolTipTitle
  }
}
</script>
<style>
#also{
/* clear: both; */
  float: left;
}
</style>
