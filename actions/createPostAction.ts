//
//
//
"use server";

import { Post } from "@/mongodb/models/post";
import { IUser } from "@/types/user";
import { currentUser } from "@clerk/nextjs/server";

export default async function createPostAction(formData: FormData) {
  const user = await currentUser();

  if (!user) {
    throw new Error("user not authenticated");
  }

  const postInput = formData.get("postInput") as string;
  const image = formData.get("image") as File;
  let imageURl: string | undefined;

  if (!postInput) {
    throw new Error("post input is required");
  }

  // define user

  const userDB: IUser = {
    userId: user.id,
    userImage: user.imageUrl,
    firstName: user.firstName || "",
    lastName: user.lastName || "",
  };

  // upload image if there is one
  try {
    if (image.size > 0) {
      // if there is an image
      //1. uplaod image
      //2. create post in database with photo
    } else {
      // 1. create post in database without photo

      const body = {
        user: userDB,
        text: postInput,
      };

      await Post.create(body);
    }
  } catch (error) {
    console.log("failed to create post", error);
  }

  // create post in database

  // revalidate path -- home page
}
