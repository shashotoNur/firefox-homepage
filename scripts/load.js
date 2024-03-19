window.onload = function()
    {
        var gSearch = document.getElementById("gSearch");
        var ytSearch = document.getElementById("ytSearch");

        let storedLogo = localStorage.getItem('preferredEngine');
        let currentLogo;

        if (!storedLogo)
        {
          currentLogo = document.getElementById("engineLogo").src;
          localStorage.setItem('preferredEngine', currentLogo);
        } else
        {
          if (storedLogo.indexOf("youtube.svg") != -1)
          {
            document.getElementById("engineLogo").src = "icons/google.svg";
            gSearch.style.display = "block";
            ytSearch.style.display = "none";
          } else
          {
            document.getElementById("engineLogo").src = "icons/youtube.svg";
            ytSearch.style.display = "block";
            gSearch.style.display = "none";
          }
        }
    }
