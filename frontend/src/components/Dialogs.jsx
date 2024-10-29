import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import profilepic from '../assets/profilepic.png';

const Dialogs = ({ isOpen, onClose, firstName, lastName, phone, city }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='w-[413px]'>
        <DialogHeader>
          <DialogTitle>Fetch Details</DialogTitle>
          <p className="text-[#71717A] text-[11px]">Here are the details of following employee</p>
        </DialogHeader>
        <div>
          <p className="text-[13px]"><strong>{`Name: ${firstName} ${lastName}`}</strong></p>
          <p className="text-[13px]"><strong>Location: {city}</strong></p>
          <p className="text-[13px]"><strong>Contact Number: {phone}</strong></p>

          <p className="text-[13px] py-3"><strong>Profile Image:</strong></p>
          <img className='w-[133px]' src={profilepic} alt='Profie Pic' />

        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Dialogs;
