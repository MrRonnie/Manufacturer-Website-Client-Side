import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const ResetPassword = () => {
  const { register, handleSubmit } = useForm();
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const handleLogin = ({ email }) => {
    console.log(email);

    const resetPassword = async () => {
      await sendPasswordResetEmail(email);
    };
    if (email) {
      resetPassword();
      toast("Sent email");
    } else {
      toast("Please enter  email");
    }
  };
  return (
    <>
      <div className=" p-4 my-32 max-w-md mx-auto rounded-lg border border-secondary  shadow-md sm:p-6 lg:p-8 ">
        <form
          className="space-y-4"
          action="#"
          onSubmit={handleSubmit(handleLogin)}
        >
          <h5 className="text-2xl font-bold  text-gray-900 ">
            Reset your account password
          </h5>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium ">
              Give Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              {...register("email", { required: true })}
              className="input input-bordered w-full "
              placeholder="example@email.com"
            />
          </div>

          <button type="submit" className="w-full btn btn-outline uppercase">
            Reset Password
          </button>
          <div className="text-center ">
            <Link to="/login" className=" cursor-pointer text-cyan-500">
              Back to login page
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
