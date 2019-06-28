import { Component, OnInit } from '@angular/core';
import { CallsService } from './../services/calls.service';

@Component({
  selector: 'app-dogfood',
  templateUrl: './dogfood.page.html',
  styleUrls: ['./dogfood.page.scss'],
})
export class DogfoodPage implements OnInit {
  foods = null;
  constructor(private dogFoodService: CallsService) { }

  ngOnInit() {
    this.dogFoodService.getDogFood().subscribe(result => {
      this.foods = result;
    });

  }

  openWebsite() {
    window.open(this.foods, '_blank');
  }


}
