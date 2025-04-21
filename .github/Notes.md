# Developer Experience Notes
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
