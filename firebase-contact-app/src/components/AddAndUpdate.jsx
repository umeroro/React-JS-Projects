import { Field, Form, Formik } from "formik";
import Modal from "./Modal";
import { db } from "../config/firebase";
import { addDoc } from "firebase/firestore";

const AddAndUpdate = ({ isOpen, onClose }) => {
  const setContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={{
            name: "",
            email: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            setContact(values);
          }}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name: </label>
              <Field name="name" className="border h-7" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email: </label>
              <Field type="email" name="email" className="border h-7" />
            </div>
            <button className="bg-orange-400 px-3 py-1.5 border self-end">
              Add Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdate;
