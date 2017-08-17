import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FavInJavaScript } from '../favinjs';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
    favorites: FavInJavaScript[] = [
      new FavInJavaScript("array"),
      new FavInJavaScript("loops"),
      new FavInJavaScript("functions"),
      new FavInJavaScript("let - var - const"),
      new FavInJavaScript("typescript compiles to javascript")
    ];
  constructor() { }

  ngOnInit() {
  }

}
