import { createElement } from "react"

function query({ filter, sort, limit }, data) {
  return data
    .filter(filter)
    .sort(sort)
    .slice(0, limit)
}

const Component = props =>
  createElement("div", {
    style: { display: "flex" },
    ...props
  })

const Lanes = ({ component = Component, data = [], lanes = [], render }) =>
  createElement(
    component,
    null,
    render(lanes.map(lane => ({ ...lane, data: query(lane.query, data) })))
  )

export default Lanes
