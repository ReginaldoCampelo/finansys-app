import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fns-font-aewsome',
  template: `
    <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>
  `,
  styleUrls: ['./font-aewsome.component.css']
})
export class FontAewsomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
