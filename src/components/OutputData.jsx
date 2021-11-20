import React, { useContext } from 'react';
import { ScrollView, View, Text } from 'react-native';

import { AppContext } from '../context/AppContext';
import { Styles } from '../themes/Styles';

export default function OutputData() {
	const [state] = useContext(AppContext);

	const { typesOutput } = state;

	return (
		<View style={{ flex: 1 }}>
			<Text style={Styles.inputOutputBoxTitle}>Types output</Text>
			<View style={[Styles.inputOutputBox, { padding: 0 }]}>
				<ScrollView>
					<View style={{ padding: 10 }}>
						<Text style={Styles.outputText}>{typesOutput}</Text>
					</View>
				</ScrollView>
			</View>
		</View>
	);
}
