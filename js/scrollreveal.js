const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})
sr.reveal('#home', {})
sr.reveal('.name', {delay: 200})

sr.reveal('#about-me', {})
sr.reveal('.title', {delay: 200})
sr.reveal('.detail', {delay: 400})
sr.reveal('.about-model', {delay: 400})

sr.reveal('#skill', {})
sr.reveal('.info', {delay: 200})
sr.reveal('progress-line', {interval: 200})

sr.reveal('#education', {})
sr.reveal('.edu-text', -{delay: 400})
sr.reveal('.edu-model', {delay: 200})

sr.reveal('#contact', {})
sr.reveal('.input-field', {delay: 200})
sr.reveal('.msg', {delay: 400})
sr.reveal('.btn-send', {delay: 400})