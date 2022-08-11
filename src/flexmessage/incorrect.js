export default (problem_statement) =>({
  type: "bubble",
  size: "mega",
  header: {
    type: "box",
    layout: "vertical",
    contents: [
      {
        type: "box",
        layout: "horizontal",
        contents: [
          {
            type: "text",
            text: "❌",
            color: "#ffffff",
            size: "5xl"
          },
          {
            type: "text",
            text: "不正解です...",
            color: "#000000",
            size: "xxl",
            flex: 2,
            weight: "bold",
            align: "center",
            gravity: "center"
          }
        ]
      }
    ],
    paddingAll: "20px",
    backgroundColor: "#ffffff",
    spacing: "md",
    height: "110px",
    paddingTop: "22px"
  },
  body: {
    type: "box",
    layout: "vertical",
    contents: [
      {
        type: "text",
        text: "【問題】",
        color: "#000000",
        size: "xxl",
        gravity: "center",
        align: "center"
      },
      {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            gravity: "center",
            size: "lg",
            text: problem_statement,
            wrap: true
          }
        ],
        spacing: "none",
        margin: "xs"
      }
    ]
  }
})