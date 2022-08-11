export default (problemStatement, answerName) => ({
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
            text: "⭕️",
            color: "#ffffff",
            size: "5xl"
          },
          {
            type: "text",
            text: "正解です！",
            color: "#000000",
            size: "xxl",
            flex: 2,
            weight: "bold",
            align: "center",
            gravity: "center"
          }
        ]
      },
      {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: "おめでとうございます🎉",
            align: "center"
          }
        ]
      }
    ],
    paddingAll: "20px",
    backgroundColor: "#ffffff",
    spacing: "md",
    height: "160px",
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
            text: problemStatement,
            wrap: true
          }
        ],
        spacing: "none",
        margin: "xs"
      },
      {
        type: "text",
        text: "【正解】",
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
            text: answerName,
            wrap: true
          }
        ],
        spacing: "none",
        margin: "xs"
      }
    ]
  }
})