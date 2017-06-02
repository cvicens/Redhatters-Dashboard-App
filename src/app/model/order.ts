export class Order {
  constructor(
    public id: string,
    public title: string,
    public correlationId: string,
    public workflowId: string,
    public assignee: string,
    public vehicle: string,
    public type: string, // has to be Order
    public subtype: string, // has to be EPOD
    public status: string,
    public startTimestamp: string, //2016-08-22T20:00:00Z
    public address: string,
    public location: number[],
    public completedAction: string,
    public ticketDate: string,
    public ticketTime: string,
    public ticketNumber: string,
    public addressDetail: string,
    public addressStreet: string,
    public addressPostalCode: string,
    public addressCity: string,
    public instructions: string,
    public customerName: string,
    public account: string,
    public po: string,
    public contract: string,
    public callOff: string,
    public summary: string,
    public originName: string,
    public originPhone: string,
    public product: string,
    public thisLoad: number,
    public pourSoFar: number,
    public totalOrdered: number,
    public volumeUnit: string,
    public brand: string,
    public works: string,

    public name: string,
    public power: string,
    public alterEgo?: string,
    
  ) {  }

    public static makeid(n: number) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( var i=0; i < n; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    private static getFormattedTime(date: Date) {
        return ('0' + date.getHours()).slice(-2) + ':' + ('0' + (date.getMinutes()+1)).slice(-2);
    }

    private static getFormattedDate(date: Date) {
        return ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth()+1)).slice(-2) + '/' + date.getFullYear();
    }

  /**
   * generateOrder
   */
  public static generateOrder(generatedId: string, correlationId: string, title: string, assignee: string) {
    let now = new Date();
    let workflowId = "i4Hfpab2R";
    let vehicle = "4156";
    let type = "Job Order";
    let subtype = "EPOD";
    let status = "New";
    let startTimestamp = "2016-08-22T20:00:00Z";
    let address = "16-17 Avenue Elmers, KT6 4SE, Surbiton";
    let location = [51.3960439,-0.3025582];
    let completedAction = 'START';
    let ticketDate = Order.getFormattedDate(now);
    let ticketTime = Order.getFormattedTime(now);
    let ticketNumber = '12345678';
    let addressDetail = 'C/O Bespoke';
    let addressStreet = '16-17 Avenue Elmers';
    let addressPostalCode = 'KT6 4SE';
    let addressCity = 'Surbiton';
    let instructions = 'HOT WATER Y/N HOT WATER ADDED AT CUSTOMER REQUEST';
    let customerName = 'Reynolds Groundwork Services Ltd.';
    let account = '3283448';
    let po = 'P9999';
    let contract = '4567887';
    let callOff = '2144333';
    let summary = 'Normal EPOD';
    let originName = 'Tolworth RMX Prodn';
    let originPhone = '07111222333';
    let product = 'GEN1 20mm CIIIA S1';
    let thisLoad = 8.0;
    let pourSoFar = 0.0;
    let totalOrdered = 8.0;
    let volumeUnit = 'm3';
    let brand = 'AI';
    let works = 'TOL';

    return new Order(generatedId, title, correlationId, workflowId,
    assignee, vehicle, type, subtype, status, startTimestamp,
    address, location, completedAction,  ticketDate, ticketTime, 
    ticketNumber, addressDetail, addressStreet, addressPostalCode, addressCity,
    instructions, customerName, account, po, contract, callOff, summary,
    originName, originPhone, product, thisLoad, pourSoFar, totalOrdered,
    volumeUnit, brand, works, '', '', '');
  }
}