import dbConnect from "@/lib/db";

import collectorModel from "@/lib/db/models/collector";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await dbConnect();

    const collector = await collectorModel.create(body);

    await collector.save();

    return new NextResponse("Collector created!", { status: 201 });
  } catch (error: any) {
    console.log(error);
    return new NextResponse(error.message, { status: 500 });
  }
}

export async function GET(res: Response) {
  try {
    await dbConnect();

    const collectors = await collectorModel.find({});

    return new NextResponse(JSON.stringify(collectors), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error: any) {
    console.log(error);
    return new NextResponse(error.message, { status: 500 });
  }
}
