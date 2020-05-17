import withData from "./withData";
import TestComponent from "./testComponent";

const getData = () => {
  return 'test data'
};

export default withData(TestComponent, getData);
