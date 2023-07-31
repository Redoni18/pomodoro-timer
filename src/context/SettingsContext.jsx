import { useState } from "react";
import { createContext } from "react";

export const SettingsContext = createContext()

const SettingsContextProvider = (props) => {
    const [pomodoro, setPomodoro] = useState(0)
    const [executing, setExecuting] = useState({})
    const [startAnimate, setStartAnimate] = useState(false)

    const setCurrentTimer = (activeState) => {
        updateExecute({
            ...executing,
            active: activeState
        })
    }
    const startTimer = () => {
        setStartAnimate(true)
    }

    const pauseTimer = () => {
        setStartAnimate(false)
    }

    const updateExecute = (updatedSettings) => {
        setExecuting(updatedSettings)
        setTimer(updatedSettings)
    }

    const setTimer = (timeSettings) => {
        switch(timeSettings.active) {
            case 'work':
                setPomodoro(timeSettings.work)
                break;
            case 'short':
                setPomodoro(timeSettings.short)
                break;
            case 'long':
                setPomodoro(timeSettings.long)
                break;
            default:
                setPomodoro(0)
                break;
        }
    }

    const children = ({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60)
        const seconds = remainingTime % 60
        
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    return (
        <SettingsContext.Provider value={{startTimer, pauseTimer, setCurrentTimer, pomodoro, setPomodoro, executing, startAnimate, setStartAnimate, updateExecute, children}}>
            {props.children}
        </SettingsContext.Provider>
    )
}

export default SettingsContextProvider;