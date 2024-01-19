'use client';

import { ChatWindow } from "../components/ChatWindow";
import { useEffect } from "react";

export default function AgentsPage() {



  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        Jobiry Retrieval Chain 🔨⛔️🦺
      </h1>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/retrieval"
      emptyStateComponent={InfoCard}
      showIngestForm={true}
      placeholder={
        'Let me analyse your resumes'
      }
      emoji="🐶"
      titleText="Rohan the Document-Retrieving Dog"
    ></ChatWindow>
  );
}