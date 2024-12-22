/* eslint-disable sort-keys */
import { CSSProperties } from "react";

export interface IServicePresentation {
  imgURL: string;
  videoURL?: string;
  videoSpecificStyles?: CSSProperties | undefined;
}

export const watchService: IServicePresentation = {
  imgURL:
    "https://vimsxaud7lt1te1j.public.blob.vercel-storage.com/tv-D0FjxB3hetrLIu6pPT9E6o4k9qbIDv.png",
  videoURL:
    "https://vimsxaud7lt1te1j.public.blob.vercel-storage.com/video-tv-PbesRF98j9g4smTX6BATRVMfYzsHbv.m4v",
  videoSpecificStyles: { left: "13%", top: "20%", width: "73.46%" },
};

export const streamService: IServicePresentation = {
  imgURL:
    "https://vimsxaud7lt1te1j.public.blob.vercel-storage.com/device-pile-PhA0MnP76t6XGGTyahX9EcW8mDTCDO.png",
  videoURL:
    "https://vimsxaud7lt1te1j.public.blob.vercel-storage.com/video-devices-YjbBtIk93EptIa0CknvK39BPIkvYNs.m4v",
  videoSpecificStyles: { left: "18%", top: "10%", width: "63%" },
};

export const kidsService: IServicePresentation = {
  imgURL:
    "https://vimsxaud7lt1te1j.public.blob.vercel-storage.com/kids-tRvFdFxwn8ZFyYIaAlVSWCebYKVOJ5.png",
};
