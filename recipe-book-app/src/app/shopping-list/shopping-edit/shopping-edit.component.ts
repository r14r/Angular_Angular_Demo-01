import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/recipes/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.services';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
  }
  onAdd(inputName:HTMLInputElement,inputNumber:HTMLInputElement){
    const igName=inputName.value;
    const ignumber=inputNumber.valueAsNumber;
    const newIngredient= new Ingredient(igName,ignumber);
    this.shoppingListService.ingredientAdded.emit(newIngredient);
  }
}
