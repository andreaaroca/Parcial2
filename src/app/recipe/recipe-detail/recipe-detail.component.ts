import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../Recipe';

@Component({
  selector: 'app-recipe-detail',
  standalone: false,
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: any;

  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService,
    public router: Router  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipeService.getRecipeDetail(id)
    .subscribe(trainer => {
      this.recipe = Recipe; 
      console.log('Detalle del trainer:', trainer);
    });
}}
