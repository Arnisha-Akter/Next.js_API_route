import { addPost, getPosts, getById, updatePost, deletePost  } from "@/lib/data";
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
    try{
        const {title, desc} = await req.json();
        const id = req.url.split("blogs/")[1];
        updatePost(id, title, desc);
        return NextResponse.json({ message: "OK"}, { status: 200 });
    }
    catch(err){
        return NextResponse.json({ message: "ERROR", err }, { status: 500 });
    }
    
};

// deletes post by its id
export const DELETE =async(req: Request) =>{
    try{
        const id = req.url.split("blogs/")[1];
        deletePost(id);
        return NextResponse.json({ message: "OK"}, { status: 200 });
    }
    catch(err){
        return NextResponse.json({ message: "ERROR", err }, { status: 500 });
    }
};