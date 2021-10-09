import React, { useContext } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ACTIONS, AppContext } from '../context/AppContext';

export default function ButtonConvert() {
	const [, dispatch] = useContext(AppContext);

	return (
		<TouchableOpacity
			onPress={() => dispatch({ type: ACTIONS.JSON_TO_TYPES })}
			style={{ backgroundColor: 'dodgerblue', padding: 15 }}>
			<Text>Vai</Text>
		</TouchableOpacity>
	);
}
