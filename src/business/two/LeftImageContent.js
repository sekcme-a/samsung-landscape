import EditButton from "src/admin/EditButton"
import useData from "context/data"


const LeftImageContent = () => {
    const {data} =useData()
  return(
    <div className="services-details-overview">
    <div className="services-details-image" style={{position:"relative"}}>
        <img src={data.business.two_2_img} alt="조경시설물설치공사" />
        <EditButton type="business" item="two_2_img" text="이미지" mode="image" defaultImg="/image/default_garden.jpg"/>
    </div>
    <div className="services-details-desc">
        <h3 style={{position:"relative"}}>
            {data.business.two_2_title ?? "조경시설물설치공사"}
            <EditButton type="business" item='two_2_title' text="제목1" />
        </h3>
        <p style={{position:"relative"}}>
            {data.business.two_2_text??"조경시설물설치공사에 대해 설명드립니다."}
            <EditButton type="business" item='two_2_text' text="내용1" />
        </p>
        
        <div style={{position:"relative", width:"1px", height:'1px'}}>
            <EditButton type="business" item="two_2_list" text="제목과 내용" mode="arrayOfObj_title_and_text" />
        </div>
        {data?.business?.two_2_list?.map((item, index) => {
            return(
                <div className="features-text" key={index}>
                    <h4><i className="flaticon-check-mark"></i>{item.title}</h4>
                    <p>{item.text}</p>
                </div>
            )
        })}
    </div>

</div>
  )
}

export default LeftImageContent