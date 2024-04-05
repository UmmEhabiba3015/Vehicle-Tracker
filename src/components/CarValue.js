import { useSelector } from "react-redux";
function CarValue () {
    const totalcost = useSelector(({ cars : {carsArray, searchTerm}})=> {
        const filteredCars = carsArray.filter((car)=> car.name.toLowerCase().includes(searchTerm.toLowerCase()));
        return filteredCars.reduce((acc, car)=> acc + car.cost ,0)
    })
    return (
        <div className="car-value">
            Total Cost: ${totalcost}
        </div>
    )
}
export default CarValue;