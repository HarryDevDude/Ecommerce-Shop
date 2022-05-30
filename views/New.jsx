const React = require('react')
const DefaultLayout = require('./layout/layout')

module.exports = class New extends React.Component{
  render() {
    return(
    <>
    <DefaultLayout title="New Page">
      <h1>Create Chocolate Page</h1>
      <form action="/fruits" method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text"  id='name' name='name'/>
          <label htmlFor="price">Price:</label>
          <input type="number"  id='price' name='price'/>
          <label htmlFor="description">Description:</label>
          <input type="text" name="description" id="description"/>
          <label htmlFor="quantity">Quantity:</label>
          <input type="number" name="quantity" id="quantity"/>
          <input type="submit"  value="create chocolate"/>
      </form>
      <button><a href={'/chocolates'}>Back</a></button>
      </DefaultLayout>
    </>
  )}
}