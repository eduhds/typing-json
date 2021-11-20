import React from 'react';
import { ScrollView, View, useWindowDimensions } from 'react-native';

import InputData from './components/InputData';
import OutputData from './components/OutputData';
import { AppContextProvider } from './context/AppContext';
import ButtonConvert from './components/ButtonConvert';
import AppBar from './components/AppBar';
import { Styles } from './themes/Styles';

export default function App() {
	const { width } = useWindowDimensions();

	const verticalLayout = width < 768;

	return (
		<AppContextProvider>
			<ScrollView>
				<AppBar />

				<View style={verticalLayout ? Styles.contentContainerMobile : Styles.contentContainer}>
					<InputData />

					<ButtonConvert />

					<OutputData />
				</View>
			</ScrollView>
		</AppContextProvider>
	);
}
