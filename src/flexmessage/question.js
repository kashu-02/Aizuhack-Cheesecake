export default (text) => ({
    type: "bubble",
    size: "mega",
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "問題",
              color: "#4B9301",
              size: "3xl",
              align: "center",
              weight: "bold",
              flex: 1
            },
            {
              type: "text",
              contents: [
                {
                  type: "span",
                  text: `${text}`,
                  size: "25px",
                  weight: "regular"
                }
              ],
              lineSpacing: "100px",
              position: "relative",
              wrap: true
            },
            {
              type: "text",
              text: "ここはどこでしょう？ここに向かってください！",
              wrap: true,
              margin: "15px"
            }
          ],
          backgroundColor: "#ffffff",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          borderWidth: "15px",
          paddingAll: "sm"
        }
      ],
      paddingAll: "20px",
      backgroundColor: "#B6E985",
      spacing: "xs",
      paddingTop: "22px"
    },
    styles: {
      header: {
        separator: true
      }
    }
  })