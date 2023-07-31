import { useContext } from "react";
import { useState } from "react";
import { SettingsContext } from "../context/SettingsContext";
import Button from "./Button";

const Settings = () => {
    const {updateExecute} = useContext(SettingsContext)
    const [newTimer, setNewTimer] = useState({
        work: 25 * 60,
        short: 10 * 60,
        long: 30 * 60,
        active: 'work'
    })

    const timerKeysToShow = ["work", "short", "long"];

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        const parsedValue = parseInt(value);

        setNewTimer({
            ...newTimer,
            [name]: isNaN(parsedValue) ? 0 : parsedValue * 60,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateExecute(newTimer)
    }

    return (
        <div className="form-container">
            <form>
                <div className="input-wrapper">
                    {timerKeysToShow.map((key) => (
                        <div key={key} className="input-container">
                            <div className="input-label-container">
                                <label htmlFor={`${key}-input`}>{key.toUpperCase()}</label>
                                <input
                                    id={`${key}-input`}
                                    className="input"
                                    onChange={handleInputChange}
                                    name={key}
                                    value={newTimer[key] / 60}
                                />
                            </div>

                            <span className="input-placeholder">min</span>
                        </div>
                    ))}
                </div>
            </form>

            <Button title="Set Timer" callbackFunc={handleSubmit} />
        </div>
    )
}

export default Settings;
