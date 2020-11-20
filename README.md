# Menu Planner

*Click SEARCH RECIPES*

Do a axios get to spoontacular and pull recipes based on our value
https://rapidapi.com/spoonacular/api/recipe-food-nutrition?endpoint=55e1b3e1e4b0b74f06703be6

Use the returned records to rewrite the cards with the results: meal title, photograph, descriptive sentence

With *CLICK RECIPE CARD* - to load modal of the entire recipe
With *CLICK SHOPPING LIST* - to send recipe to FIREBASE Db - Shopping List

If *SHOPPING LIST HAS VALUE* - show the “Show my shopping list” button after cards, on click - reload page to #shoppingList page. and use a Firebase call to pull the shopping list.

Give options on #shoppingList page to edit the shopping list - add items and delete items.
