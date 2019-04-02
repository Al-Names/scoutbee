import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getDishes, filterDishes, sortDishes } from "../../actions/dishes";
import { getFilteredDishes } from "../../selectors/dishes";

class Dishes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
      sortByAsc: true,
      ListDishes: []
    };

    this.handleSort = this.handleSort.bind(this);
  }
  static propTypes = {
    dishes: PropTypes.array.isRequired,
    getDishes: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getDishes();
    this.setState({ ListDishes: this.props.dishes });
  }

  handleSort(colName) {
    let { ListDishes, sortByAsc } = this.state;
    if (sortByAsc) {
      ListDishes = ListDishes.sort((x, y) => (x[colName] < y[colName] ? 1 : -1));
    } else {
      ListDishes = ListDishes.sort((x, y) => (x[colName] > y[colName] ? 1 : -1));
    }

    this.setState({ ListDishes, sortByAsc: !sortByAsc });
  }

  filterSearch = event => {
    let term = event.target.value;
    this.setState({
      filter: term
    });
    this.props.filterDishes(term);
  };

  render() {
    const { ListDishes } = this.state;

    return (
      <Fragment>
        <div className="form-group">
          <form>
            <input
              type="text"
              placeholder="Search.."
              name="search"
              className="form-control"
              onChange={this.filterSearch}
              value={this.props.dishesFilter}
            />
          </form>
        </div>
        <h2>{this.state.filter}</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th onClick={() => this.handleSort("dish")}>
                Dish <i className="fas fa-sort" />
              </th>
              <th onClick={() => this.handleSort("price")}>
                Price <i className="fas fa-sort" />
              </th>
              <th />
            </tr>
          </thead>
          <tbody>
            {ListDishes.map(dish => (
              <tr key={dish.id}>
                <td>{dish.name}</td>
                <td>${dish.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  dishes: getFilteredDishes(state),
  dishesFilter: state.dishes.filter
});
export default connect(
  mapStateToProps,
  { getDishes, filterDishes, sortDishes }
)(Dishes);
