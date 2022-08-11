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
        wrap: true,
        text: "1. 問題文に当てはまる史跡・観光名所を\n探そう！",
        size: "xs"
      },
      {
        type: "text",
        wrap: true,
        text: "2. 正解だと思った場所に着いたら、\nGOALボタンを押して位置情報を共有してね！",
        size: "xs"
      },
      {
        type: "text",
        wrap: true,
        text: "3. どうしてもわからなかったら\nヒントを使おう！大体の方角が\nわかるよ！",
        size: "xs"
      },
      {
        type: "text",
        wrap: true,
        text: "(左下のボタンを押して「ヒント」\nと入力してね)",
        size: "xs"
      },
      {
        type: "text",
        wrap: true,
        text: "ヒントは20分に一回までだよ！頑張って！",
        size: "xs"
      },
      // {
      //  type: "text",
      // text: "Total: 1 hour",
      //  size: "xs"
      // }
    ]
  }
})