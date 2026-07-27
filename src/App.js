import './App.css';
import { useState } from 'react';

import ProfileCard from './ProfileCard';
import Greeting from './Greeting';
import ProductCard from './ProductCard';
import Stars  from './RatingStar';
import ProductButtons from './ProductButton';
import Avatar from './AvatarList';
import Badge from './Badge';
import IconButton from './IconList';
import Counter from './counter';
import ToggleVisibility from './ToggleVisibility';
import Likebtn from './LikeButton';
import Todolist from './TodoList';
import Todoadd from './Todointeractive';
import ColorSwitcher from './ColorSwitcher';
import CharacterCounter from './CharacterCounter';
import ShowPasswordToggle from './ShowPasswordToggle';
import Progress from './MultiStepFormProgress';
import ShoppingList from './ShoppingList';
import productImg1 from './image1.jpg';
import productImg2 from './image2.jpg';

const products = [
  {id:1 , name:"Item 1"},
  {id:2 , name:"Item 2"},
  {id:3 , name:"Item 3"}
];

const AvatarsList =[
  {name:"Earth" , img:"https://cdn-icons-png.flaticon.com/256/11499/11499286.png"},
  {name:"Water",img:"https://img.freepik.com/premium-vector/blue-liquid-swirl-forming-circular-shape-abstract-background_98402-186192.jpg"},
  {name:"Fire",img:"https://i.pinimg.com/originals/a9/e3/b3/a9e3b31aafe8ee8cfec343b74d0c9b6e.jpg"},
  {name:"Air",img:"https://tse2.mm.bing.net/th/id/OIP.3eBC1LzxEwoBOGOLNBQMBwHaHa?r=0&w=1080&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3"}
];

const Btns = [
  {icon:"🏠", name:"home"},
  {icon:"🔍", name:"Search"},
  {icon:"⚙️", name:"Setting"}
];

// const todos = [
//   "buy groceries" , "Clean the house" , "Water the plants" , "Do exercise"
// ];




function App(){

  const startingTodos = [
  "buy groceries" , "Clean the house" , "Water the plants" , "Do exercise"
];
 const [todos, setTodos] = useState(startingTodos); 
 const [currentString, setCurrentString] = useState("");

// const Items =[
//   {name:"Apples" , quantity:1}
// ];

// const [CurrentItem,SetCurrentItem] =useState(Items);

const startingItems =[
  {name:"Apples" , quantity:1}
];

const [items,setItems] =useState(startingItems);
const [currentItem,setCurrentItem] = useState("");


const increaseQuantity = (index)=>{
  setItems(items.map((item,i)=>{
    if(i===index){
      return {...item, quantity:item.quantity+1};
    }
    return item;
  }));
}
const decreaseQuantity = (index)=>{
  setItems(items.map((item,i)=>{
    if(i===index){
      return {...item, quantity:item.quantity-1};
    }
    return item;
  }));
}


  return( 
    <div className="App">

  

    {/* Profile cards */}
      <ProfileCard
      name="Vidhi"
      age={23}
      bio="Loves coding and solving Problems."
      />
      
      <ProfileCard
      name="priyu"
      age={25}
      bio="Loves building and debating."
      />
      <ProfileCard
      name="sakshi"
      age={22}
      bio="Loves being positive."
      />

     {/* greeting */}
      <Greeting message="Good morning!"/>
      <Greeting message="Good Afternoon!"/>
      <Greeting message="Good Night!"/>
    

    
     {/* Product Cards   */}
      <ProductCard 
      name="iPhone 15"
      price={79999}
      image={productImg1}/>
      
      <ProductCard 
      name="Samsung Galaxy S24"
      price={69999}
      image={productImg2}/>

      {/* Rating Stars */}
      <Stars count={3} />
      <Stars count={5} />
      <Stars count={6} />

   {/* Product Buttons */}

   {products.map((product)=>(
    <ProductButtons key={product.id} id={product.id} name={product.name}/>
   ))
   }
   
   {/* Avatar List */}


      <div className="avatar-list">
       {AvatarsList.map((avatar,index)=>(
        <Avatar key={index}  image={avatar.img} name={avatar.name}/>
       ))

       }

</div>

{/* Badge component */}

<Badge label="sale"/>
<Badge label="new"/>


    
    {/* Button Icons  */}
      {  Btns.map((btn,index)=>(
        <IconButton key={index} icon={btn.icon} name={btn.name}/>
      )

        )
      }
 
{/* Counter  */}
<Counter />

{/* Toggle Visibility  */}
<ToggleVisibility/>

{/* Like Button  */}
<Likebtn/>


{/* Tododlist  */}
{  <ul>
{todos.map((todo,index)=>(
  <Todolist  key={index}  work={todo}/>
)
)

}
</ul>
}



{/* Todo interactive */}
<input 
                type="text" 
                placeholder="write your todo for today......" 
                value={currentString} 
                onChange={(event) => setCurrentString(event.target.value)}
            />
            <button onClick={() => {
                setTodos([...todos, currentString]);
                setCurrentString("");
            }}>Add</button>

            <ul>
                {todos.map((todo, index) => (
                    <Todolist key={index} work={todo} />
                ))}
            </ul>
   



{/* Color Switcher  */}

<ColorSwitcher/>


{/* Character Counter  */}

<CharacterCounter/>



{/* Show Password Toggle  */}

<ShowPasswordToggle/>


{/* Multi Step Form Progress  */}
<Progress/>


{/* Shopping List */}





<input type="text" value={currentItem} onChange={(event)=>setCurrentItem(event.target.value)} />
<button onClick={()=>{
  setItems([...items,{name:currentItem,quantity:1}]);
setCurrentItem("");
}}>ADD</button>

<ul>
{items.map((item,index)=>(
  <ShoppingList key={index} 
  name={item.name}
 quantity={item.quantity} 
  onIncrease={()=>increaseQuantity(index)}
  onDecrease={()=>increaseQuantity(index)}
  />
))
}
  </ul>
















  </div>

  );
}


export default App;






