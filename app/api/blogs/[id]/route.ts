import { addPost, getPosts, getById  } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
    try {
        const id = req.url.split("blogs/")[1];
        console.log(id);
        const post = getById(id);
        if (!post) {
            return NextResponse.json({ message: "ERROR" }, { status: 404 });
        }

        return NextResponse.json({ message: "OK", post }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: "ERROR", err }, { status: 500 });
    }
};

export const PUT =async(req: Request) =>{
    console.log("PUT from id");
};

export const DELETE =async(req: Request) =>{
    console.log("DELETE from id");
};