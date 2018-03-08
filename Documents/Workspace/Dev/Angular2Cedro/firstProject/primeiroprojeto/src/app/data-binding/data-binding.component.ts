import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

url = 'http://loiane.com';
urlImagem = 'http://media.calsportscamps.com/assets/images/sports/field-hockey/type_fieldhockey_spring_400x200.jpg';

  constructor() { }

  ngOnInit() {
  }

}
