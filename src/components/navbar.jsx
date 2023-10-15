import React from 'react'

function Navbar() {
  return (
    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="https://github.com/Sami-Ullah-Tufail/me">Sami Ullah Tufail</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="https://github.com/Sami-Ullah-Tufail/me">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/Sami-Ullah-Tufail/me">about</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/Sami-Ullah-Tufail/me">contact me</a>
          </li>
        </ul>
        <span class="navbar-text">
          help me dudana
        </span>
      </div>
    </div>
  </nav>
  )
}

export default Navbar