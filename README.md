# project3

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** github_username, repo_name, twitter_handle, email, project_title, project_description
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
<!-- [![Forks][forks-shield]][forks-url] -->
<!-- [![Stargazers][stars-shield]][stars-url] -->
[![Issues][issues-shield]][issues-url]
<!-- [![MIT License][license-shield]][license-url] -->
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/https://github.com/vaykoActual/project3">
    <img src="https://st.automobilemag.com/uploads/sites/11/2017/01/The-Race-of-Gentlemen-05.jpg" alt="Logo" width="280" height="180">
  </a>

  <h3 align="center"><strong>project3</strong></h3>

  <p align="center">
    project3 is a MERN stack, motorcycle exchange app.
    <br />
    <a href="https://github.com/vaykoActual/project3"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/github_username/repo_name">View Demo</a>
    ·
    <a href="https://github.com/vaykoActual/project3/issues">Report Bug</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

Build a full stack Mongo/Express/React/Node app, commonly referred to as the MERN Stack.

<!-- Here's a blank template to get started:
**To avoid retyping too much info. Do a search and replace with your text editor for the following:**
`github_username`, `repo_name`, `twitter_handle`, `email`, `project_title`, `project_description` -->


### Built With

* [Mongo]()
* [Express]()
* [React]()
* [Node]()





<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

<!-- This is an example of how to list things you need to use the software and how to install them. -->
* npm
  ```sh
  npm install npm@latest -g
  npm inti -y
  npm install morgan express cors body-parser
  npm install nodemon -D
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/vaykoActual/project3
   ```
2. Install NPM packages
   ```sh
   npm install
   ```



<!-- USAGE EXAMPLES -->
## Usage

This app will demonstrate the CRUD framework utilizing Mongo, Express, React and Node. We setup the frontend as motorcycle e-commerce site with JWT authentication.

<!-- Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources. -->

<!-- _For more examples, please refer to the [Documentation](https://example.com)_ -->


## Schema

```
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Motorcycle = new Schema(
    {
        title: { type: String, required: true },
        imgURL: { type: String, required: true },
        desciption: { type: String, required: true },
        price: { type: String, required: true },
        brand: { type: String, required: true },
    },
    { timestamps: true }
)
module.exports = mongoose.model('posts', Post)
```
```
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password_digest: { type: String, required: true }
  },
  { timestamps: true }
)
module.exports = mongoose.model('users', User)
```

<!-- ROADMAP -->
## Roadmap
Styling - https://ibb.co/2WV5x7k
Flow-chart- https://ibb.co/GP3nsL9



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Shayne Vaykovich: svayko@gmail.com<br>
Aslan Shaken<br>
Varit Seekhao<br>
Steven Strumolo

Project Link: [https://github.com/vaykoActual/project3](https://github.com/vaykoActual/project3)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [Aslan Shaken]()
* [Shayne Vaykovich]()
* [Steven Strumolo]()
* [Varit Seekhao]()

## Team Expectations

https://docs.google.com/document/d/1xWi6WSEvyMIOxNFFeid_hWvICWHbrnMiSHir_I-MBtY/edit



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo.svg?style=for-the-badge
[contributors-url]: https://github.com/vaykoActual/project3
[forks-shield]: https://img.shields.io/github/forks/github_username/repo.svg?style=for-the-badge
[forks-url]: https://github.com/vaykoActual/project3
[stars-shield]: https://img.shields.io/github/stars/github_username/repo.svg?style=for-the-badge
[stars-url]: https://github.com/vaykoActual/project3
[issues-shield]: https://img.shields.io/github/issues/github_username/repo.svg?style=for-the-badge
[issues-url]: https://github.com/vaykoActual/project3/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/github_username
