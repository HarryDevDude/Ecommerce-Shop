const React = require('react')
const Layout = require('./layout/layout')

class Show extends React.Component {
  render() {
    const chocolate = this.props.chocolate
    return (
      <Layout title="Show ME Chocolate">
        <div>
          <img src={`${chocolate.img}`}></img>
          <p>{chocolate.name}</p>
          <p>{chocolate.description}</p>
          <p>Price ${chocolate.price}</p>
          <p>Quantity:{chocolate.quantity}</p>
          <button className="borderless"><a href={'/chocolates'}>Back</a></button>
          <button className="borderless"><a href={`/chocolates/${chocolate._id}/edit`}>{`Edit ${chocolate.name}`}</a></button>
        </div>
      </Layout>
    )
  }
}

module.exports = Show