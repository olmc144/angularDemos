import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {
  img="https://dam.muyinteresante.com.mx/wp-content/uploads/2020/04/error-404.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
