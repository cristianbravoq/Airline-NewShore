import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.sass']
})
export class OffersComponent implements OnInit {

  travel: string = ''

  destination = [
    {  trip: 'Moscow',  price: 600.86, img: '../../../../assets/resources/moscow.jpg' },
    {  trip: 'Puerto Rico',  price: 600.86, img: '../../../../assets/resources/puerto-rico.jpg' },
    {  trip: 'Honduras',  price: 600.86, img: '../../../../assets/resources/honduras.jpg' }
  ]

  Destination = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  trip(trip: any) {
    if (trip === 'Moscow')
      this.travel = trip;
    if (trip === 'Puerto Rico')
      this.travel = trip;
    if (trip === 'Honduras')
      this.travel = trip;
  }

}
