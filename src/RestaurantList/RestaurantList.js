import React, {Component} from 'react';
import RestaurantItem from '../RestaurantItem/RestaurantItem';

class RestaurantList extends Component {
  state = {
    url: 'http://localhost:3000/api/list',
    restaurants: [],
    error: '',
  };

  async getRestaurants() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();

      if (jsonData.restaurants.length === 0) {
        this.setState(() => {
          return {error: 'sorry, but your search did not return any results'};
        });
      } else {
        this.setState({
          restaurants: jsonData,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {
    this.getRestaurants();
  }

  render() {
    return (
      <div className="row">
        <div className="container my-3">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3" />
            <div className="row">
              {this.state.error ? (
                <h1 className="text-danger text-center">{this.state.error}</h1>
              ) : (
                this.state.restaurants.map(resto => {
                  return <div>{resto.name}</div>;
                })
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantList;
