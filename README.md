# Spotify Song Search with oAuth

In this lab we will be building a Spotify song search interface with the ability to save and retrieve songs from users' profiles. Here are the requirements for the application:

- The application should first allow the user to enter a search query and see a list of results populated. [(see search endpoint)](https://developer.spotify.com/web-api/search-item/)

- The app should also allow the user to log into Spotify with their credentials. [(see authorization docs)](https://developer.spotify.com/web-api/authorization-guide/)

- The app should allow the user to save a track to their saved list and see all of their saves on the saved.html template. [(see library endpoints)](https://developer.spotify.com/web-api/library-endpoints/)

- Since you will be modifying the user's account, you will need additional scoped permissions (user-library-read user-library-modify).

- You can [read more about scoped permissions here](https://developer.spotify.com/web-api/using-scopes/).

Bob's Notes:


10/29 - Got the get working in the Spotify API and it returns a crazy amount of stuff, gonna work next on parsing it out and getting only what I want.

10/29 - figured out how to get the array of items :) WOOHOO line , line 24

10/30 - figured out innerHtml syntax - and how to embed the preview mpeg in the player. :)

11/5 - removed hard coded key and instead jank it from the URL request