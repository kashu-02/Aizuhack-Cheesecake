export default (time) => ({
  type: "bubble",
  header: {
    type: "box",
    layout: "horizontal",
    contents: [
      {
        type: "text",
        text: "20",
        style: "italic",
        weight: "bold",
        size: "100px",
        flex: 3,
        align: "end",
        gravity: "center"
      },
      {
        type: "text",
        text: "min",
        flex: 2,
        size: "40px",
        align: "center",
        weight: "bold",
        gravity: "bottom"
      }
    ]
  },
  body: {
    type: "box",
    layout: "vertical",
    contents: [
      {
        type: "text",
        text: `⏰ ${time}分経過しました`,
        weight: "regular",
        size: "xl",
        align: "center"
      },
      {
        type: "text",
        text: "ヒントが見れます",
        align: "center"
      }
    ]
  },
  footer: {
    type: "box",
    layout: "vertical",
    spacing: "sm",
    contents: [
      {
        type: "button",
        style: "primary",
        height: "md",
        action: {
          type: "message",
          label: "ヒントを見る",
          text: "hello"
        },
        color: "#73A9B5",
        gravity: "center",
        adjustMode: "shrink-to-fit"
      },
      {
        type: "box",
        layout: "vertical",
        contents: [],
        margin: "sm"
      }
    ],
    flex: 0,
    action: {
      type: "message",
      label: "ヒント",
      text: "ヒントを見る"
    },
    borderColor: "#73A9B5",
    position: "relative",
    height: "70px"
  }
})