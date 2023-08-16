/* eslint-disable no-console */
import { zodResolver } from "@hookform/resolvers/zod";
import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";
import { z } from "zod";

import { Form } from "./Form";
import { RenderProps } from "./imageUploader";

const testData = {
  validEmail: "test@example.com",
  validPassword: "Test1234!",
  invalidEmail: "invalidemail",
  invalidPassword: "Test12345678",
  emptyString: "",
};

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

const ExampleRenderUI = (props: RenderProps) => {
  let names = "";

  if (props.files) {
    for (const file of props.files) {
      names += `${file.name} + " "`;
    }
  }

  return <h1 onClick={props.handleClick}>upload file : {names}</h1>;
};

const exampleLoginSchema = z.object({
  email: z.string().min(1, { message: required }).email({ message: email }),
  password: z
    .string()
    .min(8, { message: passwordMinLength })
    .max(16, { message: passwordMaxLength })
    .regex(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,16}$/, {
      message: passwordPattern,
    }),
});

const exampleUploaderSchema = z.object({
  profile: z.instanceof(Array<File>).refine(
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

describe("Form Component", () => {
  describe("Input", () => {
    test("Should render Form component correctly", () => {
      const mockSubmit = vi.fn();

      render(
        <Form onSubmit={mockSubmit} testId="form">
          <Form.Input
            appearance="filled"
            label="test"
            type="text"
            name="test"
          />
        </Form>,
      );

      const formElement = screen.getByTestId("form");
      expect(formElement).toBeInTheDocument();

      const inputElement = screen.getByLabelText("test");
      expect(inputElement).toBeInTheDocument();
    });

    test("Should render feedback messages for invalid inputs", async () => {
      const mockSubmit = vi.fn(data => {
        console.log(data);
      });

      render(
        <Form onSubmit={mockSubmit} resolver={zodResolver(exampleLoginSchema)}>
          <Form.Input
            appearance="filled"
            label="email"
            type="email"
            name="email"
          />
          <Form.Input
            appearance="filled"
            label="password"
            type="password"
            name="password"
          />
          <button type="submit">click me</button>
        </Form>,
      );

      await user.click(screen.getByRole("button"));

      await waitFor(() =>
        expect(screen.queryAllByRole("alert")).toHaveLength(2),
      );
      expect(mockSubmit).not.toHaveBeenCalled();
    });

    test("Should call onSubmit function when the input is correct", async () => {
      const mockSubmit = vi.fn(data => {
        console.log(data);
      });

      render(
        <Form onSubmit={mockSubmit} resolver={zodResolver(exampleLoginSchema)}>
          <Form.Input
            appearance="filled"
            label="email"
            type="email"
            name="email"
          />
          <Form.Input
            appearance="filled"
            label="password"
            type="password"
            name="password"
          />
          <button type="submit">click me</button>
        </Form>,
      );

      await user.type(screen.getByLabelText("email"), testData.validEmail);
      await user.type(
        screen.getByLabelText("password"),
        testData.validPassword,
      );
      await user.click(screen.getByRole("button"));

      expect(mockSubmit).toHaveBeenCalled();
    });

    test("Should not call onSubmit function when there is an invalid input", async () => {
      const mockSubmit = vi.fn(data => {
        console.log(data);
      });

      render(
        <Form onSubmit={mockSubmit} resolver={zodResolver(exampleLoginSchema)}>
          <Form.Input
            appearance="filled"
            label="email"
            type="email"
            name="email"
          />
          <Form.Input
            appearance="filled"
            label="password"
            type="password"
            name="password"
          />
          <button type="submit">click me</button>
        </Form>,
      );

      await user.type(screen.getByLabelText("email"), testData.invalidEmail);
      await user.type(
        screen.getByLabelText("password"),
        testData.invalidPassword,
      );
      await user.click(screen.getByRole("button"));

      expect(mockSubmit).not.toHaveBeenCalled();
    });
  });

  describe("Uploader", () => {
    test("Should render Form component correctly", () => {
      const mockSubmit = vi.fn(data => {
        console.log(data);
      });

      render(
        <Form onSubmit={mockSubmit} testId="form">
          <Form.ImageUploader
            name="profile"
            render={(props: RenderProps) => ExampleRenderUI(props)}
            testId="imageuploder"
          />
        </Form>,
      );

      const formElement = screen.getByTestId("form");
      expect(formElement).toBeInTheDocument();

      const inputElement = screen.getByTestId("imageuploder");
      expect(inputElement).toBeInTheDocument();
    });

    test("Should call onSubmit function when the file is correct", async () => {
      const mockSubmit = vi.fn(data => {
        console.log(data);
      });

      const file = new File(["file contents"], "filename.png", {
        type: "image/png",
      });

      render(
        <Form
          onSubmit={mockSubmit}
          resolver={zodResolver(exampleUploaderSchema)}
        >
          <Form.ImageUploader
            name="profile"
            render={(props: RenderProps) => ExampleRenderUI(props)}
            mode="single"
            testId="imageuploder"
          />
          <button type="submit">click me</button>
        </Form>,
      );

      await user.upload(screen.getByTestId("imageuploder"), file);
      await user.click(screen.getByRole("button"));

      expect(mockSubmit).toHaveBeenCalled();
    });

    test("Should not call onSubmit function when the file is incorrect", async () => {
      const mockSubmit = vi.fn(data => {
        console.log(data);
      });

      const file = new File(["file contents"], "filename.txt", {
        type: "text/plain",
      });

      render(
        <Form
          onSubmit={mockSubmit}
          resolver={zodResolver(exampleUploaderSchema)}
        >
          <Form.ImageUploader
            name="profile"
            render={(props: RenderProps) => ExampleRenderUI(props)}
            mode="single"
            testId="imageuploder"
          />
          <button type="submit">click me</button>
        </Form>,
      );

      await user.upload(screen.getByTestId("imageuploder"), file);
      await user.click(screen.getByRole("button"));

      expect(mockSubmit).not.toHaveBeenCalled();
    });
  });
});
