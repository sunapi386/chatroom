import Ember from 'ember';

export default Ember.Component.extend({
  cableService: Ember.inject.service('cable'),


  setupSubscription: Ember.on('init', function() {
    var consumer = this.get('cableService').createConsumer('ws://localhost:3000/mysocket');

    var subscription = consumer.subscriptions.create("MsgChannel", {
      connected() {
        Ember.debug("connected()");
      },
      received(data) {
        Ember.debug("received(data) -> " + Ember.inspect(data));
      },
      disconnected() {
        Ember.debug("disconnected()");
      }
    });

    this.set('subscription', subscription);

  }),

  actions: {
    sendMessage() {
      this.get('subscription').send({msg: this.get('messageInput')});
    }
  }
});

