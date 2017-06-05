import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {NgbTypeaheadConfig} from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { FHService } from '../../service/fh.service';

const cities = [ 'Madrid', 'Lisbon', 'Paris', 'Munich'];

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  providers: [NgbTypeaheadConfig]
})
export class ChartComponent implements OnInit {
  public model: any;

  // City
  public city: string;

  // Date
  public date: any;

  // Events
  private event;
  private events = [];

  // Quiz results
  private results = [];

  // Barchart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartLabels: string[] = ['Question 1', 'Question 2', 'Question 3'];
  public barChartData: any[] = [
    {data: [5, 2, 3], label: 'CORRECT'},
    {data: [4, 1, 0], label: 'WRONG'}
  ];

  // constructor
  constructor(private fhService: FHService, config: NgbTypeaheadConfig) {
    // customize default values of typeaheads used by this component tree
    config.showHint = true;
  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : cities.filter(v => v.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10));

  ngOnInit() {
  }

  newCityValue = ($event) => {
    console.log('newCityValue', $event);
    if (!this.city || this.city.length <= 0) {
      this.date = null;
    }
  }

  selectEvent = (eventIdx) => {
    console.log('selectEvent', eventIdx);

    if (!Array.isArray(this.events) || eventIdx < 0 || eventIdx >= this.events.length) {
      console.error('selectEvent assertion error! eventIdx: ', eventIdx, 'this.events', this.events);
    }

    this.event = this.events[eventIdx];
    this.searchAnswersByEventIdAndQuizId (this.event.id, this.event.quizId);
  }

  searchEventsEnabled = () => {
    return this.city && this.city.length > 0 && this.date;
  }

  getFormattedDate(date) {
    return  date.getFullYear() + ('0' + (date.getMonth() + 1)).slice(-2) + ('0' + date.getDate()).slice(-2);
  }

  formatDateForSearch = (date) => {
    if (date && date.year && date.month && date.day) {
      return date.year + '-' + ('0' + (date.month)).slice(-2) + '-' + ('0' + date.day).slice(-2);
    }
    throw Error('ERROR when formatting date for search');
  }

  searchEvents = () => {
    if (this.city && this.date) {
      this.fhService.getEventsAtCityOnDate(this.city, this.formatDateForSearch(this.date))
      .then((events) => {
        this.events = events;
        if (this.events.length === 1) {
          this.event = this.events[0];
          this.searchAnswersByEventIdAndQuizId (this.event.id, this.event.quizId);
        }
      })
      .catch((err) => {
        console.error('Error in searchEvents', err);
      });
    }
  }

  searchAnswersByEventIdAndQuizId = (eventId: string, quizId: string) => {
    if (this.city && this.date) {
      this.fhService.searchAnswersByEventIdAndQuizId(eventId, quizId)
      .then((results) => {
        this.results = results;

        this.generateChartData (this.results);
      })
      .catch((err) => {
        console.error('Error in searchAnswersByEventIdAndQuizId', err);
      });
    }
  }

  generateChartData = (results: any[]) => {
    console.log(this.barChartLabels);
    console.log(this.barChartData);

    // Labels come from the questions... so far just the number of questions
    var uniqueResults = this.results
      .map(function(elem, i, array) {
        return elem.result;
      })
      .filter(function(elem, i, array) {
        return array.indexOf(elem) === i;
      });
    
    var questions = this.results
      .map(function(elem, i, array) {
        return elem.question;
      })
      .filter(function(elem, i, array) {
        return array.indexOf(elem) === i;
      });

    this.barChartLabels = questions.map ((elem) => 'Question ' + (elem + 1));

    console.log(this.barChartLabels);

    var resultsByQuestion = [];
    questions.forEach((currentQuestion, index) => {

      var resultByQuestion = this.results
      .filter((elem, i, array) => {
        return elem.question === currentQuestion;
      })
      .reduce((accumulator, elem) => {
        accumulator[elem.result] = (accumulator[elem.result] || 0) + 1;
        return accumulator;
      }, {});

      resultsByQuestion.push(resultByQuestion);
    });

    var resultsByUniqueResult = [];
    uniqueResults.forEach((currentUniqueResult, index) => {

      var _resultsByUniqueResult = this.results
      .filter((elem, i, array) => {
        return elem.result === currentUniqueResult;
      })
      .reduce((accumulator, elem) => {
        accumulator.data[elem.question] = (accumulator.data[elem.question] || 0) + 1;
        return accumulator;
      }, {label: currentUniqueResult, data: {}});

      resultsByUniqueResult.push(_resultsByUniqueResult);
    });

    console.log(resultsByUniqueResult);

    this.barChartData = resultsByUniqueResult.map((result) => {
      var data = Object.keys(result.data).map((key, i, array) => {
        return result.data[key];
      });

      return {label: result.label, data: data};
    });


    console.log(this.barChartData);
    

  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
}
