import PageNavbar from "src/public/components/PageNavbar"
import PageHeader from "src/public/components/PageHeader"
import Timeline from "src/info/Timeline"
//https://cdn.imweb.me/thumbnail/20220721/d57f018ea93e2.png




const timelineData = [
  {
    title: 'Basic Timeline',
    description: 'Extra small devices (phones, less than 768px)',
    timelineLayout: 'timeline',
    events: [
      {
        date: 'March 12, 2016',
        title: 'Event Title',
        content: 'Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis eu pede mollis pretium. Pellentesque ut neque.',
      },
      {
        date: 'March 12, 2016',
        title: 'Event Title',
        content: 'Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis eu pede mollis pretium. Pellentesque ut neque.',
      },
      {
        date: 'March 12, 2016',
        title: 'Event Title',
        content: 'Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis eu pede mollis pretium. Pellentesque ut neque.',
      },
      {
        date: 'March 12, 2016',
        title: 'Event Title',
        content: 'Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis eu pede mollis pretium. Pellentesque ut neque.',
      },
      {
        date: 'March 12, 2016',
        title: 'Event Title',
        content: 'Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis eu pede mollis pretium. Pellentesque ut neque.',
      },
      // Add more events here...
    ],
  },
  
];


const History = () =>{

  return(
    <>
      <PageNavbar />

      <PageHeader main="동우그룹" sub="그룹연혁" link="/info/greet"/>

      <Timeline timeline={timelineData} />
    </>
  )
}

export default History