const React = require('react')
const Layout = require('./layout/layout')

module.exports = class New extends React.Component{
  render() {
    return(
    <>
    <Layout title="New Page">
      <h1>Create Chocolate</h1>
      <form action="/chocolates" method="POST">
          <label htmlFor="img">Image URL:</label>
          <input type="text" id='img' name='img'/>
          <label htmlFor="name">Name:</label>
          <input type="text" id='name' name='name'/>
          <label htmlFor="price">Price:</label>
          <input type="number" id='price' min="0" name='price'/>
          <label htmlFor="description">Description:</label>
          <input type="text" name="description" id="description"/>
          <label htmlFor="quantity">Quantity:</label>
          <input type="number" name="quantity" min="0" id="quantity"/>
          <input type="submit" value="create chocolate"/>
      </form>
      <button className="borderless"><a href={'/chocolates'}>Back</a></button>
      </Layout>
    </>
  )}
}