import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { fa-github, fa-linkedin } from '@fortawesome/free-solid-svg-icons'

// library.add(fab, fa-github, fa-linkedin);

const App = () => {
  const projects = {
    info: [
      { id: 1,
        img: 'terminal.jpg',
        name: "Simple Server",
        about: "Server built with <i>bash</i> to deliver simple HTML content requested by browser.",
        tech: "bash",
        deployment: "",
        github: 'https://github.com/danachen/simple-server',
      },
    
      { id: 2,
        img: 'book-reader.jpg',
        name: "Book Reader",
        about: "Book reader that parses copy-right works into user-friendly chapters and search functionality.",
        tech: "Ruby, Sinatra, Javascript, HTML/CSS",
        deployment: "https://book-reader-sherlock.herokuapp.com/",
        github: "https://github.com/danachen/book-reader",
      },
    
      { id: 3,
        img: 'file-based-cms.jpg',
        name: "File-Based CMS",
        about: "File-based content management system with sessions and user management.",
        tech: "Ruby, Sinatra, HTML/CSS",
        deployment: "",
        github: 'https://github.com/danachen/file-based-cms',
      },
    
      { id: 4,
        img: 'todo-html.png',
        name: "Todo with HTML/CSS",
        about: "A web and mobile friendly todo list front-end display designed in HTML/CSS.",
        tech: "HTML/CSS",
        deployment: "https://danachen.github.io/todo-html/",
        github: 'https://github.com/danachen/todo-html',
      },
  
      { id: 5,
        img: 'todo-js-oop.jpg',
        name: "Todo JS Backend",
        about: "Todo list backend built with Javascript utilizing OOP Principles with full test suite.",
        tech: "Javascript, HTML/CSS",
        deployment: "",
        github: 'https://github.com/danachen/todo-js-oop',
      },
  
      { id: 6,
        img: 'whack-a-ruby.png',
        name: "Whack a Ruby",
        about: "Implementation of the classic Whack a Mole game.",
        tech: "Javascript, HTML/CSS",
        deployment: "https://whack-a-ruby.herokuapp.com/",
        github: 'https://github.com/danachen/whack-a-ruby',
      },
    ]
  }

  const [searchTerm, setSearchTerm] = useState (
    localStorage.getItem('search') || ''
  )

  useEffect(() => {
    localStorage.setItem('search', searchTerm);
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  const searchedProjects = projects.info.filter(project => {
    return project.about.toLowerCase().includes(searchTerm.toLowerCase());
  })

  return (
    <div>
      <Nav />
      <Intro />
      <div id="projects" class="container project-showcase">
        <h1 class="display-5">Small projects</h1>
          <Search search={searchTerm} onSearch={handleSearch}/>
          <div class="project-list-container row justify-content-md-center mt-5">
            <Projects list={searchedProjects} /> 
        </div>
      </div>
      <Footer />
    </div>
  );
}

const Intro = () => {
  return (
    <div>
      <div class="container-fluid">
        <div
          id="about"
          class="
            container-fluid
            row
            header-intro
            justify-content-md-center
            m-5
          "
        >
        <div class="col col-md-5 mb-5">
          <h1 class="display-3">
            Hi, I'm a <span class="intro-color">full-stack developer in training.</span>
          </h1>
          <p class="lead">
            My name is Dana, I'm a software developer in training, based in the Hague, Netherlands.
          </p>
        </div>
        <div class="col col-md-5">
          <img src="dana.png" width="400" height = "400"/>
        </div>
        </div>
      </div>
    </div>
  );
}

const Search = ({search, onSearch}) => {
  return (
    <div class="row text-center">
      <form class="form-inline">
          <div class="form-group mx-sm-3 mb-2">
            <input id="search" type="text" onChange={onSearch} value={search} />
            <label class="form-check-label btn btn-primary mb-2" htmlFor="search">Search</label>
            <hr />
          </div>
      </form>
      </div>
  )
}

const Nav = () => {
  return (
    <div>
      <nav class="navbar navbar-default navbar-expand-sm nav-top sticky-top mt-5 mb-5 pb-5">
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav mr-auto">
            <li class="nav-item">
              <a href="#about" class="# nav-link active">About</a>
            </li>
            <li class="nav-item d-none">
              <a href="#case-study" class="# nav-link">Case Study</a>
            </li>
            <li class="nav-item">
              <a href="#projects" class="# nav-link">Projects</a>
            </li>
            <li class="nav-item">
              <a href="#contact" class="# nav-link">Contact</a>
            </li>
          </ul>
          <ul class="nav navbar-nav nav-top-right">
            <li>
              <a class="#github nav-link active" href="https://github.com/danachen"
                ><FontAwesomeIcon icon="fa-github" /><i class="fab fa-github fa-lg"></i
              ></a>
            </li>
            <li>
              <a class="#medium nav-link" href="https://medium.com/@danacc"
                ><i class="fab fa-medium fa-lg"></i>
              </a>
            </li>
            <li>
              <a class="#linkedin nav-link" href="https://www.linkedin.com/in/danaqchen/"
                ><i class="fab fa-linkedin-in fa-lg"></i
              ></a>
            </li>
            <li>
              <a class="#email nav-link" href="mailto:danaqchen@gmail.com"
                ><i class="fas fa-paper-plane fa-lg"></i
              ></a>
            </li>
            <li>
              <a class="#resume nav-link" href="dc_resume.pdf" download
                ><i class="fas fa-file-alt fa-lg"></i
            ></a>
          </li>
        </ul>
      </div>
    </nav>    
  </div>
  )
}

const Projects = ({list}) => {
  return (
    list.map(item => <Item 
      key={item.id} 
      itemImg={item.img}
      itemName={item.name} 
      itemDescription={item.about}
      itemTech={item.tech}
      itemDeploymenet={item.deployment}
      itemGithub={item.github}
      />)
  )
}

const Item = ({itemImg, itemName, itemDescription, itemTech, itemDeploymenet, itemGithub}) => {
  return (
    <div class="col col-md-4">
      <div class="card" style={{width: 18+'rem'}}>
        <img class="card-img-top cover" src={itemImg} alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title">{itemName}</h5>
          <p class="card-text">{itemDescription} </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Technology: {itemTech}</li>
        </ul>
        <div class="card-body">
          <a href={itemGithub} class="card-link">Github</a>
          <a href={itemDeploymenet} class="card-link">Deployment</a>
      </div>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      <footer>
        <div id="contact" class="jumbotron d-block mx-auto">
            <div class="row justify-content-md-center mt-5">
              <h1 class="display-5">Let's Connect!</h1>
              <br />
            </div>
            <div class="row justify-content-md-center mt-3">
              <p class="lead text-center">
                <span>I am looking for my next opportunity!<br />
                Please get in touch if you
                think I'd be a good fit for your team.</span>
              </p>
            </div>
            <div id="navbar" class="navbar-expand-md nav-navbar-bottom"></div>
          </div>
        </footer>
      </div>
  )
}

export default App;
