import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-user-aquisition',
  templateUrl: './user-aquisition.component.html',
  styleUrls: ['./user-aquisition.component.css']
})
export class UserAquisitionComponent implements OnInit {
  highcharts = Highcharts;
  userData = [
    {
      "time_stamp": "2020-10-16 07:39:04",
      "server_id": 10001,
      "uuid": "543efa211b17d87b89f4f4fb",
      "cash": 19.99,
      "gems": 5500,
      "pay_channel": "google_play"
    },
    {
      "time_stamp": "2020-10-17 01:03:14",
      "server_id": 10001,
      "uuid": "543ff90d1b17d87b90a38d9a",
      "cash": 1.99,
      "gems": 300,
      "pay_channel": "google_play"
    },
    {
      "time_stamp": "2020-10-17 08:57:35",
      "server_id": 10001,
      "uuid": "544062671b17d87b7beb088d",
      "cash": 4.99,
      "gems": 1000,
      "pay_channel": "google_play"
    },
    {
      "time_stamp": "2020-10-17 12:34:23",
      "server_id": 10001,
      "uuid": "54408a801b17d87b82bbaf57",
      "cash": 49.99,
      "gems": 14000,
      "pay_channel": "google_play"
    },
    {
      "time_stamp": "2020-10-17 13:38:05",
      "server_id": 10001,
      "uuid": "54409c231b17d87b974e18b6",
      "cash": 9.99,
      "gems": 2500,
      "pay_channel": "google_play"
    },
    {
      "time_stamp": "2020-10-17 17:42:29",
      "server_id": 10001,
      "uuid": "54406b0b1b17d87b82bbae18",
      "cash": 4.99,
      "gems": 1000,
      "pay_channel": "google_play"
    },
    {
      "time_stamp": "2020-10-17 19:10:56",
      "server_id": 10001,
      "uuid": "543efa211b17d87b89f4f4fb",
      "cash": 4.99,
      "gems": 500,
      "pay_channel": "google_play"
    },
    {
      "time_stamp": "2020-10-18 11:10:42",
      "server_id": 10001,
      "uuid": "543efa211b17d87b89f4f4fb",
      "cash": 9.99,
      "gems": 1250,
      "pay_channel": "google_play"
    },
    {
      "time_stamp": "2020-10-18 12:16:30",
      "server_id": 10001,
      "uuid": "5441e6561b17d87b974e302e",
      "cash": 4.99,
      "gems": 1000,
      "pay_channel": "google_play"
    },
    {
      "time_stamp": "2020-10-18 13:32:25",
      "server_id": 10001,
      "uuid": "543fde7d1b17d87b7beb04cf",
      "cash": 9.99,
      "gems": 2500,
      "pay_channel": "google_play"
    },
    {
      "time_stamp": "2020-10-18 15:16:58",
      "server_id": 10001,
      "uuid": "5440e7b91b17d87b90a399e8",
      "cash": 1.99,
      "gems": 300,
      "pay_channel": "google_play"
    },
    {
      "time_stamp": "2020-10-18 15:33:46",
      "server_id": 10001,
      "uuid": "5440e7b91b17d87b90a399e8",
      "cash": 9.99,
      "gems": 1250,
      "pay_channel": "google_play"
    },
    {
      "time_stamp": "2020-10-18 15:43:59",
      "server_id": 10001,
      "uuid": "5441e6561b17d87b974e302e",
      "cash": 1.99,
      "gems": 150,
      "pay_channel": "google_play"
    },
    {
      "time_stamp": "2020-10-18 19:22:39",
      "server_id": 10001,
      "uuid": "544200c41b17d87b9842e5b7",
      "cash": 1.99,
      "gems": 300,
      "pay_channel": "google_play"
    },
    {
      "time_stamp": "2020-10-18 19:59:16",
      "server_id": 10001,
      "uuid": "5441fd4e1b17d87b7beb2061",
      "cash": 1.99,
      "gems": 300,
      "pay_channel": "google_play"
    },
    {
      "time_stamp": "2020-10-18 20:19:54",
      "server_id": 10001,
      "uuid": "544248ff1b17d87b974e3741",
      "cash": 9.99,
      "gems": 2500,
      "pay_channel": "google_play"
    }
  ]
  chartOptions = {   
    chart: {
       type: "spline"
    },
    title: {
       text: "Monthly Average Temperature"
    },
    subtitle: {
       text: "Source: WorldClimate.com"
    },
    xAxis:{
       categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    yAxis: {          
       title:{
          text:"Temperature °C"
       } 
    },
    tooltip: {
       valueSuffix:" °C"
    },
    series: [
       {
          name: 'Tokyo',
          data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,26.5, 23.3, 18.3, 13.9, 9.6]
       },
       {
          name: 'New York',
          data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8,24.1, 20.1, 14.1, 8.6, 2.5]
       },
       {
          name: 'Berlin',
          data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
       },
       {
          name: 'London',
          data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
       }
    ]
 };
  constructor() { }

  ngOnInit(): void {
  }

}
