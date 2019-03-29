import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getDishes, filterDishes } from "../../actions/dishes";

class Dishes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ""
    };
  }
  static propTypes = {
    dishes: PropTypes.array.isRequired,
    getDishes: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getDishes();
  }

  filterSearch = event => {
    let term = event.target.value;
    this.setState({
      filter: term
    });
    this.props.filterDishes(term);
  };

  render() {
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
              <th>Dish</th>
              <th>Price</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.dishes.map(dish => (
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
  dishes: state.dishes.filteredDishes,
  dishesFilter: state.dishes.filter
});
export default connect(
  mapStateToProps,
  { getDishes, filterDishes }
)(Dishes);
