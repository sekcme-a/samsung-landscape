import PageNavbar from "src/public/components/PageNavbar"
import PageHeader from "src/public/components/PageHeader"
import Timeline from "src/info/Timeline"
//https://cdn.imweb.me/thumbnail/20220721/d57f018ea93e2.png








const History = () =>{

  return(
    <>
      <PageNavbar />

      <PageHeader main="동우그룹" sub="그룹연혁" link="/info/greet"/>

      <Timeline />
    </>
  )
}

export default History