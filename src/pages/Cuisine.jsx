import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'

function Cuisine() {
  const [cuisine, setCuisine] = useState([])
  let params = useParams()

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=9`
    )
    // const data = {"recipes":[{"vegetarian":false,"vegan":false,"glutenFree":true,"dairyFree":false,"veryHealthy":false,"cheap":false,"veryPopular":false,"sustainable":false,"lowFodmap":false,"weightWatcherSmartPoints":30,"gaps":"no","preparationMinutes":-1,"cookingMinutes":-1,"aggregateLikes":138,"healthScore":3,"creditsText":"Foodista.com – The Cooking Encyclopedia Everyone Can Edit","license":"CC BY 3.0","sourceName":"Foodista","pricePerServing":91.07,"extendedIngredients":[{"id":1001053,"aisle":"Milk, Eggs, Other Dairy","image":"fluid-cream.jpg","consistency":"LIQUID","name":"whipping cream","nameClean":"whipping cream","original":"1 3/4 cups whipping cream","originalName":"whipping cream","amount":1.75,"unit":"cups","meta":[],"measures":{"us":{"amount":1.75,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":414.029,"unitShort":"ml","unitLong":"milliliters"}}},{"id":10019903,"aisle":"Baking","image":"chocolate-chips.jpg","consistency":"SOLID","name":"semi sweet chocolate chips","nameClean":"semisweet chocolate chips","original":"12 ounces quality semi-sweet chocolate chips","originalName":"quality semi-sweet chocolate chips","amount":12.0,"unit":"ounces","meta":[],"measures":{"us":{"amount":12.0,"unitShort":"oz","unitLong":"ounces"},"metric":{"amount":340.194,"unitShort":"g","unitLong":"grams"}}},{"id":14209,"aisle":"Tea and Coffee","image":"brewed-coffee.jpg","consistency":"SOLID","name":"strong coffee","nameClean":"coffee","original":"3 ounces espresso or strong coffee","originalName":"espresso or strong coffee","amount":3.0,"unit":"ounces","meta":[],"measures":{"us":{"amount":3.0,"unitShort":"oz","unitLong":"ounces"},"metric":{"amount":85.049,"unitShort":"g","unitLong":"grams"}}},{"id":14037,"aisle":"Alcoholic Beverages","image":"rum-dark.jpg","consistency":"SOLID","name":"dark rum","nameClean":"alcohol","original":"1 tablespoon dark rum (optional)","originalName":"dark rum (optional)","amount":1.0,"unit":"tablespoon","meta":["dark"],"measures":{"us":{"amount":1.0,"unitShort":"Tbsp","unitLong":"Tbsp"},"metric":{"amount":1.0,"unitShort":"Tbsp","unitLong":"Tbsp"}}},{"id":1001,"aisle":"Milk, Eggs, Other Dairy","image":"butter-sliced.jpg","consistency":"SOLID","name":"butter","nameClean":"butter","original":"4 tablespoons butter","originalName":"butter","amount":4.0,"unit":"tablespoons","meta":[],"measures":{"us":{"amount":4.0,"unitShort":"Tbsps","unitLong":"Tbsps"},"metric":{"amount":4.0,"unitShort":"Tbsps","unitLong":"Tbsps"}}},{"id":-1,"aisle":"?","image":null,"consistency":"SOLID","name":"flavorless","nameClean":null,"original":"1 teaspoon flavorless, granulated gelatin","originalName":"flavorless, granulated gelatin","amount":1.0,"unit":"teaspoon","meta":[],"measures":{"us":{"amount":1.0,"unitShort":"tsp","unitLong":"teaspoon"},"metric":{"amount":1.0,"unitShort":"tsp","unitLong":"teaspoon"}}}],"id":639099,"title":"Chocolate Mousse in Chocolate Shell","readyInMinutes":45,"servings":6,"sourceUrl":"https://www.foodista.com/recipe/K4PSTQVT/chocolate-mousse-in-chocolate-shell","image":"https://spoonacular.com/recipeImages/639099-556x370.jpg","imageType":"jpg","summary":"Chocolate Mousse in Chocolate Shell takes around <b>roughly 45 minutes</b> from beginning to end. Watching your figure? This gluten free recipe has <b>641 calories</b>, <b>5g of protein</b>, and <b>55g of fat</b> per serving. This recipe serves 6. For <b>91 cents per serving</b>, this recipe <b>covers 11%</b> of your daily requirements of vitamins and minerals. 138 people were impressed by this recipe. It will be a hit at your <b>valentin day</b> event. This recipe from Foodista requires whipping cream, butter, flavorless, and rum. Overall, this recipe earns a <b>rather bad spoonacular score of 38%</b>. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/low-fat-chocolate-mousse-in-a-meringue-shell-pavlova-133162\">Low-Fat Chocolate Mousse in a Meringue Shell (Pavlova)</a>, <a href=\"https://spoonacular.com/recipes/chocolate-peanut-butter-ice-cream-with-chocolate-shell-509560\">Chocolate “Peanut Butter” Ice Cream with Chocolate Shell</a>, and <a href=\"https://spoonacular.com/recipes/eggless-chocolate-mousse-how-to-make-chocolate-mousse-488707\">eggless chocolate mousse , how to make chocolate mousse</a>.","cuisines":[],"dishTypes":[],"diets":["gluten free"],"occasions":["valentine's day"],"instructions":"Chill 1 1/2 cups whipping cream in refrigerator. Chill metal mixing bowl and mixer beaters in freezer.\nIn top of a double boiler, combine chocolate chips, coffee, rum and butter. Melt over barely simmering water, stirring constantly. Remove from heat while a couple of chunks are still visible. Cool, stirring occasionally to just above body temperature.\nPour remaining 1/4 cup whipping cream into a metal measuring cup and sprinkle in the gelatin. Allow gelatin to \"bloom\" for 10 minutes. Then carefully heat by swirling the measuring cup over a low gas flame or candle. Do not boil or gelatin will be damaged. Stir mixture into the cooled chocolate and set aside.\nIn the chilled mixing bowl, beat cream to medium peaks. Stir 1/4 of the whipped cream into the chocolate mixture to lighten it. Fold in the remaining whipped cream in two doses. There may be streaks of whipped cream in the chocolate and that is fine. Do not over work the mousse.\nSpoon into bowls, chocolate cups (see note in About section) or martini glasses and chill for at least 1 hour. Garnish with fruit and serve.\n(If mousse is to be refrigerated overnight, chill for one hour and then cover each with plastic wrap)","analyzedInstructions":[{"name":"","steps":[{"number":1,"step":"Chill 1 1/2 cups whipping cream in refrigerator. Chill metal mixing bowl and mixer beaters in freezer.","ingredients":[{"id":1001053,"name":"whipping cream","localizedName":"whipping cream","image":"fluid-cream.jpg"}],"equipment":[{"id":405907,"name":"mixing bowl","localizedName":"mixing bowl","image":"mixing-bowl.jpg"},{"id":404726,"name":"blender","localizedName":"blender","image":"blender.png"}]},{"number":2,"step":"In top of a double boiler, combine chocolate chips, coffee, rum and butter. Melt over barely simmering water, stirring constantly.","ingredients":[{"id":99278,"name":"chocolate chips","localizedName":"chocolate chips","image":"chocolate-chips.jpg"},{"id":1001,"name":"butter","localizedName":"butter","image":"butter-sliced.jpg"},{"id":14209,"name":"coffee","localizedName":"coffee","image":"brewed-coffee.jpg"},{"id":14412,"name":"water","localizedName":"water","image":"water.png"},{"id":11114037,"name":"rum","localizedName":"rum","image":"rum-dark.jpg"}],"equipment":[{"id":404699,"name":"double boiler","localizedName":"double boiler","image":"double-boiler.jpg"}]},{"number":3,"step":"Remove from heat while a couple of chunks are still visible. Cool, stirring occasionally to just above body temperature.","ingredients":[],"equipment":[]},{"number":4,"step":"Pour remaining 1/4 cup whipping cream into a metal measuring cup and sprinkle in the gelatin. Allow gelatin to \"bloom\" for 10 minutes. Then carefully heat by swirling the measuring cup over a low gas flame or candle. Do not boil or gelatin will be damaged. Stir mixture into the cooled chocolate and set aside.","ingredients":[{"id":1001053,"name":"whipping cream","localizedName":"whipping cream","image":"fluid-cream.jpg"},{"id":19081,"name":"chocolate","localizedName":"chocolate","image":"milk-chocolate.jpg"},{"id":19177,"name":"gelatin","localizedName":"gelatin","image":"gelatin-powder.jpg"}],"equipment":[{"id":404766,"name":"measuring cup","localizedName":"measuring cup","image":"measuring-cup.jpg"}],"length":{"number":10,"unit":"minutes"}},{"number":5,"step":"In the chilled mixing bowl, beat cream to medium peaks. Stir 1/4 of the whipped cream into the chocolate mixture to lighten it. Fold in the remaining whipped cream in two doses. There may be streaks of whipped cream in the chocolate and that is fine. Do not over work the mousse.","ingredients":[{"id":1054,"name":"whipped cream","localizedName":"whipped cream","image":"whipped-cream.jpg"},{"id":19081,"name":"chocolate","localizedName":"chocolate","image":"milk-chocolate.jpg"},{"id":1053,"name":"cream","localizedName":"cream","image":"fluid-cream.jpg"}],"equipment":[{"id":405907,"name":"mixing bowl","localizedName":"mixing bowl","image":"mixing-bowl.jpg"}]},{"number":6,"step":"Spoon into bowls, chocolate cups (see note in About section) or martini glasses and chill for at least 1 hour.","ingredients":[{"id":19081,"name":"chocolate","localizedName":"chocolate","image":"milk-chocolate.jpg"},{"id":0,"name":"martini","localizedName":"martini","image":"rum-dark.jpg"}],"equipment":[{"id":404783,"name":"bowl","localizedName":"bowl","image":"bowl.jpg"}],"length":{"number":60,"unit":"minutes"}},{"number":7,"step":"Garnish with fruit and serve.","ingredients":[{"id":9431,"name":"fruit","localizedName":"fruit","image":"mixed-fresh-fruit.jpg"}],"equipment":[]},{"number":8,"step":"(If mousse is to be refrigerated overnight, chill for one hour and then cover each with plastic wrap)","ingredients":[{"id":10018364,"name":"wrap","localizedName":"wrap","image":"flour-tortilla.jpg"}],"equipment":[{"id":404730,"name":"plastic wrap","localizedName":"plastic wrap","image":"plastic-wrap.jpg"}],"length":{"number":60,"unit":"minutes"}}]}],"originalId":null,"spoonacularSourceUrl":"https://spoonacular.com/chocolate-mousse-in-chocolate-shell-639099"}]}

    const recipes = await data.json()
    console.log(recipes.recipes)

    setCuisine(recipes.recipes)
    // setCuisine(recipes.extendedIngredients)
  }

  useEffect(() => {
    getCuisine(params.type)
    console.log(params.type)
  }, [params.type])

  return (
    <Grid>
      {/* {console.log(cuisine)} */}
      {/* {console.log(cuisine.recipes)} */}
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
          </Card>
        )
      })}
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`
const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`

export default Cuisine
