import React, { Component } from 'react';

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class ProductCategoryRow extends Component {
    render() {
        const category = this.props.category;
        return (
            <tr>
                <th colSpan="2">
                    {category}
                </th>
            </tr>
        );
    }
}

class ProductRow extends Component {
    render() {
        const product = this.props.product;
        const name = product.stocked ? product.name : <span style={{color: 'red'}}>{product.name}</span>;
        return (
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        )
    }
}

class ProductTable extends Component {
    render() {
        const rows = [];
        let lastCategory = null;
        this.props.products.forEach((product) => {
            if (product.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow
                        category={product.category}
                        key={product.category} />
                );
            }

            rows.push(
                <ProductRow
                    product={product}
                    key={product.name} />
            );
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

class SearchBar extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search ..." />
                <p>
                    <input type="checkbox" />
                    {' '}
                    Only show products in stock.
                </p>
            </form>
        );
    }
}

class FilterableProductTable extends Component {
    render() {
        return (
            <div style={{padding: 20}}>
                <SearchBar />
                <ProductTable products={this.props.products} />
            </div>
        );
    }
}

class Searchable extends Component {
    render() {
        return (
            <FilterableProductTable products={PRODUCTS} />
        );
    }
}

export default Searchable;