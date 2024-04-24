
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  console.log(loadedCoffees);
  const [coffees, setCoffees] = useState(loadedCoffees);


  return (
    <div className='m-20'>
      <h1 className='text-5xl text-green-500'>Coffee Store: {coffees.length }</h1>
      <div className='grid grid-cols-2 mt-10 gap-6'>
        {
          coffees.map(coffee=><CoffeeCard key={coffee._id} coffees={coffees} setCoffees={setCoffees} coffee={coffee}></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
