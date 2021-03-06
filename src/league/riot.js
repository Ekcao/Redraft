import axios from 'axios';

axios.defaults.baseURL = 'https://ddragon.leagueoflegends.com';

const Riot = {
    getVersion: function () {
        return axios.get('/realms/na.json')
            .then(response => response.data.v)
            .catch(error => console.log(error));
    },

    getChampions: function () {
        return this.getVersion()
            .then(version => {
                return axios.get(`/cdn/${version}/data/en_US/champion.json`);
            }).catch(error => console.log(error));
    },

    getPortraitURL: function (version, champ) {
        return `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champ.image.full}`;
    }
}

export default Riot;
