//
"use client";

import { IPostDocument } from "@/mongodb/models/post";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { MessageCircle, Repeat2, ThumbsUpIcon } from "lucide-react";
import { cn } from "@/lib/utils";

function PostOptions({ post }: { post: IPostDocument }) {
  const [isCommentOpen, setIsCommentsOpen] = useState(false);
  const { user } = useUser();
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  useEffect(() => {
    if (user?.id && post.likes?.includes(user.id)) {
      setLiked(true);
    }
  }, [post, user]);

  const likeOrUnlikePost = async () => {
    if (!user?.id) {
      throw new Error("User not authenticated");
    }

    // copies state so we can manipulated it and keep it seperate from out state values
    const originalLiked = liked;
    const originalLikes = likes;

    // is like true? have i already liked this? if so when this function runs filter through array of those who have liked it and return everyone but me -- basically unlike it -- if when the function runs if i havent already liked it, than take the array of those who have liked it -- spread it with the spread operator and then append my id to it -- basically like it ( the likes ?? [] is shorthand to tell the code that if there isnt any likes array already set up then set one up as an empty array)
    const newLikes = liked
      ? likes?.filter((like) => like !== user.id)
      : [...(likes ?? []), user.id];
  };
  return (
    <div>
      <div>
        <div className="flex justify-between p-4">
          {likes && likes.length > 0 && (
            <p className="text-xs text-gray-500 cursor-pointer hover:underline">
              {likes.length} likes
            </p>
          )}
        </div>
        <div>
          {post.comments && post.comments.length > 0 && (
            <p
              className="text-xs text-gray-500 cursor-pointer hover:underline"
              onClick={() => setIsCommentsOpen(!isCommentOpen)}
            >
              {post.comments?.length} comments
            </p>
          )}
        </div>
      </div>
      <div className="flex p-2 justify-between px-2 border-t">
        <Button
          variant="ghost"
          className="postButton"
          //onClick={likeOrUnlikePost}>
        >
          <ThumbsUpIcon
            className={cn("mr-1", liked && "text-[#4881c2] fill-[#4881c21")}
          />{" "}
          Like
        </Button>

        <Button
          variant="ghost"
          className="postButton"
          onClick={() => setIsCommentsOpen(!setIsCommentsOpen)}
        >
          <MessageCircle
            className={cn(
              "mr-1",
              isCommentOpen && "text-gray-600 fill-gray-600"
            )}
          />
          Comment
        </Button>

        <Button variant="ghost" className="postButton">
          <Repeat2 className="mr-1" />
          Repost
        </Button>

        <Button variant="ghost" className="postButton">
          <Repeat2 className="mr-1" />
          Send
        </Button>

        {isCommentOpen && (
          <div className="p-4">
            {/* {user?.id && <CommentForm postId={postId} />}
                <CommentFeed post={post} /> */}
          </div>
        )}
      </div>
    </div>
  );
}
export default PostOptions;
