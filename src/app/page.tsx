'use client'

import { ChatWindow } from '@/components/ChatWindow'
export default function Home() {

  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        Lavanya's pdf helper 🔨⛔️🦺
      </h1>
    </div>
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ChatWindow
        endpoint="api/chat/retrieval"
        emptyStateComponent={InfoCard}
        showIngestForm={true}
        placeholder={
          'Here to help you.'
        }
        emoji="👩‍🔬"
        titleText="Lavanya the scientist"
      ></ChatWindow>
    </main>
  )
}
