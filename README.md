




<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#challenges">Challenges</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

https://user-images.githubusercontent.com/91854884/183857467-91aed17d-0c3b-4176-bfe2-943e87acfc0e.mp4


[View Live Website Here ](https://sweet-druid-592559.netlify.app/)

KryptoX is a website for crypto enthusiasts - it displays all of the latest information about crypto, trending NFTs and daily News from the world of crypto. With KryptoX, you won't miss out on market trends, price changes and general updates.



### Built With

- [React](https://reactjs.org/)
- [JavaScript](https://www.javascript.com/)
- [Redux-toolkit](https://redux-toolkit.js.org/)
- [ChartJS](https://www.chartjs.org/)

I primarily utilised these technologies to build this project: React and JavaScript. I used RTK Query method from Redux Toolkit to simplify the existing data fetching logic and Sass to write CSS styles faster. Also, I implemented a few small npm packages such as hover-effect, chart.js and millify to achieve distortion effects and to get clean and consistent design.


### Other Dependencies

- millify
- react-icons
- react-router-dom
- sass
- hover-effect


<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Features
  <ol>
        <li><p>User-friendly navigation</p></li>
        <li><p>Search engine for cryptocurrencies and news. </p></li>
        <li><p>Display the latest cryptocurrency markets, news and top selling NFTs</p></li>
  </ol>


### Challenges
- I intended to fetch several APIs to display different information on my website, such as Crypto news, market, and NFTs. The challenge I got was how to call different APIs for other information without repetitive code and how to only display six items on the homepage and all items on individual pages. 

#### Workaround
- **Consume different web APIs**: I could use the standard fetching method or Axios. However, I want to keep my project clean without too many repetitive lines of codes; hence I went with the RTK query from redux-toolkit. It is designed to simplify common cases for loading data in a web application, eliminating the need to hand-write data fetching & caching logic myself. Firstly, I need to call all the APIs, pass them to the reducer, and wrap all the components with the reducer. Now APIs are made global and public so that all components can access and use those data.

- **Return six items on the homepage**: if a specific component is on the homepage, I pass a property called simplified and no property if the component is on its page. By giving that property, I can now determine when to display six items and all items from the API. If the component has a simplified property, indicating that the route is now the homepage, I use the JavaScript method slice to slice the array returned from API; otherwise, the path is an individual page, allowing all of the data to display on the page.

#### Future Improvements

 I am sastisfied at what I have accomplished, but in the future, I would love to add some animations to this project, add a support page and link it to Stripe for payment. Also, I think it would be a good idea to integrate a live help and crypto consulting service.


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

These are instructions on how you may set up this project locally

### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/memopussle/cryptoX-React.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
4. Start React
   ```sh
   npm start
   ```

  ### Add .env file

  Please add these lines to your env file to get the application running:

  ```js
REACT_APP_CRYPTO_RAPID_API = YOUR_CRYPTO_API
REACT_APP_CRYPTO_HOST = YOUR_CRYPTO_HOST_LINK

REACT_APP_NEWS_RAPID_API = YOUR_NEWS_API
REACT_APP_NEWS_HOST = YOUR_NEWS_HOST_LINK


REACT_APP_NFTS_RAPID_API = YOUR_NFTS_API
REACT_APP_NFTS_HOST = YOUR_NFTS_HOST_LINK

  ```

  ### Running the application

Open http://localhost:3000 with your browser to see the result.</

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Thu Giang - xanhtham.cuc@gmail.com

<br /> 
Project Link: 

[KryptoX Source Code](https://github.com/memopussle/cryptoX-React)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


