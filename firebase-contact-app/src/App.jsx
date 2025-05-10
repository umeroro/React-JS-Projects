import { FiSearch } from "react-icons/fi";
import Navbar from "./components/Navbar";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";

const App = () => {
  const [contacts, setContact] = useState([]);

  useEffect(() => {
    const getContact = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactsList = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContact(contactsList);
      } catch (error) {
        console.log(error);
      }
    };
    getContact();
  }, []);

  return (
    <div className="mx-auto max-w-[370px] p-4">
      <Navbar />
      <div className="flex items-center gap-2">
        <div className="relative flex flex-grow items-center">
          <FiSearch className="text-white text-2xl absolute ml-1" />
          <input
            type="text"
            placeholder="Search Contact"
            className="h-10 flex-grow rounded-md border border-white bg-transparent text-white pl-9"
          />
        </div>
        <AiFillPlusCircle className="text-4xl text-white cursor-pointer" />
      </div>
      <div className="pt-[20px]">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default App;
