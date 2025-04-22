# Laravel Developer Experience Notes
A place to document my experience with the Developer Experience Engineer interview exercise from the perspective of a first-time Sentry user and someone new to PHP.

 - I initialized the project according to the [Laravel documentation](https://laravel.com/docs/12.x) and began to explore the generated template code along-side the [Directory Structure](https://laravel.com/docs/12.x/structure) documentation.
 - Reading the Laravel documentation gave a good overview of the framework but offered little in examples or tutorials. To ensure I was using the framework correctly, I wanted to see the approach other devlopers took and saught out a more complete tutorial.
   - After reading these articles [[1]](https://medium.com/@rivo.agency2010/how-to-get-started-with-laravel-a-beginners-guide-3079d26fa22d)[[2]](https://medium.com/novai-php-laravel-101/building-a-hello-world-web-application-with-laravel-72c650599a3f) on Medium, and referring back to the Laravel documentation, I began creating my controller and routes.
- Got my index view to load with some simple buttons for selecting a starter Pokemon. No logic added at this point.
  - Installing Tailwind for better styling.
  - Going to investigate moving the buttons to a React component.
- Migrating from a blade template to a React component. [documentation](https://laravel.com/docs/12.x/frontend#using-react-or-vue)
  - Successfully migrated the blade template to a React component. Now componentizing the buttons.
  - Migrating the buttons to a React component took a little longer than expected. I believe Vite used to allow importing SVGs by default but now requires a plugin. A few changes to the vite.config and a closer look at the tsconfig file and I was able to get the SVGs to load correctly.
  - The buttons currently only output the name of the Pokemon to the browser console.
- I am now going to attempt to create the game logic and connect it with a `/play` route and the click handler on the index.
  - It appeared there was a best-practice way of doing this with an Inertia client-side adapter. https://inertiajs.com/client-side-setup
  - This was actually already configured for the most part I discovered after some digging.
  - My first attempt at posting to the `/battle` route was unsuccessful, resulting in a 404 dialog pop-up.
    - This was because I had decided to use `/battle` but had forgotten to update the route after updating the controller.
  - Next, now, the Id does not appear to be getting passed to the controller.
    - The data was wrapped in an a response object from Inertia. 
- Now I want to implment the game logic on the server-side within the battle controller.
  - A little bit of digging as I am not very familiar with PHP, but very straightforward from the standpoint of mentally converting from Typescript to PHP.
- Next will be implementing Sentry.io

# Sentry.io Developer Experience Notes
- I have never used Sentry before, so I began by first giving the documentation a quick overview, before googling "Sentry.io Laravel" which landed me on [https://docs.sentry.io/platforms/php/guides/laravel/](https://docs.sentry.io/platforms/php/guides/laravel/).
  - On first inspection, the documentation appears straightforward and non-intimidating. The page is relatively short and I can see in the left-hand navigation menu that there are more section for going deeper on specific use-cases, all within Laravel.
  - Following the instructions, I signed up for a free account and was dropped into an onboarding flow.
    - I was tempted to skip this, given the documentation was already open, but I didn't want to miss anything.
    - I continuted with the onboarding flow as I saw it provided a personalized DNS configuration command.
    - Sent the test event via sentry:test
      - Contifirmed the event was sent successfully and logged into Sentry.
  - At this point, I have sent a test event, but I have not confirmed how it performs within my application.
    - After completing the onboarding flow, I was left questioning where to go next, to ensure the application was configured correctly to capture errors.
    - I went back to the [doc](https://docs.sentry.io/platforms/php/guides/laravel/#verify-with-code) I had opened originally and found more information past what was covered in the onboarding flow.
  - Added `/debug-sentry` route to the web.php file.
    - I was able to confirm that Sentry was capturing errors correctly.
    - Triggered and captured the Exception successfully.
  - Now looking to implement Session replays and Performance traces.
    - Traces is covered in the next section of the documentation I have open.
    - SENTRY_TRACES_SAMPLE_RATE is already set to 1.0 in the .env file.
    - I played a few rounds of the game and confirmed that Sentry was capturing the performance traces.