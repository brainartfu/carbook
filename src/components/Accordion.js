import React, { useState } from 'react';
import { Text, Button, Center, View, ChevronUpIcon, ChevronDownIcon, VStack, Collapse } from 'native-base';

const styles = {
  root: {

  }
}

const MyAccordion = (props) => {
  return (
    <>
      <Button
        colorScheme={props.colorScheme}
        onPress={() => props.onToggle()}
        style={props.open ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 } : { backgroundColor: (props.isCategory ? '#FC6A20' : '#f2f5f9') }}>
        <View
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-around">
          <Text width="100%" style={{ color: (props.open || props.isCategory ? 'white' : '#002C5B'), fontWeight: 'bold' }}>{props.title}</Text>
          {props.open ? <ChevronUpIcon color="white" /> : <ChevronDownIcon color={props.isCategory ? 'white' : '#002C5B'} />}
        </View>
      </Button>
      <Collapse isOpen={props.open}>{props.content}</Collapse>
    </>
  );
};

export default MyAccordion;