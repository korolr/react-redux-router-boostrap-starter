import React from "react"
import { Grid, Row } from "react-bootstrap"
import PropTypes from "prop-types"

export class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: [] }
  }

  render() {
    const {} = this.props
    return (
      <Grid>
        <Row className="show-grid" />
      </Grid>
    )
  }
}

Search.propTypes = {
  geners: PropTypes.array.isRequired,
  favoriteItems: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  addToFavorite: PropTypes.func.isRequired,
  delFromFavorite: PropTypes.func.isRequired,
}

export default Search
