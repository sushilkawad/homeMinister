import React from 'react';
import {StatusBar} from 'react-native';
import {connect} from 'react-redux';
import {Header, Left, Button, Icon, Right, Body, Title} from 'native-base';
import {DrawerActions} from '@react-navigation/native';

import styles from './styles';

StatusBar.setBackgroundColor('#015383');

const Header1 = ({navigation, title, hideArrow, openModal, loggedIn}) => (
  <Header style={styles.bgMain}>
    <Left style={styles.flex}>
      <Button style={styles.menuBtn}>
        <Icon
          name="menu"
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        />
      </Button>
    </Left>
    {!hideArrow && (
      <Left style={styles.flex}>
        <Button style={styles.backBtn}>
          <Icon
            name="md-arrow-round-back"
            onPress={() => navigation.goBack(null)}
          />
        </Button>
      </Left>
    )}
    <Body>
      <Title>{title}</Title>
    </Body>
    <Right>
      {title === 'Profile' && (
        <Icon
          name="md-create"
          style={[styles.colorWhite, styles.marginRight15]}
          onPress={() => openModal()}
        />
      )}
      {title !== 'Profile' &&
        title !== 'Login' &&
        title !== 'Register' &&
        loggedIn && (
          <Icon
            name="md-contact"
            style={[styles.colorWhite, styles.marginRight15]}
            onPress={() => navigation.navigate('Profile')}
          />
        )}
    </Right>
  </Header>
);

const mapStateToProps = state => ({
  itemCount: state.itemCount,
  loggedIn: state.loggedIn,
});

export default connect(mapStateToProps)(Header1);
