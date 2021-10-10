import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from '../themes/Styles';

export default function AppBar() {
	return (
		<View style={Styles.appBarContainer}>
			<View>
				<Text style={Styles.appBarTitle}>JSON to Types</Text>
				<Text style={Styles.appBarSubtitle}>
					Get types form your JSON data to use in TypeScript or Flow
				</Text>
			</View>
		</View>
	);
}
