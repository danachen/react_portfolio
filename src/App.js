import React, { useState, useEffect } from 'react';
// import { ThemeProvider } from 'styled-components ';
import { lightTheme, darkTheme } from './contexts/Themes';

import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/Intro';
import Search from './components/Search';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Footer from './components/Footer';

// const StyledApp = styled.div``

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

  const navItems = [
    { title: 'About', href: '#about' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contacts', href: '#contact' },
  ]

  const [searchTerm, setSearchTerm] = useState (
    localStorage.getItem('search') || ''
  )

  const [theme, setTheme] = useState ('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

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
    // <ThemeProvider theme={theme === light ? '' : ''}>
      // <StyledApp>
    <div>
      <nav className="navbar navbar-default navbar-expand-sm nav-top sticky-top mt-5 mb-5 pb-5">
        <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav mr-auto">
          <Nav navItems={navItems}/>
        </ul>
        </div>
      </nav>
      <Intro />
      <div id="projects" className="container project-showcase">
        <h1 className="display-5">Small projects</h1>
          <Search search={searchTerm} onSearch={handleSearch}/>
          <div className="project-list-container row justify-content-md-center mt-5">
            <Projects list={searchedProjects} /> 
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
