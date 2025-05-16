import { Field, Form, Formik } from "formik";
import Modal from "./Modal";

const AddAndUpdate = ({ isOpen, onClose }) => {
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik>
          <Form>
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name: </label>
              <Field name="name" className="border h-7" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email: </label>
              <Field name="email" className="border h-7" />
            </div>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdate;
