import { useContext } from "react"
import UserContext from "../../contexts/users/UserContext"

export const Profile = ()=> {
        const userCtx=useContext(UserContext)
        const {user}= userCtx
        return(
            <div>
                <h1>Profile</h1>
                <p>ID:{user._id}</p>
                <p>Nombre:{user.fullName}</p>
                <p>Correo:{user.email}</p>
            </div>
        )
}