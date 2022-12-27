import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Wrapper } from "../../styles/AuthStyle";

interface FormInput {
  name: String;
  email: String;
  password: String;
  confirmPassword: String;
}

const SignupSchema = yup.object().shape({
  name: yup
    .string()
    .required("이름을 입력해 주세요.")
    .min(2, "이름은 2글자 이상 12글자 이하입니다.")
    .max(12, "이름은 2글자 이상 12글자 이하입니다."),
  email: yup
    .string()
    .email("이메일 형식이 아닙니다.")
    .required("이메일을 입력해주세요."),
  password: yup
    .string()
    .required("비밀번호를 입력해 주세요.")
    .matches(
      /^[A-Za-z0-9]{6,12}$/,
      "숫자와 문자 포함 6~12자리로 입력해 주세요."
    ),
  confirmPassword: yup
    .string()
    .required("비밀번호를 확인해주세요.")
    .oneOf([yup.ref("password"), null], "비밀번호가 다릅니다."),
});

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: yupResolver(SignupSchema),
  });
  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

  return (
    <Wrapper>
      <h1>회원가입</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* name */}
        <div>
          <label>Name</label>
          <input type="text" {...register("name")} />
        </div>
        {errors.name && <p>{errors.name.message}</p>}

        {/* email */}
        <div>
          <label>Email</label>
          <input type="email" {...register("email")} />
        </div>
        {errors.email && <p>{errors.email.message}</p>}

        {/* password */}
        <div>
          <label>Password</label>
          <input type="password" {...register("password")} />
        </div>
        {errors.password && <p>{errors.password.message}</p>}

        {/* confirm password */}
        <div>
          <label>ConfirmPassword</label>
          <input
            type="password"
            {...register("confirmPassword", { required: true })}
          />
        </div>
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

        {/* submit button */}
        <button>완료 !</button>
      </form>
    </Wrapper>
  );
}
