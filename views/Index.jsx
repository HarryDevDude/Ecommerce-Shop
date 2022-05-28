const React = require('react')
const Layout = require('./layout/layout')

class Index extends React.Component {
  render() {
    // Object Destructuring
    const { chocolates } = this.props
    return (
      <Layout title="Index">
        <div>
          <h1>Chocoalte Index Page</h1>
          <ul>
            {
              chocolates.map(chocolate => {
                return (
                  <p>
                      This is the chocolate page
                  </p>
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