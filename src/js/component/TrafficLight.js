//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

export class TrafficLight extends React.Component {
	state = {
		activate: false
	};
	render() {
		return (
			<div className="main">
				<div className="stick" />
				<div className="trafficBody rounded">
					<div className="red">
						<div
							className={this.state.active ? "glow" : "red"}
							onClick={() =>
								this.setState({ active: !this.state.active })
							}
						/>
					</div>
					<div className="orange">
						<div
							className={this.state.active ? "glow" : "orange"}
							onClick={() =>
								this.setState({ active: !this.state.active })
							}
						/>
					</div>
					<div className="green">
						<div
							className={this.state.active ? "glow" : "green"}
							onClick={() =>
								this.setState({ active: !this.state.active })
							}
						/>
					</div>
				</div>
			</div>
		);
	}
}
