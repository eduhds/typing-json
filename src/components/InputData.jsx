import React, { useContext } from 'react';
import { View, Text, TextInput } from 'react-native';
import { ACTIONS, AppContext } from '../context/AppContext';

export default function InputData() {
	const [state, dispatch] = useContext(AppContext);

	const changeJsonInput = value => {
		dispatch({ type: ACTIONS.JSON_INPUT, payload: value });
	};

	const { jsonInput } = state;

	return (
		<View style={{ flex: 1 }}>
			<Text
				style={{
					marginHorizontal: 25,
					backgroundColor: 'red',
					padding: 5,
					color: 'white',
					fontSize: 16
				}}>
				JSON input
			</Text>
			<TextInput
				multiline
				placeholder='type or paste...'
				value={jsonInput}
				onChangeText={changeJsonInput}
				style={{
					marginHorizontal: 25,
					padding: 10,
					borderWidth: 2,
					borderColor: 'red',
					height: 400,
					textAlignVertical: 'top'
				}}
			/>
		</View>
	);
}
