import React, { Dispatch, FC } from "react";
import {useContext} from 'react';
import { UIContext } from '../../context';
import dynamic from 'next/dynamic';

const importJodit = () => import("jodit-react-ts");

const JoditReact = dynamic(importJodit, {
  ssr: false,
});

interface Props {
  content: string,
  setContent: Dispatch<string>
}

export const Editor: FC<Props> = ({content, setContent}) => {

  const isSSR = typeof window === "undefined";
  const { isDark } = useContext(UIContext);

  return (
    <div className="Apper" style={{ maxWidth: "auto", margin: "0 auto" }}>
      {!isSSR && (
        <React.Suspense fallback={<div>Loading</div>}>
          <JoditReact
            config={{ theme: isDark ? "dark" : "light", minHeight: 600 }}
            onChange={(content) => setContent(content)}
            defaultValue={content}
          />
        </React.Suspense>
      )}
    </div>
  );
};
