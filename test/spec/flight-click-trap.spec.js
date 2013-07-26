'use strict';

describeMixin('lib/flight-click-trap', function () {

  beforeEach(function () {
    // setup
    setupComponent('<div><div><p></p></div></div>');
  });

  it('should trigger receive event when click inside node', function () {
    spyOnEvent(document, 'componentReceivedClick');

    this.component.enableClickTrap();
    this.component.$node.find('p').click();
    expect('componentReceivedClick').toHaveBeenTriggeredOn(document);

  });

  it('should trigger lost event when click outside node.', function () {

    /* To test clicks outside of the component (but not the body), we'll insert our
     * our own bit of extra DOM and then immediately clean up.
     */
    var outerFixture = $('<h1 id="click-test"></h1>');
    $('body').append(outerFixture);
    spyOnEvent(document, 'componentLostClick');

    this.component.enableClickTrap();
    $('#click-test').click();
    expect('componentLostClick').toHaveBeenTriggeredOn(document);

    // Cleanup temp fixture.
    outerFixture.remove();

  });

  it('should not fire handlers if disabled', function () {
    spyOnEvent(document, 'componentReceivedClick');

    this.component.enableClickTrap();
    this.component.$node.find('p').click();
    expect('componentReceivedClick').toHaveBeenTriggeredOn(document);

    spyOnEvent(document, 'componentReceivedClick');

    this.component.disableClickTrap();
    this.component.$node.find('p').click();
    expect('componentReceivedClick').not.toHaveBeenTriggeredOn(document);

  });

});
