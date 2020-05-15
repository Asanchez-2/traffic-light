//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

export class TrafficLight extends React.Component {
	render() {
		return (
			<div className="main">
				<div className="stick" />
				<div className="trafficBody rounded">
					<div className="red rounded-circle" />
					<div className="orange rounded-circle" />
					<div className="green rounded-circle" />
				</div>
			</div>
		);
	}
}
