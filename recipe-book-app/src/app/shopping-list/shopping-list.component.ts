import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../recipes/shared/ingredient.model';
import { ShoppingListService } from './shopping-list.services';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[];

  constructor(private shoopingListService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients=this.shoopingListService.getIngredients();
    this.shoopingListService.ingredientAdded
        .subscribe(
          (ingrident:Ingredient) =>{
            this.ingredients.push(ingrident)
          }
        );
  }


}
