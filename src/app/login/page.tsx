import FormLogin from "@/components/loginPage/FormLogin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 md:h-screen ">
        <div className="md:col-span-8 2xl:col-span-9 h-full dark:bg-blue-800/80 -z-10 relative bg-[rgba(85,110,230,.25)]">
          <div className=" absolute inset-0 top-0 left-0 bg-cover opacity-90 bg-[url('https://img.freepik.com/free-vector/realistic-neon-lights-background_23-2148907367.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1720083600&semt=ais_user')] -z-10"></div>
        </div>
        <div className="bg-white md:col-span-4 2xl:col-span-3 h-full pb-10 dark:bg-zink-700">
          <div className="p-6 lg:p-10 h-full">
            <h1 className="font-bold text-primary">TMSCrap</h1>
            <div className="h-full flex flex-col justify-center">
              <h4 className="text-16 text-blue-500 font-medium  ">
                Welcome !!
              </h4>
              <p className="font-normal text-13 mt-1 mb-6 text-gray-600 dark:text-zink-200">
                Welcome To TMScrap Project
              </p>
              <FormLogin />
            </div>
            <p className="text-13 font-light text-center dark:text-zink-200">
              © 2024 TMScrap. Crafted with{" "}
              <span>
                <i className="mdi mdi-heart  text-red-500" />
              </span>{" "}
              by <span className="capitalize">Trio Titit</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
