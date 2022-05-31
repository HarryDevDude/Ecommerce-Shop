const React = require('react')
const Layout = require('./layout/layout')

class Edit extends React.Component {
  render() {
    const chocolate = this.props.chocolate
    return (
      <Layout title="Edit Page">
        <form action={`/chocolates/${chocolate._id}?_method=PUT`} method="POST">
          <label htmlFor="img">Image URL:</label>
          <input type="text" id='img' name='img' defaultValue={chocolate.img} />
          <label htmlFor="name">Name:</label>
          <input type="text" id='name' name='name' defaultValue={chocolate.name} />
          <label htmlFor="price">Price:</label>
          <input type="number" id='price' name='price' defaultValue={chocolate.price} />
          <label htmlFor="description">Description:</label>
          <input type="text" id='description' name='description' defaultValue={chocolate.description} />
          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id='quantity' name='quantity' defaultValue={chocolate.quantity} />
          <input type="submit" value="edit chocolate" />
          <button className="borderless"><a href={'/chocolates'}>Back to Index</a></button>
        </form>
        <form action={`/chocolates/${chocolate._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                </form>
      </Layout>
    )
  }
}

module.exports = Edit