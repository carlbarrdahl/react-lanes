# react-lanes

Trello-like lanes for React

### Example

```js
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
        filter: x => x.status === "TODO",
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
  component: Flex
}

const TodoItem = ({ name }) => <div>{name}</div>

ReactDOM.render(
  <Lanes
    {...laneConfig}
    render={lanes =>
      lanes.map(lane => (
        <Box>{lane.data.map(TodoItem)}</Box>
      ))
    }
  />,
  document.getElementById("root")
)

```
