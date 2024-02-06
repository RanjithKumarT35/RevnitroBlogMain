import connectMongo from "../../../../utlis/connectMongo";
// import PostModel from "../../../../models/postModel";
import PostModel from "../../../../models/enquiryModel";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await connectMongo();
    const postData = await PostModel.findOne({ _id: params.id });
    return NextResponse.json(postData);
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
