/* eslint-disable @next/next/no-img-element */
import { IServicePresentation } from "../../constants";

export function ServicePresentation({
  imgURL,
  videoURL,
  videoSpecificStyles,
}: IServicePresentation) {
  return (
    <div className="basis-1/2 z-10 order-2 md:order-1">
      <div className="relative overflow-hidden">
        <img src={imgURL} alt="" className="w-full" />
        {videoURL && (
          <div
            className="overflow-hidden absolute -z-10"
            style={videoSpecificStyles}
          >
            <video autoPlay playsInline muted loop className="w-full">
              <source src={videoURL} type="video/mp4" />
            </video>
          </div>
        )}
      </div>
    </div>
  );
}
