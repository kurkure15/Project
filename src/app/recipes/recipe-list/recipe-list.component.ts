import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe( //here we instantiated the constructor created in recipe.model.ts
      "Chhole Bhature",
      "Served with Cholle",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Bhatura.jpg/800px-Bhatura.jpg"
    ),
    new Recipe( //here we instantiated the constructor created in recipe.model.ts
      "Chhole Bhature",
      "Served with Cholle",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Bhatura.jpg/800px-Bhatura.jpg"
    )
  ];

  constructor() {}

  ngOnInit() {}
}
