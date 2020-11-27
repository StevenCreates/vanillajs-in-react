
import './App.css';

function App() {



// const onSelect = (e) => {

//  let theIndex = e.target.value
//  let foundItem = arrayTwo.findIndex(x => x.id == theIndex)
//  let employee = e.target.id
//  let objIndex = arrayOne.findIndex((obj => obj.id == employee));
//  console.log("Employee Before Update: ", arrayOne[objIndex])
//  console.log("Options Array Before Update:", arrayTwo)

// //  {arrayOne[employee].selection && arrayTwo.push(arrayOne[employee].selection)}
// //  {arrayOne[employee].selection && (
// //   arrayOne[objIndex].selection = arrayTwo[foundItem]
// //   )}
// !arrayOne[employee].selection && (arrayOne[objIndex].selection = arrayTwo[foundItem])
// !arrayOne[employee].selection && (arrayTwo.splice(foundItem, 1))
// console.log("Employee After Update", arrayOne[objIndex])
// console.log("Options Array After Update:", arrayTwo)


// //  let updatedArr = arrayTwo
// //  updatedArr.splice(foundItem, 1)
// //  console.log(updatedArr)
// //   setArrayTwo(updatedArr)
// // setArrayTwo(arrayTwo.splice(foundItem, 1))

// }

let arrayTwo = [
  {id: 4564, option: "Value 1"},
  {id: 34, option: "Value 2"},
  {id: 45, option: "Value 3"},
  {id: 34445, option: "Value 4"},
]




let arrayOne = [
  {id: 1 ,firstName: "Steven", lastName: "Hofheins", selection: null},
  {id: 2 ,firstName: "Jake", lastName: "Budge", selection: null},
  {id: 3 ,firstName: "Hugh", lastName: "Black", selection: null},
  {id: 4 ,firstName: "Cody", lastName: "Hafen", selection: null}
]

const onSelect = (e) => {
  let employeeId = e.target.id
  let valueId = e.target.value
  let findEmployee = arrayOne.find(employee => employee.id == employeeId)
  findEmployee.selection && arrayTwo.push(findEmployee.selection)
  // here you can watch the array change depending on if the employee has a selection or not console.log('checking the array', arrayTwo)
  let findInputValue = arrayTwo.find(value => value.id == valueId)
  // Here we are updasting the selection of the employee object in the arrayOne and updating it to the inputValue
  findEmployee.selection = findInputValue
  let findIndex = arrayTwo.findIndex(x => x.id == valueId)
  // if you want to see the array before the removal console.log('before removal of selected item', arrayTwo)
  arrayTwo.splice(findIndex, 1)
  // if you want to see the array after the removal console.log('after removal of selected item', arrayTwo)

}

const updateEmployee = (e) => {

}

const updateArray = (e) => {

}

  return (
    <div className="App">
        <div>
          {arrayOne.map((arrayItems) => (
            <>
            <div key={arrayItems}>
              <span>
              {arrayItems.firstName} {arrayItems.lastName}
              </span>
              <select onChange={onSelect} id={arrayItems.id} name="options">
                <option>-Select-</option>
              {arrayTwo.map((arrayTwoItems) => (
                <option key={arrayTwoItems.id} value={arrayTwoItems.id}>{arrayTwoItems.option}</option>
              ))
              }
              </select>
            </div>
            </>
            ))}

        </div>

    </div>
  );
}

export default App;
