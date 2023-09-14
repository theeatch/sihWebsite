import axios from "axios";
import React, { MutableRefObject, useRef } from "react";
import { useState } from "react";

interface Props {}

export interface AudioResponse {
  svgs: string[];
  durations: number[];
  url: string;
}

const CardActivity: React.FC<Props> = () => {
  const [audioAnimations, setAudioAnimations] = useState<(string | number)[][]>(
    [[]]
  );
  const [audioUrl, setAudioUrl] = useState("");
  const [currentImage, setCurrentImage] = useState<string>();
  let timeout: MutableRefObject<NodeJS.Timeout | null> = useRef(null);

  const getAudio = async (query: string) => {
    const resp = await axios.get(`http://localhost:3000/google/audio/${query}`);
    const data: AudioResponse = resp.data;

    setAudioAnimations(() => data.svgs.map((e, i) => [e, data.durations[i]]));
    setAudioUrl(() => data.url);
    setCurrentImage(() => data.svgs[0]);
  };

  const startAnimation = () => {
    for (const i of audioAnimations) {
    //   if (timeout?.current) {
    //     clearTimeout(timeout.current);
    //   }

      timeout.current = setTimeout(() => {
        setCurrentImage(() => i[0] as string);
      }, (i[1] as number) * 10);
      // clearTimeout(timeout);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen pt-24">
      <div className="flex flex-col items-center justify-center pb-20 w-[40rem] h-full gap-5">
        <div className="w-full bg-white h-[40rem] rounded-2xl flex flex-col justify-between">
          <img src={currentImage} alt="" />
          <audio onPlay={() => startAnimation()} controls src={audioUrl}>
            hello
          </audio>
        </div>
        <div className="flex flex-row justify-between w-full">
          <button className="px-16 py-4 text-white bg-orange-600 h-14 rounded-l-2xl">
            <span>Prev</span>
          </button>
          <button className="px-16 py-4 text-white bg-orange-600 h-14 rounded-r-2xl">
            <span>Next</span>
          </button>
        </div>
        <button
          onClick={() => getAudio("hello")}
          className="px-20 py-5 text-white bg-gray-700 rounded-2xl"
        >
          Flip
        </button>
      </div>
    </div>
  );
};

export default CardActivity;
