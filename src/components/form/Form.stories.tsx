import { zodResolver } from "@hookform/resolvers/zod";
import { Meta, StoryObj } from "@storybook/react";
import { z } from "zod";

import { Button } from "../button";

import { Form } from "./Form";
import { RenderProps } from "./imageUploader";

const meta: Meta<typeof Form> = {
  title: "Form",
  component: Form,
};

export default meta;

type Story = StoryObj<typeof Form>;

const errorMessages = {
  required: "필수 항목입니다.",
  email: "유효하지 않은 이메일입니다.",
  passwordMinLength: "비밀번호는 최소 8자 이상이어야 합니다.",
  passwordMaxLength: "비밀번호는 최대 16자 이하여야 합니다.",
  passwordPattern: "비밀번호는 영문자, 숫자, 대문자 조합이어야 합니다.",
  unsupportFile: "지원하지 않는 파일 형식입니다.",
};

const {
  required,
  email,
  passwordMinLength,
  passwordMaxLength,
  passwordPattern,
  unsupportFile,
} = errorMessages;

const ACCEPTED_IMAGE_TYPES = ["image/png", "image/jpg"];

const exampleLoginSchema = z.object({
  email: z.string().min(1, { message: required }).email({ message: email }),
  password: z
    .string()
    .min(8, { message: passwordMinLength })
    .max(16, { message: passwordMaxLength })
    .regex(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,16}$/, {
      message: passwordPattern,
    }),
  profile: z.instanceof(FileList).refine(
    files => {
      return Array.from(files).every(file =>
        ACCEPTED_IMAGE_TYPES.includes(file.type),
      );
    },
    {
      message: unsupportFile,
    },
  ),
});

type ExampleLoginSchema = z.infer<typeof exampleLoginSchema>;

const submitHandler = (data: ExampleLoginSchema) => {
  // eslint-disable-next-line no-console
  console.log(data);
};

const ExampleRenderUI = (props: RenderProps) => {
  let names = "";

  if (props.files) {
    for (const file of props.files) {
      names += `${file.name} + " "`;
    }
  }

  return <h1 onClick={props.handleClick}>upload file : {names}</h1>;
};

export const Default: Story = {
  render: () => (
    <Form onSubmit={submitHandler} resolver={zodResolver(exampleLoginSchema)}>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Form.Input appearance="underline" type="email" name="email" />
        <Form.Input appearance="underline" type="password" name="password" />
        <Form.ImageUploader
          name="profile"
          render={(props: RenderProps) => <ExampleRenderUI {...props} />}
        />
        <Button appearance="primary" type="submit">
          로그인
        </Button>
      </div>
    </Form>
  ),
};
