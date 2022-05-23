import axiosClient from './axiosClient';
import { listChannelTiktoks, listChannelYoutubes } from 'assets/data/channels';

const channelServices = {
    getListChannelTiktok() {
        // eslint-disable-next-line arrow-body-style
        return {
            success: true,
            payload: listChannelTiktoks
        };
    },
    getListChannelYoutube() {
        return listChannelYoutubes;
    },
    getChannelDetails() {
        return 'getChannelDetail';
    }
};

export default channelServices;
