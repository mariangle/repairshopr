import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge";
import { Comment as CommentType } from "@/types/comment";

import * as React from "react";
import { formatDistanceToNow } from 'date-fns';

interface CommentProps {
  comment: CommentType;
}

export const Comment: React.FC<CommentProps> = ({ comment }) => {
  const timeAgo = formatDistanceToNow(new Date(comment.created_at), { addSuffix: true });

  return (
    <Card className="shadow-none">
      <div className="space-y-1 p-4">
        <div className="flex justify-between items-center">
          <h4 className="text-sm font-medium leading-none">
            {comment.tech}         
            <Badge variant={"outline"}>{comment.subject}</Badge>
          </h4>
          <h6 className="text-xs font-medium leading-none">{timeAgo}</h6>
        </div>
        <p className="text-sm text-muted-foreground">
          {comment.body}
        </p>
      </div>
    </Card>
  );
};
