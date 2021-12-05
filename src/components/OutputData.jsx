import React, { useContext } from 'react';
import { ScrollView, View, Text, useWindowDimensions } from 'react-native';

import { AppContext } from '../context/AppContext';
import { Styles } from '../themes/Styles';

export default function OutputData() {
	const [state] = useContext(AppContext);
	const { width } = useWindowDimensions();

	const { typesOutput } = state;
	const verticalLayout = width < 768;

	return (
		<View style={{ flex: 1 }}>
			<Text style={Styles.inputOutputBoxTitle}>Types output</Text>
			<View style={[Styles.inputOutputBox, { padding: 0 }, verticalLayout ? { height: 200 } : {}]}>
				<ScrollView>
					<View style={{ padding: 10 }}>
						<Text style={Styles.outputText}>{typesOutput}</Text>
					</View>
				</ScrollView>
			</View>
		</View>
	);
}
