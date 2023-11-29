import Image from 'next/image';

type AnimationControlsProps = {
  isRepeating: boolean;
  isRunning: boolean;
  isPaused: boolean;
  handleRepeatClick: () => void;
  handlePauseClick: () => void;
  handlePlayClick: () => void;
  handleStopClick: () => void;
};

const AnimationControls = ({
  isRepeating,
  isRunning,
  isPaused,
  handleRepeatClick,
  handlePauseClick,
  handlePlayClick,
  handleStopClick,
}: AnimationControlsProps) => {
  const buttonClass =
    'rounded-lg bg-green-600 hover:bg-green-500 disabled:bg-green-300 p-2';
  const imageClass = 'h-3 w-3 md:w-5 md:h-5';

  return (
    <div className='flex self-end py-3 gap-3 justify-center items-center mt-2'>
      <label className='text-gray-500 text-sm md:text-md'>
        Animation Controls:
      </label>
      {!isRepeating ? (
        <>
          <button
            className={buttonClass}
            onClick={
              isRunning ? () => handlePauseClick() : () => handlePlayClick()
            }
          >
            {isRunning && !isPaused ? (
              <Image
                className={imageClass}
                src='/pause.svg'
                height={50}
                width={50}
                alt={'Pause name animation'}
              />
            ) : (
              <Image
                className={imageClass}
                src='/play.svg'
                height={50}
                width={50}
                alt={'Re-run name animation'}
              />
            )}
          </button>
          <button
            className={buttonClass}
            disabled={isRunning}
            onClick={() => handleRepeatClick()}
          >
            <Image
              className={imageClass}
              src='/repeat.svg'
              height={50}
              width={50}
              alt={'Endless name animations'}
            />
          </button>
        </>
      ) : (
        <>
          <button className={buttonClass} onClick={() => handlePauseClick()}>
            {isPaused ? (
              <Image
                className={imageClass}
                src='/play.svg'
                height={50}
                width={50}
                alt={'Re-run name animation'}
              />
            ) : (
              <Image
                className={imageClass}
                src='/pause.svg'
                height={50}
                width={50}
                alt={'Pause name animation'}
              />
            )}
          </button>
          <button
            className={buttonClass}
            disabled={isPaused}
            onClick={() => handleStopClick()}
          >
            <Image
              className={imageClass}
              src='/square.svg'
              height={50}
              width={50}
              alt={'Pause name animation'}
            />
          </button>
        </>
      )}
    </div>
  );
};

export default AnimationControls;
