function hideDom () {
  if (document.querySelector('style[brisk]')) return
  let style = document.createElement('style')
  style.setAttribute('type', 'text/css')
  style.setAttribute('brisk', true)
  style.innerHTML = ".FYB_RD { display:none }"
  document.head.appendChild(style)
}

let mutationObserver = window.MutationObserver
let observer = new MutationObserver(hideDom)
observer.observe(document, { childList: true, subtree: true })
