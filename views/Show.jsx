const React = require('react')
const Layout = require('./layout/layout')

class Show extends React.Component {
  render() {
    const chocolate = this.props.chocolate
    return (
      <Layout title="Show ME Chocolate">
        <div>
          <p>{chocolate.name}</p>
          <p>{chocolate.description}</p>
          <p>{chocolate.price}</p>
          <p>{chocolate.quantity}</p>
          <button><a href={'/chocolates'}>Back</a></button>
          <form action={`/chocolates/${chocolate._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                </form>
          <button><a href={`/chocolates/${chocolate._id}/edit`}>{`Edit ${chocolate.name}`}</a></button>
        </div>
      </Layout>
    )
  }
}

module.exports = Show