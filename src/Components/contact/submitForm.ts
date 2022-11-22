import { collection, addDoc } from "firebase/firestore";
import { FirebaseServices } from "../../firebase/firebaseService";

export const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    data: any // TODO type your data,
): Promise<boolean> => {
    const firestore = FirebaseServices.firestore;

    // if form is not valid
        //event.preventDefault()
        // return false 

    const docRef = (await addDoc(collection(firestore, 'contact-form'), {
        name: data.name,
        email: data.email,
        message: data.message,
    }))

    const success = !!docRef.id

    return success;
}