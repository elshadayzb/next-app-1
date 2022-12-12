import { useRouter } from 'next/router'
import MeetupDetail from '../../components/meetups/MeetupDetail'

const MeetupDetailPage = () => {
    const router = useRouter()
    const meetupId = router.query.meetupId

    return( 
        <MeetupDetail 
            meetupId={meetupId}
            title="Meetup page"
            image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'
            address="Some city some street"
            description="Fast Refresh had to perform a full reload due to a runtime error. Fast Refresh had to perform a full reload."
            />
    )
}

export default MeetupDetailPage