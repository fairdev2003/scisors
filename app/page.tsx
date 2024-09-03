import Image from "next/image";
import { useState } from "react";
import Rock from "@/public/rock.png";
import Paper from "@/public/paper.png";

export default function Home() {
  return (
    <div className="flex flex-col justify-center mt-10">
      <h1 className="text-4xl font-bold text-center">Round 1</h1>
      <div className="">
        <div className="grid grid-cols-2 mt-20">
          <div className="flex flex-col justify-center items-center gap-10">
            <p>You: 0</p>
            <div className="flex justify-center items-center gap-20">
              <Image
                alt="rock"
                width={150}
                height={150}
                src="https://www.rpsgame.org/assets/img/scissors.svg"
              ></Image>
              <Image
                alt="rock"
                width={150}
                height={150}
                src="https://www.rpsgame.org/assets/img/paper.svg"
              ></Image>
              <Image
                alt="rock"
                width={150}
                height={150}
                src="https://www.rpsgame.org/assets/img/rock.svg"
              ></Image>
              
            </div>
            <p>Take your Pick</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-10">
            <p>Your opponent: 0</p>
            <div className="flex justify-center items-center gap-20">
              <div className="loader"></div>
            </div>
            <p>Waiting for opponent</p>
          </div>
        </div>
      </div>
    </div>
  );
}
