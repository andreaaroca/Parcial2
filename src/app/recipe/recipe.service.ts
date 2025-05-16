import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from './Recipe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private apiUrl = 'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2025-10%20Recetas/recipe.json'

constructor(private http: HttpClient) { }

getRecipes(): Observable<Recipe[]>{
  return this.http.get<Recipe[]>(this.apiUrl);
}

getRecipeDetail(id: number): Observable<Recipe> {
  const url = `https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2025-10%20Recetas/1/recipe.json`;
  return this.http.get<Recipe>(url);
}

}
