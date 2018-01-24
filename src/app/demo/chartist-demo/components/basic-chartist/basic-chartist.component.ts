import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChartType, ChartEvent, ChartOptions } from 'ng-chartist';

export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

export interface LiveData {
  labels: string[];
  series: Array<Array<number>>;
}

@Component({
  selector: 'app-basic-chartist',
  templateUrl: './basic-chartist.component.html',
  styleUrls: ['./basic-chartist.component.scss']
})
export class BasicChartistComponent implements OnInit, OnDestroy {
  chart: Chart;
  liveData: LiveData;
  options: ChartOptions;
  interval;
  constructor() {}

  ngOnInit() {
    this.liveData = {
      labels: [],
      series: [[]]
    };
    this.options = {
      fullWidth: true
    };

    this.chart = {
      type: 'Line',
      data: this.liveData,
      options: this.options
    };
    this.dummyData();
  }

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  private dummyData() /* : Chartist.IChartistData */ {
    this.interval = setInterval(() => {
      const time: Date = new Date();
      const formattedTime: string = [time.getHours(), time.getMinutes(), time.getSeconds()].join(':');
      const random: number = this.getRandomInt(1, 40);

      const labels = this.liveData.labels;
      const series = this.liveData.series[0];

      if (labels.length >= 20) {
        // time to splice
        labels.splice(0, 1);
        series.splice(0, 1);
      }
      labels.push(formattedTime);
      series.push(random);

      console.log('labels', labels);
      this.liveData = Object.assign({}, this.liveData);
    }, 1000);

    /* return {
      'labels': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      'series': [
        [
          12, 9, 7, 8, 5
        ]
      ]
    } as Chartist.IChartistData; */
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
