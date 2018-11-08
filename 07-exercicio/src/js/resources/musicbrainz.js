import axios from 'axios'

function musicbrainz_artists_search(){
    axios.get('http://musicbrainz.org/ws/2/artist/?query=${this.value}&fmt=json')
        .then(function (response) {
        console.log('sucesso',response.data);
        })
        .catch(function (error) {
        console.log('error', error);
        });
}

export default musicbrainz_artists_search