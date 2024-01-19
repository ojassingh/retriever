import { NextRequest, NextResponse } from "next/server";
import { get_link_pup } from "@/functions/info_link";
import { get_link_cheerio } from "@/functions/info_link";
import { fuck_around } from "@/functions/info_link";

export async function POST(req: NextRequest, res: NextResponse){

    const body = await req.json()
    const link = await body.link;
    const info = await get_link_pup(link);
    return NextResponse.json({info}, { status: 200 });
    
}