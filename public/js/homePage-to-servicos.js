var locHash = location.hash;
var defaultTab = '#tab-v-pills-planejamento';

if ($(locHash).length) {
  $(defaultTab).removeClass('active');
  $(locHash).addClass('active');

  $("div" + defaultTab + "-panel.tab-pane").removeClass('active'); console.log(defaultTab + '.tab-pane');
  $("div" + defaultTab + "-panel.tab-pane").removeClass('show');
  $("div" + locHash + "-panel").addClass('active'); console.log('add active');
  $("div" + locHash + "-panel").addClass('show'); console.log('div' + locHash + '-panel');

  $('html,body').animate({ scrollTop: 385 }, 'slow');

}