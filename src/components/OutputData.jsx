import React, { useContext } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { AppContext } from '../context/AppContext';

export default function OutputData() {
	const [state] = useContext(AppContext);

	const { typesOutput } = state;

	return (
		<View style={{ flex: 1 }}>
			<Text
				style={{
					marginHorizontal: 25,
					backgroundColor: 'red',
					padding: 5,
					color: 'white',
					fontSize: 16
				}}>
				Types output
			</Text>
			<View
				style={{
					marginHorizontal: 25,
					borderWidth: 2,
					borderColor: 'red',
					height: 400
				}}>
				<ScrollView>
					<View style={{ padding: 10 }}>
						<Text style={{ fontSize: 16 }}>{typesOutput}</Text>
					</View>
				</ScrollView>
			</View>
		</View>
	);
}
