import React, { useState, useEffect } from 'react';
import {StyleSheet} from 'react-native';
import { Text, Button, Center, View, Image, ChevronUpIcon, ChevronDownIcon, VStack } from 'native-base';
// import {Dropdown} from 'react-native-element-dropdown';
import SelectDropdown from 'react-native-select-dropdown'

import FontAwesome from "react-native-vector-icons/FontAwesome";

const width = 50;
const styles = StyleSheet.create({
  dropdownBtn: {
    textAlign: 'center',
    height: 60,
    padding: 5,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10
  }
});

const CurrencySelect = (props) => {
  const [selected, setSelected] = useState(props.currencies[props.defaultIndex ? props.defaultIndex : 0]);

  useEffect(() => {
    if (selected && props.onChange) {
      props.onChange(selected);
    }
  }, [selected]);
  
  useEffect(() => {
    setSelected(props.currencies[props.defaultIndex]);
  }, [props.defaultIndex]);

  return (
    <View>
    <SelectDropdown
        data={props.currencies}
        // defaultValueByIndex={1}
        onSelect={(selectedItem, index) => {
          setSelected(selectedItem);
        }}
        buttonStyle={styles.dropdownBtn}
        renderCustomizedButtonChild={(selectedItem, index) => {
          return (
            <View alignItems="center" justifyContent="center">
              <Image key={selected.id} source={selected.icon} alt="flag"/>
              <View flexDirection="row" alignItems="center" justifyContent="center">
                <Text>{selected.label}</Text>
                <ChevronDownIcon size="4" marginLeft="2"/>
              </View>
            </View>
          );
        }}
        // dropdownStyle={styles.dropdown3DropdownStyle}
        // rowStyle={styles.dropdown3RowStyle}
        renderCustomizedRowChild={(item, index) => {
          return (
            <View flexDirection="row" alignItems="center">
              <Image source={item.icon} marginLeft="2" alt="flag"/>
              <Text marginLeft="1">{item.id}</Text>
            </View>
          );
        }}
      />
    </View>
  );
  
}; 
export default CurrencySelect;