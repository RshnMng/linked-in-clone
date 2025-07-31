"use client";

import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { useUser } from "@clerk/nextjs";
import { ImageIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useRef } from "react";

//

function PostForm() {
  const { user, isLoaded } = useUser();
  const ref = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isLoaded) return null;

  const firstName = user?.firstName;
  const lastName = user?.lastName;
  const imageUrl = user?.imageUrl;
  return (
    <div>
      <div>
        <form action="">
          <div className="flex items-center space-x-2">
            <Avatar>
              <AvatarImage src={imageUrl} />
              <AvatarFallback>
                {firstName?.charAt(0)}
                {lastName?.charAt(0)}
              </AvatarFallback>
            </Avatar>

            <input
              type="text"
              name="postInput"
              placeholder="Start writing a post..."
              className="flex-1 outline-none rounded-full py-3 px-4 border"
            />
            <input type="file" name="image" accept="image/*" hidden />

            <button type="submit" hidden>
              Post
            </button>
          </div>

          {/* Preview conditonal check*/}
          <div>
            <Button>
              <ImageIcon className="mr-2" size={16} color="currentColor" />
              Add
            </Button>

            {/* add a remove preview button */}
          </div>
        </form>
      </div>
    </div>
  );
}
export default PostForm;
