const React = require('react')

class Layout extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <title>{this.props.title}</title>
        </head>
        <body>
          <h1>{this.props.title}</h1>
          {this.props.children}
        </body>
      </html>
    )
  }
}

module.exports = Layout