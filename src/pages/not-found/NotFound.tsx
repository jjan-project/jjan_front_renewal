import { useNavigate } from "react-router-dom";

import errorImg from "@/assets/error.png";
import { ErrorComponent } from "@/components/error";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <ErrorComponent
      resetError={() => navigate("/landing")}
      error={{ message: "페이지를 찾을 수 없습니다." }}
      errorImg={errorImg}
    />
  );
};

export { NotFound };
