"use client";
import Link from "next/link";
import Dropdown from "./Dropdown";
import TextField from "./TextField";
import { useState } from "react";
import engineerData from "../../data/engineers.json";

const Contact = () => {
  const [recipient, setRecipient] = useState("expert@irsa.us");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const emails = engineerData.engineers
    .map((e) => e.email)
    .filter((email) => email.includes("@"))
    .filter((email) => !email.includes("kenneth"));

  return (
    <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-0">
      <div className="w-full lg:w-[45%] flex flex-col items-center">
        <h1 className="text-6xl">INQUIRIES</h1>
      </div>

      <div className="w-full mt-2 lg:w-[55%] flex flex-col items-center gap-5 py-5">
        <Dropdown
          items={[
            "expert@irsa.us - (General Inquiries)",
            "kenneth@irsa.us - (Chief Forensic Scientist)",
            "divider",
            ...emails,
          ]}
          setInput={setRecipient}
          placeholder="Recipient"
          className="w-full lg:w-8/10"
        />
        <TextField
          placeholder="Subject"
          className="w-full lg:w-8/10"
          setInput={setSubject}
        />
        <TextField
          placeholder="Body"
          className="w-full lg:w-8/10 h-[200px]"
          area
          setInput={setBody}
        />
        <Link
          href={`mailto:${recipient}?subject=${subject}&body=${body}`}
          className="w-[100px] h-[50px] flex items-center justify-center
          bg-[rgba(0,0,0,0.7)] rounded-xl border-2 border-[var(--primary)]
          hover:scale-99 hover:brightness-80 transition-all duration-200"
        >
          <p className="text-xl font-bold">Send</p>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
