"use client";

import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";

import { InputSchema } from "@/lib/validations";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Page = () => {
  const form = useForm<z.infer<typeof InputSchema>>({
    resolver: zodResolver(InputSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof InputSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section className="cardBox">
      <h1 className="pb-4 text-center text-4xl">Create your account</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="pb-8">
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="pb-8">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Enter your email..." {...field} />
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
                  <Input placeholder="Enter your passwords..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="mt-10 w-full">
            Create Account
          </Button>
        </form>
      </Form>
      <p className=" pt-8 text-center">
        Have an account?
        <Link href="/sign-in" className="font-semibold text-[#333333]">
          {" "}
          LOGIN
        </Link>
      </p>
    </section>
  );
};

export default Page;
