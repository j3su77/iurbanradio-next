import { FC } from "react";
import Marquee from "react-fast-marquee";

interface Props {
  isPlaying: boolean;
  isLoading: boolean;
}

export const MarqueeText: FC<Props> = ({ isPlaying, isLoading }) => {
  return (
    <>
      {isPlaying && !isLoading && (
        <Marquee gradient={false} speed={50} className="overflow-hidden">
          <span style={{ marginLeft: "300px" }}>Sonando iurbanradio</span>
          <span style={{ marginLeft: "300px" }}>Sonando iurbanradio</span>
        </Marquee>
      ) }
      {isLoading && (
        <Marquee gradient={false} speed={50} className="overflow-hidden">
        <span style={{ marginLeft: "300px" }}>Cargando... </span>
      </Marquee>
      )}
    </>
  );
};
