import React from 'react';
import { View, Text } from 'react-native';

import { Styles } from '../themes/Styles';
import LogoPNG from '../assets/images/logo-ray.png';
import { VERSION } from '../values';

export default function AppBar() {
	return (
		<View style={Styles.appBarContainer}>
			<img src={LogoPNG} style={{ height: 40, width: 40, marginRight: 10 }} alt='logo' />
			<View>
				<Text style={Styles.appBarTitle}>
					JSON to Types <Text style={Styles.appBarTitleVersion}>{VERSION}</Text>
				</Text>
				<Text style={Styles.appBarSubtitle}>Get types form your JSON data to use in TypeScript or Flow</Text>
			</View>
		</View>
	);
}
