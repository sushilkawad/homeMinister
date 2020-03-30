import React, {useState} from 'react';
import {Button, Item, Text, Icon, Input} from 'native-base';

import styles from './styles';

const SearchBar = ({handleSearch}) => {
  const [srch, srchFun] = useState('');

  return (
    <Item style={styles.srchPadding}>
      <Icon active name="search" />
      <Input
        placeholder="Search"
        value={srch}
        onChangeText={e => {
          srchFun(e);
          handleSearch(e);
        }}
      />
      {srch.length > 0 && (
        <Button
          style={[styles.bgTransparent, styles.evelationZero]}
          onPress={() => {
            srchFun('');
            handleSearch('');
          }}>
          <Text style={styles.colorBlack}>X</Text>
        </Button>
      )}
    </Item>
  );
};

export default SearchBar;
