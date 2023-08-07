# Puppy Bowl in React

- Everything is functional minus the search bar.

- If I was going to try to style it it would have to be later, I know its ugly.

- Left the "home/dashboard' page in just as a placeholder/thought about where you could take the app

- Looking for feedback on how logic/components are laid out and how I made who is responsible for what. Also what is using state and effect vs what isnt. Initially had the single players rendering from the state of saved players but then saw (I think in the setup guide? or useparams video?) that a requirement was using params to call the api for single player.


## 8/7 notes

- watching Jonathan do this demo w pokemon list, in retrospect I should have kept the puppy list state in the component so when you nav iagte back to puppy list, it would load w updated puppies. As it stands right now I call the fetch puppy every time i delete or add and then send you to the puppy list.