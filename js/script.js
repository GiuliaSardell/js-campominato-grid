// const levels = document.getElementById('levels');

// console.log(levels)

// //Create array of options to be added
// const array = ['Easy','Hard','Crazy'];

// //Create and append select list
// const selectList = document.createElement('select');
// // selectList.setAttribute("id", "mySelect");
// levels.append(selectList);
// console.log(levels);

// // //Create and append the options
// // for (var i = 0; i < array.length; i++) {
// //     var option = document.createElement("option");
// //     option.setAttribute("value", array[i]);
// //     option.text = array[i];
// //     selectList.appendChild(option);
// // }


const myDiv = document.getElementById("myDiv");

//Create array of options to be added
const array = ["Volvo","Saab","Mercades","Audi"];

//Create and append select list
const selectList = document.createElement("select");
selectList.setAttribute("id", "mySelect");
myDiv.append(selectList);

//Create and append the options
for (let i = 0; i < array.length; i++) {
    let option = document.createElement("option");
    option.setAttribute("value", array[i]);
    option.text = array[i];
    selectList.append(option);
}
