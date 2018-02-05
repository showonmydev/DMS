import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    data: {
      TPE01: {'TPE01D01': [{'Deviceinfo': {
        'name': 'TPE02-D01 This is 1',
        'model': 'ST550K',
        'type': 'Display',
        'group': 'TPE02',
        'MACAddress': 'B0-C5-CA-70-00-10',
        'IPAddress': '10.27.27.89',
        'SerialNumber': '236131200059XA0014',
        'Version': '2.0.2_WW'
      },
      'Status': {
        'Power': 'This is 1 on',
        'Source': 'Android',
        'Signal Status': 'Stable',
        'AVMute': 'on',
        'Mute': 'off',
        'PictureMode': 'N/A',
        'AspectRatio': 'N/A',
        'AmbientSensor': 'N/A',
        'Error': 'No error',
        'CPU': '20',
        'Memory': '61',
        'Network': '1.2'
      }},
      {'Deviceinfo': {
        'name': 'TPE02-D01 This is 2',
        'model': 'ST550K',
        'type': 'Display',
        'group': 'TPE02',
        'MACAddress': 'B0-C5-CA-70-00-10',
        'IPAddress': '10.27.27.89',
        'SerialNumber': '236131200059XA0014',
        'Version': '2.0.2_WW'
      },
      'Status': {
        'Power': 'This is 2 on',
        'Source': 'Android',
        'SignalStatus': 'Stable',
        'AVMute': 'on',
        'Mute': 'off',
        'PictureMode': 'N/A',
        'AspectRatio': 'N/A',
        'AmbientSensor': 'N/A',
        'Error': 'No error',
        'CPU': '20',
        'Memory': '61',
        'Network': '1.2'
      }}],
      'TPE01-D023': [{'Deviceinfo': {
        'name': 'TPE02-D01 Part 2 info',
        'model': 'ST550K',
        'type': 'Display',
        'group': 'TPE02',
        'MACAddress': 'B0-C5-CA-70-00-10',
        'IPAddress': '10.27.27.89',
        'SerialNumber': '236131200059XA0014',
        'Version': '2.0.2_WW'
      },
      'Status': {
        'Power': 'on Part 2 info',
        'Source': 'Android',
        'Signal Status': 'Stable',
        'AVMute': 'on',
        'Mute': 'off',
        'Picture Mode': 'N/A',
        'Aspect Ratio': 'N/A',
        'Ambient Sensor': 'N/A',
        'Error': 'No error',
        'CPU': '20',
        'Memory': '61',
        'Network': '1.2'
      }},
      {'Deviceinfo': {
        'name': 'TPE02-D01 Part 3 on',
        'model': 'ST550K',
        'type': 'Display',
        'group': 'TPE02',
        'MACAddress': 'B0-C5-CA-70-00-10',
        'IPAddress': '10.27.27.89',
        'SerialNumber': '236131200059XA0014',
        'Version': '2.0.2_WW'
      },
      'Status': {
        'Power': 'on Part 4 on',
        'Source': 'Android',
        'Signal Status': 'Stable',
        'AVMute': 'on',
        'Mute': 'off',
        'PictureMode': 'N/A',
        'AspectRatio': 'N/A',
        'Ambient Sensor': 'N/A',
        'Error': 'No error',
        'CPU': '20',
        'Memory': '61',
        'Network': '1.2'
      }}]},
      TPE02: {'TPE02-D01': [{'Deviceinfo': {
        'name': 'TPE02-D01 This is 33',
        'model': 'ST550K',
        'type': 'Display',
        'group': 'TPE02',
        'MACAddress': 'B0-C5-CA-70-00-10',
        'IPAddress': '10.27.27.89',
        'SerialNumber': '236131200059XA0014',
        'Version': '2.0.2_WW'
      },
      'Status': {
        'Power': 'on This is 33 Status',
        'Source': 'Android',
        'Signal Status': 'Stable',
        'AVMute': 'on',
        'Mute': 'off',
        'PictureMode': 'N/A',
        'AspectRatio': 'N/A',
        'AmbientSensor': 'N/A',
        'Error': 'No error',
        'CPU': '20',
        'Memory': '61',
        'Network': '1.2'
      }},
      {'Deviceinfo': {
        'name': 'TPE02-D01 This is under 33 Status',
        'model': 'ST550K',
        'type': 'Display',
        'group': 'TPE02',
        'MACAddress': 'B0-C5-CA-70-00-10',
        'IPAddress': '10.27.27.89',
        'SerialNumber': '236131200059XA0014',
        'Version': '2.0.2_WW'
      },
      'Status': {
        'Power': 'on status 33 under',
        'Source': 'Android',
        'SignalStatus': 'Stable',
        'AVMute': 'on',
        'Mute': 'off',
        'PictureMode': 'N/A',
        'AspectRatio': 'N/A',
        'AmbientSensor': 'N/A',
        'Error': 'No error',
        'CPU': '20',
        'Memory': '61',
        'Network': '1.2'
      }}],
      'TPE02-D0161': [{'Deviceinfo': {
        'name': 'TPE02-D01 Hello check',
        'model': 'ST550K',
        'type': 'Display',
        'group': 'TPE02',
        'MACAddress': 'B0-C5-CA-70-00-10',
        'IPAddress': '10.27.27.89',
        'SerialNumber': '236131200059XA0014',
        'Version': '2.0.2_WW'
      },
      'Status': {
        'Power': 'on hello check 1',
        'Source': 'Android',
        'Signal Status': 'Stable',
        'AVMute': 'on',
        'Mute': 'off',
        'Picture Mode': 'N/A',
        'Aspect Ratio': 'N/A',
        'Ambient Sensor': 'N/A',
        'Error': 'No error',
        'CPU': '20',
        'Memory': '61',
        'Network': '1.2'
      }},
      {'Deviceinfo': {
        'name': 'TPE02-D01',
        'model': 'ST550K',
        'type': 'Display',
        'group': 'TPE02',
        'MACAddress': 'B0-C5-CA-70-00-10',
        'IPAddress': '10.27.27.89',
        'SerialNumber': '236131200059XA0014',
        'Version': '2.0.2_WW'
      },
      'Status': {
        'Power': 'on',
        'Source': 'Android',
        'Signal Status': 'Stable',
        'AVMute': 'on',
        'Mute': 'off',
        'PictureMode': 'N/A',
        'AspectRatio': 'N/A',
        'Ambient Sensor': 'N/A',
        'Error': 'No error',
        'CPU': '20',
        'Memory': '61',
        'Network': '1.2'
      }}]}
    }
  }
})

export default store
