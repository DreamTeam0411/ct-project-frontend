import ReactSlider from "react-slider";
import './SliderPrice.css'
import {useState} from "react";

export const SliderPrice = () => {
	const [value, setValue] = useState([0, 10000])
	return (
		<div>
			<ReactSlider
				className={'horizontal-slider'}
				thumbClassName={'example-thumb'}
				trackClassName={'example-track'}
				defaultValue={[0, 7000]}
				max={7000}
				min={0}
				onChange={(value) => setValue(value)}
				/>
			<div className={'prices-slider'}>
				<div className={'value'}>{value[0]}₴</div>
				<div>{value[1]}₴</div>
			</div>

		</div>)
}