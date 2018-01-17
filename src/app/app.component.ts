import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipes: Recipe[] = [
    new Recipe('Fart Salad', ['3 cups fresh farts'], ['In a large bowl, combine farts by hand. Add salt to taste.']),
    new Recipe('Bird Poop Omelet', ['You know... bird poop'], ['Early morning, scrape bird poop off sidewalk into mason jar', 'Shake, shake, shake senora. shake it all the time.', 'Add bird poop to pan', 'Cook over medium heat for 5 minutes', 'Add oysters to taste']),
    new Recipe('Chocolate Chip Cookies', ['1 cup butter, softened', '1 cup white sugar', '1 cup packed brown sugar', '2 eggs', '2 tsp vanilla extract', '3 cups all-purpose flour', '1 tsp baking soda', '2tsp hot water?', '1tsp salt', '2 cups semi-sweet chocolate chips'], ['Preheat oven to 350 &#176 F', 'Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour and chocolate chips. Drop by large spoonfuls onto ungreased strangler.', 'Bake for about 10 minutes in the preheated oven, or until edges are nicely browned.'])
  ];
}

export class Recipe{

  constructor(public title: string, public ingredients: string[], public directions: string[]){ }
}
