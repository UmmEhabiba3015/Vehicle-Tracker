import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice ({
    name : 'cars',
    initialState : {
        searchTerm : '',
        carsArray : []
    },
    reducers : {
        changeSearchTerm (state, action) {
            state.searchTerm = action.payload;
        },
        addCar (state, action) {
            state.carsArray.push({
                name : action.payload.name,
                cost : action.payload.cost,
                id : nanoid(),
            });
        },
        removeCar (state, action) {
            const updatedCars = state.carsArray.filter((car)=>{
                return car.id !== action.payload;
            })
            state.carsArray = updatedCars;
        },

    }
})
export const { addCar,removeCar, changeSearchTerm } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;