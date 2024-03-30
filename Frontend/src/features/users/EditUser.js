import { useParams } from 'react-router-dom'
import EditUserForm from './EditUserForm'
import { useGetUsersQuery } from './usersApiSlice'
import PulseLoader from 'react-spinners/PulseLoader'
import useTitle from '../../hooks/useTitle'

const EditUser = () => {
    useTitle('Edit User')

    const { id } = useParams()

    const { user } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            user: data?.entities[id]
        }),
    })

                    // cool react spinner VVV
    if (!user) return <PulseLoader color={"#FFF"} />


            // this is 'good form' in that it allows for more to be built on later. I guess? seems like BS and you would just wanna return the <element>
    const content = <EditUserForm user={user} />

    return content
}
export default EditUser