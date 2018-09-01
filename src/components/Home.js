import React from "react"
import { Grid, Row } from "react-bootstrap"
// import PropTypes from "prop-types"

export class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { numberPage: 1 }
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid" />
      </Grid>
    )
  }
}

// Home.propTypes = {
//   film: PropTypes.array.isRequired,
//   geners: PropTypes.array.isRequired,
//   favoriteItems: PropTypes.array.isRequired,
//   addToFavorite: PropTypes.func.isRequired,
//   delFromFavorite: PropTypes.func.isRequired,
// }

export default Home
