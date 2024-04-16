# iframe-login
Load an external site in an iframe then login to a page

1. Download the repo to your PC/Mac

   <img width="840" alt="image" src="https://github.com/RomeoLB/iframe-login/assets/136584791/6335fda5-e893-409c-a753-ae1f4bcb96c9">

2. Copy the content of the CopytoSDCard folder to a blank SD card

<img width="441" alt="image" src="https://github.com/RomeoLB/iframe-login/assets/136584791/446dcdbe-4447-472e-af11-1ac4f4376e6b">
   
3. Insert the SD card in the player and you should see the player loading an external web page in an iframe and then entering the login credentials and clicking on the submit button to access the relevant web page.

The index.html file does the following:

   - The script loads data into an iframe by making a `POST` request to `'http://localhost:8000/proxy'`.
   - The request sends a URL (`'https://practicetestautomation.com/practice-test-login/'`) as form data, indicating the target page you wish to load into the iframe.
   - Upon receiving the response, it reads the response body as text.
   - Then, it selects an iframe in the current document with the ID `targetIframe` and writes the fetched data into this iframe's document, essentially loading the content into the iframe.

The bundle.js file does the following:

  - That script sets up an asynchronous route handler for POST requests to the path `/proxy` on the server. The handler's purpose is to act as an intermediary for forwarding requests to another specified URL and returning the response back to the original requester.
  - The primary purpose of this code is to facilitate server-side POST requests to external URLs specified by the client, then relay the response back to the client. This can be particularly useful in scenarios where the client-side code (e.g., JavaScript running in a browser) is restricted from directly making requests to external services due to Cross-Origin Resource Sharing (CORS) policies.

# How can you modify and use the provided bundle.js file?

Navigate to the location where you have unzipped the repo and from the terminal enter 

``npm install``

The above step should install all the necessary node_modules that are required based on the content of the package.json file

From that point you can install other modules and/or change the code to suit your requirements. when you're ready to build your bundle.js file enter:

``npx webpack --config webpack.config.js``

This step should generate a new bundle.js file in the dist folder.

You are now ready to upload the bundle.js file to the pluginNodeApp folder using the player DWS or a suitable REST API mechanism.

Restart the autorun.brs or reboot the player to see your updated code running.


