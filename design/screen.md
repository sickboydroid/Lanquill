# Screens

- SPA, mobile first design, black white only, no url manipulation for screens
- Animations should be natural and very minimal design
- Things should be modular, base.css for whole app, theme.css, each screen has its own html and css and ts, and also single not multiple csses
  - Single html (YES SINGLE), css and ts for each screen, no more no less
  - base.css would contain resets, basic styles like that of buttons,inputs, icons etc, theme.css will contain different themes light and dark
  - There should be animations across screens
- Screens should be managed well. Each screen can call following methods
  - showScreen(name, data): shows the screen and passes data object. returns a promise
    - That promise is resovled when the screen calls finishScreen() method
  - finishScreen(data): finishes the screen and this resolves the above promise with passed data
  - Screen(data): Constructor of screen which receives the data that passed to it

## Screen Home

- Has hero section, which contains name of app "DoLanquill" and a link to file a complaint which opens gmail and enters email "sickboydroid@gmail.com"
- You can use following hints to generate the of this screen, in any order. if you plan to rewrite it make sure its human like
  - Lets do lanquill
  - Pay once and do the task as many times as you want
  - 100% refund policy in case your tasks arent done
  - Pay only for the tasks you want to do
  - Do the tasks like a human would. Impossible to differentiate between normal task and this one
  - Free trial
- Main focus on button "Start Automating"
  when clicked, it opens details screen with transition
- In the footer, there should be again name of app, link to file a complaint, and link to terms and conditions

## Screen Details

- User will enter `name`, `phone number`, `enrollment`, `lanquill password` (twice)
- phone number should be 10 digits long
- enrollment is YEAR+B+BRANCH+ROLLNO like 2025BCSE091, 2025BCSE001, 2023BCIV021
  - Assume branch can be anything for now
- lanquill password must not be empty
- There should be placeholders in inputs telling what kinda input is valid
- At the end of this screen there will next button, it should be enabled only when all input fields are valid
  - It would take user to Cart screen
  - When clicked this button should load the details required by that screen before proceeding to and passing the data into it, the button should animate that loading
- At the top will be back button along with "Details" title, when clicked it should go to homepage

## Cart Screen

- Server will give a json file of type @database.md/service vai route api/services
  - Each will have three things
    - Icon, id, name, price
  - You will also have a list of items user has purchased already using route api/user (expects enrollment)
    - it will give you ids of already bought services
  - Note that this data will be passed to you by the last screen
- Using this data, you will setup the cart
- It will have a list of items that can be added to the cart. A cart can have following states:
  - Free => Price is 0
  - Purchased => User already paid for it
  - Price => User has to pay x rs
- When user clicks on item, it gets selected and its price gets added to the card
- At the bottom there is Proceed to Pay button, when clicked it launches razorpay gateway
- Make sure user has selected at least one item before he can click on it

## Automating screen

- This is the screen which will be showing live data from server vai sockets
- It will have no back button but will have a cancel button,
