import './App.css';
import { ScrollView, View, Text } from 'react-native';
import InputData from './components/InputData';
import OutputData from './components/OutputData';
import { AppContextProvider } from './context/AppContext';
import ButtonConvert from './components/ButtonConvert';

export default function App() {
	return (
		<AppContextProvider>
			<ScrollView>
				<Text style={{ fontSize: 18, margin: 10 }}>JSON TO TYPES</Text>

				<View
					style={{
						flexDirection: 'row',
						flexWrap: 'wrap',
						alignItems: 'center'
					}}>
					<InputData />

					<ButtonConvert />

					<OutputData />
				</View>
			</ScrollView>
		</AppContextProvider>
	);
}
