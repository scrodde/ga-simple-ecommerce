# Usage

```
import Transaction from 'ga-simple-ecommerce';

var transaction = new Transaction({
  id: '1234',                     // Transaction ID. Required.
  affiliation: 'Acme Clothing',   // Affiliation or store name.
})
.addItem({
  name: 'Fluffy Pink Bunnies',    // Product name. Required.
  sku: 'DD23444',                 // SKU/code.
  category: 'Party Toys',         // Category or variation.
  price: '11.99',                 // Unit price.
  quantity: '1'                   // Quantity.
})
.addItem({
  name: 'Fluffy Green Bunnies',    // Product name. Required.
  sku: 'DD23444',                 // SKU/code.
  category: 'Party Toys',         // Category or variation.
  price: '120.00',                 // Unit price.
  quantity: '1'                   // Quantity.
})
.send();
```
