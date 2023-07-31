import { Children, useContext } from 'react'
import Button from './components/Button'
import Countdown from './components/Countdown'
import Settings from './components/Settings'
import { SettingsContext } from './context/SettingsContext'

function App() {
  const { pomodoro, executing, setCurrentTimer, setPomodoro, startAnimate, children, startTimer, pauseTimer } = useContext(SettingsContext)
  return (
    <div className='container'>
      <h1>
        Pomodoro Timer
      </h1>
      {pomodoro === 0 ?
        <Settings /> :
        <>
            <ul className="labels">
              <li>
                <Button 
                  title="Work" 
                  customClass={executing.active === 'work' ? 'active-label' : undefined} 
                  callbackFunc={() => setCurrentTimer('work')} 
                />
              </li>
              <li>
                <Button 
                  title="Short Break" 
                  customClass={executing.active === 'short' ? 'active-label' : undefined} 
                  callbackFunc={() => setCurrentTimer('short')} 
                />
              </li>
              <li>
                <Button 
                  title="Long Break" 
                  customClass={executing.active === 'long' ? 'active-label' : undefined} 
                  callbackFunc={() => setCurrentTimer('long')} 
                />
              </li>
            </ul>
            <Button 
              title="Settings" 
              customClass={'settings-button'}
              callbackFunc={() => setPomodoro(0)} 
            />

            <div className='time-wrapper'>
              <Countdown countdownKey={pomodoro} animate={startAnimate} timer={pomodoro}>
                {children}
              </Countdown>
            </div>

            <div className='button-wrapper'>
              <Button 
                title="Start" 
                customClass={startAnimate ? 'active': ''}
                callbackFunc={startTimer} 
              />  

              <Button 
                title="Pause" 
                customClass={!startAnimate ? 'active' : ''}
                callbackFunc={pauseTimer} 
              />
            </div>
        </>
      }
    </div>
  )
}

export default App
