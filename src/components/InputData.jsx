import React, { useContext } from 'react';
import { View, Text, TextInput, useWindowDimensions } from 'react-native';

import { ACTIONS, AppContext } from '../context/AppContext';
import { Styles } from '../themes/Styles';

export default function InputData() {
	const [state, dispatch] = useContext(AppContext);
	const { width } = useWindowDimensions();

	const { jsonInput } = state;
	const verticalLayout = width < 768;

	const changeJsonInput = value => {
		dispatch({ type: ACTIONS.JSON_INPUT, payload: value });
	};

	return (
		<View style={{ flex: 1 }}>
			<Text style={Styles.inputOutputBoxTitle}>JSON input</Text>
			<TextInput
				multiline
				placeholder='type or paste here...'
				value={jsonInput}
				onChangeText={changeJsonInput}
				style={[Styles.inputOutputBox, Styles.inputText, verticalLayout ? { height: 200 } : {}]}
			/>
		</View>
	);
}
