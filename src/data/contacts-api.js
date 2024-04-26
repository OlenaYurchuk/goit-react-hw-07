import axios from "axios";
import { KEY } from '../data/accessKey';

export const fetchContacts = async () => {
    const url = `https://${KEY}.mockapi.io/contacts`;

    const response = await axios.get(url);
    return response.data;
}



