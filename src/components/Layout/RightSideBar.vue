<template>
<div class="main-right-sidebar">
      <div class="right-top"><a class="right-sidebar-toggle" href="#" title="Open Action Panel" v-tippy="{ placement : 'left',  theme: 'tool', duration: 500, arrow: true, size: 'large' }"><span class="glyphicon glyphicon-backward"></span></a></div>
      <div class="col-xs-4 right-tabs-icons">
        <!-- Nav tabs -->
        <ul class="nav nav-tabs tabs-left" title="Action bar">
          <li class="active info"><a href="#info" data-toggle="tab" title="Information" v-tippy="{ placement : 'left',  theme: 'tool', duration: 500, arrow: true, size: 'large' }"><i class="fa fa-info-circle"></i></a></li>
          <li class="control"><a href="#control" data-toggle="tab" title="Controls" v-tippy="{ placement : 'left',  theme: 'tool', duration: 500, arrow: true, size: 'large' }"><i class="fa fa-wrench"></i></a></li>
          <li class="update"><a href="#update" data-toggle="tab" title="Software Upgrade" v-tippy="{ placement : 'left',  theme: 'tool', duration: 500, arrow: true, size: 'large' }"><i class="fa fa-sign-in"></i></a></li>
          <li class="scheduling"><a href="#scheduling" data-toggle="tab" title="Scheduling" v-tippy="{ placement : 'left',  theme: 'tool', duration: 500, arrow: true, size: 'large' }"><i class="fa fa-calendar"></i></a></li>
        </ul>
      </div>
      <div class="col-xs-8 right-tabs-con">
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
                  <td v-if="TableRowData.Deviceinfo">{{TableRowData.Deviceinfo.name}}</td>
                  <td v-else></td>
                  <td><span class="label label-success">Power</span></td>
                  <td v-if="TableRowData.Status">{{TableRowData.Status.Power}}</td>
                  <td v-else></td>
                </tr>
                <tr>
                  <td>Model</td>
                  <td v-if="TableRowData.Deviceinfo">{{TableRowData.Deviceinfo.model}}</td>
                  <td v-else></td>
                  <td><span class="label label-warning">Source</span></td>
                  <td v-if="TableRowData.Status">{{TableRowData.Status.Source}}</td>
                  <td v-else></td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td v-if="TableRowData.Deviceinfo">{{TableRowData.Deviceinfo.type}}</td>
                  <td v-else></td>
                  <td><span class="label label-primary">Signal Status</span></td>
                  <td v-if="TableRowData.Status">{{TableRowData.Status.SignalStatus}}</td>
                  <td v-else></td>
                </tr>
                <tr>
                  <td>Group</td>
                  <td v-if="TableRowData.Deviceinfo">{{TableRowData.Deviceinfo.group}}</td>
                  <td v-else></td>
                  <td><span class="label label-danger">AV Mute</span></td>
                  <td v-if="TableRowData.Status">{{TableRowData.Status.AVMute}}</td>
                  <td v-else></td>
                </tr>
                <tr>
                  <td>MAC Address</td>
                  <td v-if="TableRowData.Deviceinfo">{{TableRowData.Deviceinfo.MACAddress}}</td>
                  <td v-else></td>
                  <td><span class="label label-warning">Mute</span></td>
                  <td v-if="TableRowData.Status">{{TableRowData.Status.Mute}}</td>
                  <td v-else></td>
                </tr>
                <tr>
                  <td>IP Address</td>
                  <td v-if="TableRowData.Deviceinfo">{{TableRowData.Deviceinfo.IPAddress}} <br> <a class="btn-edit-btn" href="#">Edit</a></td>
                  <td v-else></td>
                  <td><span class="label label-danger">Picture Mode:</span></td>
                  <td v-if="TableRowData.Status">{{TableRowData.Status.PictureMode}}</td>
                  <td v-else></td>
                </tr>
                <tr>
                  <td>Serial Number:</td>
                  <td v-if="TableRowData.Deviceinfo">{{TableRowData.Deviceinfo.SerialNumber}}</td>
                  <td v-else></td>
                  <td><span class="label label-primary">Ambient Sensor</span></td>
                  <td v-if="TableRowData.Status">{{TableRowData.Status.AspectRatio}}</td>
                  <td v-else></td>
                </tr>
                <tr>
                  <td>Group</td>
                  <td v-if="TableRowData.Deviceinfo">{{TableRowData.Deviceinfo.Version}}</td>
                  <td v-else></td>
                  <td><span class="label label-danger">AV Mute</span></td>
                  <td v-if="TableRowData.Status">{{TableRowData.Status.AmbientSensor}}</td>
                  <td v-else></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td><span class="label label-danger">Error</span></td>
                  <td v-if="TableRowData.Status">{{TableRowData.Status.Error}}</td>
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
                <p>CPU <span v-if="TableRowData.Status">{{TableRowData.Status.CPU}}%</span></p>
              </div>
            </div>
            <div class="progress-radial progress-55 setsize">
              <div class="overlay setsize">
                <p>Memory <span v-if="TableRowData.Status">{{TableRowData.Status.Memory}}%</span></p>
              </div>
            </div>
            <div class="progress-radial progress-30 setsize">
              <div class="overlay setsize">
                <p>Network <span v-if="TableRowData.Status">{{TableRowData.Status.Network}}Mbps</span></p>
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
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
