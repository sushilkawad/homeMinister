import React from 'react';
import {ActivityIndicator, ImageBackground} from 'react-native';
import {
  Container,
  Text,
  Body,
  View,
  Item,
  Input,
  Button,
  ListItem,
  Left,
  Icon,
} from 'native-base';
import {connect} from 'react-redux';

import Header from '../../common/header';
import styles from './styles';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      OTPSent: false,
      OTPVerified: false,
      OTPMsg: '',
      OTPValidating: false,
      loading: false,
    };
  }

  handleChange(name, value) {
    this.setState(prevState => ({
      customer: {...(prevState.customer || {}), [name]: value},
    }));
  }

  render() {
    const {navigation} = this.props;
    const {OTPSent, OTPVerified, error, loading, customer = {}} = this.state;

    return (
      <Container>
        <Header navigation={navigation} title={'Register'} hideArrow={true} />
        <View style={styles.center}>
          {error &&
            error.map(err => (
              <ListItem icon key={err.message}>
                <Left>
                  <Icon style={styles.colorRed} name="md-alert" />
                </Left>
                <Body style={styles.borderBottomZero}>
                  <Text>{err.message}</Text>
                </Body>
              </ListItem>
            ))}
          <Item>
            <Input
              onChangeText={value => this.handleChange('username', value)}
              placeholder="Username"
              value={customer.username}
            />
          </Item>
          <Item>
            <Input
              value={customer.email}
              onChangeText={value => this.handleChange('email', value)}
              keyboardType="email-address"
              placeholder="Email address"
            />
          </Item>
          <Item>
            <Input
              value={customer.password}
              secureTextEntry={true}
              onChangeText={value => this.handleChange('password', value)}
              placeholder="Password"
            />
          </Item>
          <Item>
            <Input
              value={customer.phone}
              editable={!OTPVerified}
              style={{color: OTPVerified ? '#aaa' : 'black'}}
              onChangeText={value => this.handleChange('phone', value)}
              keyboardType="phone-pad"
              placeholder="Mobile Number (10 digits)"
            />
          </Item>
          <Button
            disabled={loading || (OTPSent && !OTPVerified) ? true : false}
            style={styles.button}>
            {loading ? (
              <ActivityIndicator size="large" color="#fff" />
            ) : (
              <Text>Register</Text>
            )}
          </Button>
          <Text />
          <Text>
            Already have an account?{' '}
            <Text
              style={[styles.borderBottomZero, styles.colorMain]}
              onPress={() => navigation.navigate('Login')}>
              Sign in!
            </Text>
          </Text>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
});

export default connect(mapStateToProps)(Register);
