"use client";

import { useState } from "react";
import Link from "next/link";
import RangeOptions from "../Layout/RangeOptions";
import { useAppSelector, useAppDispatch } from "@/hooks/useReduxStore";
import {
  setNumberImages,
  setAspectRatio,
  setWidth,
  setHeight,
  setCfgScale,
  setSteps,
  setSampler,
} from "@/store/features/optionSlice";

type Props = {};

const GenerationConfigComponent = (props: Props) => {
  const { numberImages, aspectRatio, width, height, cfgScale, steps, sampler } =
    useAppSelector((state) => state.options.options);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col">
        <span className="text-xs font-extralight">
          Number of images to generate: {numberImages}
        </span>
        <RangeOptions
          min={1}
          max={10}
          step={1}
          disabled={false}
          key={numberImages}
          value={numberImages}
          onChange={(e) => dispatch(setNumberImages(Number(e.target.value)))}
        />
      </div>

      <div className="flex flex-row gap-5 items-center justify-between">
        <p className="text-xs font-extralight whitespace-nowrap">
          Aspect Ratio:
        </p>
        <select
          name="aspectRatio"
          id="aspectRatio"
          className="input w-full"
          value={aspectRatio}
          onChange={(e) => dispatch(setAspectRatio(e.target.value))}
        >
          <option value="default">Default</option>
          <option value="square">Square (1:1)</option>
          <option value="portrait">Portrait (4:5)</option>
          <option value="landscape">Landscape (16:9)</option>
        </select>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between gap-4">
            <div className="w-full">
              <p className="text-xs font-extralight">Width: {width}</p>
              <RangeOptions
                min={1}
                max={1000}
                step={1}
                disabled={true}
                key={width}
                value={width}
                onChange={(e) => dispatch(setWidth(Number(e.target.value)))}
              />
            </div>

            <div className="w-full">
              <p className="text-xs font-extralight">Height: {height}</p>
              <RangeOptions
                min={1}
                max={1000}
                step={1}
                disabled={true}
                key={height}
                value={height}
                onChange={(e) => dispatch(setHeight(Number(e.target.value)))}
              />
            </div>
          </div>

          <div className="flex flex-row justify-between gap-4">
            <div className="w-full">
              <p className="text-xs font-extralight whitespace-nowrap">
                Cfg Scale: {cfgScale}
              </p>
              <RangeOptions
                min={1}
                max={1000}
                step={1}
                disabled={false}
                key={cfgScale}
                value={cfgScale}
                onChange={(e) => dispatch(setCfgScale(Number(e.target.value)))}
              />
            </div>

            <div className="w-full">
              <p className="text-xs font-extralight">Steps: {steps}</p>
              <RangeOptions
                min={1}
                max={1000}
                step={1}
                disabled={true}
                key={steps}
                value={steps}
                onChange={(e) => dispatch(setSteps(Number(e.target.value)))}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-xs font-extralightp">Sampler:</p>
        <select
          name="sampler"
          id="sampler"
          className="input w-full"
          value={sampler}
          onChange={(e) => dispatch(setSampler(e.target.value))}
        >
          <option value="dpm">DPM Solver++</option>
          <option value="ddim">DDIM</option>
          <option value="eulera">Euler A</option>
        </select>
      </div>

      <div>
        <p className="text-xs font-extralightp">
          Check out our{" "}
          <Link
            href={
              "https://blog.openart.ai/2023/02/13/the-most-complete-guide-to-stable-diffusion-parameters/"
            }
            target="_blank"
            className="text-orange-600 font-bold"
          >
            Complete Guide
          </Link>{" "}
          to Stable Diffusion Parameters.
        </p>
      </div>
    </div>
  );
};

export default GenerationConfigComponent;
