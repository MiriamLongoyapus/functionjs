//1.create an array containing the names of all items in the inventory maximum of 10.
const items=["berry","orange","mango","kiwi","banana","watermelon","passion","apple","kales","cabbage"]

//2.Create a separate array with the corresponding stock quantities of each item maximum of 10.
const quantity=[3,4,5,6,2,8,9,4,5,1]

//3.Write a function to add a new item to the inventory, updating both arrays.
const itemis=["berry","orange","mango","kiwi","banana","watermelon","passion","apple","kales","cabbage"]
const quantities=[3,4,5,6,2,8,9,4,5,1]
function addItem(itemis,quantities){
  itemis.push("cowlyflower")
  console.log(itemis)
  quantities.push(11)
  console.log(quantities)
}
addItem(itemis,quantities)


//4.Write a function to update the stock quantity of an existing item.
function updating (quantities,itemis){
  const index = quantities.indexOf(itemis);
  if(!index== -1){
      quantityStock(index)= quantities;

  }else{
      console.log(quantities,itemis)
  }
}
updating (quantities,itemis)

//5.Write a function to calculate the total number of items in the inventory.
function totalnumberOfItems(quantities) {
  let totalnumberOfItems= (quantities.length);
  console.log(totalnumberOfItems);
}
totalnumberOfItems(quantities)
//6.Write a function to find the item with the lowest stock quantity.
function lowestStockQuanty(quantities,itemis){
  let lowestStockQuanty=Math.min(quantities,itemis)
}
console.log(Math.min(lowestStockQuanty("berry:3","orange:4","mango:5","kiwi:6","banana:2","watermelon:8","passion:9","apple:4","kales:5","cabbage:1","cowlyflower:11")))

