export default {
  project: {
    link: 'https://github.com/oasisjs/biscuit'
  },
  docsRepositoryBase: 'https://github.com/wadeslider/biscuitjs.guide',
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://www.wadeslider.xyz" target="_blank">
          Biscuit Guide
        </a>
        .
      </span>
    ),
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – BiscuitGuide'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Biscuitjs Guide" />
      <meta property="og:description" content="La guia para biscuit" />
    </>
  ),
  logo: (
    <>
      <img src="https://github.com/oasisjs/biscuit/blob/main/assets/icon.png?raw=true" alt="Biscuit" style={{ width: "50px" }}></img>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        Biscuit Guide
      </span>
    </>
  ),
  chat: {
    link: 'https://discord.gg/NgAsrAUJBC',
  },
  search: {
    placeholder: "Bucar documentos",
    error: "Sin resultados",
    loading: "Cargando...",
    emptyResult: <h1 style={{ textAlign: "center", padding: "5rem" }}>Sin resultados</h1>
  },
  banner: {
    key: 'discord',
    text: (
      <a href="https://discord.gg/NgAsrAUJBC" target="_blank">
        🎉 La nueva version ha llegado →
      </a>
    )
  },
  faviconGlyph: "🤖",
  feedback: {
    content: "¿Preguntas? Danos tu opinion →"
  },
  editLink: {
    text: "Edita esta pagina →"
  },
  toc: {
    title: "En esta pagina:",
    extraContent: "WadeSlider",
    float: false
  },
  themeSwitch: {
    useOptions() {
      return {
        light: "Claro",
        dark: "Oscuro",
        system: "Sistema"
      }
    }
  }
}
