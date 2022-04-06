import { Component, OnInit} from '@angular/core';
import { Car } from '../interface/Car-Interface';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  vehicle:Car= {carName:'',img:''}
  
 
  constructor() {
  
   }
  
 
  ngOnInit(): void {
  }
 

}
