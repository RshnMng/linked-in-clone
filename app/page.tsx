import UserInformation from "@/components/UserInformation";
import PostForm from "@/components/PostForm";
import connectDB from "@/mongodb/db";
import { Post } from "@/mongodb/models/post";
import { SignedIn } from "@clerk/nextjs";
import PostFeed from "@/components/PostFeed";

export const revalidate = 0;

export default async function Home() {
  await connectDB();

  const posts = await Post.getAllPosts();

  return (
    <div className="grid grid-cols-8 mt-5 sm:px-5">
      <section className="hidden md:inline md:col-span-2">
        {/* user information */}
        <UserInformation />
      </section>
      <section className="col-span-full md:col-span-6 xl:col-span-4 xl:max-w-xl mx-auto w-full">
        <SignedIn>
          {/* post form  */}
          <PostForm />
        </SignedIn>
        {/* post feed */}
        <PostFeed posts={posts} />
      </section>
      <section className="hidden xl:inline justify-center col-span-2">
        {/* widget */}
      </section>
    </div>
  );
}
