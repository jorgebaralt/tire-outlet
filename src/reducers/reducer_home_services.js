import oil from '../images/oil.jpg';
import tire from '../images/tire.jpg';
import car from '../images/car.jpg';
import lift from '../images/allignment.jpg';

export default () => [
		{
			title: 'Oil Services',
			description: 'Oil services Description',
			image: oil,
			url: '/services/oil-change',
			key: 'Oil Change'
		},
		{
			title: 'Tire Services',
			description: 'Tire Services Description',
			image: tire,
			url: '/services/tire-services',
			key: 'Tire Services'
		},
		{
			title: 'Mechanic',
			description: 'Mechanic Description',
			image: car,
			url: '/services/mechanic',
			key: 'Mechanic'
		},
		{
			title: 'Lifting kit',
			description: 'Car Lifting',
			image: lift,
			url: '/services/lift',
			key: 'Lift Kit'
		}
	];
