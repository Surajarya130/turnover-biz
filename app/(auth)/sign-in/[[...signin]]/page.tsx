"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoginInputSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const Page = () => {
  const form = useForm<z.infer<typeof LoginInputSchema>>({
    resolver: zodResolver(LoginInputSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof LoginInputSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    console.log(values);
  }

  return (
    <section className="cardBox">
      <div className="pb-4 text-center ">
        <h1 className="pb-6 text-4xl">Login</h1>
        <h3 className="pb-3 text-2xl">Welcome back to ECOMMERCE</h3>
        <p className="text-[16px]">The next gen business marketplace</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="pb-8">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Enter your passwords..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="mb-7 mt-10 w-full">
            Sign In
          </Button>
          <hr />

          <p className="pt-8 text-center">
            Have an account?
            <Link href="/sign-up" className="font-semibold text-[#333333]">
              {" "}
              Sign Up
            </Link>
          </p>
        </form>
      </Form>
    </section>
  );
};

export default Page;
