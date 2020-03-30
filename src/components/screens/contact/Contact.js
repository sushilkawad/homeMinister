import React from 'react';
import {Container, Text} from 'native-base';

import Header from '../../common/header';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Header navigation={this.props.navigation} title={'Contact Us'} />
        <Text>Contact us</Text>
      </Container>
    );
  }
}

export default Contact;
