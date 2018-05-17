import oil from '../images/oil.jpg'
import tire from '../images/tire.jpg'
import car from '../images/car.jpg'
import lift from '../images/allignment.jpg'

export default ()=>{
    return[
        {
            title:'Oil Services',
            description:'Oil services Description',
            image: oil,
            url:'/services/oil-change',
            key:'oil-change'
        },
        {
            title:'Tire Services',
            description:'Tire Services Description',
            image:tire,
            url:'/services/tire-services',
            key:'tire-services'
        },
        {
            title:'Mechanic',
            description:'Mechanic Description',
            image:car,
            url:'/services/mechanic',
            key:'mechanic'
        },
        {
            title:'Lifting kit',
            description:'Car Lifting',
            image:lift,
            url:'/services/lift',
            key:'lift'
        }
    ]
}