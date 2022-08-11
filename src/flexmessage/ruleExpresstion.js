export default () =>({
  type: "bubble",
  size: "mega",
  header: {
    type: "box",
    layout: "vertical",
    contents: [
      {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: "ルール説明",
            color: "#ffffff",
            size: "3xl",
            flex: 4,
            weight: "bold",
            style: "normal",
            decoration: "none",
            position: "relative",
            align: "center"
          }
        ]
      }
    ],
    paddingAll: "20px",
    backgroundColor: "#6275A4",
    spacing: "md",
    height: "100px",
    paddingTop: "22px"
  },
  body: {
    type: "box",
    layout: "vertical",
    contents: [
      {
        type: "text",
        text: "Total: 1 hour",
        size: "xs"
      },
      {
        type: "text",
        text: "Total: 1 hour",
        size: "xs"
      },
      {
        type: "text",
        text: "Total: 1 hour",
        size: "xs"
      },
      {
        type: "text",
        text: "Total: 1 hour",
        size: "xs"
      },
      {
        type: "text",
        text: "Total: 1 hour",
        size: "xs"
      },
      {
        type: "text",
        text: "Total: 1 hour",
        size: "xs"
      }
    ]
  }
})