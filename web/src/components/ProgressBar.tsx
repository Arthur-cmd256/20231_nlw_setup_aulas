import * as Progress from '@radix-ui/react-progress';

interface ProgressBarProps {
  progress: number
}

export function ProgressBar(props: ProgressBarProps) {
  const progressStyles = {
    width: `${props.progress}%`
  }

  return (
    // <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
    //   <div
    //     role="progressbar"
    //     aria-label='Progresso de hábitos completados nesse dia'
    //     aria-valuenow={75}
    //     className="h-3 rounded-xl bg-violet-600"
    //     style={progressStyles}
    //   />
    // </div>
    <Progress.Root className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <Progress.Indicator
        className="h-3 rounded-xl bg-violet-600 transition-all"
        aria-label='Progresso de hábitos completados nesse dia'
        aria-valuenow={75}
        style={progressStyles}
      >
      </Progress.Indicator>
    </Progress.Root>
  )
}