import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Wrapper } from "../../styles/AuthStyle";
import * as Api from "../../Api";
import { useNavigate } from "react-router-dom";

/* type */
interface FormInput {
  email: string;
  password: string;
  confirmPassword: string;
}

/* Yup Vaildation */
const SignupSchema = yup.object().shape({
  email: yup
    .string()
    .email("이메일 형식이 아닙니다.")
    .required("이메일을 입력해주세요."),
  password: yup
    .string()
    .required("비밀번호를 입력해 주세요.")
    .matches(
      /^[A-Za-z0-9]{8,12}$/,
      "숫자와 문자 포함 8~12자리로 입력해 주세요."
    ),
  confirmPassword: yup
    .string()
    .required("비밀번호를 확인해주세요.")
    .oneOf([yup.ref("password"), null], "비밀번호가 다릅니다."),
});

export default function SignUp() {
  /* useNavigate */
  const navigate = useNavigate();

  /* Submit */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: yupResolver(SignupSchema),
  });
  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    try {
      const res = await Api.post("users/create", data);
      // if (res.status === 409) {
      //   alert("이미 존재하는 아이디입니다.");
      // }
      if (res.status === 200) {
        alert("회원가입 완료 !");
        navigate("/users/login");
      }
    } catch (err) {
      alert("오류가 발생하였습니다. 다시 시도해주세요.");
    }
  };

  return (
    <Wrapper>
      <h1>회원가입</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* email */}
        <div>
          <label>
            Email
            <input type="email" {...register("email")} />
          </label>
        </div>
        <p>{errors.email?.message || "\u00A0"}</p>

        {/* password */}
        <div>
          <label>
            Password
            <input type="password" {...register("password")} />
          </label>
        </div>
        <p>{errors.password?.message || "\u00A0"}</p>

        {/* confirm password */}
        <div>
          <label>
            ConfirmPassword
            <input
              type="password"
              {...register("confirmPassword", { required: true })}
            />
          </label>
        </div>
        <p>{errors.confirmPassword?.message || "\u00A0"}</p>

        <button>완료 !</button>
      </form>
    </Wrapper>
  );
}
