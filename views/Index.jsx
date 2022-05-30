const React = require('react')
const Layout = require('./layout/layout')

class Index extends React.Component {
  render() {
    // Object Destructuring
    const { chocolates } = this.props
    return (
      <Layout title="Index">
        <div>
          <nav>
            <a href="/chocolates/new">Create a New Fruit</a>
          </nav>
          <h1>Chocolate Index Page</h1>
          <ul>
            {
              chocolates.map(chocolate => {
                return (
                  <li key={chocolate._id}>
                    <p>The <a href={`/chocolates/${chocolate._id}`}>{chocolate.name}'s</a> color is {chocolate.color}.</p>
                    <p>{chocolate.readyToEat ? 'READY' : 'NOT READY'}</p>
                    <form action={`/chocolates/${chocolate._id}?_method=DELETE`} method="POST">
                      <input type="submit" value="DELETE" />
                    </form>
                    {/* <button><a href={`/chocolates/${chocolate._id}/edit`}>Edit Copy</a>
                    </button> */}
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