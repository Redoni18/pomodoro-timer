import { useContext, useRef } from "react"
import { CountdownCircleTimer } from "react-countdown-circle-timer"
import { SettingsContext } from "../context/SettingsContext"
import audioFile from "../assets/finish.mp3"

const Countdown = ({countdownKey, timer, animate, children}) => {
    const { pauseTimer } = useContext(SettingsContext)
    const audioRef = useRef(null)

    return (
        <>
            <CountdownCircleTimer
                key={countdownKey}
                duration={timer}
                isPlaying={animate}
                colors={['#FE6F6B', 0.33]}
                strokeWidth={6}
                trailColor="#151932"
                onComplete={() => {
                    pauseTimer()
                    audioRef.current.play();
                }}
                size={220}
            >
                {children}
            </CountdownCircleTimer>

            <audio ref={audioRef} src={audioFile} />
        </>
    )
}

export default Countdown