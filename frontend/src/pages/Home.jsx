import { useEffect, useState } from 'react';
import ProductItem from '../components/ProductItem';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 10;

  const fetchProducts = async (page) => {
    setLoading(true);
    const skip = (page - 1) * itemsPerPage;
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=${itemsPerPage}&skip=${skip}`);
      const data = await response.json();
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      console.error("Error while fetching the products, please check the API response", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);


  // New for girman

  const [searchValue, setSearchValue] = useState('')
  const navigate = useNavigate()

  const handleKeyDown = (event) =>{
    if (event.key === 'Enter') {
      event.preventDefault();
      console.log("Entered", searchValue);
      navigate(`/cards?search=${encodeURIComponent(searchValue)}`);
    }
  }


  return (
    <div className="w-full flex flex-col items-center border-t h-screen gradient-bg">

    <input 
      type='text'
      value={searchValue}
      onChange={(e)=>setSearchValue(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder='Search'
      className='mt-[11em] border-none rounded-lg px-3 py-1 h-[31px] w-[598px]'
    />
    
    </div>
  );
};

export default Home;
