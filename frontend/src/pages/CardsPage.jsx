import Cards from "../components/Cards";
import users from '../assets/user_list.json';
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import noresultsfound from '../assets/noresults.png'
import { NavSearchContext } from "../context/NavSearchContext";

const CardsPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchValues = searchParams.get('search')?.toLowerCase() || '';

    const [usersCopy, setUsersCopy] = useState([]);

    const { navSearchValue } = useContext(NavSearchContext)


    useEffect(() => {
        
        if (!searchValues) {
            setUsersCopy(users);
            return;
        }

        let filteredUsers = users.filter(user => {
            
            return (
                user.first_name.toLowerCase().includes(searchValues) ||
                user.last_name.toLowerCase().includes(searchValues) ||
                user.contact_number.includes(searchValues) ||
                user.city.toLowerCase().includes(searchValues)
            );
        });

        if (navSearchValue) {
            filteredUsers = filteredUsers.filter(user => {
                return (
                    user.first_name.toLowerCase().includes(navSearchValue.toLowerCase()) ||
                    user.last_name.toLowerCase().includes(navSearchValue.toLowerCase()) ||
                    user.contact_number.includes(navSearchValue) ||
                    user.city.toLowerCase().includes(navSearchValue.toLowerCase())
                );
            });
        }

        setUsersCopy(filteredUsers);
    }, [searchValues, navSearchValue]);

    return (
        <div className='bg-[#eff1f7] w-full min-h-screen px-[17em] py-7'>
            <div className='flex justify-between flex-wrap gap-7 w-[100%] flex-grow'>
                

                {usersCopy.length > 0 ? (
                    usersCopy.map((user, index) => (
                        <Cards 
                            key={index} 
                            firstName={user.first_name} 
                            lastName={user.last_name} 
                            phone1={user.contact_number} 
                            city={user.city} 
                        />
                    ))
                ) : (
                    <div className="flex justify-center items-center w-full">
                        <img className="max-w-[300px]" src={noresultsfound} alt='No Results Found' />
                    </div>
                )}


            </div>
        </div>
    );
}

export default CardsPage;
