import { NextRequest, NextResponse } from "next/server";
import { parse_pdf} from '@/functions/parse_pdf'
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { createClient } from "@supabase/supabase-js";
import { SupabaseVectorStore } from "langchain/vectorstores/supabase";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";

export async function POST(req: NextRequest, res: NextResponse){
    const body = await req.formData()
    const file = body.get('file')
    const doc = await parse_pdf(file);

    // console.log("Doc: ", doc)
    // const data = await parse_pdf(body);
    try {
        const client = createClient(
          process.env.SUPABASE_URL!,
          process.env.SUPABASE_PRIVATE_KEY!,
        );
    
        const splitter = RecursiveCharacterTextSplitter.fromLanguage("markdown", {
          chunkSize: 256,
          chunkOverlap: 20,
        });
    
        const splitDocuments = await splitter.createDocuments([doc]);
    
        const vectorstore = await SupabaseVectorStore.fromDocuments(
          splitDocuments,
          new OpenAIEmbeddings(),
          {
            client,
            tableName: "documents",
            queryName: "match_documents",
          },
        );
    
        return NextResponse.json({ ok: true }, { status: 200 });
      } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
      }
    // return NextResponse.json({ data: "data" }, { status: 200 });
}


// export async function GET(req: NextRequest) {
//     return NextResponse.json({ ok: true }, { status: 200 });
// }