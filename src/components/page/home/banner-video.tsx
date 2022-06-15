/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { isSafari, isIOS } from 'react-device-detect';

import { Background } from '@components/background';
import styles from '@styles/components/page/home/banner.module.scss';

const BannerVideo = () => {
  const [state, setState] = React.useState({
    isReady: false,
  });

  const videoParentRef = React.useRef() as any;
  const [shouldUseImage, setShouldUseImage] = React.useState(false);
  const logoAnimationVideo = '/assets/videos/vessel-coin-logo-animation.webm';
  const logoAnimationGIF = '/assets/videos/vessel-coin-logo-animation.gif';

  React.useEffect(() => {
    setState({ ...state, isReady: true });

    // check if user agent is safari and we have the ref to the container <div />
    if (isSafari && isIOS && videoParentRef.current) {
      // obtain reference to the video element
      const player = videoParentRef.current.children[0];

      // if the reference to video player has been obtained
      if (player) {
        // set the video attributes using javascript as per the
        // webkit Policy
        player.controls = false;
        player.playsinline = true;
        player.muted = true;
        player.setAttribute('muted', ''); // leave no stones unturned :)
        player.autoplay = true;

        // Let's wait for an event loop tick and be async.
        setTimeout(() => {
          // player.play() might return a promise but it's not guaranteed crossbrowser.
          const promise = player.play();
          // let's play safe to ensure that if we do have a promise
          if (promise.then) {
            promise
              .then(() => {})
              .catch(() => {
                // if promise fails, hide the video and fallback to <img> tag
                videoParentRef.current.style.display = 'none';
                setShouldUseImage(true);
              });
          }
        }, 0);
      }
    }
  }, []);

  return (
    <Background color="bg-white">
      <div className={styles.bg}>
        <div className={styles.playerWrapper}>
          {shouldUseImage ? ( // temporarily negated
            <img
              src={logoAnimationGIF}
              alt="Muted Video"
              className="object-contain h-screen w-screen"
            />
          ) : (
            <div
              className="h-full"
              ref={videoParentRef}
              dangerouslySetInnerHTML={{
                __html: `
                  <video
                    muted
                    autoplay
                    playsinline
                    preload="metadata"
                    class="${styles.video}"
                  >
                  <source src="${logoAnimationVideo}" type="video/mp4" />
                  </video>`,
              }}
            />
          )}
        </div>
      </div>
    </Background>
  );
};

export default BannerVideo;
