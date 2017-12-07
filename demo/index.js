import "./index.css"
import React from "react"
import ReactDOM from "react-dom"
import Lanes from "../src"

const TodoLanes = props => <div className="todo-lanes" {...props} />
const Lane = ({ name, data, children }) => (
  <div className="todo-lane">
    <h3>{name} ({data.length})</h3>
    {children}
  </div>
)

const TodoItem = ({ name }) => <div className="todo-item">{name}</div>

const laneConfig = {
  data: [
    {
      name: "Do something",
      status: "TODO"
    },
    {
      name: "Not what I should",
      status: "DOING"
    },
    {
      name: "(╯°□°)╯︵ ┻━┻",
      status: "DONE",
      marked_done: new Date()
    }
  ],
  lanes: [
    {
      name: "Todo",
      query: {
        filter: x => x.status === "TODO"
      }
    },
    {
      name: "Doing",
      query: {
        filter: x => x.status === "DOING",
        limit: 3
      }
    },
    {
      name: "Done",
      query: {
        filter: x => x.status === "DONE",
        sort: (a, b) => a.marked_done > b.marked_done
      }
    }
  ],
  component: TodoLanes
}

ReactDOM.render(
  <Lanes
    {...laneConfig}
    render={lanes =>
      lanes.map(lane => <Lane {...lane}>{lane.data.map(TodoItem)}</Lane>)
    }
  />,
  document.getElementById("root")
)

if (module.hot) {
  module.hot.accept()
}
