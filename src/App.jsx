import React from 'react';
import { ScrollView, View } from 'react-native';
import InputData from './components/InputData';
import OutputData from './components/OutputData';
import { AppContextProvider } from './context/AppContext';
import ButtonConvert from './components/ButtonConvert';
import AppBar from './components/AppBar';
import { Styles } from './themes/Styles';

export default function App() {
	return (
		<AppContextProvider>
			<ScrollView>
				<AppBar />

				<View style={Styles.contentContainer}>
					<InputData />

					<ButtonConvert />

					<OutputData />
				</View>
			</ScrollView>
		</AppContextProvider>
	);
}
