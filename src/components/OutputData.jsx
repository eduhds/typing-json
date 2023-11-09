import React, { useContext } from 'react';
import { ScrollView, View, Text, useWindowDimensions } from 'react-native';

import { AppContext } from '../context/AppContext';
import { Styles } from '../themes/Styles';

export default function OutputData() {
	const [{ typesOutput }] = useContext(AppContext);
	const { width } = useWindowDimensions();

	const verticalLayout = width < 768;

	const copyTypes = () => {
		navigator.clipboard.writeText(typesOutput).then(
			() => alert('Output types copied to clipboard!'),
			err => console.log(err)
		);
	};

	return (
		<View style={{ flex: 1 }}>
			<View style={Styles.inputOutputBoxTitle}>
				<Text style={Styles.inputOutputBoxTitleText}>Types output</Text>
				{!!typesOutput && (
					<Text
						onPress={copyTypes}
						style={[Styles.inputOutputBoxTitleText, { textDecorationLine: 'underline', fontStyle: 'italic' }]}>
						Copy
					</Text>
				)}
			</View>
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
