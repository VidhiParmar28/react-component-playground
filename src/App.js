import './App.css';

import ProfileCard from './ProfileCard';
import Greeting from './Greeting';
import ProductCard from './ProductCard';
import productImg1 from './image1.jpg';
import productImg2 from './image2.jpg';
function App(){
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

    
  </div>

  );
}


export default App;

 