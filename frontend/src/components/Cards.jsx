import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import anjali from '../assets/anjali.png';
import phone from '../assets/phone.svg';
import location1 from '../assets/location.svg';
import Dialogs from "./Dialogs";

const Cards = ({ firstName, lastName, phone1, city }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <Card className="w-[250px] p-1 text-left">
        <CardContent>
          <img src={anjali} alt="photo" className="w-[53px] h-[53px] rounded mb-2" />
          <p className="text-[15px] font-bold">{`${firstName} ${lastName}`}</p>
          <div className="flex gap-1">
            <img src={location1} alt="location" />
            <p className=" text-[#425763] text-[9px]">{city}</p>
          </div>
        </CardContent>
        <div className="flex justify-between p-4">
          <div>
            <div className="flex gap-1">
              <img src={phone} alt="phone" />
              <p className=" text-[9px] font-semibold">{phone1}</p>
            </div>
            <p className="text-grayCustom text-[9px]">Available on Phone</p>
          </div>
          <Button className="w-[93px] text-[11px]" onClick={handleOpenDialog}>
            Fetch Details
          </Button>
        </div>
      </Card>
      <Dialogs 
        isOpen={isDialogOpen} 
        onClose={handleCloseDialog}
        firstName={firstName} 
        lastName={lastName} 
        phone={phone1} 
        city={city} 
      />
    </>
  );
};

export default Cards;
