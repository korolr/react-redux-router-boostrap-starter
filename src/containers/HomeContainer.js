import React, { Component } from "react"
import { connect } from "react-redux"
import { Home } from "../components/Home"
import { getFilm } from "../actions/filmActions"
import { addFavorite, delFavorite } from "../actions/favoriteActions"

class HomeContainer extends Component {
  render() {
    const { favorite } = this.props
    return (
      <div>
        <Home favoriteItems={favorite} />
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    film: store.film,
    favorite: store.favorite.data,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFilmAction: id => dispatch(getFilm(id)),
    addToFavorite: item => dispatch(addFavorite(item)),
    delFromFavorite: item => dispatch(delFavorite(item)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)
