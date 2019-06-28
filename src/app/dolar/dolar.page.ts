import { CallsService } from './../services/calls.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dolar',
  templateUrl: './dolar.page.html',
  styleUrls: ['./dolar.page.scss'],
})
export class DolarPage implements OnInit {

  information = null;
  constructor(private exchangeService: CallsService) { }

  
  ngOnInit() {
    // Get the information from the API
    this.exchangeService.getExchange().subscribe(result => {
      this.information = result;
    });

  }

  openWebsite() {
    window.open(this.information.base, '_blank');
  }


}
