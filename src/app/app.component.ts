import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  fieldOptions = [
    {
      name: 'Field 1',
      options: [
        {value: '1', text: 'Option 1'},
        {value: '2', text: 'Option 2'},
      ],
      selected: '1'
    },
    {
      name: 'Field 2',
      options: [
        {value: '1', text: 'Option 1'},
        {value: '3', text: 'Option 3'},
      ],
      selected: '3'
    },
  ];

  budgetOptions = {
    name: 'Budget',
    options: [
      {value: 'wk', text: 'Weekly'},
      {value: 'mt', text: 'Monthly'},
      {value: 'yt', text: 'Yearly'},
      {value: 'bgt', text: 'Budget'},
    ],
    selected: 'wk'
  };

  test(event) {
    console.log('change in filter', event);
  }
}
