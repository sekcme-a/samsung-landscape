export const NavbarList = [
  {
    text: "Home",
    url: "/"
  },
  {
    text:"동우그룹",
    url:"/info/greet",
    child: [
      {
        text: "인사말",
        url:"/info/greet"
      },
      {
        text:"경영방침",
        url:"/info/business",
        // child:[
        //   {
        //     text: "실험",
        //     url:"/test"
        //   },
        //   {
        //     text: "실험2",
        //     url:"/test"
        //   }
        // ]
      },
      {
        text: "그룹연혁",
        url:"/info/history",
      },
      {
        text:"조직도",
        url:"/info/chart"
      },
      {
        text:"오시는 길",
        url:"/info/map"
      }
    ]
  },
  {
    text:"사업분야",
    url:"/management/housing",
    child:[
      {
        text:"공동주택관리",
        url:"/management/housing"
      },
      {
        text:"빌딩종합관리",
        url:"/management/building"
      },
      {
        text:"부동산자산관리",
        url:"/management/estate"
      },
      {
        text:"인사관리",
        url:"/management/hrd"
      },
      {
        text:"회계관리",
        url:"/management/financial"
      },
    ]
  },
  {
    text:'동행소식',
    url:'article/announcement',
    child:[
      {
        text:"공지사항",
        url:"artcle/announcement"
      },
      {
        text:"동행뉴스",
        url:"article/news"
      },
      {
        text:"동우사보",
        url:"article/gallery"
      },
      {
        text:"동우24시",
        url:"https://www.youtube.com/@user-wq1ug3dw6k"
      }
    ]
  },
  {
    text:"고객서비스",
    url:"service/contact",
    child:[
      {
        text:"사업문의",
        url:"service/contact"
      },
      {
        text:"건의사항",
        url:"service/recommand"
      }
    ]
  }
]