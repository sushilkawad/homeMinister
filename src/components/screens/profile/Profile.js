import React from 'react';
import {Container, Text} from 'native-base';
import {connect} from 'react-redux';

import Header from '../../common/header';

class Profile extends React.Component {
  render() {
    const {navigation, route} = this.props;

    return (
      <Container>
        <Header
          navigation={navigation}
          title={'Profile'}
          hideArrow={route.fromReg}
          openModal={() => this.openModal()}
        />
        <Text>Profile</Text>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  loginData: state.loginData,
});

export default connect(mapStateToProps)(Profile);
