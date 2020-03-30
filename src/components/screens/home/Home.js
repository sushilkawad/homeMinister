import React from 'react';
import {Container, Text, Content} from 'native-base';

import Header from '../../common/header';
import SearchBar from '../../common/searchBar';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
    };
  }

  handleSearch = searchString => {
    this.setState({
      searchString,
    });
  };

  render() {
    const {navigation} = this.props;

    return (
      <Container>
        <Header navigation={navigation} title={'Products'} hideArrow={true} />
        <SearchBar handleSearch={this.handleSearch} />
        <Content>
          <Text>DEMO</Text>
        </Content>
      </Container>
    );
  }
}
