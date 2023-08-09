'use client'

import Link from "next/link";
import { useAppSelector, useAppDispatch } from "@/hooks/useReduxStore";
import { setPrompt, setNegativePrompt } from "@/store/features/optionSlice";

type Props = {};

const PromptComponent = (props: Props) => {
  const { prompt, negativePrompt } = useAppSelector((state) => state.options);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col">
        <textarea name="prompt" id="prompt" placeholder="Your prompt" className="input" value={prompt} onChange={(e) => dispatch(setPrompt(e.target.value))} />
        <span className="text-xs font-extralight">
          Check out the <Link href="" className="text-orange-600 font-bold">prompt guide</Link> for tips on how to write a
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
          value={negativePrompt}
          onChange={(e) => dispatch(setNegativePrompt(e.target.value))}
        />
      </div>
    </div>
  );
};

export default PromptComponent;
