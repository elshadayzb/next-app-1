import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const NewMeetupPage = () =>{
    const addMeetupHandler = (meetup)=>{

    }
    return(
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    )
}

export default NewMeetupPage