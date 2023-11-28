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
    'rounded-lg bg-violet-600 hover:bg-violet-500 disabled:bg-violet-300 p-2';

  return (
    <div className='flex self-end py-2 gap-2 justify-end items-center'>
      <label className='text-gray-400 text-sm'>Animation Controls:</label>
      {!isRepeating && (
        <button
          className={buttonClass}
          onClick={
            isRunning ? () => handlePauseClick() : () => handlePlayClick()
          }
        >
          {isRunning && !isPaused ? (
            <Image
              className='h-5 w-5 sm:w-5 sm:h-5'
              src='/pause.svg'
              height={50}
              width={50}
              alt={'Pause name animation'}
            />
          ) : (
            <Image
              className='h-5 w-5 sm:w-5 sm:h-5 '
              src='/play.svg'
              height={50}
              width={50}
              alt={'Re-run name animation'}
            />
          )}
        </button>
      )}
      {!isRepeating && (
        <button
          className={buttonClass}
          disabled={isRunning}
          onClick={() => handleRepeatClick()}
        >
          <Image
            className='h-5 w-5 sm:w-5 sm:h-5'
            src='/repeat.svg'
            height={50}
            width={50}
            alt={'Endless name animations'}
          />
        </button>
      )}
      {isRepeating && (
        <>
          <button className={buttonClass} onClick={() => handlePauseClick()}>
            {isPaused ? (
              <Image
                className='h-5 w-5 sm:w-5 sm:h-5 '
                src='/play.svg'
                height={50}
                width={50}
                alt={'Re-run name animation'}
              />
            ) : (
              <Image
                className='h-5 w-5 sm:w-5 sm:h-5'
                src='/pause.svg'
                height={50}
                width={50}
                alt={'Pause name animation'}
              />
            )}
          </button>
          <button className={buttonClass} onClick={() => handleStopClick()}>
            <Image
              className='h-5 w-5 sm:w-5 sm:h-5'
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
