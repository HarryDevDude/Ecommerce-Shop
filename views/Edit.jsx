const React = require('react')
const Layout = require('./layout/layout')

class Edit extends React.Component {
  render() {
    const chocoalte = this.props.chocoalte
    return (
      <Layout title="Edit Page">
        <form action={`/chocoaltes/${chocoalte._id}?_method=PUT`} method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" id='name' name='name' defaultValue={chocoalte.name} />
          <label htmlFor="price">Price:</label>
          <input type="number" id='price' name='price' defaultValue={chocoalte.price} />
          <label htmlFor="description">Description:</label>
          <input type="text" name="description" id="description" defaultChecked={chocoalte.description} />
          <input type="submit" value="edit chocoalte" />
          <button><a href={'/chocoaltes'}>Back to Index</a></button>
        </form>

      </Layout>
    )
  }
}

module.exports = Edit