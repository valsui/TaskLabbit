import merge from 'lodash/merge';
import parser from 'parse-address';

export const verifyAddress = (location) => {
    const address = parser.parseAddress(location);
    if(address){
        if(address.zip && address.number && address.street && address.type && address.city && address.state){
            return true
        }
    }
    return false;
}

export const getDate = (dateString) => {
    const date = new Date(dateString);
    return date.toDateString().split(' ').join(', ');
}