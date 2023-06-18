"use client";

import { Icon } from "@iconify/react";
import { state as mstate } from "./state";
import Input from "../Text/Input";
import TextArea from "../Text/TextArea";
import Button from "../Button";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

export const modal = (state?: boolean) => {
  if (state) {
    mstate.getState().s(state);
  } else {
    mstate.getState().swap();
  }
};

export default function Modal() {
  const [email, setEmail] = useState<string>();
  const [content, setContent] = useState<string>();
  const [error, setError] = useState<string[]>([]);
  const { active, s: set } = mstate();
  return (
    <div
      className={`bounce modal fixed z-[999] h-[515px] w-[500px] rounded-lg bg-white shadow-2xl  ${
        active
          ? "pointer-events-auto top-[50%] opacity-100"
          : "pointer-events-none top-[60%] h-[200px] w-[150px] opacity-0"
      }`}
    >
      <div className="m-10">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Contact Me</h1>
          <Icon
            icon="heroicons:x-mark-20-solid"
            className="cursor-pointer text-[20px]"
            onClick={() => {
              modal(false);
            }}
          />
        </div>
        <div className="mt-6 flex flex-col gap-2">
          <Input
            value={email}
            onChange={(e) => {
              const value = e.target.value;
              setEmail(value);
              if (value.length > 0) {
                try {
                  z.string().email().parse(value);
                  setError(error.filter((f) => f !== "email"));
                } catch (err) {
                  setError([...error, "email"]);
                }
              }
            }}
            type="email"
            placeholder="acme@example.com"
            className={`${
              error.includes("email") ? "border-red-500 border-opacity-80" : ""
            }`}
          />
          <TextArea
            value={content}
            onChange={(e) => {
              if (e.target.value.length > 500 || e.target.value.length < 10) {
                setError([...error, "content"]);
              } else {
                setError(error.filter((f) => f !== "content"));
                setContent(e.target.value);
              }
            }}
            placeholder="make it simple and intresting..."
            className={`${
              error.includes("content")
                ? "border-red-500 border-opacity-80"
                : ""
            } h-[300px] resize-none`}
          />
        </div>
        <div className="mt-3 flex gap-2">
          <Button
            onClick={async () => {
              if (
                !error.includes("email") &&
                !error.includes("content") &&
                (email as string).length > 0 &&
                (content as string).length > 0
              ) {
                const res = await fetch("/api/contact", {
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    email: `${email}`,
                    content: `${content}`,
                  }),
                  method: "POST",
                })
                  .then(async (r) => (await r.json()).ok as boolean)
                  .catch((e) => false);
                if (!res) {
                  toast.error("Failed to send message.");
                } else {
                  toast.success("Message sent!");
                }
              }
            }}
          >
            <p>Submit</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
