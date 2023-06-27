function updateTime() {
    var currentTime = new Date();

    var options = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };

    var newYorkTime = currentTime.toLocaleString('en-US', {
      timeZone: 'America/New_York',
      ...options
    });

    var londonTime = currentTime.toLocaleString('en-US', {
      timeZone: 'Europe/London',
      ...options
    });

    var tokyoTime = currentTime.toLocaleString('en-US', {
      timeZone: 'Asia/Tokyo',
      ...options
    });

    // var sydneyTime = currentTime.toLocaleString('en-US', {
    //   timeZone: 'Australia/Sydney',
    //   ...options
    // });

    var kolkataTime = currentTime.toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      ...options
    });

    document.getElementById("new-york-time").textContent = newYorkTime;
    document.getElementById("london-time").textContent = londonTime;
    document.getElementById("tokyo-time").textContent = tokyoTime;
    document.getElementById("kolkata-time").textContent = kolkataTime;
  }

  setInterval(updateTime, 1000);