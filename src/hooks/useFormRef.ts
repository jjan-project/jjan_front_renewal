import { useRef } from "react";

import type { FormMethods } from "@/components/form";

/**
 * Form의 ServerSide Error를 다루기 위해 사용될 특수한 훅 입니다.
 *
 * @example
 * ```tsx
 * function App() {
 *   const signinFormRef = useFormRef();
 *   const signinMutation = useSignin();
 *
 *   const handleSignin = (data: SigninSchemaType) => {
 *     signinMutation.mutate(data, {
 *       onSuccess: () => {
 *         window.location.replace("/");
 *       },
 *       onError: () => {
 *         signinFormRef.current?.setGlobalError(
 *           "아이디 또는 비밀번호를 확인해주세요.",
 *          );
 *       },
 *     });
 *   };
 *
 *   return (
 *     <Form<{ email: string }> onSubmit={handleSignin}>
 *       <Form.Input type="email" name="email"/>
 *       <button>Submit</button>
 *     </Form>
 *   );
 * }
 * ```
 */
function useFormRef() {
  return useRef<FormMethods>(null);
}

export default useFormRef;
