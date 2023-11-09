import React, { useContext } from 'react';
import { View, Text, TextInput, useWindowDimensions } from 'react-native';

import { ACTIONS, AppContext } from '../context/AppContext';
import { Styles } from '../themes/Styles';

export default function InputData() {
	const [{ jsonInput }, dispatch] = useContext(AppContext);
	const { width } = useWindowDimensions();

	const verticalLayout = width < 768;

	const changeJsonInput = value => {
		dispatch({ type: ACTIONS.JSON_INPUT, payload: value });
	};

	return (
		<View style={{ flex: 1 }}>
			<View style={Styles.inputOutputBoxTitle}>
				<Text style={Styles.inputOutputBoxTitleText}>JSON input</Text>
				{!!jsonInput && (
					<Text
						onPress={() => changeJsonInput('')}
						style={[Styles.inputOutputBoxTitleText, { textDecorationLine: 'underline', fontStyle: 'italic' }]}>
						Clear
					</Text>
				)}
			</View>
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
