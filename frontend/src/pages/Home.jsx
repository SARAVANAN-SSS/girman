import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import symbol from '../assets/symbol.png'

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      if (!searchValue.trim()) {
        setErrorMessage('Hey, Please search something...');
        return;
      }

      const validInputPattern = /^[a-zA-Z0-9\s]+$/;
      if (!validInputPattern.test(searchValue)) {
        setErrorMessage('Please search valid characters...');
        return;
      }

      setErrorMessage('');
      console.log("Entered", searchValue);
      navigate(`/cards?search=${encodeURIComponent(searchValue)}`);
    }
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setSearchValue(newValue);

    const validInputPattern = /^[a-zA-Z0-9\s]+$/;
    if (newValue.trim() === '' || validInputPattern.test(newValue)) {
      setErrorMessage('');
    }
  };

  return (
    <div className="w-full flex flex-col items-center border-t h-screen gradient-bg">
      <div>
      <div className='flex justify-center items-center gap-3 mt-[7em] mb-[2em] h-[53px]'>
      <img className='h-full' src={symbol} alt='logo-symbol' />
      <h2 className='font-bold text-[73px]'>Girman</h2>
      </div>
        <input 
          type="text"
          value={searchValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Search"
          className="border-none outline-none rounded-lg px-3 py-1 h-[31px] w-[455px] shadow-lg"
        />
      </div>

      {errorMessage && <p className="text-red-700 pt-3">{errorMessage}</p>}
    </div>
  );
};

export default Home;
