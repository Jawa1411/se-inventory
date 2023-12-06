import { Component, OnInit } from '@angular/core';
import itemsList from '../assets/items.json';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

interface item {
  Name: string,
  Price: number,
  InStock: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'se-inventory';
  itemsList: item[] = itemsList;
  ItemForm = this.formBuilder.group({
    Name: '',
    Price: '',
    InStock: ''
  });

  constructor (
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.ItemForm.value);
  }
}
