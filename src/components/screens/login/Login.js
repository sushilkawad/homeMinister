import React from 'react';
import {ActivityIndicator, Linking} from 'react-native';
import {
  Container,
  Text,
  Body,
  View,
  Item,
  ListItem,
  Left,
  Icon,
  Input,
  Button,
} from 'native-base';

import Header from '../../common/header';
import styles from './styles';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {error: '', loading: false};
  }

  render() {
    const {navigation} = this.props;
    const {username, password, error, loading} = this.state;

    return (
      <Container>
        <Header navigation={navigation} title={'Login'} hideArrow={true} />
        <View style={styles.center}>
          {!!error && (
            <ListItem icon>
              <Left>
                <Icon style={styles.colorRed} name="md-alert" />
              </Left>
              <Body style={styles.borderBottomZero}>
                <Text>{error}</Text>
              </Body>
            </ListItem>
          )}

          <Item>
            <Input
              value={username}
              keyboardType="email-address"
              onChangeText={value => this.handleChange('username', value)}
              placeholder="Username or Email address"
            />
          </Item>
          <Item>
            <Input
              value={password}
              secureTextEntry={true}
              onChangeText={value => this.handleChange('password', value)}
              placeholder="Password"
            />
          </Item>
          <Button disabled={loading ? true : false} style={styles.button}>
            {loading ? (
              <ActivityIndicator size="large" color="#fff" />
            ) : (
              <Text>Login</Text>
            )}
          </Button>
          <Text />
          <Text>
            Don't have an account yet?{' '}
            <Text
              style={[styles.borderBottomZero, styles.colorMain]}
              onPress={() => navigation.navigate('Registration')}>
              Sign up!
            </Text>
          </Text>
          <Text>
            Lost your password?{' '}
            <Text
              style={[styles.borderBottomZero, styles.colorMain]}
              onPress={() => Linking.openURL('lost-password/')}>
              Click here
            </Text>
          </Text>
        </View>
      </Container>
    );
  }
}

export default Login;
