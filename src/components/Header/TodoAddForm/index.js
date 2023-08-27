import { Field, Formik, Form } from "formik";
import React from "react";
import validations from "./validations";

import { useTodo } from "../../../context/TodoContext";
function TodoAddForm() {
  const {addTodo}=useTodo()
  return (
    <Formik
      initialValues={{ text: "" }}
      onSubmit={(values,bag) => {


        addTodo(values.text)


        bag.resetForm()
      }}
      validationSchema={validations}
    >
      <Form>
        <Field
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          id="text"
          name="text"
        />
      </Form>
    </Formik>
  );
}

export default TodoAddForm;
