const d = document

function c(tag, content = null, cssClass = null) {
    element = d.createElement(tag)
    if (content != null) element.innerText = content
    if (cssClass!= null) element.classList.add(cssClass)
    return element
}

const root = d.getElementById("root")

function s(id) {
    return d.getElementById(id)
}