export default () => ({ 
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
              text: "ゲームを作成しました",
              color: "#000000",
              size: "xl",
              flex: 4,
              weight: "bold",
              style: "normal",
              position: "relative",
              align: "center"
            }
          ]
        }
      ],
      paddingAll: "20px",
      backgroundColor: "#FCC949",
      spacing: "md",
      height: "80px",
      paddingTop: "22px"
    },
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "button",
          action: {
            type: "message",
            label: "ゲームに参加",
            text: "参加"
          },
          style: "secondary",
          color: "#FFE5A4"
        },
        {
          type: "button",
          action: {
            type: "message",
            label: "ゲーム開始",
            text: "ゲーム開始"
          },
          style: "secondary",
          color: "#FFE5A4"
        },
        {
          type: "button",
          action: {
            type: "message",
            label: "ゲームを終了する",
            text: "強制終了"
          },
          style: "secondary",
          color: "#FFE5A4"
        }
      ],
      position: "relative",
      spacing: "10px"
    }
  })