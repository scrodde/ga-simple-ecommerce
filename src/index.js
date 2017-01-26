class Item {
  constructor(options) {
    this.options = Object.assign({}, options);
  }
}

class LineItem extends Item {
  constructor(options) {
    super(options);
    this.options = Object.assign({
      price: 0,
      quantity: 1
    }, this.options);
  }
}

class Transaction extends Item {
  constructor(options) {
    super(options);
    this.items = [];

    // Enable e-commerce tracking functionaliy
    if (window.ga !== undefined) {
      window.ga('require', 'ecommerce');
    }
  }

  addItem(options) {
    this.items.push(new LineItem(options));
    return this;
  }

  getTotalRevenue() {
    return this.items.reduce(function(previousValue, currentValue) {
      return previousValue + (currentValue.options.price * currentValue.options.quantity);
    }, 0);
  }

  send() {
    if (window.ga !== undefined) {
      const revenue = this.getTotalRevenue();
      window.ga('ecommerce:addTransaction', Object.assign({
        revenue: revenue
      }, this.options));

      for (var index = 0; index < this.items.length; index++) {
        const data = Object.assign({
          id: this.options.id
        }, this.items[index].options);
        window.ga('ecommerce:addItem', data);
      }
      window.ga('ecommerce:send');
    }
  }
}

module.exports = Transaction;
