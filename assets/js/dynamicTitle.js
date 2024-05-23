window.onload = function () {
  const favicon = document.getElementById("favicon");
  let pageTitle = document.title;
  let attentionMessage = "Come back";

  document.addEventListener("visibilitychange", function (e) {
    let isPageActive = !document.hidden;

    if (!isPageActive) {
      toggle();
    } else {
      document.title = pageTitle;
    }
  });

  document.addEventListener("visibilitychange", function (e) {
    if (!document.hidden) {
      document.title = pageTitle;
<<<<<<< HEAD
      favicon.href = "./assets/images/nobleosinachi.png";
=======
      favicon.href = "./assets/images/dp_male.svg";
>>>>>>> 097cc4d07f75b295ec2d613be83d8ac24f0184fd
    }
  });

  function toggle() {
    if (document.title === attentionMessage) {
<<<<<<< HEAD
      document.title = pageTitle;
      favicon.href = "./assets/images/nobleosinachi.png";
    } else {
      document.title = attentionMessage;
      favicon.href = "./assets/images/folded.png";
    }
  }
};
=======
        document.title = pageTitle;
        favicon.href = "./assets/images/dp_male.svg";
    } else {
        document.title = attentionMessage;
        favicon.href = "./assets/images/folded.png";
    }
  }   
};
>>>>>>> 097cc4d07f75b295ec2d613be83d8ac24f0184fd
