import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

import { SignupSchemaType, signupSchema } from "@/schema/register";

const SingupProtoType = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupSchemaType>({
    mode: "onChange",
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupSchemaType) => {
    console.info(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email</label>
        <input type="text" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>Password</label>
        <input type="password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <div>
        <label>Confirm Password</label>
        <input type="password" {...register("confirmPassword")} />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>

      <button type="submit">회원가입</button>
    </form>
  );
};

export default SingupProtoType;
