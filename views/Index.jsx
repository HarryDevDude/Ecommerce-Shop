const React = require('react')
const Layout = require('./layout/layout')

class Index extends React.Component {
  render() {
    // Object Destructuring
    const { chocolates } = this.props
    return (
      <Layout title="Chocolate Index Page">
        <div>
          <nav>
            <a href="/chocolates/new">Create a New Chocolate</a>
          </nav>
          {/* <h1>Chocolate Index Page</h1> */}
          <ul>
            {
              chocolates.map(chocolate => {
                return (
                  <li key={chocolate._id}>
                    <p><a href={`/chocolates/${chocolate._id}`}>{chocolate.name}</a></p>
                    <p>{chocolate.description}</p>
                    <p>${chocolate.price}</p>
                    <p>There's {chocolate.quantity} quantity.</p>
                    <form action={`/chocoaltes/$chocolate._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                </form>
                    <button><a href={`/chocolates/${chocolate._id}/edit`}>{`Edit ${chocolate.name}`}</a></button>
                    <hr />
                  </li>
                )
              })
            }
          </ul>
        </div>
      </Layout>
    )
  }
}

module.exports = Index