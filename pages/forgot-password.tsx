import Button from "@/components/shared/buttons/Button/Button";
import Heading from "@/components/shared/typography/Heading/Heading";
import Input from "@/components/shared/forms/Input/Input-Forgot-Password/Input-Forgot-Password";
import Layout from "@/components/shared/layout/Layout";
import Link from "next/link";

const SignUp = () => {
  return (
    <Layout className="flex flex-col">
      <form className="w-full px-14 pt-11 pb-8 rounded-3xl max-w-2xl m-auto mx-auto bg-slate-600 border border-gray-500">
        <Heading className="mb-5">
          Забули <br></br>адресу електронної<br></br>пошти/пароль?
        </Heading>

        <p className="text-lg text-center pb-8">
          Ми надішлемо вам повідомлення з інструкціями <br></br>для скидання
          пароля
        </p>

        <Input type="email" name="email" placeholder="name@example.com" />

        <Button type="submit">Надішліть мені повідомлення</Button>

        <p className="text-lg text-center">
          Згадали пароль?
          <Link href="/sign-in">
            <span> </span>Увійти
          </Link>
        </p>
      </form>
    </Layout>
  );
};

export default SignUp;
