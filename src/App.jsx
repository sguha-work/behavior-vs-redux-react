
import './App.css'
import BehaviorButtonComponent from './behavior-demo/components/behavior-button-component/behavior-button.component'
import BehaviorCounterComponent from './behavior-demo/components/behavior-counter-component/behavior-counter.component'

function App() {

  return (
    <>
    <div className="behavior-demo">
      <h3>Behavior demo</h3>
      <table>
        <tbody>
          <tr>
            <td>
              <BehaviorButtonComponent></BehaviorButtonComponent>
            </td>
            <td>
              <BehaviorCounterComponent></BehaviorCounterComponent>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="redux-demo">
      <h3>Redux demo</h3>
    </div>
    </>
  )
}

export default App
