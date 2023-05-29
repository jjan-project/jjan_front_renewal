import { zodResolver } from "@hookform/resolvers/zod";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Form } from "./Form";

import { SignupSchemaType, signupSchema } from "@/schema/register";

const meta: Meta<typeof Form> = {
  title: "Form",
  component: Form,
};

export default meta;

type Story = StoryObj<typeof Form>;

const submitHandler = (data: SignupSchemaType) => {
  // eslint-disable-next-line no-console
  console.log(data);
};

export const Default: Story = {
  render: () => (
    <Form
      onSubmit={submitHandler}
      resolver={zodResolver(signupSchema)}
      mode="onChange"
      delayError={1000}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Form.Input type="email" name="email" />
        <Form.Input type="password" name="password" />
        <Form.Input type="password" name="confirmPassword" />
        <button type="submit">submit</button>
      </div>
    </Form>
  ),
};
