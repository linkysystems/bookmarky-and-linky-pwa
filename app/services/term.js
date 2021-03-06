import Ember from 'ember';
import ENV from "../config/environment";

export default Ember.Service.extend({
  session: Ember.inject.service(),
  query(vocabularyId, opts) {
    let headers = { Accept: 'application/json' },
        accessToken = this.get('session.session.authenticated.access_token');

    if (accessToken) {
      headers.Authorization = `Basic ${accessToken}`;
    }

    return Ember.$.ajax({
      url: `${ENV.API_HOST}/vocabulary/${vocabularyId}/term`,
      type: 'GET',
      headers: headers,
      data: opts
    });
  }
});