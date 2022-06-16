// import React from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// const fieldMandatoryMessage = "This field is required";

// export const ReactHooks = () => {
//   const schema = yup
//     .object({
//       email: yup
//         .string()
//         .min(2, "Minimum 2 character are required")
//         .email("Email should be valid")
//         .required({ fieldMandatoryMessage }),
//       password: yup
//         .string()
//         .required({ fieldMandatoryMessage })
//         .min(8, "Password should be 8 characters long")
//         .uppercase("One uppercase character required")
//         .lowercase("One uppercase character required"),
//     })
//     .required();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });
//   const onSubmit = (data: any) => console.log(data);
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("email")} />
//       {/* <p>{errors.email?.message}</p> */}
//       <input {...register("password")} />
//       {/* <p>{errors.password?.message}</p> */}
//       {console.log(errors)}
//       <input type="submit" />
//     </form>
//   );
// };

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required();

export const ReactHooks = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <p>{errors.firstName?.message}</p>

      <input {...register("age")} />
      <p>{errors.age?.message}</p>

      <input type="submit" />
    </form>
  );
};
