import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { ACTIONS, AppContext } from '../context/AppContext';
import { Styles } from '../themes/Styles';
import RaySVG from '../assets/images/ray.svg';

export default function ButtonConvert() {
	const [, dispatch] = useContext(AppContext);

	return (
		<TouchableOpacity
			onPress={() => dispatch({ type: ACTIONS.JSON_TO_TYPES })}
			style={Styles.buttonConvertContainer}>
			<img src={RaySVG} style={{ height: 40, width: 40 }} alt='ray' />
		</TouchableOpacity>
	);
}
