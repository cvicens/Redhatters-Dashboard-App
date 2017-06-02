import { Component, OnInit } from '@angular/core';

import { Order } from '../model/order';
import { FormOrder } from '../model/form-order';
import { Assignee } from '../model/assignee';

import { FHService } from '../service/fh.service';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  constructor(private fhService: FHService) { }

  ngOnInit() {
  }

  assignees = [new Assignee('rJeXyfdrH', 'Daisy'), new Assignee('rkX1fdSH', 'Trever')];

  title = 'EPOD TEST';
  assigneeId = this.assignees[0].id;

  //model = new FormOrder ('12', this.title, this.assignees[0]);
  model = new FormOrder ('12', this.title, null);
    
  message = 'No messages so far';
  pushedOrderId = null;

  submitted = false;

  onSubmit() { 
    this.submitted = true; 

    let generatedId = Order.makeid(9);
    let generatedCorrelationId = Order.makeid(9);

    let order = Order.generateOrder(generatedId, generatedCorrelationId, this.model.title, this.model.assignee.id );

    console.log('New order submitted!', JSON.stringify(order));

    this.fhService.postOrder('workorders', 'POST', order)
    .then( (result) => {
      console.log('result', result);
      this.message = capitalizeFirstLetter(result.msg) + ' with id: ' + result.id;
      this.pushedOrderId = result.id;
    })
    .catch( (err) => {
      console.log(err);
      this.message = err;
    });

  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
