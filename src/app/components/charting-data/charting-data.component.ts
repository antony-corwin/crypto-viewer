import {Component, OnInit} from '@angular/core';
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-charting-data',
  templateUrl: './charting-data.component.html',
  styleUrls: ['./charting-data.component.scss'],
  providers: [MessageService]
})
export class ChartingDataComponent implements OnInit {

  basicData: any;

  // multiAxisData: any;
  //
  // multiAxisOptions: any;

  lineStylesData: any;

  basicOptions: any;

  // subscription: Subscription;

  // config: AppConfig;

  constructor(private messageService: MessageService,
              // private configService: AppConfigService
  ) {
  }

  ngOnInit(): void {

    let historicalData = localStorage['historical-data'];
    let dataArr = JSON.parse(historicalData).data;
    let data: any[] = [];
    dataArr.map((el: any) => {
      data.push(el.price);
    })
    this.basicData = {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      datasets: [
        {
          label: 'Historical Prices',
          data: data,
          fill: false,
          borderColor: '#42A5F5',
          tension: 0.4
        }
      ]
    };
    console.log(data);
  }

}

// export class LineChartDemo implements OnInit {
//
//
//
//   constructor() {}
//
//   ngOnInit() {
//
//
//     this.multiAxisData = {
//       labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//       datasets: [{
//         label: 'Dataset 1',
//         fill: false,
//         borderColor: '#42A5F5',
//         yAxisID: 'y',
//         tension: .4,
//         data: [65, 59, 80, 81, 56, 55, 10]
//       }, {
//         label: 'Dataset 2',
//         fill: false,
//         borderColor: '#00bb7e',
//         yAxisID: 'y1',
//         tension: .4,
//         data: [28, 48, 40, 19, 86, 27, 90]
//       }]
//     };
//
//     this.multiAxisOptions = {
//       stacked: false,
//       plugins: {
//         legend: {
//           labels: {
//             color: '#495057'
//           }
//         }
//       },
//       scales: {
//         x: {
//           ticks: {
//             color: '#495057'
//           },
//           grid: {
//             color: '#ebedef'
//           }
//         },
//         y: {
//           type: 'linear',
//           display: true,
//           position: 'left',
//           ticks: {
//             color: '#495057'
//           },
//           grid: {
//             color: '#ebedef'
//           }
//         },
//         y1: {
//           type: 'linear',
//           display: true,
//           position: 'right',
//           ticks: {
//             color: '#495057'
//           },
//           grid: {
//             drawOnChartArea: false,
//             color: '#ebedef'
//           }
//         }
//       }
//     };
//
//     this.lineStylesData = {
//       labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//       datasets: [
//         {
//           label: 'First Dataset',
//           data: [65, 59, 80, 81, 56, 55, 40],
//           fill: false,
//           tension: .4,
//           borderColor: '#42A5F5'
//         },
//         {
//           label: 'Second Dataset',
//           data: [28, 48, 40, 19, 86, 27, 90],
//           fill: false,
//           borderDash: [5, 5],
//           tension: .4,
//           borderColor: '#66BB6A'
//         },
//         {
//           label: 'Third Dataset',
//           data: [12, 51, 62, 33, 21, 62, 45],
//           fill: true,
//           borderColor: '#FFA726',
//           tension: .4,
//           backgroundColor: 'rgba(255,167,38,0.2)'
//         }
//       ]
//     };
//
//     this.config = this.configService.config;
//     this.updateChartOptions();
//     this.subscription = this.configService.configUpdate$.subscribe(config => {
//       this.config = config;
//       this.updateChartOptions();
//     });
//   }
//
//   updateChartOptions() {
//     if (this.config.dark)
//       this.applyDarkTheme();
//     else
//       this.applyLightTheme();
//   }
//
//   applyLightTheme() {
//     this.basicOptions = {
//       plugins: {
//         legend: {
//           labels: {
//             color: '#495057'
//           }
//         }
//       },
//       scales: {
//         x: {
//           ticks: {
//             color: '#495057'
//           },
//           grid: {
//             color: '#ebedef'
//           }
//         },
//         y: {
//           ticks: {
//             color: '#495057'
//           },
//           grid: {
//             color: '#ebedef'
//           }
//         }
//       }
//     };
//
//     this.multiAxisOptions = {
//       stacked: false,
//       plugins: {
//         legend: {
//           labels: {
//             color: '#495057'
//           }
//         }
//       },
//       scales: {
//         x: {
//           ticks: {
//             color: '#495057'
//           },
//           grid: {
//             color: '#ebedef'
//           }
//         },
//         y: {
//           type: 'linear',
//           display: true,
//           position: 'left',
//           ticks: {
//             color: '#495057'
//           },
//           grid: {
//             color: '#ebedef'
//           }
//         },
//         y1: {
//           type: 'linear',
//           display: true,
//           position: 'right',
//           ticks: {
//             color: '#495057'
//           },
//           grid: {
//             drawOnChartArea: false,
//             color: '#ebedef'
//           }
//         }
//       }
//     };
//   }
//
//   applyDarkTheme() {
//     this.basicOptions = {
//       plugins: {
//         legend: {
//           labels: {
//             color: '#ebedef'
//           }
//         }
//       },
//       scales: {
//         x: {
//           ticks: {
//             color: '#ebedef'
//           },
//           grid: {
//             color: 'rgba(255,255,255,0.2)'
//           }
//         },
//         y: {
//           ticks: {
//             color: '#ebedef'
//           },
//           grid: {
//             color: 'rgba(255,255,255,0.2)'
//           }
//         }
//       }
//     };
//
//     this.multiAxisOptions = {
//       stacked: false,
//       plugins: {
//         legend: {
//           labels: {
//             color: '#ebedef'
//           }
//         }
//       },
//       scales: {
//         x: {
//           ticks: {
//             color: '#ebedef'
//           },
//           grid: {
//             color: 'rgba(255,255,255,0.2)'
//           }
//         },
//         y: {
//           type: 'linear',
//           display: true,
//           position: 'left',
//           ticks: {
//             color: '#ebedef'
//           },
//           grid: {
//             color: 'rgba(255,255,255,0.2)'
//           }
//         },
//         y1: {
//           type: 'linear',
//           display: true,
//           position: 'right',
//           ticks: {
//             color: '#ebedef'
//           },
//           grid: {
//             drawOnChartArea: false,
//             color: 'rgba(255,255,255,0.2)'
//           }
//         }
//       }
//     };
//   }
// }
