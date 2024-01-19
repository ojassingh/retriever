"use client";

import { useState } from "react";
import axios from "axios";

export default function PostLink() {

  function htmlToText(html:any) {
    // Create a new DOMParser
    const parser = new DOMParser();
  
    // Parse the HTML string
    const doc = parser.parseFromString(html, 'text/html');
  
    // Extract the text content from the parsed document
    const textContent = doc.body.textContent || '';
  
    // Remove extra whitespaces and trim the result
    const plainText = textContent.replace(/\s+/g, ' ').trim();
  
    return plainText;
  }

  const [link, setLink] = useState<string>("");
  const submitHandler = async () => {
    const response = await axios.post("/api/posting", {
      link: link,
    });
    const data = await response.data;
    // console.log(data)
    console.log(htmlToText(data.info));
  };

  return (
    <div>
      <div className="flex gap-4">
        <input
          value={link}
          onChange={(e) => {
            setLink(e.target.value);
          }}
          className="py-2 px-4 rounded-xl bg-white text-black"
          placeholder="Paste the job posting link"
        />
        <button
          className="p-2 bg-blue-500 text-white rounded-xl"
          onClick={submitHandler}
        >
          get info
        </button>
      </div>
    </div>
  );
}
