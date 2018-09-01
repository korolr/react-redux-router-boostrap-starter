import React, { Component } from "react"
import { connect } from "react-redux"
import { Search } from "../components/Search"
import { getFilm } from "../actions/filmActions"
import { addFavorite, delFavorite } from "../actions/favoriteActions"

class SearchContainer extends Component {
  render() {
    const { favorite } = this.props
    return (
      <div>
        <Search favoriteItems={favorite} />
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
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
)(SearchContainer)
