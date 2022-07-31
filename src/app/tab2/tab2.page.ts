import { Component, OnInit } from '@angular/core';
import {FoodService} from "../services/food.service";
import {Food} from "../interfaces/food.model";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  //Variables pour récupérer tout les aliments
  allFoodFreezer: Food[]= [];
  constructor(private foodService: FoodService) {}
  ngOnInit() {
    //appelle du getter dans service pour récupérer tous les aliments
    this.allFoodFreezer = this.foodService.allFood;
    console.log('ngOnInit, get:', this.allFoodFreezer);
  }
  //Pour avoir toutes les données à chaque retour à la page
  ionViewWillEnter(){
    this.allFoodFreezer = this.foodService.allFood;
    console.log('ionViewWillEnter, get:', this.allFoodFreezer);
  }
}
