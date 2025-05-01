import Food from './FOOD.jsx';

function List() {
  const breakfastItems = [
    { name: "Eggs", price: 120, pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Fried_Egg_2.jpg/960px-Fried_Egg_2.jpg" },
    { name: "Toast", price: 80, pic: "https://www.allrecipes.com/thmb/kpI2DQrw7zDake_7B8wOJRkZ-6Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-recipe-16895-fluffy-french-toast-hero-01-ddmfs-4x3-7fd61e054f2c4f0f868b7ab0dd8767ae.jpg" },
    { name: "Pancakes", price: 200, pic: "https://www.allrecipes.com/thmb/FE0PiuuR0Uh06uVh1c2AsKjRGbc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21014-Good-old-Fashioned-Pancakes-mfs_002-0e249c95678f446291ebc9408ae64c05.jpg" },
    { name: "Fruit", price: 150, pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmNmtiKe1ts_QSG_scLRR7f46Q7Jha-zPvJw&s" },
    { name: "Oatmeal", price: 100, pic: "https://oneinthekitchen.com/wp-content/uploads/2019/02/Classic-Oatmeal-With-Milk-500x375.jpg" },
    { name: "Yogurt", price: 90, pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxL-Vo7nJJcIKcVlKERW9U1tfLHxeO6_aTAw&s" },
    { name: "Juice", price: 70, pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyEH1imTGtI2jZrS-b43dEGaZSIgAQvI0wnw&s" }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Breakfast Items</h2>
      <div style={{
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '50px',
  justifyContent: 'center' // <-- Center align items
}}>
  {breakfastItems.slice(0, 6).map((food, index) => (
    <Food key={index} name={food.name} price={food.price} pic={food.pic} />
  ))}
</div >  
<h2>LUNCH</h2>
<div  style={{
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '50px',
  justifyContent: 'center' // <-- Center align items
}} >


 <Food name="chicken Tikka" price={500}  pic={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY7L9sHmHUhtcMIpWXavdRL0PY9EhrSeG3bQ&s"}/>



    <Food name="Veg Fried Rice" price={300} pic={" https://shwetainthekitchen.com/wp-content/uploads/2023/06/veg-fried-rice.jpg"}/>
   </div>
   
 </div>
  );
}

export default List;
