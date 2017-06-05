import { Injectable } from '@angular/core';

import { Order } from '../model/order';

import * as $fh from 'fh-js-sdk';

@Injectable()
export class FHService {

  constructor() { }

  sayHello = (endpoint: string, method: string, name: string) => {
    return new Promise<any>(function(resolve, reject) {
      var params = {
          path: endpoint,
          method: method,
          contentType: 'application/json',
          data: { hello: name },
          timeout: 15000
        };

        $fh.cloud(
          params, 
          function(data) {
            resolve(data);
          }, 
          function(msg, err) {
            // An error occurred during the cloud call. Alert some debugging information
            console.log('Cloud call failed with error message:' + msg + '. Error properties:' + JSON.stringify(err));
            reject({msg: msg, err: err});
          });
    });
  }

  postOrder = (endpoint: string, method: string, order: Order) => {
    return new Promise<any>(function(resolve, reject) {
      var params = {
          path: endpoint,
          method: method,
          contentType: 'application/json',
          data: order,
          timeout: 15000
        };

        $fh.cloud(
          params, 
          function(data) {
            resolve(data);
          }, 
          function(msg, err) {
            // An error occurred during the cloud call. Alert some debugging information
            console.log('Cloud call failed with error message:' + msg + '. Error properties:' + JSON.stringify(err));
            reject({msg: msg, err: err});
          });
    });
  }

  getEventsAtLocation = (country: string, city: string) => {
    return new Promise<any>(function(resolve, reject) {
      if (!country || !city) {
        reject({err: 'Not enough or good parameters country: ' + country + ' city: ' + city});
      }

      const filter = {
        eq: {
          country: country,
          city: city
        }
      };

      const params = {
        path: 'events',
        method: 'POST',
        contentType: 'application/json',
        data: filter,
        timeout: 15000
      };

      $fh.cloud(
        params,
        function(data) {
          resolve(data);
        }, 
        function(msg, err) {
          // An error occurred during the cloud call. Alert some debugging information
          console.log('Cloud call failed with error message:' + msg + '. Error properties:' + JSON.stringify(err));
          reject({msg: msg, err: err});
        });
    });
  }

  getEventsAtCityOnDate = (city: string, date: string) => {
    return new Promise<any>(function(resolve, reject) {
      if (!city || city.length <= 0) {
        reject({err: 'Not enough or good parameters city: ' + city});
      }

      const filter = {
        eq: {
          city: city.toUpperCase(),
          date: date
        }
      };

      const params = {
        path: 'events',
        method: 'POST',
        contentType: 'application/json',
        data: filter,
        timeout: 15000
      };

      $fh.cloud(
        params,
        function(data) {
          resolve(data);
        },
        function(msg, err) {
          // An error occurred during the cloud call. Alert some debugging information
          console.log('Cloud call failed with error message:' + msg + '. Error properties:' + JSON.stringify(err));
          reject({msg: msg, err: err});
        });
    });
  }

  searchAnswersByEventIdAndQuizId = (eventId: string, quizId: string) => {
    return new Promise<any>(function(resolve, reject) {
      if (!eventId || eventId.length <= 0 ||
          !quizId || quizId.length <= 0) {
        reject({err: 'Not enough or good parameters eventId: ' + eventId + ' quizId: ' + quizId});
      }

      const filter = {
        eq: {
          eventId: eventId,
          quizId: quizId
        }
      };

      const params = {
        path: 'answers/search',
        method: 'POST',
        contentType: 'application/json',
        data: filter,
        timeout: 15000
      };

      $fh.cloud(
        params,
        function(data) {
          resolve(data);
        },
        function(msg, err) {
          // An error occurred during the cloud call. Alert some debugging information
          console.log('Cloud call failed with error message:' + msg + '. Error properties:' + JSON.stringify(err));
          reject({msg: msg, err: err});
        });
    });
  }
}
