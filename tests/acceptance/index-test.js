import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';
import { find } from 'ember-native-dom-helpers';

describe('Acceptance | index', function() {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  it('renders the lazy images', function() {
    visit('/');
    return andThen(() => {
      expect(find('.inline').getAttribute('src')).to.have.string('data:image/png;base64,');
      expect(find('.remote').getAttribute('src')).to.be.equal('/assets/images/responsive/remote150w.png');
      expect(find('.lazy').hasAttribute('src')).to.be.false;
    });
  });
});
