import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";

const ContactCard = ({ contact }) => {
  return (
    <div
      key={contact.id}
      className="bg-[#FFEAAE] flex justify-between items-center rounded-[10px] p-[5px]"
    >
      <div className="flex items-center gap-2">
        <HiOutlineUserCircle className="text-3xl text-[#F6820C]" />
        <div className="">
          <h2 className="text-[16px] font-medium capitalize">{contact.name}</h2>
          <p className="text-[14px] font-normal ">{contact.email}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <RiEditCircleLine className="text-2xl cursor-pointer" />
        <IoMdTrash className="text-[#5F00D9] text-2xl cursor-pointer" />
      </div>
    </div>
  );
};

export default ContactCard;
