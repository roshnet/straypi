<h1 align="center">
  :service_dog: straypi!
</h1>

:speaking_head: *stray-p-eye*

### :question: What the heck is this?
A bunch of endpoints with seemingly unrelated, but perhaps useful functionalities.


### Features

I haven't added enough endpoints in the project (yet). However, there are two endpoints -

1. **yesno**: Nothing more than a clone of the yesno.wtf API.

2. **encryption**: Responds with the encrypted version of a supplied string, along with the IV used to encrypt. Since there's no state in a REST API, the IV here kinda behaves like the decryption key, and is therefore needed during decryption.


### Who can use this?
I made a similar project to perform tasks that I wanted an online service to do for me. This repository builds on top of that, and is an extension of the same.

I wrote this to carry out tasks that I didn't want to write the code for.


### Features I plan on adding

1. Image operations: yep there are a few services that offer an API, but a separate one would be a nice addition to the project.
2. PDF operations: I briefly encountered the issue of generating a PDF from formats like JSON and HTML. If only I could send that data to a server and obtain a PDF, that'd be awesome.

### Why not a library? Why an API?
If this had been a library, it would kinda defeat the purpose.
The aim here is to allow the developer to write minimum code *inside* the application, and use external resources to do the heavy lifting. Of course this won't fit the use case for offline apps, but using it in an app that's always online and needs to occasionally perform specific heavy tasks, might not be a bad idea.

### Contributing
Just open an issue for everything. That'd be all.
