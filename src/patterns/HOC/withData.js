import React, {Component} from "react";

const withData = (View, getData) => {
  return class extends Component {
    state = {
      data: null
    };

    componentDidMount() {
      const data = getData();
      this.setState({
        data
      })
    }

    render() {
      console.log(this.props)
      console.log('render')
      const {data} = this.state;

      if (!data) {
        return <p>Loading...</p>
      }

      return <View {...this.props} data={data}/>
    }
  }
};

export default withData;
