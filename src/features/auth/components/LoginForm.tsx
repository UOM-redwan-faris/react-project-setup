import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "antd";
import { InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { useAuth } from "../../../lib/auth";

const RightAlignedTextField = styled(TextField)(
  ({
    theme, // the theme should be here
  }) => ({
    // "& label": {
    //   transformOrigin: "top right",
    //   right: 0,
    //   left: "auto",
    //   textAlign: "right",
    // },
    // "& legend": {
    //   textAlign: "right",
    // },
    // "& input": {
    //   direction: "rtl", // Ensure text direction is right-to-left
    // },
  })
);

// Define the schema using Zod
const schema = z.object({
  phoneNumber: z
    .string()
    .nonempty("رقم الهاتف مطلوب")
    .regex(/^\d{11}$/, "رقم الهاتف يجب أن يتكون من 11 أرقام"),
  password: z
    .string()
    .nonempty("كلمة المرور مطلوبة")
    .min(6, "كلمة المرور يجب أن تكون على الأقل 6 أحرف"),
});

type FormData = z.infer<typeof schema>;

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);

    try {
      // const response = await loginWithEmailAndPassword(credentials);
      await login(data);
      window.location.reload();
    } catch (error) {}
    // Replace with your form submission logic here
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <div className="">
      <div className="w-full flex flex-col justify-end items-end">
        <div className="flex justify-end text-2xl py-5 font-bold">
          تسجيل الدخول
        </div>
      </div>
      <Form
        onFinish={handleSubmit(onSubmit)}
        layout="vertical"
        labelAlign="right" // Aligns labels and error messages to the right
        wrapperCol={{ span: 24 }} // Full width for the wrapper column
      >
        <div className="py-4">
          <RightAlignedTextField
            id="outlined-phone"
            label="رقم الهاتف"
            variant="standard"
            fullWidth
            error={!!errors.phoneNumber}
            helperText={
              <div className="w-full flex justify-end p-1">
                <div className="">{errors.phoneNumber?.message}</div>
              </div>
            }
            {...register("phoneNumber")}
          />
        </div>
        <div className="py-4">
          <RightAlignedTextField
            id="outlined-password"
            label="كلمة المرور"
            type={showPassword ? "text" : "password"}
            variant="standard"
            fullWidth
            error={!!errors.password}
            helperText={
              <div className="w-full flex justify-end p-1">
                <div className="">{errors.password?.message}</div>
              </div>
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end" // Ensure icon is at the end of the input
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            {...register("password")}
          />
        </div>
        <Form.Item className="text-right p-4">
          <button
            type="submit"
            className="w-full text-lg p-2 hover:bg-opacity-80 rounded-md">
            <div className="text-white">تسجيل الدخول</div>
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};
