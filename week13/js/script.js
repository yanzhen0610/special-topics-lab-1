$(function() {
  var df = $('.clock .days');
  var hf = $('.clock .hours');
  var mf = $('.clock .minutes');
  var sf = $('.clock .seconds');

  var startbtn = $('.clock .start-btn');
  var stopbtn = $('.clock .stop-btn');
  var resetbtn = $('.clock .reset-btn');

	function get_remaining_time(df, hf, mf, sf) {
			return parseInt(df.val() * 24 * 60 * 60) + parseInt(hf.val() * 60 * 60) + parseInt(mf.val() * 60) + parseInt(sf.val());
	}

	function set_remaining_time(df, hf, mf, sf, time) {
		df.val(parseInt(time / (24 * 60 * 60)));
		hf.val(parseInt((time % (24 * 60 * 60)) / (60 * 60)));
		mf.val(parseInt((time % (60 * 60)) / 60));
		sf.val(parseInt((time % (60))));
	}

	var counting = false;
	var remaining_time = 0;

	$(startbtn).click(function() {
		remaining_time = get_remaining_time(df, hf, mf, sf);
		console.log(remaining_time);
		counting = true;
	})

	$(stopbtn).click(function() {
		counting = false;
	})

	$(resetbtn).click(function() {
		counting = false;
		remaining_time = 0;
		set_remaining_time(df, hf, mf, sf, remaining_time);
	})

	window.setInterval(function() {
		if (counting) {
			remaining_time -= 1;
			if (remaining_time >= 0)
				set_remaining_time(df, hf, mf, sf, remaining_time);
			else
				counting = false;
		}
	}, 1000)

})
