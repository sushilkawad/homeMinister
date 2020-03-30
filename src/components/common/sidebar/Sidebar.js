import React from 'react';
import {Image, View} from 'react-native';
import {Content, ListItem, Text, Icon, Left, Body, List} from 'native-base';
import {connect} from 'react-redux';

import actions from '../../../redux/Action';
import {removePersistData} from '../../../constants';
import styles from './styles';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  loggedOut() {
    const {navigation} = this.props;
    return (
      <>
        <ListItem
          androidRippleColor="red"
          icon
          onPress={() => navigation.navigate('Login')}
          button={true}
          style={styles.listItem}>
          <Left>
            <Icon style={styles.blurIcon} name="md-contact" />
          </Left>
          <Body style={styles.removeBorderBottom}>
            <Text>Login/Sign Up</Text>
          </Body>
        </ListItem>
      </>
    );
  }

  loggedIn() {
    const {navigation} = this.props;
    return (
      <>
        <ListItem
          androidRippleColor="red"
          icon
          onPress={() => navigation.navigate('Profile')}
          button={true}
          style={styles.listItem}>
          <Left>
            <Icon style={styles.blurIcon} name="md-contact" />
          </Left>
          <Body style={styles.removeBorderBottom}>
            <Text>My Profile</Text>
          </Body>
        </ListItem>

        <ListItem
          androidRippleColor="red"
          icon
          onPress={() => {
            actions.logout();
            removePersistData('email');
            navigation.navigate('Home');
          }}
          button={true}
          style={[styles.listItem, styles.borderBottomZero]}>
          <Left>
            <Icon style={styles.blurIcon} name="md-exit" />
          </Left>
          <Body style={styles.removeBorderBottom}>
            <Text>Logout</Text>
          </Body>
        </ListItem>
      </>
    );
  }

  render() {
    const {
      navigation,
      loggedIn,
      loginData: {first_name = 'Sushil', last_name = 'Kawad'},
    } = this.props;

    console.log('sss:', loggedIn);
    return (
      <Content contentContainerStyle={styles.contentBackground}>
        <List style={styles.flex1}>
          <ListItem
            androidRippleColor="red"
            icon
            onPress={() => navigation.navigate('Home')}
            button={true}
            style={styles.topListItem}>
            <Image
              style={styles.sideImage}
              source={require('../../../assets/menu.jpg')}
            />
            <Left>
              <Icon style={styles.userIcon} name="md-contact" />
            </Left>
            <Body style={styles.removeBorderBottom}>
              <Text>{`${first_name} ${last_name}`}</Text>
            </Body>
          </ListItem>
          <ListItem
            icon
            onPress={() => navigation.navigate('Home')}
            button={true}
            style={styles.listItem}>
            <Left>
              <Icon style={styles.blurIcon} name="md-home" />
            </Left>
            <Body style={styles.removeBorderBottom}>
              <Text>Home</Text>
            </Body>
          </ListItem>
          {loggedIn ? this.loggedIn() : this.loggedOut()}

          <ListItem
            style={styles.listItem}
            icon
            onPress={() => navigation.navigate('About')}>
            <Left>
              <Icon style={styles.blurIcon} name="md-book" />
            </Left>
            <Body style={styles.removeBorderBottom}>
              <Text>About Us</Text>
            </Body>
          </ListItem>

          <ListItem
            style={styles.listItem}
            icon
            onPress={() => navigation.navigate('Contact')}>
            <Left>
              <Icon style={styles.blurIcon} name="md-call" />
            </Left>
            <Body style={styles.removeBorderBottom}>
              <Text>Contact Us</Text>
            </Body>
          </ListItem>
        </List>
        <List>
          <View style={styles.sideFooter}>
            <Text style={[styles.color999, styles.flexEnd]}>
              www.sushilkawad.in
            </Text>
            <Text style={styles.color999}>All rights reserved</Text>
          </View>
        </List>
      </Content>
    );
  }
}

Sidebar.defaultProps = {
  loginData: {},
};

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  loginData: (state.loginData || {}).customer,
});

export default connect(mapStateToProps)(Sidebar);
