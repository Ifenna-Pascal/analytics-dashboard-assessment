export const LINE_CHART_OPTIONS = {
	transitions: {
		show: {
			animations: {
				x: {
					from: 0,
				},
				y: {
					from: 0,
				},
			},
		},
		hide: {
			animations: {
				x: {
					to: 0,
				},
				y: {
					to: 0,
				},
			},
		},
	},
	plugins: {
		legend: {
			display: true,
			position: "top",
		},
	},
	scales: {
		x: {
			title: {
				display: true,
				text: "Year (1998 - 2024)",
			},
			ticks: {
				color: "rgba(139, 144, 154, 1)",
				padding: 24,
				font: {
					size: 14,
					family: "inherit",
				},
			},
			grid: {
				display: true,
				color: "rgba(222, 222, 222, 1)",
			},
			border: {
				display: false,
				dash: [5, 15],
			},
		},
		y: {
			title: {
			  display: true,
			  text: "Total No Of Vehicles",
			},
			beginAtZero: true,
			max: 100, 
			grid: {
			  display: false,
			},
			border: {
			  display: false,
			},
			ticks: {
			  color: "rgba(139, 144, 154, 1)",
			  padding: 20,
			  font: {
				size: 14,
				family: "inherit",
			  },
			  stepSize: 10,
			},
		  },
		
	},
};



export const BAR_CHART_OPTIONS = {
	responsive: true,
	transitions: {
		show: {
			animations: {
				x: {
					from: 0,
				},
				y: {
					from: 0,
				},
			},
		},
		hide: {
			animations: {
				x: {
					to: 0,
				},
				y: {
					to: 0,
				},
			},
		},
	},
	plugins: {
		legend: {
			display: true,
			position: "top",
			labels: {
			//   usePointStyle: true,
			},
		},
	},
	scales: {
		x: {
			title: {
				display: true,
				text: "EV Distribution by County (Total, BEV, PHEV)",
			},
			ticks: {
				color: "rgba(139, 144, 154, 1)",
				padding: 24,
				font: {
					size: 14,
					family: "inherit",
				},
			},
			grid: {
				display: true,
				color: "rgba(222, 222, 222, 1)",
			},
			border: {
				display: false,
				dash: [5, 15],
			},
		},
		y: {
			title: {
				display: true,
				text: "Total No Of Vehicles",
			}, 
			beginAtZero: true,
			grid: {
				display: false,
			},
			border: {
				display: false,
			},
			ticks: {
				color: "rgba(139, 144, 154, 1)",
				padding: 20,
				font: {
					size: 14,
					family: "inherit",
				},
				stepSize: 10,
			},
		},
	},
};


