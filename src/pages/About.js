export const About = () => {
  return (
    <section className="about">
      <h1>ABOUT THIS PAGE</h1>
      <p>NOTE: Some informations are missing because of the API. If you can't see the page properly please go back and try another country.</p>
      <main>
        <div className="tools">
          <h3>TOOLS</h3>
          <ul className="tools-list">
            <li>REACT</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>AXIOS</li>
            <li>REACT ROUTER DOM v6</li>
            <li>REACT ICONS</li>
          </ul>
        </div>
        <div className="usefull">
          <h3>USEFULL LINKS</h3>
          <ul>
            <li><a href="https://restcountries.com/">https://restcountries.com/</a></li>
            <li><a href="https://github.com/emreozturanli/Countries-React-Router">Source Code</a></li>
            <li><a href="https://github.com/emreozturanli">My GitHub</a></li>

          </ul>
        </div>
      </main>
    </section>
  )
}
