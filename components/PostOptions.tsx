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

  const likeOrUnlikePost = async () => {};
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
