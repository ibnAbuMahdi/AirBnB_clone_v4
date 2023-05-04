$(function() {
  const stat = $('div#api_status');
  
  $.ajax({
    type: 'GET',
    url: 'http://127.0.0.1:5001/api/v1/status/',
    success: (data, textStatus, jqXHR) => {
      if (jqXHR.status === 200) {
        stat.addClass('available');
      }
    },
    error: () => {
      stat.removeClass('available');
    }
  });
});
