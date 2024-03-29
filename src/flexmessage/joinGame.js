export default (name) => ({
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
            text: name,
            color: "#000000",
            size: "xl",
            weight: "bold",
            position: "relative",
            wrap: true
          },
          {
            type: "text",
            text: "参加しました！",
            size: "xl",
            weight: "bold"
          }
        ]
      }
    ],
    paddingAll: "20px",
    backgroundColor: "#ffffff",
    spacing: "none",
    height: "100px",
    paddingTop: "22px"
  },
  body: {
    type: "box",
    layout: "vertical",
    contents: [
      {
        type: "text",
        text: "全員が参加ボタンを押し終わったら　”ゲーム開始”　ボタンを押してください",
        wrap: true
      },
      {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "button",
            action: {
              type: "message",
              label: "ゲーム開始",
              text: "ゲーム開始"
            },
            color: "#000000"
          }
        ],
        cornerRadius: "15px",
        backgroundColor: "#FCC949",
        margin: "15px"
      }
    ]
  }
})