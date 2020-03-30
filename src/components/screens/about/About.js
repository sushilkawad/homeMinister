import React from 'react';
import {Container, Text, Content} from 'native-base';

import Header from '../../common/header';
import styles from './styles';

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Header navigation={this.props.navigation} title={'About Us'} />
        <Content showsVerticalScrollIndicator={false} style={styles.padding10}>
          <Text>About page</Text>
        </Content>
      </Container>
    );
  }
}
