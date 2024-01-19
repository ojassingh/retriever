'use server'
import { WebPDFLoader } from "langchain/document_loaders/web/pdf";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";

export async function parse_pdf(file: any) {
    // const loader = new PDFLoader("public/resume.pdf");
    // const blob = new Blob(file);
    const blob = new Blob([file], { type: 'application/pdf' });
    const loader = new WebPDFLoader(blob)
    const docs = await loader.load();
    return docs[0].pageContent;
}