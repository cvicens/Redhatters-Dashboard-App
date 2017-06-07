import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {NgbTypeaheadConfig} from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { FHService } from '../../service/fh.service';

const cities = [ 'Madrid', 'Lisbon', 'Paris', 'Munich'];
const departments = [ 'Sales', 'Presales', 'Marketing', 'HR'];
const depAbrv = {
  Sales: 'S',
  Presales: 'PS',
  Marketing: 'MK',
  HR: 'HR'
};

const resultAbrv = {
  CORRECT: 'OK',
  WRONG: 'KO'
};

const INITIAL_DATA_SETS = [
  {stack: 'CORRECT', data: [0, 0, 0, 0, 0], label: 'CORRECT-SALES'},
  {stack: 'CORRECT', data: [0, 0, 0, 0, 0], label: 'CORRECT-PRESALES'},
  {stack: 'CORRECT', data: [0, 0, 0, 0, 0], label: 'CORRECT-MARKETING'},
  {stack: 'CORRECT', data: [0, 0, 0, 0, 0], label: 'CORRECT-HR'},

  {stack: 'WRONG',   data: [0, 0, 0, 0, 0], label: 'WRONG-SALES'},
  {stack: 'WRONG',   data: [0, 0, 0, 0, 0], label: 'WRONG-PRESALES'},
  {stack: 'WRONG',   data: [0, 0, 0, 0, 0], label: 'WRONG-MARKETING'},
  {stack: 'WRONG',   data: [0, 0, 0, 0, 0], label: 'WRONG-HR'}
];

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

  // Department
  public department: string;

  // Date
  public date: any;

  // Events
  private event;
  private events = [];

  // Quiz results
  private answers = [];

  // Top
  private topUsers: any[];
  private topDepartments: any[];

  // Barchart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [{
        stacked: true
      }],
      yAxes: [{
        stacked: true,
        ticks: { beginAtZero: true }
      }]
    }
  };

  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartLabels: string[] = ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5'];
  public barChartData: any[] = INITIAL_DATA_SETS;
  public barChartColors: any[] = [
     { backgroundColor: 'rgba(196, 30, 61,0.6)', borderColor: 'rgba(196, 30, 61,1)' },
     { backgroundColor: 'rgba(164, 14, 76,0.6)', borderColor: 'rgba(164, 14, 76,1)' },
     { backgroundColor: 'rgba(137,  2, 62,0.6)', borderColor: 'rgba(137,  2, 62,1)' },
     { backgroundColor: 'rgba(234, 99,140,0.6)', borderColor: 'rgba(234, 99,140,1)' },

     { backgroundColor: 'rgba( 50,151, 73,0.6)', borderColor: 'rgba( 50,151, 73,1)' },
     { backgroundColor: 'rgba(161,195, 48,0.6)', borderColor: 'rgba(161,195, 48,1)' },
     { backgroundColor: 'rgba(202,213,147,0.6)', borderColor: 'rgba(202,213,147,1)' },
     { backgroundColor: 'rgba( 19,117, 71,0.6)', borderColor: 'rgba( 19,117, 71,1)' },
  ];

  //public barChartLabels: string[];
  //public barChartData: any[];

  // constructor
  constructor(private fhService: FHService, config: NgbTypeaheadConfig) {
    // customize default values of typeaheads used by this component tree
    config.showHint = true;
  }

  searchCity = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : cities.filter(v => v.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10));

  searchDepartment = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : departments.filter(v => v.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10));

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
        this.answers = results;
        if (Array.isArray(this.answers) && this.answers.length > 0) {
          this.generateChartDataAllDepartments (this.answers);
        } else {
          this.barChartData = INITIAL_DATA_SETS;
          this.topDepartments = [];
          this.topUsers = [];
        }
      })
      .catch((err) => {
        console.error('Error in searchAnswersByEventIdAndQuizId', err);
      });
    }
  }

  getUniqueQuestionsFromReceivedAnswers = () : any[] => {
    return this.answers
      .map(function(elem, i, array) { // Run through the results and get all the questions
        return elem.question;
      })
      .filter(function(elem, i, array) { // Filter out duplicates
        return array.indexOf(elem) === i;
      }).sort(); // We need to sort.. otherwise result will fall in a different question!
  }

  getUniqueResultsFromReceivedAnswers = () : any[] => {
    return this.answers
      .map(function(elem, i, array) { // Run through the result of each answer to a question
        return elem.result;
      })
      .filter(function(elem, i, array) { // Filter out duplicates
        return array.indexOf(elem) === i;
      });
  }

  getLabel = (department, result) : string => {
    return depAbrv[department] + '-' + resultAbrv[result];
  }

  getTopUsers =  () : any[] => {
    var topUsersObject = this.answers
      .filter(function(elem, i, array) { // Filter out duplicates
        return elem.result === 'CORRECT';
      })
      .map(function(elem, i, array) { // Run through the result of each answer to a question
        return { username: elem.username, question: elem.question};
      })
      .reduce((accumulator, elem) => { // Sum results per result (CORRECT, WRONG) => CORRECT answers and WRONG answers per question
        accumulator[elem.username] = (accumulator[elem.username] || 0) + 1;
        return accumulator;
      }, {});

    return Object.keys(topUsersObject).map((key, i, array) => {
        return {username: key, score: topUsersObject[key]};
      })
      .sort((a, b) => {
        return b.score - a.score;
      })
      .filter(function(elem, i) { // Filter out under index 5
        return i < 5;
      });
  }

  getTopDepartments =  () : any[] => {
    var topDeparmentsObject = this.answers
      .filter(function(elem, i, array) { // Filter out duplicates
        return elem.result === 'CORRECT';
      })
      .map(function(elem, i, array) { // Run through the result of each answer to a question
        return { department: elem.department, question: elem.question};
      })
      .reduce((accumulator, elem) => { // Sum results per result (CORRECT, WRONG) => CORRECT answers and WRONG answers per question
        accumulator[elem.department] = (accumulator[elem.department] || 0) + 1;
        return accumulator;
      }, {});

    return Object.keys(topDeparmentsObject).map((key, i, array) => {
        return {name: key, score: topDeparmentsObject[key]};
      })
      .sort((a, b) => {
        return b.score - a.score;
      })
      .filter(function(elem, i) { // Filter out under index 5
        return i < 5;
      });
  }

  generateChartDataAllDepartments = (results: any[]) => {
    console.log(this.barChartLabels);
    console.log(this.barChartData);

    this.topUsers = this.getTopUsers();
    console.log('topUsers', this.topUsers);

    this.topDepartments = this.getTopDepartments();
    console.log('topDepartments', this.topDepartments);

    // Labels X-axis values come from the questions... so far just the number of questions
    const uniqueQuestions = this.getUniqueQuestionsFromReceivedAnswers();
    console.log('uniqueQuestions', uniqueQuestions);

    // PROBLEMS GENERATING LABELS DYNAMICALLY
    // Labels are the literal 'Question ' [plus the question (which is a zero index of the array of questions in the quiz) + 1]
    this.barChartLabels = uniqueQuestions.map ((elem) => 'Question ' + (elem + 1));
    //console.log(this.barChartLabels);

    // Series of data are based on the result (CORRECT, WRONG, ...)
    var uniqueResults = this.getUniqueResultsFromReceivedAnswers();
    console.log('uniqueResults', uniqueResults);

    // For each question (X-axis value)
    var answersByQuestions = [];
    uniqueQuestions.forEach((currentQuestion, index) => {
      // Let's accumulate values per result (CORRECT, WRONG)
      var resultsByCurrentQuestion = this.answers
      .filter((elem, i, array) => {
        return this.department ? elem.department.toLowerCase() === this.department.toLowerCase() : true;
      })
      .filter((elem, i, array) => { // Only results for current question
        return elem.question === currentQuestion;
      })
      .reduce((accumulator, elem) => { // Sum results per result (CORRECT, WRONG) => CORRECT answers and WRONG answers per question
        accumulator[elem.result] = (accumulator[elem.result] || 0) + 1;
        return accumulator;
      }, {});

      answersByQuestions.push(resultsByCurrentQuestion);
    });
    console.log (answersByQuestions);

    // Totals
    var totals = answersByQuestions.map((result) => {
      var data = Object.keys(result).map((key, i, array) => {
        return result[key];
      }).reduce((accumulator, elem) => {
        return accumulator + elem;
      }, 0);
      return data;
    });
    console.log('totals', totals);

    // For each unique result (CORRECT, WRONG)
    var _departments = this.department ? [this.department] : departments;
    var answersByUniqueResult = [];
    uniqueResults.forEach((currentUniqueResult, index) => {
      _departments.forEach((currentDepartment) => {
        // Les's accumulate answers per question for current result (CORRECT, WRONG)
        let answersByCurrentUniqueResult = this.answers
        .filter((elem, i, array) => {
          return elem.department.toLowerCase() === currentDepartment.toLowerCase(); // Filter by department (SALES, ...)
        })
        .filter((elem, i, array) => { // Filter out other results but the current unique result (CORRECT, WRONG, ...)
          return elem.result === currentUniqueResult;
        })
        .reduce((accumulator, elem) => { // Accumulate answers per question for current unique result Q1=>2xCORRECT, Q2=>1xCORRECT, etc.
          accumulator.data[elem.question] = (accumulator.data[elem.question] || 0) + 1;
          return accumulator;
        }, {stack: currentUniqueResult, label: this.getLabel(currentDepartment, currentUniqueResult), data: {}});

        answersByUniqueResult.push(answersByCurrentUniqueResult);
      });
    });
    console.log('Antes de barChartData', answersByUniqueResult);

    // barChartData => array of series, in our case, 1 serie per unique result => label CORRECT, label WRONG
    this.barChartData = answersByUniqueResult.map((result) => { // Per unique result
      const data = uniqueQuestions.map((currentQuestion, index) => {
        //return result.data[currentQuestion] / totals[index] * 100 || 0;
        return result.data[currentQuestion] || 0;
      });
      return {stack: result.stack, label: result.label, data: data};
    });

    console.log('barChartData', this.barChartData);

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
