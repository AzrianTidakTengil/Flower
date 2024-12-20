/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import styles from "@/styles/Home.module.css";

import Frame1 from "./frame/main/index.page";
import Frame from "./frame/index.page";

import metadata from "./metadata";
import Component from "./component/index.page";

import { Howler, Howl } from "howler";

import { useDispatch, useSelector } from "react-redux";
import { useRef, useEffect } from "react";

export default function Home() {
  const { volume } = useSelector((state) => state.setting);
  const audioRef = useRef(null);
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <audio autoPlay ref={audioRef} hidden loop src="audio/main.mp3" />
      <Component>
        <div>
          <Frame />
        </div>
      </Component>
    </>
  );
}
