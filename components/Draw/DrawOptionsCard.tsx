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

type Props = {};

const DrawOptionsCard = (props: Props) => {
  return (
    <div className="sticky top-0 w-full min-h-[800px] border border-gray-400/30 rounded-lg flex flex-col justify-between">
      <div>
        <div className="flex flex-row gap-4 border-b border-b-gray-300">
          <div className="px-2 py-2 border-b-4 border-b-black">Create</div>
          <div className="px-2 py-2">Edit</div>
        </div>
        <div>
          <div className="cardDrawOptions">
            <div>
              <PencilIcon className="w-6 h-6" />
              <span>Prompt</span>
            </div>
            <ChevronDownIcon className="w-6 h-6" />
          </div>
          <div className="cardDrawOptions">
            <div>
              <PhotoIcon className="w-6 h-6" />
              <span>Image to Image</span>
            </div>
            <ChevronDownIcon className="w-6 h-6" />
          </div>
          <div className="cardDrawOptions">
            <div>
              <PaintBrushIcon className="w-6 h-6" />
              <span>Draw your image</span>
            </div>
            <ChevronDownIcon className="w-6 h-6" />
          </div>
          <div className="cardDrawOptions">
            <div>
              <AdjustmentsHorizontalIcon className="w-6 h-6" />
              <span>Generation Config</span>
            </div>
            <ChevronDownIcon className="w-6 h-6" />
          </div>
          <div className="cardDrawOptions">
            <div>
              <Cog6ToothIcon className="w-6 h-6" />
              <span>Upscale & Enhance</span>
            </div>
            <ChevronDownIcon className="w-6 h-6" />
          </div>
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
