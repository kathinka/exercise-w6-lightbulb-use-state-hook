import { useState } from "react"

let toggle = "lightbulb off"
console.log(toggle)
export const Lightbulb = () => {
	// Initialize the state for on/off
	const [toggle, setToggle] = useState("lightbulb off");

	const toggleLight = () => {
		// Toggle the on/off state
		if (toggle === "lightbulb off") {
			setToggle("lightbulb on");
		}
		else if (toggle === "lightbulb on") {
			setToggle("lightbulb off")

		}

	};

	return (
		<div className="lightbulb-container">
			<div className={toggle} onClick={toggleLight}>
				<div className="bulb"></div>
			</div>
		</div>
	);
};
