import * as React from 'react';
import ShoppingList from '../components/ShoppingList'

const shopping = [
    {id:0, item:"Apples"},
    {id:1, item:"Beef"},
    {id:2, item:"Banana"}
  ]

export default class ShoppingListPage extends React.Component {
    render (){
        return (
            <div>
                <ShoppingList
                name="Sam"
                list={shopping}
                />
            </div>
        )
    }
}