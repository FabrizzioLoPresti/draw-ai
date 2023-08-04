import React from "react";
import Link from "next/link";

type Props = {};

const PromptComponent = (props: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col">
        <textarea name="prompt" id="prompt" placeholder="Your prompt" className="input" />
        <span className="text-xs font-extralight">
          Check out the <Link href="">prompt guide</Link> for tips on how to write a
          good prompt.
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <p className="font-bold">Negative Prompt</p>
        <input
          type="text"
          name="negative"
          id="negative"
          placeholder="Leave blank if not need"
          className="input"
        />
      </div>
    </div>
  );
};

export default PromptComponent;
