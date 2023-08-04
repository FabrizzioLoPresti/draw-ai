import React from "react";
import {
  PencilIcon,
  PhotoIcon,
  PaintBrushIcon,
  AdjustmentsHorizontalIcon,
  Cog6ToothIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import DrawOption from "./DrawOption";
import PromptComponent from "./PromptComponent";

type Props = {};

const DrawOptionsCard = (props: Props) => {
  return (
    <div className="sticky top-0 w-full border border-gray-400/30 rounded-lg flex flex-col justify-between">
      <div>
        <div className="flex flex-row gap-4 border-b border-b-gray-300">
          <div className="px-2 py-2 border-b-4 border-b-black">Create</div>
          <div className="px-2 py-2 cursor-not-allowed">Edit</div>
        </div>
        
        <div className="h-[600px] overflow-y-scroll">
          <DrawOption
            icon={<PencilIcon className="w-6 h-6" />}
            text="Prompt"
            enabled={true}
          >
            <PromptComponent />
          </DrawOption>

          <DrawOption
            icon={<PhotoIcon className="w-6 h-6" />}
            text="Image to Image"
            enabled={false}
          >
          </DrawOption>

          <DrawOption
            icon={<PaintBrushIcon className="w-6 h-6" />}
            text="Draw your image"
            enabled={false}
          >
          </DrawOption>

          <DrawOption
            icon={<AdjustmentsHorizontalIcon className="w-6 h-6" />}
            text="Generation Config"
            enabled={true}
          >
          </DrawOption>

          <DrawOption
            icon={<Cog6ToothIcon className="w-6 h-6" />}
            text="Upscale & Enhance"
            enabled={false}
          >
          </DrawOption>
        </div>
      </div>

      <div>
        <p className="text-sm font-light text-center">
          2 credits will be charged for this generation
        </p>
        <button className="bg-orange-600 text-white w-full py-3 font-bold text-lg">
          Generate
        </button>
      </div>
    </div>
  );
};

export default DrawOptionsCard;
